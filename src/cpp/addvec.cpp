#include <vector>

#include <emscripten/bind.h>

#include "fraction.cpp"

std::vector<fraction> add_vectors_fraction(const std::vector<fraction>& vec1, const std::vector<fraction>& vec2) {
    std::vector<fraction> result(vec1.size());
    for (int i = 0; i < vec1.size(); i++) {
        result[i] = vec1[i] + vec2[i];
    }
    return result;
}

EMSCRIPTEN_BINDINGS(addvec_module) {
    emscripten::register_vector<fraction>("VectorFraction");
    emscripten::function("addvec", &add_vectors_fraction);
}