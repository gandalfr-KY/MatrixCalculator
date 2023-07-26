#include <assert.h>

#include <utility>
#include <valarray>
#include <vector>

#include <emscripten/bind.h>

#include "fraction.cpp"

template <class T> class matrix {
  private:
    int H, W;
    std::valarray<std::valarray<T>> table;

    enum rowtrans_operation_name { SCALE, SWAP, ADD };
    struct rowtrans_operation {
        int op, tar, res;
        T scl;
    };
    using operations_history = std::vector<rowtrans_operation>;

    operations_history sweep_method() {
        operations_history hist;
        T ret = 1;
        for (int h = 0, w = 0; h < H && w < W; w++) {
            if (table[h][w] == 0) {
                for (int piv = h + 1; piv < H; piv++) {
                    if (table[piv][w] != 0) {
                        hist.push_back({SWAP, h, piv, 0});
                        row_swap(h, piv);
                        break;
                    }
                }
                if (table[h][w] == 0) {
                    continue;
                }
            }
            T inv = 1 / table[h][w];
            hist.push_back({SCALE, -1, w, inv});
            table[h] *= inv;
            for (int j = h + 1; j < H; j++) {
                T scl = table[j][w];
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
        : H(_H), W(_W), table(std::valarray<T>(_W), _H) {}

    void row_swap(int i, int j) {
        assert(0 <= i && i < H);
        assert(0 <= j && j < H);
        table[i].swap(table[j]);
    }

    T determinant() const {
        assert(H == W);
        matrix<T> U(*this);
        T det = 1;
        auto hist = U.sweep_method();
        if (U.table[H-1][H-1] == 0) return 0;
        for (auto &[op, tar, res, scl] : hist) {
            switch (op) {
            case SCALE:
                det /= scl;
                break;
            case SWAP:
                det *= -1;
                break;
            }
        }
        return det;
    }

    matrix<T> inverse() {
        assert(H == W);
        matrix<T> INV(matrix<T>::E(H)), U(*this);
        auto hist = U.sweep_method();
        if (U.table[H-1][H-1] == 0) return matrix<T>(0, 0);

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

    const T& get(int h, int w) {
        assert(0 <= h && h < H && 0 <= w && w <= W);
        return table[h][w];
    }

    void set(int h, int w, T val) {
        assert(0 <= h && h < H && 0 <= w && w <= W);
        table[h][w] = val;
    }

    void print() const {
        for (int i = 0; i < H; i++) {
            for (int j = 0; j < W; j++) {
                std::cout << table[i][j] << (j == W - 1 ? "" : " ");
            }
            std::cout << std::endl;
        }
    }

    static matrix<T> E(int N) {
        matrix<T> ret(N, N);
        for (int i = 0; i < N; i++)
            ret.table[i][i] = 1;
        return ret;
    }

};

EMSCRIPTEN_BINDINGS(matrix_module) {

    emscripten::class_<matrix<fraction>>("Matrix")
        .constructor<>()
        .constructor<int, int>()
        .function("determinant", &matrix<fraction>::determinant)
        .function("inverse", &matrix<fraction>::inverse)
        .function("get", &matrix<fraction>::get)
        .function("set", &matrix<fraction>::set);
}
