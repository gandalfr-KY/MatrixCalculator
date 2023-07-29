#pragma once

#include <stdexcept>
#include <string>
#include <complex>

#include "fraction.cpp"

struct complex {
    fraction re, im;
    complex(fraction re, fraction im) : re(re), im(im) {}
    complex() : re(0), im(0) {}

    complex bar() const {
        return {re, -im};
    }
    bool operator==(const complex &a) const { return re == a.re && im == a.im; }
    bool operator!=(const complex &a) const { return re != a.re || im != a.im; }
    complex operator+() const { return *this; }
    complex operator-() const { return complex(-re, -im); }
    complex operator+(const complex &a) const { return {re + a.re, im + a.im}; }
    complex operator-(const complex &a) const { return {re - a.re, im - a.im}; }
    complex operator*(const complex &a) const { return {re * a.re - im * a.im, re * a.im + im * a.re}; }
    complex operator/(const complex &a) const {
        complex inv = a.bar() * complex(1 / (a.re * a.re + a.im * a.im), 0);
        return *this * inv;
    }
    complex &operator=(const complex &a) = default;
    complex &operator+=(const complex &a) { return *this = *this + a; }
    complex &operator-=(const complex &a) { return *this = *this - a; }
    complex &operator*=(const complex &a) { return *this = *this * a; }
    complex &operator/=(const complex &a) { return *this = *this / a; }

};

namespace parser{

namespace internal{

// <number> := 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
int parseNumber(std::string::iterator& it, const std::string::iterator end) {
    if (it != end && isdigit(*it)) {
        return *(it++) - '0';
    }
    throw std::runtime_error("Expected number");
}

// <integer> := <number> <integer> | <number>
long long parseInteger(std::string::iterator& it, const std::string::iterator end) {
    long long result = parseNumber(it, end);
    while (it != end && isdigit(*it)) {
        result = result * 10 + parseNumber(it, end);
    }
    return result;
}

// <fraction> := <integer> / <integer> | <integer>
fraction parseFraction(std::string::iterator& it, const std::string::iterator end) {
    long long numerator = parseInteger(it, end);
    if (it != end && *it == '/') {
        ++it; // consume '/'
        long long denominator = parseInteger(it, end);
        return {numerator, denominator};
    }
    return numerator;
}

// <msign> := - | (none)
int parseMsign(std::string::iterator& it, const std::string::iterator end) {
    if (it != end && *it == '-') {
        ++it; // consume '-'
        return -1;
    }
    return 1;
}

// <sign> := + | -
int parseSign(std::string::iterator& it, const std::string::iterator end) {
    if (it != end) {
        if (*it == '+') {
            ++it; // consume '+'
            return 1;
        } else if (*it == '-') {
            ++it; // consume '-'
            return -1;
        }
    }
    throw std::runtime_error("Expected '+' or '-'");
}

// <complex> := <msign> <fraction> <sign> <fraction> i | <msign> <fraction> | <msign> <fraction> i
complex parseComplex(std::string::iterator& it, const std::string::iterator end) {
    int msign = parseMsign(it, end);
    fraction realPart = msign * parseFraction(it, end);
    
    if (it != end && (*it == '+' || *it == '-')) {
        int sign = parseSign(it, end);
        fraction imaginaryPart = sign * parseFraction(it, end);
        if (it != end && *it == 'i') {
            ++it; // consume 'i'
            // Here you can handle the imaginary part as needed in your program.
            return {realPart, imaginaryPart};
        } else {
            throw std::runtime_error("Expected 'i'");
        }
    }
    if (it == end) {
        return {realPart, 0};
    } else if(*it == 'i') {
        return {0, realPart};
    } else {
        throw std::runtime_error("Expected 'i'");
    }
}

};

complex string_to_complex(std::string buf) {
    buf.erase(std::remove_if(buf.begin(), buf.end(), isspace), buf.end());
    if (buf.empty()) return {0, 0};
    auto it = buf.begin();
    return internal::parseComplex(it, buf.end());
}

std::string complex_to_string(const complex& a) {
    std::string buf;
    if (a.im == 0) {
        buf += fraction_to_string(a.re);
    } else if (a.re == 0){
        buf += fraction_to_string(a.im);
        buf += 'i';
    } else {
        buf += fraction_to_string(a.re);
        buf += (a.im > 0 ? '+' : '-');
        buf += fraction_to_string(a.im.abs());   
        buf += 'i';     
    }
    return buf;
}

};

EMSCRIPTEN_BINDINGS(complex_module) {
    emscripten::class_<complex>("Complex")
        .constructor<>()
        .constructor<fraction, fraction>()
        .function("bar", &complex::bar);
    emscripten::function("complexToString", &parser::complex_to_string);
    emscripten::function("stringToComplex", &parser::string_to_complex);
}

