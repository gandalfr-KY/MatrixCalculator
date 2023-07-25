// add.cpp
#include <emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int _add(int a, int b) {
        return a + b;
    }
}
