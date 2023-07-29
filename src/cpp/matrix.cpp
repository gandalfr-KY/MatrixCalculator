#pragma once

#include <assert.h>

#include <utility>
#include <valarray>
#include <vector>

#include <emscripten/bind.h>

#include "complex.cpp"

class matrix {
  private:
    int H, W;
    std::valarray<std::valarray<complex>> table;

    enum rowtrans_operation_name { SCALE, SWAP, ADD };
    struct rowtrans_operation {
        int op, tar, res;
        complex scl;
    };
    using operations_history = std::vector<rowtrans_operation>;

    operations_history sweep_method() {
        operations_history hist;
        complex ret{1, 0};
        for (int h = 0, w = 0; h < H && w < W; w++) {
            if (table[h][w] == complex(0, 0)) {
                for (int piv = h + 1; piv < H; piv++) {
                    if (table[piv][w] != complex(0, 0)) {
                        hist.push_back({SWAP, h, piv, complex(0, 0)});
                        row_swap(h, piv);
                        break;
                    }
                }
                if (table[h][w] == complex(0, 0)) {
                    continue;
                }
            }
            complex inv = complex(1, 0) / table[h][w];
            hist.push_back({SCALE, -1, w, inv});
            table[h] *= inv;
            for (int j = h + 1; j < H; j++) {
                complex scl = table[j][w];
                hist.push_back({ADD, h, j, -scl});
                table[j] -= table[h] * scl; // caution : scl を table[j][w] で直接書くとバグる！！！！
            }
            h++;
        }
        return hist;
    }

  public:

    matrix() = default;
    matrix(int _H, int _W)
        : H(_H), W(_W), table(std::valarray<complex>(complex(0, 0), _W), _H) {}

    int size_H() const { return H; }
    int size_W() const { return W; }

    void row_swap(int i, int j) {
        assert(0 <= i && i < H);
        assert(0 <= j && j < H);
        table[i].swap(table[j]);
    }

    complex determinant() const {
        assert(H == W);
        matrix U(*this);
        complex det{1, 0};
        auto hist = U.sweep_method();
        if (U.table[H-1][H-1] == complex(0, 0)) return complex(0, 0);
        for (auto &[op, tar, res, scl] : hist) {
            switch (op) {
            case SCALE:
                det /= scl;
                break;
            case SWAP:
                det *= complex(-1, 0);
                break;
            }
        }
        return det;
    }

    matrix inverse() {
        assert(H == W);
        matrix INV(matrix::E(H)), U(*this);
        auto hist = U.sweep_method();
        if (U.table[H-1][H-1] == complex(0, 0)) return matrix(0, 0);

        for (auto &[op, tar, res, scl] : hist) {
            switch (op) {
            case SCALE:
                INV.table[res] *= scl;
                break;
            case SWAP:
                std::swap(INV.table[tar], INV.table[res]);
                break;
            case ADD:
                INV.table[res] += INV.table[tar] * scl;
                break;
            }
        }
        
        for (int i = H - 1; i >= 0; --i) {
            for (int j = 0; j < i; ++j) {
                INV.table[j] -= INV.table[i] * U.table[j][i];
            }
        }
        return INV;
    }

    const complex& get(int h, int w) {
        assert(0 <= h && h < H && 0 <= w && w < W);
        return table[h][w];
    }

    void set(int h, int w, const complex& val) {
        assert(0 <= h && h < H && 0 <= w && w <= W);
        table[h][w] = val;
    }

    void print() const {
        for (int i = 0; i < H; i++) {
            for (int j = 0; j < W; j++) {
                std::cout << parser::complex_to_string(table[i][j]) << (j == W - 1 ? "" : " ");
            }
            std::cout << std::endl;
        }
    }

    static matrix E(int N) {
        matrix ret(N, N);
        for (int i = 0; i < N; i++)
            ret.table[i][i] = complex(1, 0);
        return ret;
    }
};

EMSCRIPTEN_BINDINGS(matrix_module) {
    emscripten::class_<matrix>("Matrix")
        .constructor<>()
        .constructor<int, int>()
        .function("determinant", &matrix::determinant)
        .function("Height", &matrix::size_H)
        .function("Width", &matrix::size_W)
        .function("inverse", &matrix::inverse)
        .function("get", &matrix::get)
        .function("set", &matrix::set)
        .function("print", &matrix::print);
}
