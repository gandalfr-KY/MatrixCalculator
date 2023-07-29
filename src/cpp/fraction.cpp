#pragma once

#include <iostream>
#include <numeric>

#include <emscripten/bind.h>

namespace internal {

inline void simplify(long long &num, long long &den) {
    long long d = std::gcd(num, den);
    num /= (den >= 0 ? d : -d);
    den /= (den >= 0 ? d : -d);
}
}; // namespace internal

class fraction {
  private:
    int num, den;

    friend fraction operator+(const fraction &a) { return a; }
    friend fraction operator-(const fraction &a) {
        fraction ret;
        ret.raw_assign(-a.num, a.den);
        return ret;
    }

    friend fraction operator+(const fraction &a, const fraction &b) {
        assert(!(a.is_infinity() && b.is_infinity() &&
                 a.num * b.num == -1)); // 不定形はダメ
        if (a.is_infinity()) {
            return a;
        } else if (b.is_infinity()) {
            return b;
        } else {
            return {(long long)a.num * b.den + (long long)b.num * a.den,
                    (long long)a.den * b.den};
        }
    }
    friend fraction operator-(const fraction &a, const fraction &b) {
        assert(!(a.is_infinity() && b.is_infinity() &&
                 a.num * b.num == 1)); // 不定形はダメ
        if (a.is_infinity()) {
            return a;
        } else if (b.is_infinity()) {
            return -b;
        } else {
            return {(long long)a.num * b.den - (long long)b.num * a.den,
                    (long long)a.den * b.den};
        }
    }
    friend fraction operator*(const fraction &a, const fraction &b) {
        assert(a.num != 0 || b.den != 0);
        assert(a.den != 0 || b.num != 0);
        int gcd_tmp1 = std::gcd(a.num, b.den),
                  gcd_tmp2 = std::gcd(b.num, a.den);
        fraction ret;
        ret.raw_assign((a.num / gcd_tmp1) * (b.num / gcd_tmp2),
                       (a.den / gcd_tmp2) * (b.den / gcd_tmp1));
        return ret;
    }
    friend fraction operator/(const fraction &a, const fraction &b) {
        assert(a.num != 0 || b.num != 0);
        assert(a.den != 0 || b.den != 0);
        int gcd_tmp1 = std::gcd(a.num, b.num),
                  gcd_tmp2 = std::gcd(b.den, a.den);
        fraction ret;
        ret.raw_assign(
            (b.num >= 0 ? 1 : -1) * (a.num / gcd_tmp1) * (b.den / gcd_tmp2),
            (b.num >= 0 ? 1 : -1) * (a.den / gcd_tmp2) * (b.num / gcd_tmp1));
        return ret;
    }

    friend bool operator==(const fraction &a, const fraction &b) {
        return a.num == b.num && a.den == b.den;
    }
    friend bool operator!=(const fraction &a, const fraction &b) {
        return a.num != b.num || a.den != b.den;
    }

    friend int compare_to(const fraction &a, const fraction &b) {
        if ((a.num >= 0) ^ (b.num >= 0))
            return a.num > b.num ? 1 : -1;
        long long lhs = (long long)a.num * b.den;
        long long rhs = (long long)b.num * a.den;
        if (lhs == rhs)
            return 0;
        return lhs > rhs ? 1 : -1;
    }

    friend bool operator>(const fraction &a, const fraction &b) {
        return compare_to(a, b) > 0;
    }
    friend bool operator>=(const fraction &a, const fraction &b) {
        return compare_to(a, b) >= 0;
    }
    friend bool operator<(const fraction &a, const fraction &b) {
        return compare_to(a, b) < 0;
    }
    friend bool operator<=(const fraction &a, const fraction &b) {
        return compare_to(a, b) <= 0;
    }

  public:
    fraction(int n) : num(n), den(1) {}
    fraction(long long numerator, long long denominator) {
        internal::simplify(numerator, denominator);
        num = numerator, den = denominator;
    }
    fraction(const std::string& buf) { *this = buf; }
    fraction() : num(0), den(1) {}

    fraction &operator=(const fraction &a) = default;
    fraction &operator=(const std::string &buf) {
        long long num_tmp = 0, den_tmp = 0;
        int i = (buf[0] == '-'), sz = buf.size();
        for (; i < sz && buf[i] != '/'; i++)
            num_tmp = num_tmp * 10 + buf[i] - '0';
        if (i == sz)
            den_tmp = 1;
        else
            for (i = i + 1; i < sz; i++)
                den_tmp = den_tmp * 10 + buf[i] - '0';
        if (buf[0] == '-')
            num_tmp *= -1;
        internal::simplify(num_tmp, den_tmp);
        num = num_tmp, den = den_tmp;
        return *this;
    }
    fraction &operator+=(const fraction &a) { return *this = *this + a; }
    fraction &operator-=(const fraction &a) { return *this = *this - a; }
    fraction &operator*=(const fraction &a) { return *this = *this * a; }
    fraction &operator/=(const fraction &a) { return *this = *this / a; }

    fraction &raw_assign(int _num, int _den) {
        num = _num, den = _den;
        return *this;
    }
    int numerator() const { return num; }
    int denominator() const { return den; }
    int floor() const { return num / den; }
    int ceil() const { return ((long long)num + den - 1) / den; }
    double real() const { return (double)num / den; }
    fraction abs() const { return (*this >= 0 ? *this : -*this); }
    fraction inverse() const {
        fraction ret;
        ret.raw_assign((num >= 0 ? den : -den), (num >= 0 ? num : -num));
        return ret;
    }
    bool is_infinity() const { return (den == 0); }
};

namespace parser{

std::string fraction_to_string(const fraction& a) {
    if (a.denominator() == 0)
        return a.numerator() >= 0 ? "inf" : "-inf";
    else if (a.denominator() == 1)
        return std::to_string(a.numerator());
    else
        return std::to_string(a.numerator()) + '/' + std::to_string(a.denominator());
}
};

EMSCRIPTEN_BINDINGS(fraction_module) {
    emscripten::class_<fraction>("Fraction")
        .constructor<>()
        .constructor<long long, long long>()
        .constructor<const std::string&>()
        .function("numerator", &fraction::numerator)
        .function("denominator", &fraction::denominator) // 修正: 関数名を正しいものに変更
        .function("floor", &fraction::floor)
        .function("ceil", &fraction::ceil)
        .function("real", &fraction::real)
        .function("abs", &fraction::abs)
        .function("inverse", &fraction::inverse)
        .function("is_infinity", &fraction::is_infinity)
        .function("raw_assign", &fraction::raw_assign);
    emscripten::function("fractionToString", &parser::fraction_to_string);
}
