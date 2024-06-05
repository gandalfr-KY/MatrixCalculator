/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// wasm2js.js - enough of a polyfill for the WebAssembly object so that we can load
// wasm2js code that way.

// Emit "var WebAssembly" if definitely using wasm2js. Otherwise, in MAYBE_WASM2JS
// mode, we can't use a "var" since it would prevent normal wasm from working.
/** @suppress{duplicate, const} */
var
WebAssembly = {
  // Note that we do not use closure quoting (this['buffer'], etc.) on these
  // functions, as they are just meant for internal use. In other words, this is
  // not a fully general polyfill.
  /** @constructor */
  Memory: function(opts) {
    this.buffer = new ArrayBuffer(opts['initial'] * 65536);
  },

  Module: function(binary) {
    // TODO: use the binary and info somehow - right now the wasm2js output is embedded in
    // the main JS
  },

  /** @constructor */
  Instance: function(module, info) {
    // TODO: use the module somehow - right now the wasm2js output is embedded in
    // the main JS
    // This will be replaced by the actual wasm2js code.
    this.exports = (
function instantiate(info) {
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 65536, "aXNfaW5maW5pdHkAc3RyaW5nVG9Db21wbGV4AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABmbG9hdAB1aW50NjRfdABhYnMAbnVtZXJhdG9yAGRlbm9taW5hdG9yAGZsb29yAEV4cGVjdGVkIG51bWJlcgB1bnNpZ25lZCBjaGFyAGJhcgBzeXN0ZW0vbGliL2xpYmN4eGFiaS9zcmMvcHJpdmF0ZV90eXBlaW5mby5jcHAAc3JjL2NwcC9mcmFjdGlvbi5jcHAAc3RkOjpleGNlcHRpb24ARnJhY3Rpb24AcmF3X2Fzc2lnbgBib29sAGNlaWwAcmVhbABjYW5fY2F0Y2gAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAYmFzaWNfc3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGNvbXBsZXhUb1N0cmluZwBmcmFjdGlvblRvU3RyaW5nAC1pbmYAaW52ZXJzZQBkb3VibGUAdm9pZABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDY0X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDY0X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBhLm51bSAhPSAwIHx8IGIuZGVuICE9IDAAYS5kZW4gIT0gMCB8fCBiLm51bSAhPSAwAG9wZXJhdG9yKgBFeHBlY3RlZCAnaScARXhwZWN0ZWQgJysnIG9yICctJwBhZGp1c3RlZFB0ciAmJiAiY2F0Y2hpbmcgYSBjbGFzcyB3aXRob3V0IGFuIG9iamVjdD8iADhmcmFjdGlvbgAA4AwBAMkEAQBQOGZyYWN0aW9uAABkDQEA3AQBAAAAAADUBAEAUEs4ZnJhY3Rpb24AZA0BAPgEAQABAAAA1AQBAHBwAHYAdnAA6AQBAOgEAQCsDAEArAwBAHBwaWkAAAAA6AQBAHwFAQBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQAA4AwBADwFAQBwcHAAfAwBAAQFAQBpcHAA0AwBAAQFAQBkcHAA1AQBAAQFAQA0DAEABAUBANQEAQDoBAEAfAwBAHwMAQBwcHBpaQAAAHwFAQDUBAEAN2NvbXBsZXgAAAAA4AwBANAFAQBQN2NvbXBsZXgAAABkDQEA5AUBAAAAAADcBQEAUEs3Y29tcGxleAAAZA0BAAAGAQABAAAA3AUBAPAFAQDwBQEA1AQBANQEAQBwcHBwAAAAANwFAQAMBgEAfAUBANwFAQDcBQEAfAUBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAADgDAEATAYBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVOU185YWxsb2NhdG9ySXdFRUVFAADgDAEAlAYBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAA4AwBANwGAQBOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAOAMAQAoBwEATjEwZW1zY3JpcHRlbjN2YWxFAADgDAEAdAcBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAA4AwBAJAHAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAAOAMAQC4BwEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAADgDAEA4AcBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAA4AwBAAgIAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAAOAMAQAwCAEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAADgDAEAWAgBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAA4AwBAIAIAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAAOAMAQCoCAEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAADgDAEA0AgBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXhFRQAA4AwBAPgIAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l5RUUAAOAMAQAgCQEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAADgDAEASAkBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWRFRQAA4AwBAHAJAQAAAAAAAAAAAAAAAAAKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BQDKmjsAAAAAAAAAADAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5TjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAACA0BAJgKAQBMDgEATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAACA0BAMgKAQC8CgEATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAACA0BAPgKAQC8CgEATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UACA0BACgLAQAcCwEATjEwX19jeHhhYml2MTIwX19mdW5jdGlvbl90eXBlX2luZm9FAAAAAAgNAQBYCwEAvAoBAE4xMF9fY3h4YWJpdjEyOV9fcG9pbnRlcl90b19tZW1iZXJfdHlwZV9pbmZvRQAAAAgNAQCMCwEAHAsBAAAAAAAMDAEALgAAAC8AAAAwAAAAMQAAADIAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UACA0BAOQLAQC8CgEAdgAAANALAQAYDAEARG4AANALAQAkDAEAYgAAANALAQAwDAEAYwAAANALAQA8DAEAaAAAANALAQBIDAEAYQAAANALAQBUDAEAcwAAANALAQBgDAEAdAAAANALAQBsDAEAaQAAANALAQB4DAEAagAAANALAQCEDAEAbAAAANALAQCQDAEAbQAAANALAQCcDAEAeAAAANALAQCoDAEAeQAAANALAQC0DAEAZgAAANALAQDADAEAZAAAANALAQDMDAEAAAAAAOwKAQAuAAAAMwAAADAAAAAxAAAANAAAADUAAAA2AAAANwAAAAAAAABQDQEALgAAADgAAAAwAAAAMQAAADQAAAA5AAAAOgAAADsAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACA0BACgNAQDsCgEAAAAAAEwLAQAuAAAAPAAAADAAAAAxAAAAPQAAAAAAAACcDQEAPgAAAD8AAABAAAAAU3Q5ZXhjZXB0aW9uAAAAAOAMAQCMDQEAAAAAANwNAQApAAAAQQAAAEIAAAAAAAAAMA4BABEAAABDAAAARAAAAFN0MTFsb2dpY19lcnJvcgAIDQEAzA0BAJwNAQAAAAAAEA4BACkAAABFAAAAQgAAAFN0MTJvdXRfb2ZfcmFuZ2UAAAAACA0BAPwNAQDcDQEAU3QxM3J1bnRpbWVfZXJyb3IAAAAIDQEAHA4BAJwNAQBTdDl0eXBlX2luZm8AAAAA4AwBADwOAQA=");
  base64DecodeToExistingUint8Array(bufferView, 69208, "IBEBAAAAAAAFAAAAAAAAAAAAAAArAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAALQAAABgRAQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgDgEA");
}
function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var buffer = new ArrayBuffer(16908288);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var env = imports.env;
 var fimport$0 = env.__cxa_throw;
 var fimport$1 = env.__assert_fail;
 var fimport$2 = env._embind_register_class;
 var fimport$3 = env._embind_register_function;
 var fimport$4 = env._embind_register_class_constructor;
 var fimport$5 = env._embind_register_class_function;
 var fimport$6 = env._embind_register_void;
 var fimport$7 = env._embind_register_bool;
 var fimport$8 = env._embind_register_integer;
 var fimport$9 = env._embind_register_float;
 var fimport$10 = env._embind_register_std_string;
 var fimport$11 = env._embind_register_std_wstring;
 var fimport$12 = env._embind_register_emval;
 var fimport$13 = env._embind_register_memory_view;
 var fimport$14 = env._emscripten_memcpy_js;
 var fimport$15 = env.emscripten_resize_heap;
 var fimport$16 = env._abort_js;
 var wasi_snapshot_preview1 = imports.wasi_snapshot_preview1;
 var fimport$17 = wasi_snapshot_preview1.fd_close;
 var fimport$18 = wasi_snapshot_preview1.fd_write;
 var fimport$19 = env._embind_register_bigint;
 var fimport$20 = wasi_snapshot_preview1.fd_seek;
 var global$0 = 65536;
 var global$1 = 0;
 var global$2 = 0;
 var global$3 = 0;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 // EMSCRIPTEN_START_FUNCS
;
 function $0() {
  $492();
  $259();
  $263();
 }
 
 function $1($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $36_1 = 0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 40 | 0) >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if ($2(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0) {
     break label$2
    }
    $4($0_1 | 0, (($3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0) >= (0 | 0) & 1 | 0 ? 65916 : 65915) | 0) | 0;
    break label$1;
   }
   label$3 : {
    if (!(($2(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0) == (1 | 0) & 1 | 0)) {
     break label$3
    }
    $366($0_1 | 0, $3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
    break label$1;
   }
   $366($4_1 + 16 | 0 | 0, $3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
   $36_1 = 24;
   $5($4_1 + 28 | 0 | 0, $4_1 + 16 | 0 | 0, (47 << $36_1 | 0) >> $36_1 | 0 | 0);
   $366($4_1 + 4 | 0 | 0, $2(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
   $6($0_1 | 0, $4_1 + 28 | 0 | 0, $4_1 + 4 | 0 | 0);
   $355($4_1 + 4 | 0 | 0) | 0;
   $355($4_1 + 28 | 0 | 0) | 0;
   $355($4_1 + 16 | 0 | 0) | 0;
  }
  global$0 = $4_1 + 48 | 0;
  return;
 }
 
 function $2($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[((HEAP32[($3_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $3($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $4($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $7($5_1 | 0, $4_1 + 7 | 0 | 0, $4_1 + 6 | 0 | 0) | 0;
  $359($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, $8(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0);
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $5($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $8_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP8[($5_1 + 7 | 0) >> 0] = $2_1;
  $8_1 = 24;
  $363(HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, ((HEAPU8[($5_1 + 7 | 0) >> 0] | 0) << $8_1 | 0) >> $8_1 | 0 | 0);
  $10($0_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return;
 }
 
 function $6($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $10($0_1 | 0, $9(HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return;
 }
 
 function $7($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  $121($6_1 | 0) | 0;
  $122($6_1 | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $8($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $235(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $9($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $10_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $10_1 = $361(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $127(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0, $49(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $10_1 | 0;
 }
 
 function $10($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$1 = 0, $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $11_1 = 0, $20_1 = 0, $61_1 = 0, $19_1 = 0, $86_1 = 0, $30_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = $5_1;
  i64toi32_i32$2 = $236($4_1 + 19 | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $61_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[$5_1 >> 2] = $61_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $11_1 = 8;
  HEAP32[($5_1 + $11_1 | 0) >> 2] = HEAP32[(i64toi32_i32$2 + $11_1 | 0) >> 2] | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $4_1;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  $19_1 = $237(HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$1 = HEAP32[$4_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  $86_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $19_1;
  HEAP32[i64toi32_i32$1 >> 2] = $86_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $20_1 = 8;
  HEAP32[(i64toi32_i32$1 + $20_1 | 0) >> 2] = HEAP32[($4_1 + $20_1 | 0) >> 2] | 0;
  $58(HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 | 0);
  label$1 : {
   if (($128($5_1 | 0) | 0) & 1 | 0) {
    break label$1
   }
   $58($5_1 | 0, $49($5_1 | 0) | 0 | 0);
  }
  $30_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  global$0 = $4_1 + 32 | 0;
  return $30_1 | 0;
 }
 
 function $11() {
  $12(69364 | 0) | 0;
  return;
 }
 
 function $12($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $14($4_1 | 0, 1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $13() {
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $41_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $15_1 = 0, $16_1 = 0, $18_1 = 0, $19_1 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $31_1 = 0, $35_1 = 0, $39_1 = 0, $269_1 = 0, $43_1 = 0, $44_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $297_1 = 0, $310_1 = 0, $53_1 = 0, $54_1 = 0, $56_1 = 0, $57_1 = 0, $58_1 = 0, $338_1 = 0, $351_1 = 0, $63_1 = 0, $64_1 = 0, $66_1 = 0, $67_1 = 0, $68_1 = 0, $379_1 = 0, $392_1 = 0, $73_1 = 0, $74_1 = 0, $76_1 = 0, $77_1 = 0, $78_1 = 0, $420_1 = 0, $433_1 = 0, $83_1 = 0, $84_1 = 0, $86_1 = 0, $87_1 = 0, $88_1 = 0, $461_1 = 0, $474_1 = 0, $93_1 = 0, $94_1 = 0, $96_1 = 0, $97_1 = 0, $98_1 = 0, $502_1 = 0, $515 = 0, $103_1 = 0, $104_1 = 0, $106_1 = 0, $107_1 = 0, $108_1 = 0, $543 = 0, $556 = 0, $113_1 = 0, $114_1 = 0, $116_1 = 0, $117_1 = 0, $118_1 = 0, $584 = 0, $594 = 0, $121_1 = 0, $122_1 = 0, $124_1 = 0, $125_1 = 0, $620 = 0;
  $2_1 = global$0 - 512 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 168 | 0) >> 2] = $2_1 + 147 | 0;
  HEAP32[($2_1 + 164 | 0) >> 2] = 65755;
  $65();
  HEAP32[($2_1 + 160 | 0) >> 2] = 2;
  HEAP32[($2_1 + 156 | 0) >> 2] = $67() | 0;
  HEAP32[($2_1 + 152 | 0) >> 2] = $68() | 0;
  HEAP32[($2_1 + 148 | 0) >> 2] = 3;
  $10_1 = $70() | 0;
  $11_1 = $71() | 0;
  $12_1 = $72() | 0;
  $13_1 = $73() | 0;
  HEAP32[($2_1 + 472 | 0) >> 2] = HEAP32[($2_1 + 160 | 0) >> 2] | 0;
  $15_1 = $74() | 0;
  $16_1 = HEAP32[($2_1 + 160 | 0) >> 2] | 0;
  HEAP32[($2_1 + 480 | 0) >> 2] = HEAP32[($2_1 + 156 | 0) >> 2] | 0;
  $18_1 = $75() | 0;
  $19_1 = HEAP32[($2_1 + 156 | 0) >> 2] | 0;
  HEAP32[($2_1 + 476 | 0) >> 2] = HEAP32[($2_1 + 152 | 0) >> 2] | 0;
  $21_1 = $75() | 0;
  $22_1 = HEAP32[($2_1 + 152 | 0) >> 2] | 0;
  $23_1 = HEAP32[($2_1 + 164 | 0) >> 2] | 0;
  HEAP32[($2_1 + 484 | 0) >> 2] = HEAP32[($2_1 + 148 | 0) >> 2] | 0;
  fimport$2($10_1 | 0, $11_1 | 0, $12_1 | 0, $13_1 | 0, $15_1 | 0, $16_1 | 0, $18_1 | 0, $19_1 | 0, $21_1 | 0, $22_1 | 0, $23_1 | 0, $76() | 0 | 0, HEAP32[($2_1 + 148 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 172 | 0) >> 2] = $2_1 + 147 | 0;
  HEAP32[($2_1 + 492 | 0) >> 2] = HEAP32[($2_1 + 172 | 0) >> 2] | 0;
  HEAP32[($2_1 + 488 | 0) >> 2] = 4;
  $31_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
  $78(HEAP32[($2_1 + 488 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 176 | 0) >> 2] = $31_1;
  HEAP32[($2_1 + 500 | 0) >> 2] = HEAP32[($2_1 + 176 | 0) >> 2] | 0;
  HEAP32[($2_1 + 496 | 0) >> 2] = 5;
  $35_1 = HEAP32[($2_1 + 500 | 0) >> 2] | 0;
  $80(HEAP32[($2_1 + 496 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 180 | 0) >> 2] = $35_1;
  HEAP32[($2_1 + 508 | 0) >> 2] = HEAP32[($2_1 + 180 | 0) >> 2] | 0;
  HEAP32[($2_1 + 504 | 0) >> 2] = 6;
  $39_1 = HEAP32[($2_1 + 508 | 0) >> 2] | 0;
  $82(HEAP32[($2_1 + 504 | 0) >> 2] | 0 | 0);
  $41_1 = 0;
  HEAP32[($2_1 + 140 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 136 | 0) >> 2] = 7;
  i64toi32_i32$0 = HEAP32[($2_1 + 136 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 140 | 0) >> 2] | 0;
  $269_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 280 | 0) >> 2] = $269_1;
  HEAP32[($2_1 + 284 | 0) >> 2] = i64toi32_i32$1;
  $43_1 = HEAP32[($2_1 + 280 | 0) >> 2] | 0;
  $44_1 = HEAP32[($2_1 + 284 | 0) >> 2] | 0;
  HEAP32[($2_1 + 308 | 0) >> 2] = $39_1;
  HEAP32[($2_1 + 304 | 0) >> 2] = 65611;
  HEAP32[($2_1 + 300 | 0) >> 2] = $44_1;
  HEAP32[($2_1 + 296 | 0) >> 2] = $43_1;
  $46_1 = HEAP32[($2_1 + 308 | 0) >> 2] | 0;
  $47_1 = HEAP32[($2_1 + 304 | 0) >> 2] | 0;
  $48_1 = HEAP32[($2_1 + 296 | 0) >> 2] | 0;
  HEAP32[($2_1 + 292 | 0) >> 2] = HEAP32[($2_1 + 300 | 0) >> 2] | 0;
  HEAP32[($2_1 + 288 | 0) >> 2] = $48_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 288 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 292 | 0) >> 2] | 0;
  $297_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 56 | 0) >> 2] = $297_1;
  HEAP32[($2_1 + 60 | 0) >> 2] = i64toi32_i32$0;
  $83($47_1 | 0, $2_1 + 56 | 0 | 0);
  HEAP32[($2_1 + 132 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 128 | 0) >> 2] = 8;
  i64toi32_i32$0 = HEAP32[($2_1 + 128 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 132 | 0) >> 2] | 0;
  $310_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 248 | 0) >> 2] = $310_1;
  HEAP32[($2_1 + 252 | 0) >> 2] = i64toi32_i32$1;
  $53_1 = HEAP32[($2_1 + 248 | 0) >> 2] | 0;
  $54_1 = HEAP32[($2_1 + 252 | 0) >> 2] | 0;
  HEAP32[($2_1 + 276 | 0) >> 2] = $46_1;
  HEAP32[($2_1 + 272 | 0) >> 2] = 65621;
  HEAP32[($2_1 + 268 | 0) >> 2] = $54_1;
  HEAP32[($2_1 + 264 | 0) >> 2] = $53_1;
  $56_1 = HEAP32[($2_1 + 276 | 0) >> 2] | 0;
  $57_1 = HEAP32[($2_1 + 272 | 0) >> 2] | 0;
  $58_1 = HEAP32[($2_1 + 264 | 0) >> 2] | 0;
  HEAP32[($2_1 + 260 | 0) >> 2] = HEAP32[($2_1 + 268 | 0) >> 2] | 0;
  HEAP32[($2_1 + 256 | 0) >> 2] = $58_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 256 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 260 | 0) >> 2] | 0;
  $338_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 48 | 0) >> 2] = $338_1;
  HEAP32[($2_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  $83($57_1 | 0, $2_1 + 48 | 0 | 0);
  HEAP32[($2_1 + 124 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 120 | 0) >> 2] = 9;
  i64toi32_i32$0 = HEAP32[($2_1 + 120 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 124 | 0) >> 2] | 0;
  $351_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 216 | 0) >> 2] = $351_1;
  HEAP32[($2_1 + 220 | 0) >> 2] = i64toi32_i32$1;
  $63_1 = HEAP32[($2_1 + 216 | 0) >> 2] | 0;
  $64_1 = HEAP32[($2_1 + 220 | 0) >> 2] | 0;
  HEAP32[($2_1 + 244 | 0) >> 2] = $56_1;
  HEAP32[($2_1 + 240 | 0) >> 2] = 65633;
  HEAP32[($2_1 + 236 | 0) >> 2] = $64_1;
  HEAP32[($2_1 + 232 | 0) >> 2] = $63_1;
  $66_1 = HEAP32[($2_1 + 244 | 0) >> 2] | 0;
  $67_1 = HEAP32[($2_1 + 240 | 0) >> 2] | 0;
  $68_1 = HEAP32[($2_1 + 232 | 0) >> 2] | 0;
  HEAP32[($2_1 + 228 | 0) >> 2] = HEAP32[($2_1 + 236 | 0) >> 2] | 0;
  HEAP32[($2_1 + 224 | 0) >> 2] = $68_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 224 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 228 | 0) >> 2] | 0;
  $379_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = $379_1;
  HEAP32[($2_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  $83($67_1 | 0, $2_1 + 40 | 0 | 0);
  HEAP32[($2_1 + 116 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 112 | 0) >> 2] = 10;
  i64toi32_i32$0 = HEAP32[($2_1 + 112 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 116 | 0) >> 2] | 0;
  $392_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 184 | 0) >> 2] = $392_1;
  HEAP32[($2_1 + 188 | 0) >> 2] = i64toi32_i32$1;
  $73_1 = HEAP32[($2_1 + 184 | 0) >> 2] | 0;
  $74_1 = HEAP32[($2_1 + 188 | 0) >> 2] | 0;
  HEAP32[($2_1 + 212 | 0) >> 2] = $66_1;
  HEAP32[($2_1 + 208 | 0) >> 2] = 65780;
  HEAP32[($2_1 + 204 | 0) >> 2] = $74_1;
  HEAP32[($2_1 + 200 | 0) >> 2] = $73_1;
  $76_1 = HEAP32[($2_1 + 212 | 0) >> 2] | 0;
  $77_1 = HEAP32[($2_1 + 208 | 0) >> 2] | 0;
  $78_1 = HEAP32[($2_1 + 200 | 0) >> 2] | 0;
  HEAP32[($2_1 + 196 | 0) >> 2] = HEAP32[($2_1 + 204 | 0) >> 2] | 0;
  HEAP32[($2_1 + 192 | 0) >> 2] = $78_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 192 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 196 | 0) >> 2] | 0;
  $420_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 32 | 0) >> 2] = $420_1;
  HEAP32[($2_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  $83($77_1 | 0, $2_1 + 32 | 0 | 0);
  HEAP32[($2_1 + 108 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 104 | 0) >> 2] = 11;
  i64toi32_i32$0 = HEAP32[($2_1 + 104 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 108 | 0) >> 2] | 0;
  $433_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 312 | 0) >> 2] = $433_1;
  HEAP32[($2_1 + 316 | 0) >> 2] = i64toi32_i32$1;
  $83_1 = HEAP32[($2_1 + 312 | 0) >> 2] | 0;
  $84_1 = HEAP32[($2_1 + 316 | 0) >> 2] | 0;
  HEAP32[($2_1 + 340 | 0) >> 2] = $76_1;
  HEAP32[($2_1 + 336 | 0) >> 2] = 65785;
  HEAP32[($2_1 + 332 | 0) >> 2] = $84_1;
  HEAP32[($2_1 + 328 | 0) >> 2] = $83_1;
  $86_1 = HEAP32[($2_1 + 340 | 0) >> 2] | 0;
  $87_1 = HEAP32[($2_1 + 336 | 0) >> 2] | 0;
  $88_1 = HEAP32[($2_1 + 328 | 0) >> 2] | 0;
  HEAP32[($2_1 + 324 | 0) >> 2] = HEAP32[($2_1 + 332 | 0) >> 2] | 0;
  HEAP32[($2_1 + 320 | 0) >> 2] = $88_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 320 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 324 | 0) >> 2] | 0;
  $461_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 24 | 0) >> 2] = $461_1;
  HEAP32[($2_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  $87($87_1 | 0, $2_1 + 24 | 0 | 0);
  HEAP32[($2_1 + 100 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 96 | 0) >> 2] = 12;
  i64toi32_i32$0 = HEAP32[($2_1 + 96 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 100 | 0) >> 2] | 0;
  $474_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 376 | 0) >> 2] = $474_1;
  HEAP32[($2_1 + 380 | 0) >> 2] = i64toi32_i32$1;
  $93_1 = HEAP32[($2_1 + 376 | 0) >> 2] | 0;
  $94_1 = HEAP32[($2_1 + 380 | 0) >> 2] | 0;
  HEAP32[($2_1 + 404 | 0) >> 2] = $86_1;
  HEAP32[($2_1 + 400 | 0) >> 2] = 65607;
  HEAP32[($2_1 + 396 | 0) >> 2] = $94_1;
  HEAP32[($2_1 + 392 | 0) >> 2] = $93_1;
  $96_1 = HEAP32[($2_1 + 404 | 0) >> 2] | 0;
  $97_1 = HEAP32[($2_1 + 400 | 0) >> 2] | 0;
  $98_1 = HEAP32[($2_1 + 392 | 0) >> 2] | 0;
  HEAP32[($2_1 + 388 | 0) >> 2] = HEAP32[($2_1 + 396 | 0) >> 2] | 0;
  HEAP32[($2_1 + 384 | 0) >> 2] = $98_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 384 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 388 | 0) >> 2] | 0;
  $502_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 16 | 0) >> 2] = $502_1;
  HEAP32[($2_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $88($97_1 | 0, $2_1 + 16 | 0 | 0);
  HEAP32[($2_1 + 92 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 88 | 0) >> 2] = 13;
  i64toi32_i32$0 = HEAP32[($2_1 + 88 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 92 | 0) >> 2] | 0;
  $515 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 344 | 0) >> 2] = $515;
  HEAP32[($2_1 + 348 | 0) >> 2] = i64toi32_i32$1;
  $103_1 = HEAP32[($2_1 + 344 | 0) >> 2] | 0;
  $104_1 = HEAP32[($2_1 + 348 | 0) >> 2] | 0;
  HEAP32[($2_1 + 372 | 0) >> 2] = $96_1;
  HEAP32[($2_1 + 368 | 0) >> 2] = 65920;
  HEAP32[($2_1 + 364 | 0) >> 2] = $104_1;
  HEAP32[($2_1 + 360 | 0) >> 2] = $103_1;
  $106_1 = HEAP32[($2_1 + 372 | 0) >> 2] | 0;
  $107_1 = HEAP32[($2_1 + 368 | 0) >> 2] | 0;
  $108_1 = HEAP32[($2_1 + 360 | 0) >> 2] | 0;
  HEAP32[($2_1 + 356 | 0) >> 2] = HEAP32[($2_1 + 364 | 0) >> 2] | 0;
  HEAP32[($2_1 + 352 | 0) >> 2] = $108_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 352 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 356 | 0) >> 2] | 0;
  $543 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $543;
  HEAP32[($2_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $88($107_1 | 0, $2_1 + 8 | 0 | 0);
  HEAP32[($2_1 + 84 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 80 | 0) >> 2] = 14;
  i64toi32_i32$0 = HEAP32[($2_1 + 80 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 84 | 0) >> 2] | 0;
  $556 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 408 | 0) >> 2] = $556;
  HEAP32[($2_1 + 412 | 0) >> 2] = i64toi32_i32$1;
  $113_1 = HEAP32[($2_1 + 408 | 0) >> 2] | 0;
  $114_1 = HEAP32[($2_1 + 412 | 0) >> 2] | 0;
  HEAP32[($2_1 + 436 | 0) >> 2] = $106_1;
  HEAP32[($2_1 + 432 | 0) >> 2] = 65536;
  HEAP32[($2_1 + 428 | 0) >> 2] = $114_1;
  HEAP32[($2_1 + 424 | 0) >> 2] = $113_1;
  $116_1 = HEAP32[($2_1 + 436 | 0) >> 2] | 0;
  $117_1 = HEAP32[($2_1 + 432 | 0) >> 2] | 0;
  $118_1 = HEAP32[($2_1 + 424 | 0) >> 2] | 0;
  HEAP32[($2_1 + 420 | 0) >> 2] = HEAP32[($2_1 + 428 | 0) >> 2] | 0;
  HEAP32[($2_1 + 416 | 0) >> 2] = $118_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 416 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 420 | 0) >> 2] | 0;
  $584 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[$2_1 >> 2] = $584;
  HEAP32[($2_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $91($117_1 | 0, $2_1 | 0);
  HEAP32[($2_1 + 76 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 72 | 0) >> 2] = 15;
  i64toi32_i32$0 = HEAP32[($2_1 + 72 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 76 | 0) >> 2] | 0;
  $594 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 440 | 0) >> 2] = $594;
  HEAP32[($2_1 + 444 | 0) >> 2] = i64toi32_i32$1;
  $121_1 = HEAP32[($2_1 + 440 | 0) >> 2] | 0;
  $122_1 = HEAP32[($2_1 + 444 | 0) >> 2] | 0;
  HEAP32[($2_1 + 468 | 0) >> 2] = $116_1;
  HEAP32[($2_1 + 464 | 0) >> 2] = 65764;
  HEAP32[($2_1 + 460 | 0) >> 2] = $122_1;
  HEAP32[($2_1 + 456 | 0) >> 2] = $121_1;
  $124_1 = HEAP32[($2_1 + 464 | 0) >> 2] | 0;
  $125_1 = HEAP32[($2_1 + 456 | 0) >> 2] | 0;
  HEAP32[($2_1 + 452 | 0) >> 2] = HEAP32[($2_1 + 460 | 0) >> 2] | 0;
  HEAP32[($2_1 + 448 | 0) >> 2] = $125_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 448 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 452 | 0) >> 2] | 0;
  $620 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 64 | 0) >> 2] = $620;
  HEAP32[($2_1 + 68 | 0) >> 2] = i64toi32_i32$0;
  $92($124_1 | 0, $2_1 + 64 | 0 | 0);
  $93(65898 | 0, 16 | 0);
  global$0 = $2_1 + 512 | 0;
  return;
 }
 
 function $14($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = 0;
  FUNCTION_TABLE[HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0]();
  $261($5_1 | 0);
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $15($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $15_1 = 0, $27_1 = 0, $35_1 = 0, $31_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  label$1 : {
   if (!(($16(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, $4_1 + 12 | 0 | 0) | 0) & 1 | 0)) {
    break label$1
   }
   $15_1 = 24;
   if (!($265(((HEAPU8[($17(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $15_1 | 0) >> $15_1 | 0 | 0) | 0)) {
    break label$1
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = $18(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0;
   $27_1 = 24;
   $31_1 = (((HEAPU8[($17($4_1 + 4 | 0 | 0) | 0) >> 0] | 0) << $27_1 | 0) >> $27_1 | 0) - 48 | 0;
   global$0 = $4_1 + 16 | 0;
   return $31_1 | 0;
  }
  $35_1 = $443(8 | 0) | 0;
  $298($35_1 | 0, 65639 | 0) | 0;
  fimport$0($35_1 | 0, 69168 | 0, 17 | 0);
  wasm2js_trap();
 }
 
 function $16($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $11_1 = (($19(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) ^ -1 | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $17($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $18($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = HEAP32[$5_1 >> 2] | 0;
  $20($5_1 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $7_1 | 0;
 }
 
 function $19($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $11_1 = ($34(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) == ($34(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $20($0_1) {
  $0_1 = $0_1 | 0;
  var $4_1 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = (HEAP32[$4_1 >> 2] | 0) + 1 | 0;
  return $4_1 | 0;
 }
 
 function $21($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$5 = 0, $18_1 = 0, $22_1 = 0, $39$hi = 0, $40$hi = 0, $41$hi = 0, $42$hi = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, $5_1 = 0, $69_1 = 0, $20_1 = 0, $41_1 = 0, $31_1 = 0, $129_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  $5_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  i64toi32_i32$1 = $15($5_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  $69_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $4_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $69_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  label$1 : while (1) {
   $18_1 = 0;
   label$2 : {
    if (!(($16(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, $4_1 + 28 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $22_1 = 24;
    $18_1 = ($265(((HEAPU8[($17(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $22_1 | 0) >> $22_1 | 0 | 0) | 0 | 0) != (0 | 0);
   }
   label$3 : {
    if (!($18_1 & 1 | 0)) {
     break label$3
    }
    i64toi32_i32$2 = $4_1;
    i64toi32_i32$0 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
    $39$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $40$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $39$hi;
    i64toi32_i32$1 = $40$hi;
    i64toi32_i32$1 = $39$hi;
    $20_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $40$hi;
    i64toi32_i32$0 = __wasm_i64_mul($20_1 | 0, i64toi32_i32$1 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $41_1 = i64toi32_i32$0;
    $41$hi = i64toi32_i32$1;
    $31_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
    HEAP32[($4_1 + 8 | 0) >> 2] = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
    i64toi32_i32$0 = $15($31_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $42$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $41$hi;
    i64toi32_i32$1 = $42$hi;
    $129_1 = i64toi32_i32$0;
    i64toi32_i32$1 = $41$hi;
    i64toi32_i32$2 = $41_1;
    i64toi32_i32$0 = $42$hi;
    i64toi32_i32$3 = $129_1;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    i64toi32_i32$2 = $4_1;
    HEAP32[($4_1 + 16 | 0) >> 2] = i64toi32_i32$4;
    HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$5;
    continue label$1;
   }
   break label$1;
  };
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$5 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$2 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
  global$0 = $4_1 + 32 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$5 | 0;
 }
 
 function $22($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $19_1 = 0, $35$hi = 0, $36$hi = 0, $6_1 = 0, $59_1 = 0, $27_1 = 0, $110_1 = 0, $35_1 = 0, $117_1 = 0;
  $5_1 = global$0 - 48 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 44 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 40 | 0) >> 2] = $1_1;
  $6_1 = HEAP32[($5_1 + 40 | 0) >> 2] | 0;
  HEAP32[($5_1 + 28 | 0) >> 2] = HEAP32[($5_1 + 44 | 0) >> 2] | 0;
  i64toi32_i32$0 = $21($6_1 | 0, HEAP32[($5_1 + 28 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $59_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[($5_1 + 32 | 0) >> 2] = $59_1;
  HEAP32[($5_1 + 36 | 0) >> 2] = i64toi32_i32$1;
  label$1 : {
   label$2 : {
    if (!(($16(HEAP32[($5_1 + 40 | 0) >> 2] | 0 | 0, $5_1 + 44 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $19_1 = 24;
    if (!((((HEAPU8[($17(HEAP32[($5_1 + 40 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $19_1 | 0) >> $19_1 | 0 | 0) == (47 | 0) & 1 | 0)) {
     break label$2
    }
    $20(HEAP32[($5_1 + 40 | 0) >> 2] | 0 | 0) | 0;
    $27_1 = HEAP32[($5_1 + 40 | 0) >> 2] | 0;
    HEAP32[($5_1 + 12 | 0) >> 2] = HEAP32[($5_1 + 44 | 0) >> 2] | 0;
    i64toi32_i32$1 = $21($27_1 | 0, HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $110_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $5_1;
    HEAP32[($5_1 + 16 | 0) >> 2] = $110_1;
    HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[($5_1 + 32 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 36 | 0) >> 2] | 0;
    $35_1 = i64toi32_i32$0;
    $35$hi = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
    $36$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $35$hi;
    i64toi32_i32$0 = $36$hi;
    $117_1 = i64toi32_i32$1;
    i64toi32_i32$0 = $35$hi;
    i64toi32_i32$1 = $36$hi;
    $23($0_1 | 0, $35_1 | 0, i64toi32_i32$0 | 0, $117_1 | 0, i64toi32_i32$1 | 0) | 0;
    break label$1;
   }
   i64toi32_i32$1 = HEAP32[($5_1 + 32 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($5_1 + 36 | 0) >> 2] | 0;
   $24($0_1 | 0, i64toi32_i32$1 | 0) | 0;
  }
  global$0 = $5_1 + 48 | 0;
  return;
 }
 
 function $23($0_1, $1_1, $1$hi, $2_1, $2$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $6_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 28 | 0) >> 2] = $0_1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $5_1;
  HEAP32[($5_1 + 16 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $5_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
  $25($5_1 + 16 | 0 | 0, $5_1 + 8 | 0 | 0);
  i64toi32_i32$0 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
  HEAP32[$6_1 >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  HEAP32[($6_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $5_1 + 32 | 0;
  return $6_1 | 0;
 }
 
 function $24($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = 1;
  return $5_1 | 0;
 }
 
 function $25($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $4_1 = 0, i64toi32_i32$4 = 0, $25$hi = 0, $35$hi = 0, i64toi32_i32$6 = 0, $19$hi = 0, $20$hi = 0, $22$hi = 0, $23$hi = 0, $33_1 = 0, $34_1 = 0, $36_1 = 0, $25_1 = 0, $26$hi = 0, $32$hi = 0, $33$hi = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $35_1 = 0, $36$hi = 0, $19_1 = 0, $60_1 = 0, $63_1 = 0, $81$hi = 0, $82_1 = 0, $90$hi = 0, $40_1 = 0, $94_1 = 0, $112$hi = 0, $113_1 = 0, $121$hi = 0, $41_1 = 0, $125_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  i64toi32_i32$2 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $19_1 = i64toi32_i32$0;
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $19$hi;
  i64toi32_i32$0 = $20$hi;
  $60_1 = i64toi32_i32$1;
  i64toi32_i32$0 = $19$hi;
  i64toi32_i32$1 = $20$hi;
  i64toi32_i32$1 = $131($19_1 | 0, i64toi32_i32$0 | 0, $60_1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $63_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $4_1;
  HEAP32[i64toi32_i32$1 >> 2] = $63_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $22$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $23$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $22$hi;
  i64toi32_i32$1 = $23$hi;
  i64toi32_i32$1 = $22$hi;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = $23$hi;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
   $33_1 = 1
  } else {
   if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
     $34_1 = 0
    } else {
     $34_1 = 1
    }
    $36_1 = $34_1;
   } else {
    $36_1 = 0
   }
   $33_1 = $36_1;
  }
  label$1 : {
   label$2 : {
    if (!($33_1 & 1 | 0)) {
     break label$2
    }
    i64toi32_i32$3 = $4_1;
    i64toi32_i32$2 = HEAP32[i64toi32_i32$3 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
    $25_1 = i64toi32_i32$2;
    $25$hi = i64toi32_i32$1;
    break label$1;
   }
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   $26$hi = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   $81$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $26$hi;
   $82_1 = i64toi32_i32$1;
   i64toi32_i32$2 = $81$hi;
   i64toi32_i32$3 = 0;
   i64toi32_i32$1 = $26$hi;
   i64toi32_i32$0 = $82_1;
   i64toi32_i32$4 = i64toi32_i32$3 - i64toi32_i32$0 | 0;
   i64toi32_i32$6 = i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0;
   i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
   i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
   $25_1 = i64toi32_i32$4;
   $25$hi = i64toi32_i32$5;
  }
  i64toi32_i32$5 = $25$hi;
  i64toi32_i32$2 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$5 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$3 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $90$hi = i64toi32_i32$3;
  i64toi32_i32$3 = $25$hi;
  i64toi32_i32$3 = $90$hi;
  $40_1 = i64toi32_i32$5;
  i64toi32_i32$5 = $25$hi;
  i64toi32_i32$5 = __wasm_i64_sdiv($40_1 | 0, i64toi32_i32$3 | 0, $25_1 | 0, i64toi32_i32$5 | 0) | 0;
  i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
  $94_1 = i64toi32_i32$5;
  i64toi32_i32$5 = i64toi32_i32$2;
  HEAP32[i64toi32_i32$2 >> 2] = $94_1;
  HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$3;
  i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$3 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$5 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $32$hi = i64toi32_i32$5;
  i64toi32_i32$5 = 0;
  $33$hi = i64toi32_i32$5;
  i64toi32_i32$5 = $32$hi;
  i64toi32_i32$5 = $33$hi;
  i64toi32_i32$5 = $32$hi;
  i64toi32_i32$2 = i64toi32_i32$3;
  i64toi32_i32$3 = $33$hi;
  i64toi32_i32$0 = 0;
  if ((i64toi32_i32$5 | 0) > (i64toi32_i32$3 | 0)) {
   $37_1 = 1
  } else {
   if ((i64toi32_i32$5 | 0) >= (i64toi32_i32$3 | 0)) {
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0) {
     $38_1 = 0
    } else {
     $38_1 = 1
    }
    $39_1 = $38_1;
   } else {
    $39_1 = 0
   }
   $37_1 = $39_1;
  }
  label$3 : {
   label$4 : {
    if (!($37_1 & 1 | 0)) {
     break label$4
    }
    i64toi32_i32$0 = $4_1;
    i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
    i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
    $35_1 = i64toi32_i32$2;
    $35$hi = i64toi32_i32$5;
    break label$3;
   }
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$5 = HEAP32[i64toi32_i32$0 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
   $36$hi = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   $112$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $36$hi;
   $113_1 = i64toi32_i32$5;
   i64toi32_i32$2 = $112$hi;
   i64toi32_i32$0 = 0;
   i64toi32_i32$5 = $36$hi;
   i64toi32_i32$3 = $113_1;
   i64toi32_i32$1 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
   i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0;
   i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
   i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$4 | 0;
   $35_1 = i64toi32_i32$1;
   $35$hi = i64toi32_i32$4;
  }
  i64toi32_i32$4 = $35$hi;
  i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $121$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $35$hi;
  i64toi32_i32$0 = $121$hi;
  $41_1 = i64toi32_i32$4;
  i64toi32_i32$4 = $35$hi;
  i64toi32_i32$4 = __wasm_i64_sdiv($41_1 | 0, i64toi32_i32$0 | 0, $35_1 | 0, i64toi32_i32$4 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $125_1 = i64toi32_i32$4;
  i64toi32_i32$4 = i64toi32_i32$2;
  HEAP32[i64toi32_i32$2 >> 2] = $125_1;
  HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $26($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $15_1 = 0, $25_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $0_1;
  label$1 : {
   label$2 : {
    if (!(($16(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0, $4_1 + 8 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $15_1 = 24;
    if (!((((HEAPU8[($17(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $15_1 | 0) >> $15_1 | 0 | 0) == (45 | 0) & 1 | 0)) {
     break label$2
    }
    $20(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[($4_1 + 12 | 0) >> 2] = -1;
    break label$1;
   }
   HEAP32[($4_1 + 12 | 0) >> 2] = 1;
  }
  $25_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $25_1 | 0;
 }
 
 function $27($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $15_1 = 0, $27_1 = 0, $37_1 = 0, $41_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $0_1;
  label$1 : {
   label$2 : {
    if (!(($16(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0, $4_1 + 8 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $15_1 = 24;
    label$3 : {
     if (!((((HEAPU8[($17(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $15_1 | 0) >> $15_1 | 0 | 0) == (43 | 0) & 1 | 0)) {
      break label$3
     }
     $20(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0;
     HEAP32[($4_1 + 12 | 0) >> 2] = 1;
     break label$1;
    }
    $27_1 = 24;
    label$4 : {
     if (!((((HEAPU8[($17(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $27_1 | 0) >> $27_1 | 0 | 0) == (45 | 0) & 1 | 0)) {
      break label$4
     }
     $20(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0;
     HEAP32[($4_1 + 12 | 0) >> 2] = -1;
     break label$1;
    }
   }
   $37_1 = $443(8 | 0) | 0;
   $298($37_1 | 0, 66688 | 0) | 0;
   fimport$0($37_1 | 0, 69168 | 0, 17 | 0);
   wasm2js_trap();
  }
  $41_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $41_1 | 0;
 }
 
 function $28($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $39_1 = 0, $49_1 = 0, $89_1 = 0, $100_1 = 0, $122_1 = 0, $138_1 = 0, $6_1 = 0, $14_1 = 0, $56_1 = 0, $64_1 = 0, $361_1 = 0, $365_1 = 0, $369_1 = 0, $373_1 = 0, $406_1 = 0, $417_1 = 0, $421_1 = 0, $462_1 = 0, $466_1 = 0, $470_1 = 0;
  $5_1 = global$0 - 176 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 172 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 168 | 0) >> 2] = $1_1;
  $6_1 = HEAP32[($5_1 + 168 | 0) >> 2] | 0;
  HEAP32[($5_1 + 160 | 0) >> 2] = HEAP32[($5_1 + 172 | 0) >> 2] | 0;
  HEAP32[($5_1 + 164 | 0) >> 2] = $26($6_1 | 0, HEAP32[($5_1 + 160 | 0) >> 2] | 0 | 0) | 0;
  $24($5_1 + 144 | 0 | 0, HEAP32[($5_1 + 164 | 0) >> 2] | 0 | 0) | 0;
  $14_1 = HEAP32[($5_1 + 168 | 0) >> 2] | 0;
  HEAP32[($5_1 + 132 | 0) >> 2] = HEAP32[($5_1 + 172 | 0) >> 2] | 0;
  $22($5_1 + 136 | 0 | 0, $14_1 | 0, HEAP32[($5_1 + 132 | 0) >> 2] | 0 | 0);
  $29($5_1 + 152 | 0 | 0, $5_1 + 144 | 0 | 0, $5_1 + 136 | 0 | 0);
  label$1 : {
   label$2 : {
    if (!(($16(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0, $5_1 + 172 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $39_1 = 24;
    label$3 : {
     if ((((HEAPU8[($17(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $39_1 | 0) >> $39_1 | 0 | 0) == (43 | 0) & 1 | 0) {
      break label$3
     }
     $49_1 = 24;
     if (!((((HEAPU8[($17(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $49_1 | 0) >> $49_1 | 0 | 0) == (45 | 0) & 1 | 0)) {
      break label$2
     }
    }
    $56_1 = HEAP32[($5_1 + 168 | 0) >> 2] | 0;
    HEAP32[($5_1 + 124 | 0) >> 2] = HEAP32[($5_1 + 172 | 0) >> 2] | 0;
    HEAP32[($5_1 + 128 | 0) >> 2] = $27($56_1 | 0, HEAP32[($5_1 + 124 | 0) >> 2] | 0 | 0) | 0;
    $24($5_1 + 108 | 0 | 0, HEAP32[($5_1 + 128 | 0) >> 2] | 0 | 0) | 0;
    $64_1 = HEAP32[($5_1 + 168 | 0) >> 2] | 0;
    HEAP32[($5_1 + 96 | 0) >> 2] = HEAP32[($5_1 + 172 | 0) >> 2] | 0;
    $22($5_1 + 100 | 0 | 0, $64_1 | 0, HEAP32[($5_1 + 96 | 0) >> 2] | 0 | 0);
    $29($5_1 + 116 | 0 | 0, $5_1 + 108 | 0 | 0, $5_1 + 100 | 0 | 0);
    label$4 : {
     if (!(($16(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0, $5_1 + 172 | 0 | 0) | 0) & 1 | 0)) {
      break label$4
     }
     $89_1 = 24;
     if (!((((HEAPU8[($17(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $89_1 | 0) >> $89_1 | 0 | 0) == (105 | 0) & 1 | 0)) {
      break label$4
     }
     $20(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$0 = HEAP32[($5_1 + 152 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($5_1 + 156 | 0) >> 2] | 0;
     $361_1 = i64toi32_i32$0;
     i64toi32_i32$0 = $5_1;
     HEAP32[($5_1 + 88 | 0) >> 2] = $361_1;
     HEAP32[($5_1 + 92 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$1 = HEAP32[($5_1 + 116 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($5_1 + 120 | 0) >> 2] | 0;
     $365_1 = i64toi32_i32$1;
     i64toi32_i32$1 = $5_1;
     HEAP32[($5_1 + 80 | 0) >> 2] = $365_1;
     HEAP32[($5_1 + 84 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = HEAP32[($5_1 + 88 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($5_1 + 92 | 0) >> 2] | 0;
     $369_1 = i64toi32_i32$0;
     i64toi32_i32$0 = $5_1;
     HEAP32[($5_1 + 8 | 0) >> 2] = $369_1;
     HEAP32[($5_1 + 12 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$1 = HEAP32[($5_1 + 80 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($5_1 + 84 | 0) >> 2] | 0;
     $373_1 = i64toi32_i32$1;
     i64toi32_i32$1 = $5_1;
     HEAP32[$5_1 >> 2] = $373_1;
     HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $30($0_1 | 0, $5_1 + 8 | 0 | 0, $5_1 | 0) | 0;
     break label$1;
    }
    $100_1 = $443(8 | 0) | 0;
    $298($100_1 | 0, 66675 | 0) | 0;
    fimport$0($100_1 | 0, 69168 | 0, 17 | 0);
    wasm2js_trap();
   }
   label$5 : {
    if (!(($19(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0, $5_1 + 172 | 0 | 0) | 0) & 1 | 0)) {
     break label$5
    }
    i64toi32_i32$0 = HEAP32[($5_1 + 152 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 156 | 0) >> 2] | 0;
    $406_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $5_1;
    HEAP32[($5_1 + 72 | 0) >> 2] = $406_1;
    HEAP32[($5_1 + 76 | 0) >> 2] = i64toi32_i32$1;
    $24($5_1 + 64 | 0 | 0, 0 | 0) | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 72 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($5_1 + 76 | 0) >> 2] | 0;
    $417_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $5_1;
    HEAP32[($5_1 + 24 | 0) >> 2] = $417_1;
    HEAP32[($5_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[($5_1 + 64 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 68 | 0) >> 2] | 0;
    $421_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $5_1;
    HEAP32[($5_1 + 16 | 0) >> 2] = $421_1;
    HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$1;
    $30($0_1 | 0, $5_1 + 24 | 0 | 0, $5_1 + 16 | 0 | 0) | 0;
    break label$1;
   }
   $122_1 = 24;
   label$6 : {
    if (!((((HEAPU8[($17(HEAP32[($5_1 + 168 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $122_1 | 0) >> $122_1 | 0 | 0) == (105 | 0) & 1 | 0)) {
     break label$6
    }
    $24($5_1 + 56 | 0 | 0, 0 | 0) | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 152 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($5_1 + 156 | 0) >> 2] | 0;
    $462_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $5_1;
    HEAP32[($5_1 + 48 | 0) >> 2] = $462_1;
    HEAP32[($5_1 + 52 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[($5_1 + 56 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 60 | 0) >> 2] | 0;
    $466_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $5_1;
    HEAP32[($5_1 + 40 | 0) >> 2] = $466_1;
    HEAP32[($5_1 + 44 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[($5_1 + 48 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($5_1 + 52 | 0) >> 2] | 0;
    $470_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $5_1;
    HEAP32[($5_1 + 32 | 0) >> 2] = $470_1;
    HEAP32[($5_1 + 36 | 0) >> 2] = i64toi32_i32$0;
    $30($0_1 | 0, $5_1 + 40 | 0 | 0, $5_1 + 32 | 0 | 0) | 0;
    break label$1;
   }
   $138_1 = $443(8 | 0) | 0;
   $298($138_1 | 0, 66675 | 0) | 0;
   fimport$0($138_1 | 0, 69168 | 0, 17 | 0);
   wasm2js_trap();
  }
  global$0 = $5_1 + 176 | 0;
  return;
 }
 
 function $29($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $2_1;
  label$1 : {
   if (HEAP32[(HEAP32[($5_1 + 12 | 0) >> 2] | 0) >> 2] | 0) {
    break label$1
   }
   if (HEAP32[((HEAP32[($5_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) {
    break label$1
   }
   fimport$1(66615 | 0, 65719 | 0, 51 | 0, 66665 | 0);
   wasm2js_trap();
  }
  label$2 : {
   if (HEAP32[((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) {
    break label$2
   }
   if (HEAP32[(HEAP32[($5_1 + 8 | 0) >> 2] | 0) >> 2] | 0) {
    break label$2
   }
   fimport$1(66640 | 0, 65719 | 0, 52 | 0, 66665 | 0);
   wasm2js_trap();
  }
  HEAP32[($5_1 + 4 | 0) >> 2] = $31(HEAP32[(HEAP32[($5_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0, HEAP32[((HEAP32[($5_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[$5_1 >> 2] = $31(HEAP32[(HEAP32[($5_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0, HEAP32[((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) | 0;
  $32($0_1 | 0) | 0;
  $33($0_1 | 0, Math_imul((HEAP32[(HEAP32[($5_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0) / (HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0, (HEAP32[(HEAP32[($5_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0) / (HEAP32[$5_1 >> 2] | 0 | 0) | 0) | 0, Math_imul((HEAP32[((HEAP32[($5_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) / (HEAP32[$5_1 >> 2] | 0 | 0) | 0, (HEAP32[((HEAP32[($5_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) / (HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) | 0) | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return;
 }
 
 function $30($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6_1 = 0, $5_1 = 0, $22_1 = 0, $29_1 = 0;
  $5_1 = global$0 - 16 | 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $22_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $6_1;
  HEAP32[i64toi32_i32$0 >> 2] = $22_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $29_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $6_1 + 8 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $29_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  return $6_1 | 0;
 }
 
 function $31($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $15_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $15_1 = $184($183($4_1 + 7 | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0, $183($4_1 + 6 | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $15_1 | 0;
 }
 
 function $32($0_1) {
  $0_1 = $0_1 | 0;
  var $4_1 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = 1;
  return $4_1 | 0;
 }
 
 function $33($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 16 | 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  HEAP32[$6_1 >> 2] = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  HEAP32[($6_1 + 4 | 0) >> 2] = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
  return $6_1 | 0;
 }
 
 function $34($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $35($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $137_1 = 0, $141_1 = 0;
  $4_1 = global$0 - 80 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 76 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 64 | 0) >> 2] = $36($1_1 | 0) | 0;
  HEAP32[($4_1 + 60 | 0) >> 2] = $37($1_1 | 0) | 0;
  HEAP32[($4_1 + 68 | 0) >> 2] = $38(HEAP32[($4_1 + 64 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 60 | 0) >> 2] | 0 | 0, 18 | 0) | 0;
  $39($4_1 + 72 | 0 | 0, $4_1 + 68 | 0 | 0) | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = $37($1_1 | 0) | 0;
  $39($4_1 + 56 | 0 | 0, $4_1 + 52 | 0 | 0) | 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = $40($1_1 | 0, HEAP32[($4_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 56 | 0) >> 2] | 0 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!(($41($1_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $24($4_1 + 40 | 0 | 0, 0 | 0) | 0;
    $24($4_1 + 32 | 0 | 0, 0 | 0) | 0;
    i64toi32_i32$0 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
    $137_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $4_1;
    HEAP32[($4_1 + 16 | 0) >> 2] = $137_1;
    HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[($4_1 + 32 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[($4_1 + 36 | 0) >> 2] | 0;
    $141_1 = i64toi32_i32$1;
    i64toi32_i32$1 = $4_1;
    HEAP32[($4_1 + 8 | 0) >> 2] = $141_1;
    HEAP32[($4_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    $30($0_1 | 0, $4_1 + 16 | 0 | 0, $4_1 + 8 | 0 | 0) | 0;
    break label$1;
   }
   HEAP32[($4_1 + 28 | 0) >> 2] = $36($1_1 | 0) | 0;
   HEAP32[($4_1 + 24 | 0) >> 2] = $37($1_1 | 0) | 0;
   $28($0_1 | 0, $4_1 + 28 | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0);
  }
  global$0 = $4_1 + 80 | 0;
  return;
 }
 
 function $36($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $7_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $48($4_1 | 0, $47($4_1 | 0) | 0 | 0) | 0;
  $7_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $7_1 | 0;
 }
 
 function $37($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $48($4_1 | 0, ($47($4_1 | 0) | 0) + ($49($4_1 | 0) | 0) | 0 | 0) | 0;
  $9_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $38($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $37_1 = 0, $33_1 = 0, $43_1 = 0, $52_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 16 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = $46(HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0, $5_1 + 16 | 0 | 0) | 0;
  HEAP32[($5_1 + 24 | 0) >> 2] = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   if (!(($16($5_1 + 24 | 0 | 0, $5_1 + 20 | 0 | 0) | 0) & 1 | 0)) {
    break label$1
   }
   HEAP32[$5_1 >> 2] = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
   label$2 : {
    label$3 : while (1) {
     if (!(($16($20($5_1 | 0) | 0 | 0, $5_1 + 20 | 0 | 0) | 0) & 1 | 0)) {
      break label$2
     }
     $33_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
     $37_1 = 24;
     label$4 : {
      if (FUNCTION_TABLE[$33_1 | 0](((HEAPU8[($17($5_1 | 0) | 0) >> 0] | 0) << $37_1 | 0) >> $37_1 | 0) | 0) {
       break label$4
      }
      $43_1 = HEAPU8[($17($5_1 | 0) | 0) >> 0] | 0;
      HEAP8[($17($5_1 + 24 | 0 | 0) | 0) >> 0] = $43_1;
      $20($5_1 + 24 | 0 | 0) | 0;
     }
     continue label$3;
    };
   }
  }
  HEAP32[($5_1 + 28 | 0) >> 2] = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
  $52_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
  global$0 = $5_1 + 32 | 0;
  return $52_1 | 0;
 }
 
 function $39($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $34(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $40($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0, $28_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 16 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = $36($6_1 | 0) | 0;
  HEAP32[($5_1 + 8 | 0) >> 2] = $42($5_1 + 24 | 0 | 0, $5_1 + 12 | 0 | 0) | 0;
  $44($6_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, $43($5_1 + 20 | 0 | 0, $5_1 + 24 | 0 | 0) | 0 | 0) | 0;
  HEAP32[($5_1 + 28 | 0) >> 2] = $45($5_1 + 12 | 0 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  $28_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
  global$0 = $5_1 + 32 | 0;
  return $28_1 | 0;
 }
 
 function $41($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $9_1 = ($49(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) == (0 | 0) & 1 | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $42($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $9_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $9_1 = ($244(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0) - ($34(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $43($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $9_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $9_1 = ($244(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0) - ($244(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $44($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   if (!((HEAP32[($5_1 + 8 | 0) >> 2] | 0) >>> 0 > ($49($6_1 | 0) | 0) >>> 0 & 1 | 0)) {
    break label$1
   }
   $245($6_1 | 0);
   wasm2js_trap();
  }
  label$2 : {
   label$3 : {
    if (!((HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0) == (-1 | 0) & 1 | 0)) {
     break label$3
    }
    $246($6_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0);
    break label$2;
   }
   $364($6_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0);
  }
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $45($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = HEAP32[(HEAP32[($4_1 + 8 | 0) >> 2] | 0) >> 2] | 0;
  $247($4_1 + 12 | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0;
  $11_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $46($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $22_1 = 0, $16_1 = 0, $30_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[$5_1 >> 2] = $2_1;
  label$1 : {
   label$2 : while (1) {
    if (!(($16($5_1 + 8 | 0 | 0, $5_1 + 4 | 0 | 0) | 0) & 1 | 0)) {
     break label$1
    }
    $16_1 = HEAP32[(HEAP32[$5_1 >> 2] | 0) >> 2] | 0;
    $22_1 = 24;
    label$3 : {
     if (!(FUNCTION_TABLE[$16_1 | 0](((HEAPU8[($17($5_1 + 8 | 0 | 0) | 0) >> 0] | 0) << $22_1 | 0) >> $22_1 | 0) | 0)) {
      break label$3
     }
     break label$1;
    }
    $20($5_1 + 8 | 0 | 0) | 0;
    continue label$2;
   };
  }
  HEAP32[($5_1 + 12 | 0) >> 2] = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  $30_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  global$0 = $5_1 + 16 | 0;
  return $30_1 | 0;
 }
 
 function $47($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($128($4_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $9_1 = $241($4_1 | 0) | 0;
    break label$1;
   }
   $9_1 = $242($4_1 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $48($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $9_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  $240($4_1 + 12 | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0;
  $9_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $49($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($128($4_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $9_1 = $129($4_1 | 0) | 0;
    break label$1;
   }
   $9_1 = $130($4_1 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $50($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $55_1 = 0, $84_1 = 0, $106_1 = 0, $10_1 = 0, $31_1 = 0, $70_1 = 0;
  $4_1 = global$0 - 96 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 92 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 88 | 0) >> 2] = $1_1;
  HEAP8[($4_1 + 87 | 0) >> 0] = 0 & 1 | 0;
  $51($0_1 | 0) | 0;
  $10_1 = (HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 8 | 0;
  $24($4_1 + 76 | 0 | 0, 0 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!(($52($10_1 | 0, $4_1 + 76 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $1($4_1 + 64 | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0);
    $53($0_1 | 0, $4_1 + 64 | 0 | 0) | 0;
    $355($4_1 + 64 | 0 | 0) | 0;
    break label$1;
   }
   $31_1 = HEAP32[($4_1 + 88 | 0) >> 2] | 0;
   $24($4_1 + 56 | 0 | 0, 0 | 0) | 0;
   label$3 : {
    label$4 : {
     if (!(($52($31_1 | 0, $4_1 + 56 | 0 | 0) | 0) & 1 | 0)) {
      break label$4
     }
     $1($4_1 + 44 | 0 | 0, (HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 8 | 0 | 0);
     $53($0_1 | 0, $4_1 + 44 | 0 | 0) | 0;
     $355($4_1 + 44 | 0 | 0) | 0;
     $55_1 = 24;
     $54($0_1 | 0, (105 << $55_1 | 0) >> $55_1 | 0 | 0) | 0;
     break label$3;
    }
    $1($4_1 + 32 | 0 | 0, HEAP32[($4_1 + 88 | 0) >> 2] | 0 | 0);
    $53($0_1 | 0, $4_1 + 32 | 0 | 0) | 0;
    $355($4_1 + 32 | 0 | 0) | 0;
    $70_1 = (HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 8 | 0;
    $24($4_1 + 24 | 0 | 0, 0 | 0) | 0;
    $84_1 = 24;
    $54($0_1 | 0, ((($55($70_1 | 0, $4_1 + 24 | 0 | 0) | 0) & 1 | 0 ? 43 : 45) << $84_1 | 0) >> $84_1 | 0 | 0) | 0;
    $56($4_1 + 4 | 0 | 0, (HEAP32[($4_1 + 88 | 0) >> 2] | 0) + 8 | 0 | 0);
    $1($4_1 + 12 | 0 | 0, $4_1 + 4 | 0 | 0);
    $53($0_1 | 0, $4_1 + 12 | 0 | 0) | 0;
    $355($4_1 + 12 | 0 | 0) | 0;
    $106_1 = 24;
    $54($0_1 | 0, (105 << $106_1 | 0) >> $106_1 | 0 | 0) | 0;
   }
  }
  HEAP8[($4_1 + 87 | 0) >> 0] = 1 & 1 | 0;
  label$5 : {
   if ((HEAPU8[($4_1 + 87 | 0) >> 0] | 0) & 1 | 0) {
    break label$5
   }
   $355($0_1 | 0) | 0;
  }
  global$0 = $4_1 + 96 | 0;
  return;
 }
 
 function $51($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $57($4_1 | 0, $3_1 + 11 | 0 | 0, $3_1 + 10 | 0 | 0) | 0;
  $58($4_1 | 0, 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $52($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $13_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $13_1 = 0;
  label$1 : {
   if (!((HEAP32[(HEAP32[($4_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0) == (HEAP32[(HEAP32[($4_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0) & 1 | 0)) {
    break label$1
   }
   $13_1 = (HEAP32[((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) == (HEAP32[((HEAP32[($4_1 + 8 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0);
  }
  return $13_1 & 1 | 0 | 0;
 }
 
 function $53($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $7_1 = $9(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $7_1 | 0;
 }
 
 function $54($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP8[($4_1 + 11 | 0) >> 0] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $7_1 = 24;
  $363($5_1 | 0, ((HEAPU8[($4_1 + 11 | 0) >> 0] | 0) << $7_1 | 0) >> $7_1 | 0 | 0);
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $55($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $11_1 = ($59(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) > (0 | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $56($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $50_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $24($4_1 + 4 | 0 | 0, 0 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!(($60($5_1 | 0, $4_1 + 4 | 0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = HEAP32[$5_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
    $50_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $50_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    break label$1;
   }
   $61($0_1 | 0, $5_1 | 0);
  }
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $57($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  $258($6_1 | 0) | 0;
  $122($6_1 | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $58($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  return;
 }
 
 function $59($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $51$hi = 0, $52$hi = 0, $54$hi = 0, $55$hi = 0, $57$hi = 0, $58$hi = 0, $59$hi = 0, $60$hi = 0, $25_1 = 0, $26_1 = 0, $27_1 = 0, $51_1 = 0, $129_1 = 0, $132_1 = 0, $54_1 = 0, $148_1 = 0, $151_1 = 0, $57_1 = 0, $157_1 = 0, $59_1 = 0, $171_1 = 0;
  $4_1 = global$0 - 32 | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if (!(((HEAP32[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 2] | 0 | 0) >= (0 | 0) & 1 | 0) ^ ((HEAP32[(HEAP32[($4_1 + 20 | 0) >> 2] | 0) >> 2] | 0 | 0) >= (0 | 0) & 1 | 0) | 0)) {
     break label$2
    }
    HEAP32[($4_1 + 28 | 0) >> 2] = (HEAP32[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 2] | 0 | 0) > (HEAP32[(HEAP32[($4_1 + 20 | 0) >> 2] | 0) >> 2] | 0 | 0) & 1 | 0 ? 1 : -1;
    break label$1;
   }
   i64toi32_i32$1 = HEAP32[(HEAP32[($4_1 + 24 | 0) >> 2] | 0) >> 2] | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   $51_1 = i64toi32_i32$1;
   $51$hi = i64toi32_i32$0;
   i64toi32_i32$1 = HEAP32[((HEAP32[($4_1 + 20 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   $52$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $51$hi;
   i64toi32_i32$0 = $52$hi;
   $129_1 = i64toi32_i32$1;
   i64toi32_i32$0 = $51$hi;
   i64toi32_i32$1 = $52$hi;
   i64toi32_i32$1 = __wasm_i64_mul($51_1 | 0, i64toi32_i32$0 | 0, $129_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $132_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $4_1;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $132_1;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = HEAP32[(HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] | 0) >> 2] | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   $54_1 = i64toi32_i32$1;
   $54$hi = i64toi32_i32$0;
   i64toi32_i32$1 = HEAP32[((HEAP32[($4_1 + 24 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0;
   i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
   $55$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $54$hi;
   i64toi32_i32$0 = $55$hi;
   $148_1 = i64toi32_i32$1;
   i64toi32_i32$0 = $54$hi;
   i64toi32_i32$1 = $55$hi;
   i64toi32_i32$1 = __wasm_i64_mul($54_1 | 0, i64toi32_i32$0 | 0, $148_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $151_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $4_1;
   HEAP32[i64toi32_i32$1 >> 2] = $151_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = i64toi32_i32$1;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] | 0;
   $57_1 = i64toi32_i32$0;
   $57$hi = i64toi32_i32$1;
   i64toi32_i32$2 = $4_1;
   i64toi32_i32$1 = HEAP32[$4_1 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
   $58$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $57$hi;
   i64toi32_i32$0 = $58$hi;
   $157_1 = i64toi32_i32$1;
   i64toi32_i32$0 = $57$hi;
   i64toi32_i32$2 = $57_1;
   i64toi32_i32$1 = $58$hi;
   i64toi32_i32$3 = $157_1;
   label$3 : {
    if (!(((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0) & 1 | 0)) {
     break label$3
    }
    HEAP32[($4_1 + 28 | 0) >> 2] = 0;
    break label$1;
   }
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
   $59_1 = i64toi32_i32$2;
   $59$hi = i64toi32_i32$0;
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$0 = HEAP32[$4_1 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
   $60$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $59$hi;
   i64toi32_i32$2 = $60$hi;
   $171_1 = i64toi32_i32$0;
   i64toi32_i32$2 = $59$hi;
   i64toi32_i32$3 = $59_1;
   i64toi32_i32$0 = $60$hi;
   i64toi32_i32$1 = $171_1;
   if ((i64toi32_i32$2 | 0) > (i64toi32_i32$0 | 0)) {
    $25_1 = 1
   } else {
    if ((i64toi32_i32$2 | 0) >= (i64toi32_i32$0 | 0)) {
     if (i64toi32_i32$3 >>> 0 <= i64toi32_i32$1 >>> 0) {
      $26_1 = 0
     } else {
      $26_1 = 1
     }
     $27_1 = $26_1;
    } else {
     $27_1 = 0
    }
    $25_1 = $27_1;
   }
   HEAP32[($4_1 + 28 | 0) >> 2] = $25_1 & 1 | 0 ? 1 : -1;
  }
  return HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0;
 }
 
 function $60($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $11_1 = ($59(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) >= (0 | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $61($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $32($0_1 | 0) | 0;
  $33($0_1 | 0, 0 - (HEAP32[(HEAP32[($4_1 + 12 | 0) >> 2] | 0) >> 2] | 0) | 0 | 0, HEAP32[((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $62() {
  $63(69372 | 0) | 0;
  return;
 }
 
 function $63($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $14($4_1 | 0, 19 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $64() {
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $15_1 = 0, $16_1 = 0, $18_1 = 0, $19_1 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $31_1 = 0, $35_1 = 0, $160_1 = 0, $39_1 = 0, $40_1 = 0, $42_1 = 0, $43_1 = 0, $186_1 = 0;
  $2_1 = global$0 - 128 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 52 | 0) >> 2] = $2_1 + 31 | 0;
  HEAP32[($2_1 + 48 | 0) >> 2] = 65556;
  $187();
  HEAP32[($2_1 + 44 | 0) >> 2] = 20;
  HEAP32[($2_1 + 40 | 0) >> 2] = $189() | 0;
  HEAP32[($2_1 + 36 | 0) >> 2] = $190() | 0;
  HEAP32[($2_1 + 32 | 0) >> 2] = 21;
  $10_1 = $192() | 0;
  $11_1 = $193() | 0;
  $12_1 = $194() | 0;
  $13_1 = $73() | 0;
  HEAP32[($2_1 + 104 | 0) >> 2] = HEAP32[($2_1 + 44 | 0) >> 2] | 0;
  $15_1 = $74() | 0;
  $16_1 = HEAP32[($2_1 + 44 | 0) >> 2] | 0;
  HEAP32[($2_1 + 60 | 0) >> 2] = HEAP32[($2_1 + 40 | 0) >> 2] | 0;
  $18_1 = $75() | 0;
  $19_1 = HEAP32[($2_1 + 40 | 0) >> 2] | 0;
  HEAP32[($2_1 + 56 | 0) >> 2] = HEAP32[($2_1 + 36 | 0) >> 2] | 0;
  $21_1 = $75() | 0;
  $22_1 = HEAP32[($2_1 + 36 | 0) >> 2] | 0;
  $23_1 = HEAP32[($2_1 + 48 | 0) >> 2] | 0;
  HEAP32[($2_1 + 108 | 0) >> 2] = HEAP32[($2_1 + 32 | 0) >> 2] | 0;
  fimport$2($10_1 | 0, $11_1 | 0, $12_1 | 0, $13_1 | 0, $15_1 | 0, $16_1 | 0, $18_1 | 0, $19_1 | 0, $21_1 | 0, $22_1 | 0, $23_1 | 0, $76() | 0 | 0, HEAP32[($2_1 + 32 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 64 | 0) >> 2] = $2_1 + 31 | 0;
  HEAP32[($2_1 + 116 | 0) >> 2] = HEAP32[($2_1 + 64 | 0) >> 2] | 0;
  HEAP32[($2_1 + 112 | 0) >> 2] = 22;
  $31_1 = HEAP32[($2_1 + 116 | 0) >> 2] | 0;
  $196(HEAP32[($2_1 + 112 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 68 | 0) >> 2] = $31_1;
  HEAP32[($2_1 + 124 | 0) >> 2] = HEAP32[($2_1 + 68 | 0) >> 2] | 0;
  HEAP32[($2_1 + 120 | 0) >> 2] = 23;
  $35_1 = HEAP32[($2_1 + 124 | 0) >> 2] | 0;
  $198(HEAP32[($2_1 + 120 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 24 | 0) >> 2] = 0;
  HEAP32[($2_1 + 20 | 0) >> 2] = 24;
  i64toi32_i32$0 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
  $160_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 72 | 0) >> 2] = $160_1;
  HEAP32[($2_1 + 76 | 0) >> 2] = i64toi32_i32$1;
  $39_1 = HEAP32[($2_1 + 72 | 0) >> 2] | 0;
  $40_1 = HEAP32[($2_1 + 76 | 0) >> 2] | 0;
  HEAP32[($2_1 + 100 | 0) >> 2] = $35_1;
  HEAP32[($2_1 + 96 | 0) >> 2] = 65669;
  HEAP32[($2_1 + 92 | 0) >> 2] = $40_1;
  HEAP32[($2_1 + 88 | 0) >> 2] = $39_1;
  $42_1 = HEAP32[($2_1 + 96 | 0) >> 2] | 0;
  $43_1 = HEAP32[($2_1 + 88 | 0) >> 2] | 0;
  HEAP32[($2_1 + 84 | 0) >> 2] = HEAP32[($2_1 + 92 | 0) >> 2] | 0;
  HEAP32[($2_1 + 80 | 0) >> 2] = $43_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 80 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 84 | 0) >> 2] | 0;
  $186_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 8 | 0) >> 2] = $186_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $200($42_1 | 0, $2_1 + 8 | 0 | 0);
  $201(65882 | 0, 25 | 0);
  $202(65548 | 0, 26 | 0);
  global$0 = $2_1 + 128 | 0;
  return;
 }
 
 function $65() {
  
 }
 
 function $66($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $98(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $67() {
  return 0 | 0;
 }
 
 function $68() {
  return 0 | 0;
 }
 
 function $69($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   if (($4_1 | 0) == (0 | 0) & 1 | 0) {
    break label$1
   }
   $284($4_1 | 0, 8 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $70() {
  return $99() | 0 | 0;
 }
 
 function $71() {
  return $100() | 0 | 0;
 }
 
 function $72() {
  return $101() | 0 | 0;
 }
 
 function $73() {
  return 0 | 0;
 }
 
 function $74() {
  return 66836 | 0;
 }
 
 function $75() {
  return 66839 | 0;
 }
 
 function $76() {
  return 66841 | 0;
 }
 
 function $77() {
  var $1_1 = 0;
  $1_1 = $280(8 | 0) | 0;
  $32($1_1 | 0) | 0;
  return $1_1 | 0;
 }
 
 function $78($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 27;
  $5_1 = $70() | 0;
  $9_1 = $103($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $104($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$4($5_1 | 0, $9_1 | 0, $13_1 | 0, $74() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $79($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $11$hi = 0, $12$hi = 0, $11_1 = 0, $34_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $280(8 | 0) | 0;
  i64toi32_i32$2 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $11_1 = i64toi32_i32$0;
  $11$hi = i64toi32_i32$1;
  i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $12$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $11$hi;
  i64toi32_i32$0 = $12$hi;
  $34_1 = i64toi32_i32$1;
  i64toi32_i32$0 = $11$hi;
  i64toi32_i32$1 = $12$hi;
  $23($6_1 | 0, $11_1 | 0, i64toi32_i32$0 | 0, $34_1 | 0, i64toi32_i32$1 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $80($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 28;
  $5_1 = $70() | 0;
  $9_1 = $108($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $109($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$4($5_1 | 0, $9_1 | 0, $13_1 | 0, $110() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $81($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $114($5_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $82($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 29;
  $5_1 = $70() | 0;
  $9_1 = $116($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $117($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$4($5_1 | 0, $9_1 | 0, $13_1 | 0, $97() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $83($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 30;
  $8_1 = $70() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $144($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $145($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $146() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $147($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $84($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return (HEAP32[$4_1 >> 2] | 0 | 0) / (HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $85($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $4_1 = 0, $3_1 = 0, $12$hi = 0, $13$hi = 0, $14$hi = 0, $15$hi = 0, $16$hi = 0, $17$hi = 0, $12_1 = 0, $38_1 = 0, $49_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[$4_1 >> 2] | 0;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  $12_1 = i64toi32_i32$1;
  $12$hi = i64toi32_i32$0;
  i64toi32_i32$1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
  $13$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$0 = $13$hi;
  $38_1 = i64toi32_i32$1;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$1 = $13$hi;
  i64toi32_i32$3 = $38_1;
  i64toi32_i32$4 = $12_1 + i64toi32_i32$3 | 0;
  i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
  if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
   i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
  }
  $14$hi = i64toi32_i32$5;
  i64toi32_i32$5 = 0;
  $15$hi = i64toi32_i32$5;
  i64toi32_i32$5 = $14$hi;
  i64toi32_i32$5 = $15$hi;
  i64toi32_i32$5 = $14$hi;
  i64toi32_i32$0 = i64toi32_i32$4;
  i64toi32_i32$3 = 1;
  i64toi32_i32$1 = i64toi32_i32$4 - i64toi32_i32$3 | 0;
  i64toi32_i32$4 = (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) + $15$hi | 0;
  i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
  $16$hi = i64toi32_i32$4;
  i64toi32_i32$0 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$4 = i64toi32_i32$0 >> 31 | 0;
  $17$hi = i64toi32_i32$4;
  i64toi32_i32$4 = $16$hi;
  i64toi32_i32$4 = $17$hi;
  $49_1 = i64toi32_i32$0;
  i64toi32_i32$4 = $16$hi;
  i64toi32_i32$0 = $17$hi;
  i64toi32_i32$0 = __wasm_i64_sdiv(i64toi32_i32$1 | 0, i64toi32_i32$4 | 0, $49_1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
  return i64toi32_i32$0 | 0;
 }
 
 function $86($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return +(+(HEAP32[$4_1 >> 2] | 0 | 0) / +(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0));
 }
 
 function $87($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 31;
  $8_1 = $70() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $152($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $153($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $154() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $155($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $88($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 32;
  $8_1 = $70() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $159($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $160($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $97() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $161($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $89($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $5_1 = 0, $4_1 = 0, $12_1 = 0, $23_1 = 0, $16_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $32($0_1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!((HEAP32[$5_1 >> 2] | 0 | 0) >= (0 | 0) & 1 | 0)) {
     break label$2
    }
    $12_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
    break label$1;
   }
   $12_1 = 0 - (HEAP32[($5_1 + 4 | 0) >> 2] | 0) | 0;
  }
  $16_1 = $12_1;
  label$3 : {
   label$4 : {
    if (!((HEAP32[$5_1 >> 2] | 0 | 0) >= (0 | 0) & 1 | 0)) {
     break label$4
    }
    $23_1 = HEAP32[$5_1 >> 2] | 0;
    break label$3;
   }
   $23_1 = 0 - (HEAP32[$5_1 >> 2] | 0) | 0;
  }
  $33($0_1 | 0, $16_1 | 0, $23_1 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $90($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return (HEAP32[((HEAP32[($3_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) == (0 | 0) & 1 | 0 | 0;
 }
 
 function $91($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 33;
  $8_1 = $70() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $165($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $166($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $146() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $167($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $92($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 34;
  $8_1 = $70() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $171($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $172($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $173() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $174($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $93($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $6_1 = 0, $10_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 35;
  $6_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $10_1 = $95($4_1 + 19 | 0 | 0) | 0;
  $14_1 = $96($4_1 + 19 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($6_1 | 0, $10_1 | 0, $14_1 | 0, $97() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $94($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  FUNCTION_TABLE[$5_1 | 0]($4_1 + 12 | 0, $179(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0);
  $14_1 = $180($4_1 + 12 | 0 | 0) | 0;
  $355($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $14_1 | 0;
 }
 
 function $95($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $96($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $181() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $97() {
  return 66948 | 0;
 }
 
 function $98($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 66772 | 0;
 }
 
 function $99() {
  return 66772 | 0;
 }
 
 function $100() {
  return 66792 | 0;
 }
 
 function $101() {
  return 66820 | 0;
 }
 
 function $102($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $105(FUNCTION_TABLE[HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0]() | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $103($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 1 | 0;
 }
 
 function $104($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $106() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $105($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $106() {
  return 66844 | 0;
 }
 
 function $107($0_1, $1_1, $1$hi, $2_1, $2$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $6_1 = 0, $39_1 = 0, $45_1 = 0, $14_1 = 0;
  $5_1 = global$0 - 48 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 44 | 0) >> 2] = $0_1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $5_1;
  HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $2_1;
  HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[(i64toi32_i32$1 + 44 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] | 0;
  i64toi32_i32$1 = $111(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $39_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $5_1;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $39_1;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] | 0;
  i64toi32_i32$1 = $111(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $45_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $5_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $45_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $14_1 = $105(FUNCTION_TABLE[$6_1 | 0](i64toi32_i32$1 + 16 | 0, i64toi32_i32$1 + 8 | 0) | 0 | 0) | 0;
  global$0 = i64toi32_i32$1 + 48 | 0;
  return $14_1 | 0;
 }
 
 function $108($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 3 | 0;
 }
 
 function $109($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $112() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $110() {
  return 66860 | 0;
 }
 
 function $111($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$1 = $113(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  global$0 = $3_1 + 16 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $112() {
  return 66848 | 0;
 }
 
 function $113($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = global$0 - 16 | 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $114($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $125($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $115($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $118($4_1 + 12 | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0);
  $14_1 = $105(FUNCTION_TABLE[$5_1 | 0]($4_1 + 12 | 0) | 0 | 0) | 0;
  $355($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $14_1 | 0;
 }
 
 function $116($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $117($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $119() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $118($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $120($0_1 | 0, (HEAP32[($4_1 + 8 | 0) >> 2] | 0) + 4 | 0 | 0, HEAP32[(HEAP32[($4_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $119() {
  return 66868 | 0;
 }
 
 function $120($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0;
  $5_1 = global$0 - 16 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  $7($6_1 | 0, $5_1 + 3 | 0 | 0, $5_1 + 2 | 0 | 0) | 0;
  $359($6_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0);
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $121($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $122($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  $123($4_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $123($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $124($4_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $124($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $125($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, $5_1 = 0, i64toi32_i32$6 = 0, $10_1 = 0, $25_1 = 0, $30_1 = 0, $94$hi = 0, $95$hi = 0, $96$hi = 0, $42_1 = 0, $97$hi = 0, $98$hi = 0, $99$hi = 0, $102$hi = 0, $103$hi = 0, $104$hi = 0, $65_1 = 0, $105$hi = 0, $106$hi = 0, $107$hi = 0, $75_1 = 0, $109$hi = 0, $110$hi = 0, $36_1 = 0, $96_1 = 0, $217_1 = 0, $37_1 = 0, $104_1 = 0, $287_1 = 0, $38_1 = 0, $328_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$1 = $4_1;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $10_1 = 24;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = (((HEAPU8[($126(HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0 | 0, 0 | 0) | 0) >> 0] | 0) << $10_1 | 0) >> $10_1 | 0 | 0) == (45 | 0) & 1 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $49(HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0 | 0) | 0;
  label$1 : while (1) {
   $25_1 = 0;
   label$2 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (HEAP32[$4_1 >> 2] | 0 | 0) & 1 | 0)) {
     break label$2
    }
    $30_1 = 24;
    $25_1 = (((HEAPU8[($126(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $30_1 | 0) >> $30_1 | 0 | 0) != (47 | 0);
   }
   label$3 : {
    if (!($25_1 & 1 | 0)) {
     break label$3
    }
    i64toi32_i32$2 = $4_1;
    i64toi32_i32$0 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
    $94$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $95$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $94$hi;
    i64toi32_i32$1 = $95$hi;
    i64toi32_i32$1 = $94$hi;
    $36_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $95$hi;
    i64toi32_i32$0 = __wasm_i64_mul($36_1 | 0, i64toi32_i32$1 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    $96_1 = i64toi32_i32$0;
    $96$hi = i64toi32_i32$1;
    $42_1 = 24;
    i64toi32_i32$0 = ((HEAPU8[($126(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $42_1 | 0) >> $42_1 | 0;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    $97$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $96$hi;
    i64toi32_i32$1 = $97$hi;
    $217_1 = i64toi32_i32$0;
    i64toi32_i32$1 = $96$hi;
    i64toi32_i32$2 = $96_1;
    i64toi32_i32$0 = $97$hi;
    i64toi32_i32$3 = $217_1;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $98$hi = i64toi32_i32$5;
    i64toi32_i32$5 = 0;
    $99$hi = i64toi32_i32$5;
    i64toi32_i32$5 = $98$hi;
    i64toi32_i32$5 = $99$hi;
    i64toi32_i32$5 = $98$hi;
    i64toi32_i32$1 = i64toi32_i32$4;
    i64toi32_i32$2 = $99$hi;
    i64toi32_i32$3 = 48;
    i64toi32_i32$0 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
    i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
    i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$2 | 0;
    i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
    i64toi32_i32$1 = $4_1;
    HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$4;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = (HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0) + 1 | 0;
    continue label$1;
   }
   break label$1;
  };
  label$4 : {
   label$5 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) == (HEAP32[$4_1 >> 2] | 0 | 0) & 1 | 0)) {
     break label$5
    }
    i64toi32_i32$4 = 0;
    i64toi32_i32$1 = $4_1;
    HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 1;
    HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$4;
    break label$4;
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = (HEAP32[($4_1 + 4 | 0) >> 2] | 0) + 1 | 0;
   label$6 : {
    label$7 : while (1) {
     if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (HEAP32[$4_1 >> 2] | 0 | 0) & 1 | 0)) {
      break label$6
     }
     i64toi32_i32$5 = $4_1;
     i64toi32_i32$4 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
     $102$hi = i64toi32_i32$1;
     i64toi32_i32$1 = 0;
     $103$hi = i64toi32_i32$1;
     i64toi32_i32$1 = $102$hi;
     i64toi32_i32$1 = $103$hi;
     i64toi32_i32$1 = $102$hi;
     $37_1 = i64toi32_i32$4;
     i64toi32_i32$4 = $103$hi;
     i64toi32_i32$4 = __wasm_i64_mul($37_1 | 0, i64toi32_i32$1 | 0, 10 | 0, i64toi32_i32$4 | 0) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
     $104_1 = i64toi32_i32$4;
     $104$hi = i64toi32_i32$1;
     $65_1 = 24;
     i64toi32_i32$4 = ((HEAPU8[($126(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $65_1 | 0) >> $65_1 | 0;
     i64toi32_i32$1 = i64toi32_i32$4 >> 31 | 0;
     $105$hi = i64toi32_i32$1;
     i64toi32_i32$1 = $104$hi;
     i64toi32_i32$1 = $105$hi;
     $287_1 = i64toi32_i32$4;
     i64toi32_i32$1 = $104$hi;
     i64toi32_i32$5 = $104_1;
     i64toi32_i32$4 = $105$hi;
     i64toi32_i32$3 = $287_1;
     i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
     i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
     if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
      i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
     }
     $106$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 0;
     $107$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $106$hi;
     i64toi32_i32$0 = $107$hi;
     i64toi32_i32$0 = $106$hi;
     i64toi32_i32$1 = i64toi32_i32$2;
     i64toi32_i32$5 = $107$hi;
     i64toi32_i32$3 = 48;
     i64toi32_i32$4 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
     i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
     i64toi32_i32$2 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
     i64toi32_i32$2 = i64toi32_i32$0 - i64toi32_i32$2 | 0;
     i64toi32_i32$1 = $4_1;
     HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = i64toi32_i32$4;
     HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$2;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = (HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0) + 1 | 0;
     continue label$7;
    };
   }
  }
  $75_1 = 24;
  label$8 : {
   if (!((((HEAPU8[($126(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, 0 | 0) | 0) >> 0] | 0) << $75_1 | 0) >> $75_1 | 0 | 0) == (45 | 0) & 1 | 0)) {
    break label$8
   }
   i64toi32_i32$0 = $4_1;
   i64toi32_i32$2 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
   $109$hi = i64toi32_i32$1;
   i64toi32_i32$1 = -1;
   $110$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $109$hi;
   i64toi32_i32$1 = $110$hi;
   i64toi32_i32$1 = $109$hi;
   $38_1 = i64toi32_i32$2;
   i64toi32_i32$2 = $110$hi;
   i64toi32_i32$2 = __wasm_i64_mul($38_1 | 0, i64toi32_i32$1 | 0, -1 | 0, i64toi32_i32$2 | 0) | 0;
   i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
   $328_1 = i64toi32_i32$2;
   i64toi32_i32$2 = $4_1;
   HEAP32[($4_1 + 16 | 0) >> 2] = $328_1;
   HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$1;
  }
  $25($4_1 + 16 | 0 | 0, $4_1 + 8 | 0 | 0);
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$2 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = i64toi32_i32$1;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$2;
  global$0 = $4_1 + 32 | 0;
  return $5_1 | 0;
 }
 
 function $126($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $9_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = ($127(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) + (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0;
  $9_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $127($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $135($134(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $128($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $16_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $16_1 = (((HEAPU8[(($133(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 11 | 0) >> 0] | 0) >>> 7 | 0) & 255 | 0 | 0) != (0 & 255 | 0 | 0) & 1 | 0;
  global$0 = $3_1 + 16 | 0;
  return $16_1 | 0;
 }
 
 function $129($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[(($133(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 4 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $130($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $10_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $10_1 = ((HEAPU8[(($133(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 11 | 0) >> 0] | 0) & 127 | 0) & 255 | 0;
  global$0 = $3_1 + 16 | 0;
  return $10_1 | 0;
 }
 
 function $131($0_1, $0$hi, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $14$hi = 0, $16$hi = 0, $14_1 = 0, $46_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $4_1;
  HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $1$hi;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] | 0;
  i64toi32_i32$1 = $139($4_1 + 15 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $14_1 = i64toi32_i32$1;
  $14$hi = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
  i64toi32_i32$1 = $139($4_1 + 14 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $16$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$0 = $16$hi;
  $46_1 = i64toi32_i32$1;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$1 = $140($14_1 | 0, i64toi32_i32$0 | 0, $46_1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  global$0 = $4_1 + 32 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $132($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[($133(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $133($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $136(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $134($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($128($4_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $9_1 = $132($4_1 | 0) | 0;
    break label$1;
   }
   $9_1 = $137($4_1 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $135($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $136($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $137($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $138($133(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $138($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $139($0_1, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$5 = 0, i64toi32_i32$6 = 0, $13$hi = 0, $14$hi = 0, $24_1 = 0, $25_1 = 0, $26_1 = 0, $16$hi = 0, $17$hi = 0, $18$hi = 0, $21$hi = 0, $47_1 = 0, $16_1 = 0, $52_1 = 0, $61$hi = 0, $62_1 = 0, $68$hi = 0, $69_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $0_1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $4_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] | 0;
  $13$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $14$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $13$hi;
  i64toi32_i32$1 = $14$hi;
  i64toi32_i32$1 = $13$hi;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
   $24_1 = 1
  } else {
   if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
    if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
     $25_1 = 0
    } else {
     $25_1 = 1
    }
    $26_1 = $25_1;
   } else {
    $26_1 = 0
   }
   $24_1 = $26_1;
  }
  label$1 : {
   label$2 : {
    if (!($24_1 & 1 | 0)) {
     break label$2
    }
    i64toi32_i32$3 = $4_1;
    i64toi32_i32$2 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    $47_1 = i64toi32_i32$2;
    i64toi32_i32$2 = $4_1;
    HEAP32[($4_1 + 24 | 0) >> 2] = $47_1;
    HEAP32[($4_1 + 28 | 0) >> 2] = i64toi32_i32$1;
    break label$1;
   }
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
   i64toi32_i32$2 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
   $16_1 = i64toi32_i32$1;
   $16$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $141() | 0;
   i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
   $17$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $16$hi;
   i64toi32_i32$1 = $17$hi;
   $52_1 = i64toi32_i32$2;
   i64toi32_i32$1 = $16$hi;
   i64toi32_i32$3 = $16_1;
   i64toi32_i32$2 = $17$hi;
   i64toi32_i32$0 = $52_1;
   label$3 : {
    if (!(((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) | 0) & 1 | 0)) {
     break label$3
    }
    i64toi32_i32$0 = $4_1;
    i64toi32_i32$3 = HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
    $18$hi = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    $61$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $18$hi;
    $62_1 = i64toi32_i32$3;
    i64toi32_i32$1 = $61$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = $18$hi;
    i64toi32_i32$2 = $62_1;
    i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$2 | 0;
    i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0;
    i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
    i64toi32_i32$0 = $4_1;
    HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = i64toi32_i32$4;
    HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$5;
    break label$1;
   }
   i64toi32_i32$1 = $4_1;
   i64toi32_i32$5 = HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] | 0;
   $21$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   $68$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $21$hi;
   $69_1 = i64toi32_i32$5;
   i64toi32_i32$0 = $68$hi;
   i64toi32_i32$1 = 0;
   i64toi32_i32$5 = $21$hi;
   i64toi32_i32$2 = $69_1;
   i64toi32_i32$3 = i64toi32_i32$1 - i64toi32_i32$2 | 0;
   i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0;
   i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
   i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$4 | 0;
   i64toi32_i32$1 = $4_1;
   HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = i64toi32_i32$3;
   HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$4;
  }
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$4 = HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] | 0;
  global$0 = i64toi32_i32$0 + 32 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$4 | 0;
 }
 
 function $140($0_1, $0$hi, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $10$hi = 0, $11$hi = 0, $13_1 = 0, $13$hi = 0, $14$hi = 0, $15$hi = 0, $16$hi = 0, $17$hi = 0, $14_1 = 0, $15_1 = 0, $49_1 = 0, $52_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $4_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $1$hi;
  HEAP32[i64toi32_i32$1 >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $11$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$1 = $11$hi;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$2 = i64toi32_i32$0;
  i64toi32_i32$0 = $11$hi;
  i64toi32_i32$3 = 0;
  label$1 : {
   label$2 : {
    if (!(((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    i64toi32_i32$3 = $4_1;
    i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 8 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$3 + 12 | 0) >> 2] | 0;
    $13_1 = i64toi32_i32$2;
    $13$hi = i64toi32_i32$1;
    break label$1;
   }
   i64toi32_i32$3 = $4_1;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   $14_1 = i64toi32_i32$1;
   $14$hi = i64toi32_i32$2;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$3 + 12 | 0) >> 2] | 0;
   $15_1 = i64toi32_i32$2;
   $15$hi = i64toi32_i32$1;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   $16$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $15$hi;
   i64toi32_i32$2 = $16$hi;
   $49_1 = i64toi32_i32$1;
   i64toi32_i32$2 = $15$hi;
   i64toi32_i32$1 = $16$hi;
   i64toi32_i32$1 = __wasm_i64_urem($15_1 | 0, i64toi32_i32$2 | 0, $49_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
   $17$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $14$hi;
   i64toi32_i32$2 = $17$hi;
   $52_1 = i64toi32_i32$1;
   i64toi32_i32$2 = $14$hi;
   i64toi32_i32$1 = $17$hi;
   i64toi32_i32$1 = $140($14_1 | 0, i64toi32_i32$2 | 0, $52_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
   $13_1 = i64toi32_i32$1;
   $13$hi = i64toi32_i32$2;
  }
  i64toi32_i32$2 = $13$hi;
  global$0 = $4_1 + 16 | 0;
  i64toi32_i32$1 = $13_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$1 | 0;
 }
 
 function $141() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $142() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $142() {
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return 0 | 0;
 }
 
 function $143($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $24_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $148(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
  $9_1 = HEAP32[$7_1 >> 2] | 0;
  $12_1 = $6_1 + ($8_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($8_1 & 1 | 0)) {
     break label$2
    }
    $18_1 = HEAP32[((HEAP32[$12_1 >> 2] | 0) + $9_1 | 0) >> 2] | 0;
    break label$1;
   }
   $18_1 = $9_1;
  }
  HEAP32[($4_1 + 4 | 0) >> 2] = FUNCTION_TABLE[$18_1 | 0]($12_1) | 0;
  $24_1 = $149($4_1 + 4 | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $24_1 | 0;
 }
 
 function $144($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $145($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $150() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $146() {
  return 66960 | 0;
 }
 
 function $147($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $148($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $149($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $150() {
  return 66952 | 0;
 }
 
 function $151($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $26_1 = 0.0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $6_1 = $148(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
  $9_1 = HEAP32[$7_1 >> 2] | 0;
  $12_1 = $6_1 + ($8_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($8_1 & 1 | 0)) {
     break label$2
    }
    $18_1 = HEAP32[((HEAP32[$12_1 >> 2] | 0) + $9_1 | 0) >> 2] | 0;
    break label$1;
   }
   $18_1 = $9_1;
  }
  HEAPF64[($4_1 + 16 | 0) >> 3] = +FUNCTION_TABLE[$18_1 | 0]($12_1);
  $26_1 = +$156($4_1 + 16 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return +$26_1;
 }
 
 function $152($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $153($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $157() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $154() {
  return 66972 | 0;
 }
 
 function $155($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $156($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return +(+HEAPF64[(HEAP32[($3_1 + 8 | 0) >> 2] | 0) >> 3]);
 }
 
 function $157() {
  return 66964 | 0;
 }
 
 function $158($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $26_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $6_1 = $148(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
  $9_1 = HEAP32[$7_1 >> 2] | 0;
  $12_1 = $6_1 + ($8_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($8_1 & 1 | 0)) {
     break label$2
    }
    $18_1 = HEAP32[((HEAP32[$12_1 >> 2] | 0) + $9_1 | 0) >> 2] | 0;
    break label$1;
   }
   $18_1 = $9_1;
  }
  FUNCTION_TABLE[$18_1 | 0]($4_1 + 16 | 0, $12_1);
  $26_1 = $162($4_1 + 16 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $26_1 | 0;
 }
 
 function $159($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $160($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $163() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $161($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $162($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  i64toi32_i32$2 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $24_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[i64toi32_i32$0 >> 2] = $24_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $3_1 + 16 | 0;
  return i64toi32_i32$0 | 0;
 }
 
 function $163() {
  return 66976 | 0;
 }
 
 function $164($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $25_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $148(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
  $9_1 = HEAP32[$7_1 >> 2] | 0;
  $12_1 = $6_1 + ($8_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($8_1 & 1 | 0)) {
     break label$2
    }
    $18_1 = HEAP32[((HEAP32[$12_1 >> 2] | 0) + $9_1 | 0) >> 2] | 0;
    break label$1;
   }
   $18_1 = $9_1;
  }
  $25_1 = ($168((FUNCTION_TABLE[$18_1 | 0]($12_1) | 0) & 1 | 0 | 0) | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $25_1 | 0;
 }
 
 function $165($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $166($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $169() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $167($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $168($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP8[($3_1 + 14 | 0) >> 0] = $0_1;
  return (HEAPU8[($3_1 + 14 | 0) >> 0] | 0) & 1 | 0 | 0;
 }
 
 function $169() {
  return 66984 | 0;
 }
 
 function $170($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $6_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $14_1 = 0, $20_1 = 0, $8_1 = 0, $27_1 = 0;
  $6_1 = global$0 - 32 | 0;
  global$0 = $6_1;
  HEAP32[($6_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($6_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($6_1 + 20 | 0) >> 2] = $2_1;
  HEAP32[($6_1 + 16 | 0) >> 2] = $3_1;
  $8_1 = $175(HEAP32[($6_1 + 24 | 0) >> 2] | 0 | 0) | 0;
  $9_1 = HEAP32[($6_1 + 28 | 0) >> 2] | 0;
  $10_1 = HEAP32[($9_1 + 4 | 0) >> 2] | 0;
  $11_1 = HEAP32[$9_1 >> 2] | 0;
  $14_1 = $8_1 + ($10_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($10_1 & 1 | 0)) {
     break label$2
    }
    $20_1 = HEAP32[((HEAP32[$14_1 >> 2] | 0) + $11_1 | 0) >> 2] | 0;
    break label$1;
   }
   $20_1 = $11_1;
  }
  $27_1 = $177(FUNCTION_TABLE[$20_1 | 0]($14_1, $176(HEAP32[($6_1 + 20 | 0) >> 2] | 0 | 0) | 0, $176(HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) | 0) | 0 | 0) | 0;
  global$0 = $6_1 + 32 | 0;
  return $27_1 | 0;
 }
 
 function $171($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 4 | 0;
 }
 
 function $172($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $178() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $173() {
  return 67008 | 0;
 }
 
 function $174($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $175($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $176($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $177($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  i64toi32_i32$2 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $24_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[i64toi32_i32$0 >> 2] = $24_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $3_1 + 16 | 0;
  return i64toi32_i32$0 | 0;
 }
 
 function $178() {
  return 66992 | 0;
 }
 
 function $179($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $180($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $12_1 = 0, $23_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $273((($182(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0) << 0 | 0) + 4 | 0 | 0) | 0;
  $12_1 = $182(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[(HEAP32[($3_1 + 4 | 0) >> 2] | 0) >> 2] = $12_1;
  $264((HEAP32[($3_1 + 4 | 0) >> 2] | 0) + 4 | 0 | 0, $127(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0, ($182(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0) << 0 | 0 | 0) | 0;
  $23_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $23_1 | 0;
 }
 
 function $181() {
  return 67016 | 0;
 }
 
 function $182($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $49(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $183($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $22_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) >= (0 | 0) & 1 | 0)) {
     break label$2
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    break label$1;
   }
   label$3 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) == ($185() | 0 | 0) & 1 | 0)) {
     break label$3
    }
    HEAP32[($4_1 + 12 | 0) >> 2] = 0 - (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0;
    break label$1;
   }
   HEAP32[($4_1 + 12 | 0) >> 2] = 0 - (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0;
  }
  $22_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $22_1 | 0;
 }
 
 function $184($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if (HEAP32[($4_1 + 8 | 0) >> 2] | 0) {
     break label$2
    }
    $7_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    break label$1;
   }
   $7_1 = $184(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, ((HEAP32[($4_1 + 12 | 0) >> 2] | 0) >>> 0) % ((HEAP32[($4_1 + 8 | 0) >> 2] | 0) >>> 0) | 0 | 0) | 0;
  }
  global$0 = $4_1 + 16 | 0;
  return $7_1 | 0;
 }
 
 function $185() {
  return $186() | 0 | 0;
 }
 
 function $186() {
  return -2147483648 | 0;
 }
 
 function $187() {
  
 }
 
 function $188($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $209(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $189() {
  return 0 | 0;
 }
 
 function $190() {
  return 0 | 0;
 }
 
 function $191($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   if (($4_1 | 0) == (0 | 0) & 1 | 0) {
    break label$1
   }
   $284($4_1 | 0, 16 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $192() {
  return $210() | 0 | 0;
 }
 
 function $193() {
  return $211() | 0 | 0;
 }
 
 function $194() {
  return $212() | 0 | 0;
 }
 
 function $195() {
  var $1_1 = 0;
  $1_1 = $280(16 | 0) | 0;
  $213($1_1 | 0) | 0;
  return $1_1 | 0;
 }
 
 function $196($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 36;
  $5_1 = $192() | 0;
  $9_1 = $215($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $216($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$4($5_1 | 0, $9_1 | 0, $13_1 | 0, $74() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $197($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6_1 = 0, $35_1 = 0, $41_1 = 0, $45_1 = 0, $49_1 = 0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 40 | 0) >> 2] = $1_1;
  $6_1 = $280(16 | 0) | 0;
  i64toi32_i32$2 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $35_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $4_1;
  HEAP32[($4_1 + 32 | 0) >> 2] = $35_1;
  HEAP32[($4_1 + 36 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = HEAP32[($4_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $41_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $41_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$0 = HEAP32[($4_1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 36 | 0) >> 2] | 0;
  $45_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $4_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $45_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $49_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $49_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $30($6_1 | 0, $4_1 + 16 | 0 | 0, $4_1 + 8 | 0 | 0) | 0;
  global$0 = $4_1 + 48 | 0;
  return $6_1 | 0;
 }
 
 function $198($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 37;
  $5_1 = $192() | 0;
  $9_1 = $220($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $221($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$4($5_1 | 0, $9_1 | 0, $13_1 | 0, $222() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $199($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $32_1 = 0, $45_1 = 0, $49_1 = 0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $1_1;
  i64toi32_i32$2 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $32_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $4_1;
  HEAP32[($4_1 + 32 | 0) >> 2] = $32_1;
  HEAP32[($4_1 + 36 | 0) >> 2] = i64toi32_i32$1;
  $61($4_1 + 24 | 0 | 0, i64toi32_i32$2 + 8 | 0 | 0);
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$1 = HEAP32[($4_1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($4_1 + 36 | 0) >> 2] | 0;
  $45_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $4_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $45_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$0 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $49_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $49_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = i64toi32_i32$1;
  $30($0_1 | 0, $4_1 + 16 | 0 | 0, $4_1 + 8 | 0 | 0) | 0;
  global$0 = $4_1 + 48 | 0;
  return;
 }
 
 function $200($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0, $8_1 = 0, $9_1 = 0, $13_1 = 0, $17_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $5_1 = HEAP32[$1_1 >> 2] | 0;
  $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 38;
  $8_1 = $192() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $226($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $227($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$5($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $97() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $228($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $201($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $6_1 = 0, $10_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 39;
  $6_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $10_1 = $204($4_1 + 19 | 0 | 0) | 0;
  $14_1 = $205($4_1 + 19 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($6_1 | 0, $10_1 | 0, $14_1 | 0, $97() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $202($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $6_1 = 0, $10_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 40;
  $6_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $10_1 = $207($4_1 + 19 | 0 | 0) | 0;
  $14_1 = $208($4_1 + 19 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($6_1 | 0, $10_1 | 0, $14_1 | 0, $97() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $203($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  FUNCTION_TABLE[$5_1 | 0]($4_1 + 12 | 0, $232(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0);
  $14_1 = $180($4_1 + 12 | 0 | 0) | 0;
  $355($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $14_1 | 0;
 }
 
 function $204($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $205($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $233() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $206($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $19_1 = 0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 40 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 44 | 0) >> 2] | 0;
  $118($4_1 + 12 | 0 | 0, HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0);
  FUNCTION_TABLE[$5_1 | 0]($4_1 + 24 | 0, $4_1 + 12 | 0);
  $19_1 = $230($4_1 + 24 | 0 | 0) | 0;
  $355($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 48 | 0;
  return $19_1 | 0;
 }
 
 function $207($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $208($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $234() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $209($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 67036 | 0;
 }
 
 function $210() {
  return 67036 | 0;
 }
 
 function $211() {
  return 67056 | 0;
 }
 
 function $212() {
  return 67084 | 0;
 }
 
 function $213($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $24($4_1 | 0, 0 | 0) | 0;
  $24($4_1 + 8 | 0 | 0, 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $214($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $217(FUNCTION_TABLE[HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0]() | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $215($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 1 | 0;
 }
 
 function $216($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $218() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $217($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $218() {
  return 67100 | 0;
 }
 
 function $219($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0, $22_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
  $223($5_1 + 12 | 0 | 0, HEAP32[($5_1 + 24 | 0) >> 2] | 0 | 0);
  $223($5_1 + 4 | 0 | 0, HEAP32[($5_1 + 20 | 0) >> 2] | 0 | 0);
  $22_1 = $217(FUNCTION_TABLE[$6_1 | 0]($5_1 + 12 | 0, $5_1 + 4 | 0) | 0 | 0) | 0;
  global$0 = $5_1 + 32 | 0;
  return $22_1 | 0;
 }
 
 function $220($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 3 | 0;
 }
 
 function $221($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $224() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $222() {
  return 67116 | 0;
 }
 
 function $223($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  i64toi32_i32$2 = $179(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $24_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $0_1;
  HEAP32[i64toi32_i32$0 >> 2] = $24_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $224() {
  return 67104 | 0;
 }
 
 function $225($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $26_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $6_1 = $229(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
  $9_1 = HEAP32[$7_1 >> 2] | 0;
  $12_1 = $6_1 + ($8_1 >> 1 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!($8_1 & 1 | 0)) {
     break label$2
    }
    $18_1 = HEAP32[((HEAP32[$12_1 >> 2] | 0) + $9_1 | 0) >> 2] | 0;
    break label$1;
   }
   $18_1 = $9_1;
  }
  FUNCTION_TABLE[$18_1 | 0]($4_1 + 8 | 0, $12_1);
  $26_1 = $230($4_1 + 8 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $26_1 | 0;
 }
 
 function $226($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $227($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $231() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $228($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $280(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $229($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $230($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3_1 = 0, $5_1 = 0, $7_1 = 0, $28_1 = 0, $38_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $5_1 = $280(16 | 0) | 0;
  i64toi32_i32$2 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $28_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[i64toi32_i32$0 >> 2] = $28_1;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  $7_1 = 8;
  i64toi32_i32$2 = i64toi32_i32$2 + $7_1 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $38_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $5_1 + $7_1 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $38_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $231() {
  return 67124 | 0;
 }
 
 function $232($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $233() {
  return 67132 | 0;
 }
 
 function $234() {
  return 67140 | 0;
 }
 
 function $235($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $269(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $236($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $10_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  label$1 : {
   if (($128(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) & 1 | 0) {
    break label$1
   }
   $238(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0);
  }
  $10_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $10_1 | 0;
 }
 
 function $237($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $239(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $238($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return;
 }
 
 function $239($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $240($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  return $5_1 | 0;
 }
 
 function $241($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[($237(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $242($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $243($237(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $243($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $244($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 12 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $245($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $248(65827 | 0);
  wasm2js_trap();
 }
 
 function $246($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $250($5_1 | 0, $249($47($5_1 | 0) | 0 | 0) | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $247($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = (HEAP32[$5_1 >> 2] | 0) + (HEAP32[($4_1 + 8 | 0) >> 2] | 0) | 0;
  return $5_1 | 0;
 }
 
 function $248($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $443(8 | 0) | 0;
  $251($5_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  fimport$0($5_1 | 0, 69136 | 0, 41 | 0);
  wasm2js_trap();
 }
 
 function $249($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $250($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $5_1 = 0, $6_1 = 0, $19_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = $2_1;
  $6_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
  HEAP32[($5_1 + 16 | 0) >> 2] = $49($6_1 | 0) | 0;
  label$1 : {
   if (!((HEAP32[($5_1 + 20 | 0) >> 2] | 0) >>> 0 > (HEAP32[($5_1 + 16 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
    break label$1
   }
   $252($6_1 | 0, (HEAP32[($5_1 + 20 | 0) >> 2] | 0) - (HEAP32[($5_1 + 16 | 0) >> 2] | 0) | 0 | 0);
  }
  $253($6_1 | 0, HEAP32[($5_1 + 20 | 0) >> 2] | 0 | 0);
  $19_1 = (HEAP32[($5_1 + 24 | 0) >> 2] | 0) + (HEAP32[($5_1 + 20 | 0) >> 2] | 0) | 0;
  HEAP8[($5_1 + 15 | 0) >> 0] = 0;
  $254($19_1 | 0, $5_1 + 15 | 0 | 0);
  label$2 : {
   if (!((HEAP32[($5_1 + 16 | 0) >> 2] | 0) >>> 0 > (HEAP32[($5_1 + 20 | 0) >> 2] | 0) >>> 0 & 1 | 0)) {
    break label$2
   }
   $255($6_1 | 0, HEAP32[($5_1 + 16 | 0) >> 2] | 0 | 0);
  }
  global$0 = $5_1 + 32 | 0;
  return $6_1 | 0;
 }
 
 function $251($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $296($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[$5_1 >> 2] = 69096 + 8 | 0;
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $252($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  return;
 }
 
 function $253($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($128($5_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $256($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0);
    break label$1;
   }
   $257($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0);
  }
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $254($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  HEAP8[(HEAP32[($4_1 + 12 | 0) >> 2] | 0) >> 0] = HEAPU8[(HEAP32[($4_1 + 8 | 0) >> 2] | 0) >> 0] | 0;
  return;
 }
 
 function $255($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  return;
 }
 
 function $256($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $6_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  HEAP32[(($237(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 4 | 0) >> 2] = $6_1;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $257($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0, $9_1 = 0, $14_1 = 0, $6_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $6_1 = HEAPU8[($4_1 + 8 | 0) >> 0] | 0;
  $7_1 = $237($5_1 | 0) | 0;
  $9_1 = 127;
  HEAP8[($7_1 + 11 | 0) >> 0] = (HEAPU8[($7_1 + 11 | 0) >> 0] | 0) & 128 | 0 | ($6_1 & $9_1 | 0) | 0;
  $14_1 = $237($5_1 | 0) | 0;
  HEAP8[($14_1 + 11 | 0) >> 0] = (HEAPU8[($14_1 + 11 | 0) >> 0] | 0) & $9_1 | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $258($0_1) {
  $0_1 = $0_1 | 0;
  var $4_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = 0;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  return $4_1 | 0;
 }
 
 function $259() {
  $11();
  $62();
  return;
 }
 
 function $260($0_1) {
  $0_1 = $0_1 | 0;
  return $268(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $261($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[(0 + 69380 | 0) >> 2] | 0;
  HEAP32[(0 + 69380 | 0) >> 2] = $0_1;
 }
 
 function $262() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  fimport$6(68636 | 0, 65935 | 0);
  fimport$7(68660 | 0, 65775 | 0, 1 | 0, 0 | 0);
  fimport$8(68672 | 0, 65664 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$8(68696 | 0, 65657 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$8(68684 | 0, 65655 | 0, 1 | 0, 0 | 0, 255 | 0);
  fimport$8(68708 | 0, 65573 | 0, 2 | 0, -32768 | 0, 32767 | 0);
  fimport$8(68720 | 0, 65564 | 0, 2 | 0, 0 | 0, 65535 | 0);
  fimport$8(68732 | 0, 65588 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$8(68744 | 0, 65579 | 0, 4 | 0, 0 | 0, -1 | 0);
  fimport$8(68756 | 0, 65809 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$8(68768 | 0, 65800 | 0, 4 | 0, 0 | 0, -1 | 0);
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$1 = 2147483647;
  $504(68780 | 0, 65599 | 0, 8 | 0, 0 | 0, i64toi32_i32$0 | 0, -1 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = -1;
  $504(68792 | 0, 65598 | 0, 8 | 0, 0 | 0, i64toi32_i32$1 | 0, -1 | 0, i64toi32_i32$0 | 0);
  fimport$9(68804 | 0, 65592 | 0, 4 | 0);
  fimport$9(68816 | 0, 65928 | 0, 8 | 0);
  fimport$10(66940 | 0, 65840 | 0);
  fimport$10(67212 | 0, 66444 | 0);
  fimport$11(67284 | 0, 4 | 0, 65814 | 0);
  fimport$11(67360 | 0, 2 | 0, 65852 | 0);
  fimport$11(67436 | 0, 4 | 0, 65867 | 0);
  fimport$12(67464 | 0);
  fimport$13(67504 | 0, 0 | 0, 66375 | 0);
  fimport$13(67544 | 0, 0 | 0, 66477 | 0);
  fimport$13(67584 | 0, 1 | 0, 66405 | 0);
  fimport$13(67624 | 0, 2 | 0, 65940 | 0);
  fimport$13(67664 | 0, 3 | 0, 65971 | 0);
  fimport$13(67704 | 0, 4 | 0, 66011 | 0);
  fimport$13(67744 | 0, 5 | 0, 66040 | 0);
  fimport$13(67784 | 0, 4 | 0, 66514 | 0);
  fimport$13(67824 | 0, 5 | 0, 66544 | 0);
  fimport$13(67544 | 0, 0 | 0, 66142 | 0);
  fimport$13(67584 | 0, 1 | 0, 66109 | 0);
  fimport$13(67624 | 0, 2 | 0, 66208 | 0);
  fimport$13(67664 | 0, 3 | 0, 66174 | 0);
  fimport$13(67704 | 0, 4 | 0, 66342 | 0);
  fimport$13(67744 | 0, 5 | 0, 66308 | 0);
  fimport$13(67864 | 0, 8 | 0, 66275 | 0);
  fimport$13(67904 | 0, 9 | 0, 66241 | 0);
  fimport$13(67944 | 0, 6 | 0, 66078 | 0);
  fimport$13(67984 | 0, 7 | 0, 66583 | 0);
 }
 
 function $263() {
  HEAP32[(0 + 69384 | 0) >> 2] = 42;
  HEAP32[(0 + 69388 | 0) >> 2] = 0;
  $262();
  HEAP32[(0 + 69388 | 0) >> 2] = HEAP32[(0 + 69380 | 0) >> 2] | 0;
  HEAP32[(0 + 69380 | 0) >> 2] = 69384;
 }
 
 function $264($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0;
  label$1 : {
   if ($2_1 >>> 0 < 512 >>> 0) {
    break label$1
   }
   fimport$14($0_1 | 0, $1_1 | 0, $2_1 | 0);
   return $0_1 | 0;
  }
  $3_1 = $0_1 + $2_1 | 0;
  label$2 : {
   label$3 : {
    if (($1_1 ^ $0_1 | 0) & 3 | 0) {
     break label$3
    }
    label$4 : {
     label$5 : {
      if ($0_1 & 3 | 0) {
       break label$5
      }
      $2_1 = $0_1;
      break label$4;
     }
     label$6 : {
      if ($2_1) {
       break label$6
      }
      $2_1 = $0_1;
      break label$4;
     }
     $2_1 = $0_1;
     label$7 : while (1) {
      HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
      $1_1 = $1_1 + 1 | 0;
      $2_1 = $2_1 + 1 | 0;
      if (!($2_1 & 3 | 0)) {
       break label$4
      }
      if ($2_1 >>> 0 < $3_1 >>> 0) {
       continue label$7
      }
      break label$7;
     };
    }
    label$8 : {
     $4_1 = $3_1 & -4 | 0;
     if ($4_1 >>> 0 < 64 >>> 0) {
      break label$8
     }
     $5_1 = $4_1 + -64 | 0;
     if ($2_1 >>> 0 > $5_1 >>> 0) {
      break label$8
     }
     label$9 : while (1) {
      HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      HEAP32[($2_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($2_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
      HEAP32[($2_1 + 12 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      HEAP32[($2_1 + 16 | 0) >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
      HEAP32[($2_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
      HEAP32[($2_1 + 24 | 0) >> 2] = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      HEAP32[($2_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      HEAP32[($2_1 + 32 | 0) >> 2] = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
      HEAP32[($2_1 + 36 | 0) >> 2] = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
      HEAP32[($2_1 + 40 | 0) >> 2] = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
      HEAP32[($2_1 + 44 | 0) >> 2] = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
      HEAP32[($2_1 + 48 | 0) >> 2] = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
      HEAP32[($2_1 + 52 | 0) >> 2] = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
      HEAP32[($2_1 + 56 | 0) >> 2] = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
      HEAP32[($2_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 60 | 0) >> 2] | 0;
      $1_1 = $1_1 + 64 | 0;
      $2_1 = $2_1 + 64 | 0;
      if ($2_1 >>> 0 <= $5_1 >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    if ($2_1 >>> 0 >= $4_1 >>> 0) {
     break label$2
    }
    label$10 : while (1) {
     HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $2_1 = $2_1 + 4 | 0;
     if ($2_1 >>> 0 < $4_1 >>> 0) {
      continue label$10
     }
     break label$2;
    };
   }
   label$11 : {
    if ($3_1 >>> 0 >= 4 >>> 0) {
     break label$11
    }
    $2_1 = $0_1;
    break label$2;
   }
   label$12 : {
    $4_1 = $3_1 + -4 | 0;
    if ($4_1 >>> 0 >= $0_1 >>> 0) {
     break label$12
    }
    $2_1 = $0_1;
    break label$2;
   }
   $2_1 = $0_1;
   label$13 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($2_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($2_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($2_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    $1_1 = $1_1 + 4 | 0;
    $2_1 = $2_1 + 4 | 0;
    if ($2_1 >>> 0 <= $4_1 >>> 0) {
     continue label$13
    }
    break label$13;
   };
  }
  label$14 : {
   if ($2_1 >>> 0 >= $3_1 >>> 0) {
    break label$14
   }
   label$15 : while (1) {
    HEAP8[$2_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($2_1 | 0) != ($3_1 | 0)) {
     continue label$15
    }
    break label$15;
   };
  }
  return $0_1 | 0;
 }
 
 function $265($0_1) {
  $0_1 = $0_1 | 0;
  return ($0_1 + -48 | 0) >>> 0 < 10 >>> 0 | 0;
 }
 
 function $266($0_1) {
  $0_1 = $0_1 | 0;
  return ($0_1 | 0) == (32 | 0) | ($0_1 + -9 | 0) >>> 0 < 5 >>> 0 | 0 | 0;
 }
 
 function $267($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $5_1 = 0, $6$hi = 0;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $3_1 = $0_1 + $2_1 | 0;
   HEAP8[($3_1 + -1 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 3 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 2 | 0) >> 0] = $1_1;
   HEAP8[($0_1 + 1 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -2 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 7 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -4 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   $4_1 = (0 - $0_1 | 0) & 3 | 0;
   $3_1 = $0_1 + $4_1 | 0;
   $1_1 = Math_imul($1_1 & 255 | 0, 16843009);
   HEAP32[$3_1 >> 2] = $1_1;
   $4_1 = ($2_1 - $4_1 | 0) & -4 | 0;
   $2_1 = $3_1 + $4_1 | 0;
   HEAP32[($2_1 + -4 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -8 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -12 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 25 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -16 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -20 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -24 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -28 | 0) >> 2] = $1_1;
   $5_1 = $3_1 & 4 | 0 | 24 | 0;
   $2_1 = $4_1 - $5_1 | 0;
   if ($2_1 >>> 0 < 32 >>> 0) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 1;
   i64toi32_i32$1 = __wasm_i64_mul($1_1 | 0, i64toi32_i32$0 | 0, 1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $6_1 = i64toi32_i32$1;
   $6$hi = i64toi32_i32$0;
   $1_1 = $3_1 + $5_1 | 0;
   label$2 : while (1) {
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 24 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 16 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 20 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $6_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1;
    HEAP32[$1_1 >> 2] = $6_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $1_1 = $1_1 + 32 | 0;
    $2_1 = $2_1 + -32 | 0;
    if ($2_1 >>> 0 > 31 >>> 0) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0_1 | 0;
 }
 
 function $268($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  label$1 : {
   $1_1 = ($269($0_1 | 0) | 0) + 1 | 0;
   $2_1 = $273($1_1 | 0) | 0;
   if ($2_1) {
    break label$1
   }
   return 0 | 0;
  }
  return $264($2_1 | 0, $0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $269($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0;
  $1_1 = $0_1;
  label$1 : {
   label$2 : {
    if (!($1_1 & 3 | 0)) {
     break label$2
    }
    label$3 : {
     if (HEAPU8[$1_1 >> 0] | 0) {
      break label$3
     }
     return $1_1 - $1_1 | 0 | 0;
    }
    $1_1 = $0_1;
    label$4 : while (1) {
     $1_1 = $1_1 + 1 | 0;
     if (!($1_1 & 3 | 0)) {
      break label$2
     }
     if (HEAPU8[$1_1 >> 0] | 0) {
      continue label$4
     }
     break label$1;
    };
   }
   label$5 : while (1) {
    $2_1 = $1_1;
    $1_1 = $1_1 + 4 | 0;
    $3_1 = HEAP32[$2_1 >> 2] | 0;
    if (((16843008 - $3_1 | 0 | $3_1 | 0) & -2139062144 | 0 | 0) == (-2139062144 | 0)) {
     continue label$5
    }
    break label$5;
   };
   label$6 : while (1) {
    $1_1 = $2_1;
    $2_1 = $1_1 + 1 | 0;
    if (HEAPU8[$1_1 >> 0] | 0) {
     continue label$6
    }
    break label$6;
   };
  }
  return $1_1 - $0_1 | 0 | 0;
 }
 
 function $270() {
  return __wasm_memory_size() << 16 | 0 | 0;
 }
 
 function $271() {
  return 69392 | 0;
 }
 
 function $272($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $1_1 = HEAP32[(0 + 69208 | 0) >> 2] | 0;
  $2_1 = ($0_1 + 7 | 0) & -8 | 0;
  $0_1 = $1_1 + $2_1 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2_1) {
      break label$3
     }
     if ($0_1 >>> 0 <= $1_1 >>> 0) {
      break label$2
     }
    }
    if ($0_1 >>> 0 <= ($270() | 0) >>> 0) {
     break label$1
    }
    if (fimport$15($0_1 | 0) | 0) {
     break label$1
    }
   }
   HEAP32[($271() | 0) >> 2] = 48;
   return -1 | 0;
  }
  HEAP32[(0 + 69208 | 0) >> 2] = $0_1;
  return $1_1 | 0;
 }
 
 function $273($0_1) {
  $0_1 = $0_1 | 0;
  var $5_1 = 0, $4_1 = 0, $7_1 = 0, $8_1 = 0, $3_1 = 0, $2_1 = 0, $6_1 = 0, $10_1 = 0, $11_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $1_1 = 0, $9_1 = 0, $79_1 = 0, $183_1 = 0, $777 = 0, $779 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             if ($0_1 >>> 0 > 244 >>> 0) {
              break label$11
             }
             label$12 : {
              $2_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
              $3_1 = $0_1 >>> 0 < 11 >>> 0 ? 16 : ($0_1 + 11 | 0) & 504 | 0;
              $4_1 = $3_1 >>> 3 | 0;
              $0_1 = $2_1 >>> $4_1 | 0;
              if (!($0_1 & 3 | 0)) {
               break label$12
              }
              label$13 : {
               label$14 : {
                $3_1 = (($0_1 ^ -1 | 0) & 1 | 0) + $4_1 | 0;
                $4_1 = $3_1 << 3 | 0;
                $0_1 = $4_1 + 69436 | 0;
                $4_1 = HEAP32[($4_1 + 69444 | 0) >> 2] | 0;
                $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                 break label$14
                }
                HEAP32[(0 + 69396 | 0) >> 2] = $2_1 & (__wasm_rotl_i32(-2 | 0, $3_1 | 0) | 0) | 0;
                break label$13;
               }
               HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
               HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
              }
              $0_1 = $4_1 + 8 | 0;
              $3_1 = $3_1 << 3 | 0;
              HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              $4_1 = $4_1 + $3_1 | 0;
              HEAP32[($4_1 + 4 | 0) >> 2] = HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 1 | 0;
              break label$1;
             }
             $6_1 = HEAP32[(0 + 69404 | 0) >> 2] | 0;
             if ($3_1 >>> 0 <= $6_1 >>> 0) {
              break label$10
             }
             label$15 : {
              if (!$0_1) {
               break label$15
              }
              label$16 : {
               label$17 : {
                $79_1 = $0_1 << $4_1 | 0;
                $0_1 = 2 << $4_1 | 0;
                $4_1 = __wasm_ctz_i32($79_1 & ($0_1 | (0 - $0_1 | 0) | 0) | 0 | 0) | 0;
                $0_1 = $4_1 << 3 | 0;
                $5_1 = $0_1 + 69436 | 0;
                $0_1 = HEAP32[($0_1 + 69444 | 0) >> 2] | 0;
                $7_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if (($5_1 | 0) != ($7_1 | 0)) {
                 break label$17
                }
                $2_1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $4_1 | 0) | 0) | 0;
                HEAP32[(0 + 69396 | 0) >> 2] = $2_1;
                break label$16;
               }
               HEAP32[($7_1 + 12 | 0) >> 2] = $5_1;
               HEAP32[($5_1 + 8 | 0) >> 2] = $7_1;
              }
              HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              $7_1 = $0_1 + $3_1 | 0;
              $4_1 = $4_1 << 3 | 0;
              $3_1 = $4_1 - $3_1 | 0;
              HEAP32[($7_1 + 4 | 0) >> 2] = $3_1 | 1 | 0;
              HEAP32[($0_1 + $4_1 | 0) >> 2] = $3_1;
              label$18 : {
               if (!$6_1) {
                break label$18
               }
               $5_1 = ($6_1 & -8 | 0) + 69436 | 0;
               $4_1 = HEAP32[(0 + 69416 | 0) >> 2] | 0;
               label$19 : {
                label$20 : {
                 $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
                 if ($2_1 & $8_1 | 0) {
                  break label$20
                 }
                 HEAP32[(0 + 69396 | 0) >> 2] = $2_1 | $8_1 | 0;
                 $8_1 = $5_1;
                 break label$19;
                }
                $8_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
               }
               HEAP32[($5_1 + 8 | 0) >> 2] = $4_1;
               HEAP32[($8_1 + 12 | 0) >> 2] = $4_1;
               HEAP32[($4_1 + 12 | 0) >> 2] = $5_1;
               HEAP32[($4_1 + 8 | 0) >> 2] = $8_1;
              }
              $0_1 = $0_1 + 8 | 0;
              HEAP32[(0 + 69416 | 0) >> 2] = $7_1;
              HEAP32[(0 + 69404 | 0) >> 2] = $3_1;
              break label$1;
             }
             $9_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
             if (!$9_1) {
              break label$10
             }
             $7_1 = HEAP32[(((__wasm_ctz_i32($9_1 | 0) | 0) << 2 | 0) + 69700 | 0) >> 2] | 0;
             $4_1 = ((HEAP32[($7_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
             $5_1 = $7_1;
             label$21 : {
              label$22 : while (1) {
               label$23 : {
                $0_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
                if ($0_1) {
                 break label$23
                }
                $0_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
                if (!$0_1) {
                 break label$21
                }
               }
               $5_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
               $183_1 = $5_1;
               $5_1 = $5_1 >>> 0 < $4_1 >>> 0;
               $4_1 = $5_1 ? $183_1 : $4_1;
               $7_1 = $5_1 ? $0_1 : $7_1;
               $5_1 = $0_1;
               continue label$22;
              };
             }
             $10_1 = HEAP32[($7_1 + 24 | 0) >> 2] | 0;
             label$24 : {
              $0_1 = HEAP32[($7_1 + 12 | 0) >> 2] | 0;
              if (($0_1 | 0) == ($7_1 | 0)) {
               break label$24
              }
              $5_1 = HEAP32[($7_1 + 8 | 0) >> 2] | 0;
              HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
              HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
              break label$2;
             }
             label$25 : {
              label$26 : {
               $5_1 = HEAP32[($7_1 + 20 | 0) >> 2] | 0;
               if (!$5_1) {
                break label$26
               }
               $8_1 = $7_1 + 20 | 0;
               break label$25;
              }
              $5_1 = HEAP32[($7_1 + 16 | 0) >> 2] | 0;
              if (!$5_1) {
               break label$9
              }
              $8_1 = $7_1 + 16 | 0;
             }
             label$27 : while (1) {
              $11_1 = $8_1;
              $0_1 = $5_1;
              $8_1 = $0_1 + 20 | 0;
              $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
              if ($5_1) {
               continue label$27
              }
              $8_1 = $0_1 + 16 | 0;
              $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
              if ($5_1) {
               continue label$27
              }
              break label$27;
             };
             HEAP32[$11_1 >> 2] = 0;
             break label$2;
            }
            $3_1 = -1;
            if ($0_1 >>> 0 > -65 >>> 0) {
             break label$10
            }
            $0_1 = $0_1 + 11 | 0;
            $3_1 = $0_1 & -8 | 0;
            $10_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
            if (!$10_1) {
             break label$10
            }
            $6_1 = 0;
            label$28 : {
             if ($3_1 >>> 0 < 256 >>> 0) {
              break label$28
             }
             $6_1 = 31;
             if ($3_1 >>> 0 > 16777215 >>> 0) {
              break label$28
             }
             $0_1 = Math_clz32($0_1 >>> 8 | 0);
             $6_1 = ((($3_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
            }
            $4_1 = 0 - $3_1 | 0;
            label$29 : {
             label$30 : {
              label$31 : {
               label$32 : {
                $5_1 = HEAP32[(($6_1 << 2 | 0) + 69700 | 0) >> 2] | 0;
                if ($5_1) {
                 break label$32
                }
                $0_1 = 0;
                $8_1 = 0;
                break label$31;
               }
               $0_1 = 0;
               $7_1 = $3_1 << (($6_1 | 0) == (31 | 0) ? 0 : 25 - ($6_1 >>> 1 | 0) | 0) | 0;
               $8_1 = 0;
               label$33 : while (1) {
                label$34 : {
                 $2_1 = ((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
                 if ($2_1 >>> 0 >= $4_1 >>> 0) {
                  break label$34
                 }
                 $4_1 = $2_1;
                 $8_1 = $5_1;
                 if ($4_1) {
                  break label$34
                 }
                 $4_1 = 0;
                 $8_1 = $5_1;
                 $0_1 = $5_1;
                 break label$30;
                }
                $2_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
                $11_1 = HEAP32[(($5_1 + (($7_1 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
                $0_1 = $2_1 ? (($2_1 | 0) == ($11_1 | 0) ? $0_1 : $2_1) : $0_1;
                $7_1 = $7_1 << 1 | 0;
                $5_1 = $11_1;
                if ($5_1) {
                 continue label$33
                }
                break label$33;
               };
              }
              label$35 : {
               if ($0_1 | $8_1 | 0) {
                break label$35
               }
               $8_1 = 0;
               $0_1 = 2 << $6_1 | 0;
               $0_1 = ($0_1 | (0 - $0_1 | 0) | 0) & $10_1 | 0;
               if (!$0_1) {
                break label$10
               }
               $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 69700 | 0) >> 2] | 0;
              }
              if (!$0_1) {
               break label$29
              }
             }
             label$36 : while (1) {
              $2_1 = ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3_1 | 0;
              $7_1 = $2_1 >>> 0 < $4_1 >>> 0;
              label$37 : {
               $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
               if ($5_1) {
                break label$37
               }
               $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
              }
              $4_1 = $7_1 ? $2_1 : $4_1;
              $8_1 = $7_1 ? $0_1 : $8_1;
              $0_1 = $5_1;
              if ($0_1) {
               continue label$36
              }
              break label$36;
             };
            }
            if (!$8_1) {
             break label$10
            }
            if ($4_1 >>> 0 >= ((HEAP32[(0 + 69404 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
             break label$10
            }
            $11_1 = HEAP32[($8_1 + 24 | 0) >> 2] | 0;
            label$38 : {
             $0_1 = HEAP32[($8_1 + 12 | 0) >> 2] | 0;
             if (($0_1 | 0) == ($8_1 | 0)) {
              break label$38
             }
             $5_1 = HEAP32[($8_1 + 8 | 0) >> 2] | 0;
             HEAP32[($5_1 + 12 | 0) >> 2] = $0_1;
             HEAP32[($0_1 + 8 | 0) >> 2] = $5_1;
             break label$3;
            }
            label$39 : {
             label$40 : {
              $5_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
              if (!$5_1) {
               break label$40
              }
              $7_1 = $8_1 + 20 | 0;
              break label$39;
             }
             $5_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
             if (!$5_1) {
              break label$8
             }
             $7_1 = $8_1 + 16 | 0;
            }
            label$41 : while (1) {
             $2_1 = $7_1;
             $0_1 = $5_1;
             $7_1 = $0_1 + 20 | 0;
             $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
             if ($5_1) {
              continue label$41
             }
             $7_1 = $0_1 + 16 | 0;
             $5_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
             if ($5_1) {
              continue label$41
             }
             break label$41;
            };
            HEAP32[$2_1 >> 2] = 0;
            break label$3;
           }
           label$42 : {
            $0_1 = HEAP32[(0 + 69404 | 0) >> 2] | 0;
            if ($0_1 >>> 0 < $3_1 >>> 0) {
             break label$42
            }
            $4_1 = HEAP32[(0 + 69416 | 0) >> 2] | 0;
            label$43 : {
             label$44 : {
              $5_1 = $0_1 - $3_1 | 0;
              if ($5_1 >>> 0 < 16 >>> 0) {
               break label$44
              }
              $7_1 = $4_1 + $3_1 | 0;
              HEAP32[($7_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
              HEAP32[($4_1 + $0_1 | 0) >> 2] = $5_1;
              HEAP32[($4_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
              break label$43;
             }
             HEAP32[($4_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
             $0_1 = $4_1 + $0_1 | 0;
             HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
             $7_1 = 0;
             $5_1 = 0;
            }
            HEAP32[(0 + 69404 | 0) >> 2] = $5_1;
            HEAP32[(0 + 69416 | 0) >> 2] = $7_1;
            $0_1 = $4_1 + 8 | 0;
            break label$1;
           }
           label$45 : {
            $7_1 = HEAP32[(0 + 69408 | 0) >> 2] | 0;
            if ($7_1 >>> 0 <= $3_1 >>> 0) {
             break label$45
            }
            $4_1 = $7_1 - $3_1 | 0;
            HEAP32[(0 + 69408 | 0) >> 2] = $4_1;
            $0_1 = HEAP32[(0 + 69420 | 0) >> 2] | 0;
            $5_1 = $0_1 + $3_1 | 0;
            HEAP32[(0 + 69420 | 0) >> 2] = $5_1;
            HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
            $0_1 = $0_1 + 8 | 0;
            break label$1;
           }
           label$46 : {
            label$47 : {
             if (!(HEAP32[(0 + 69868 | 0) >> 2] | 0)) {
              break label$47
             }
             $4_1 = HEAP32[(0 + 69876 | 0) >> 2] | 0;
             break label$46;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = -1;
            HEAP32[(i64toi32_i32$1 + 69880 | 0) >> 2] = -1;
            HEAP32[(i64toi32_i32$1 + 69884 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 4096;
            HEAP32[(i64toi32_i32$1 + 69872 | 0) >> 2] = 4096;
            HEAP32[(i64toi32_i32$1 + 69876 | 0) >> 2] = i64toi32_i32$0;
            HEAP32[(0 + 69868 | 0) >> 2] = (($1_1 + 12 | 0) & -16 | 0) ^ 1431655768 | 0;
            HEAP32[(0 + 69888 | 0) >> 2] = 0;
            HEAP32[(0 + 69840 | 0) >> 2] = 0;
            $4_1 = 4096;
           }
           $0_1 = 0;
           $6_1 = $3_1 + 47 | 0;
           $2_1 = $4_1 + $6_1 | 0;
           $11_1 = 0 - $4_1 | 0;
           $8_1 = $2_1 & $11_1 | 0;
           if ($8_1 >>> 0 <= $3_1 >>> 0) {
            break label$1
           }
           $0_1 = 0;
           label$48 : {
            $4_1 = HEAP32[(0 + 69836 | 0) >> 2] | 0;
            if (!$4_1) {
             break label$48
            }
            $5_1 = HEAP32[(0 + 69828 | 0) >> 2] | 0;
            $10_1 = $5_1 + $8_1 | 0;
            if ($10_1 >>> 0 <= $5_1 >>> 0) {
             break label$1
            }
            if ($10_1 >>> 0 > $4_1 >>> 0) {
             break label$1
            }
           }
           label$49 : {
            label$50 : {
             if ((HEAPU8[(0 + 69840 | 0) >> 0] | 0) & 4 | 0) {
              break label$50
             }
             label$51 : {
              label$52 : {
               label$53 : {
                label$54 : {
                 label$55 : {
                  $4_1 = HEAP32[(0 + 69420 | 0) >> 2] | 0;
                  if (!$4_1) {
                   break label$55
                  }
                  $0_1 = 69844;
                  label$56 : while (1) {
                   label$57 : {
                    $5_1 = HEAP32[$0_1 >> 2] | 0;
                    if ($5_1 >>> 0 > $4_1 >>> 0) {
                     break label$57
                    }
                    if (($5_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0) >>> 0 > $4_1 >>> 0) {
                     break label$54
                    }
                   }
                   $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                   if ($0_1) {
                    continue label$56
                   }
                   break label$56;
                  };
                 }
                 $7_1 = $272(0 | 0) | 0;
                 if (($7_1 | 0) == (-1 | 0)) {
                  break label$51
                 }
                 $2_1 = $8_1;
                 label$58 : {
                  $0_1 = HEAP32[(0 + 69872 | 0) >> 2] | 0;
                  $4_1 = $0_1 + -1 | 0;
                  if (!($4_1 & $7_1 | 0)) {
                   break label$58
                  }
                  $2_1 = ($8_1 - $7_1 | 0) + (($4_1 + $7_1 | 0) & (0 - $0_1 | 0) | 0) | 0;
                 }
                 if ($2_1 >>> 0 <= $3_1 >>> 0) {
                  break label$51
                 }
                 label$59 : {
                  $0_1 = HEAP32[(0 + 69836 | 0) >> 2] | 0;
                  if (!$0_1) {
                   break label$59
                  }
                  $4_1 = HEAP32[(0 + 69828 | 0) >> 2] | 0;
                  $5_1 = $4_1 + $2_1 | 0;
                  if ($5_1 >>> 0 <= $4_1 >>> 0) {
                   break label$51
                  }
                  if ($5_1 >>> 0 > $0_1 >>> 0) {
                   break label$51
                  }
                 }
                 $0_1 = $272($2_1 | 0) | 0;
                 if (($0_1 | 0) != ($7_1 | 0)) {
                  break label$53
                 }
                 break label$49;
                }
                $2_1 = ($2_1 - $7_1 | 0) & $11_1 | 0;
                $7_1 = $272($2_1 | 0) | 0;
                if (($7_1 | 0) == ((HEAP32[$0_1 >> 2] | 0) + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0 | 0)) {
                 break label$52
                }
                $0_1 = $7_1;
               }
               if (($0_1 | 0) == (-1 | 0)) {
                break label$51
               }
               label$60 : {
                if ($2_1 >>> 0 < ($3_1 + 48 | 0) >>> 0) {
                 break label$60
                }
                $7_1 = $0_1;
                break label$49;
               }
               $4_1 = HEAP32[(0 + 69876 | 0) >> 2] | 0;
               $4_1 = (($6_1 - $2_1 | 0) + $4_1 | 0) & (0 - $4_1 | 0) | 0;
               if (($272($4_1 | 0) | 0 | 0) == (-1 | 0)) {
                break label$51
               }
               $2_1 = $4_1 + $2_1 | 0;
               $7_1 = $0_1;
               break label$49;
              }
              if (($7_1 | 0) != (-1 | 0)) {
               break label$49
              }
             }
             HEAP32[(0 + 69840 | 0) >> 2] = HEAP32[(0 + 69840 | 0) >> 2] | 0 | 4 | 0;
            }
            $7_1 = $272($8_1 | 0) | 0;
            $0_1 = $272(0 | 0) | 0;
            if (($7_1 | 0) == (-1 | 0)) {
             break label$5
            }
            if (($0_1 | 0) == (-1 | 0)) {
             break label$5
            }
            if ($7_1 >>> 0 >= $0_1 >>> 0) {
             break label$5
            }
            $2_1 = $0_1 - $7_1 | 0;
            if ($2_1 >>> 0 <= ($3_1 + 40 | 0) >>> 0) {
             break label$5
            }
           }
           $0_1 = (HEAP32[(0 + 69828 | 0) >> 2] | 0) + $2_1 | 0;
           HEAP32[(0 + 69828 | 0) >> 2] = $0_1;
           label$61 : {
            if ($0_1 >>> 0 <= (HEAP32[(0 + 69832 | 0) >> 2] | 0) >>> 0) {
             break label$61
            }
            HEAP32[(0 + 69832 | 0) >> 2] = $0_1;
           }
           label$62 : {
            label$63 : {
             $4_1 = HEAP32[(0 + 69420 | 0) >> 2] | 0;
             if (!$4_1) {
              break label$63
             }
             $0_1 = 69844;
             label$64 : while (1) {
              $5_1 = HEAP32[$0_1 >> 2] | 0;
              $8_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
              if (($7_1 | 0) == ($5_1 + $8_1 | 0 | 0)) {
               break label$62
              }
              $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
              if ($0_1) {
               continue label$64
              }
              break label$7;
             };
            }
            label$65 : {
             label$66 : {
              $0_1 = HEAP32[(0 + 69412 | 0) >> 2] | 0;
              if (!$0_1) {
               break label$66
              }
              if ($7_1 >>> 0 >= $0_1 >>> 0) {
               break label$65
              }
             }
             HEAP32[(0 + 69412 | 0) >> 2] = $7_1;
            }
            $0_1 = 0;
            HEAP32[(0 + 69848 | 0) >> 2] = $2_1;
            HEAP32[(0 + 69844 | 0) >> 2] = $7_1;
            HEAP32[(0 + 69428 | 0) >> 2] = -1;
            HEAP32[(0 + 69432 | 0) >> 2] = HEAP32[(0 + 69868 | 0) >> 2] | 0;
            HEAP32[(0 + 69856 | 0) >> 2] = 0;
            label$67 : while (1) {
             $4_1 = $0_1 << 3 | 0;
             $5_1 = $4_1 + 69436 | 0;
             HEAP32[($4_1 + 69444 | 0) >> 2] = $5_1;
             HEAP32[($4_1 + 69448 | 0) >> 2] = $5_1;
             $0_1 = $0_1 + 1 | 0;
             if (($0_1 | 0) != (32 | 0)) {
              continue label$67
             }
             break label$67;
            };
            $0_1 = $2_1 + -40 | 0;
            $4_1 = (-8 - $7_1 | 0) & 7 | 0;
            $5_1 = $0_1 - $4_1 | 0;
            HEAP32[(0 + 69408 | 0) >> 2] = $5_1;
            $4_1 = $7_1 + $4_1 | 0;
            HEAP32[(0 + 69420 | 0) >> 2] = $4_1;
            HEAP32[($4_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
            HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
            HEAP32[(0 + 69424 | 0) >> 2] = HEAP32[(0 + 69884 | 0) >> 2] | 0;
            break label$6;
           }
           if ($4_1 >>> 0 >= $7_1 >>> 0) {
            break label$7
           }
           if ($4_1 >>> 0 < $5_1 >>> 0) {
            break label$7
           }
           if ((HEAP32[($0_1 + 12 | 0) >> 2] | 0) & 8 | 0) {
            break label$7
           }
           HEAP32[($0_1 + 4 | 0) >> 2] = $8_1 + $2_1 | 0;
           $0_1 = (-8 - $4_1 | 0) & 7 | 0;
           $5_1 = $4_1 + $0_1 | 0;
           HEAP32[(0 + 69420 | 0) >> 2] = $5_1;
           $7_1 = (HEAP32[(0 + 69408 | 0) >> 2] | 0) + $2_1 | 0;
           $0_1 = $7_1 - $0_1 | 0;
           HEAP32[(0 + 69408 | 0) >> 2] = $0_1;
           HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
           HEAP32[(($4_1 + $7_1 | 0) + 4 | 0) >> 2] = 40;
           HEAP32[(0 + 69424 | 0) >> 2] = HEAP32[(0 + 69884 | 0) >> 2] | 0;
           break label$6;
          }
          $0_1 = 0;
          break label$2;
         }
         $0_1 = 0;
         break label$3;
        }
        label$68 : {
         if ($7_1 >>> 0 >= (HEAP32[(0 + 69412 | 0) >> 2] | 0) >>> 0) {
          break label$68
         }
         HEAP32[(0 + 69412 | 0) >> 2] = $7_1;
        }
        $5_1 = $7_1 + $2_1 | 0;
        $0_1 = 69844;
        label$69 : {
         label$70 : {
          label$71 : while (1) {
           $8_1 = HEAP32[$0_1 >> 2] | 0;
           if (($8_1 | 0) == ($5_1 | 0)) {
            break label$70
           }
           $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
           if ($0_1) {
            continue label$71
           }
           break label$69;
          };
         }
         if (!((HEAPU8[($0_1 + 12 | 0) >> 0] | 0) & 8 | 0)) {
          break label$4
         }
        }
        $0_1 = 69844;
        label$72 : {
         label$73 : while (1) {
          label$74 : {
           $5_1 = HEAP32[$0_1 >> 2] | 0;
           if ($5_1 >>> 0 > $4_1 >>> 0) {
            break label$74
           }
           $5_1 = $5_1 + (HEAP32[($0_1 + 4 | 0) >> 2] | 0) | 0;
           if ($5_1 >>> 0 > $4_1 >>> 0) {
            break label$72
           }
          }
          $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          continue label$73;
         };
        }
        $0_1 = $2_1 + -40 | 0;
        $8_1 = (-8 - $7_1 | 0) & 7 | 0;
        $11_1 = $0_1 - $8_1 | 0;
        HEAP32[(0 + 69408 | 0) >> 2] = $11_1;
        $8_1 = $7_1 + $8_1 | 0;
        HEAP32[(0 + 69420 | 0) >> 2] = $8_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = $11_1 | 1 | 0;
        HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
        HEAP32[(0 + 69424 | 0) >> 2] = HEAP32[(0 + 69884 | 0) >> 2] | 0;
        $0_1 = ($5_1 + ((39 - $5_1 | 0) & 7 | 0) | 0) + -47 | 0;
        $8_1 = $0_1 >>> 0 < ($4_1 + 16 | 0) >>> 0 ? $4_1 : $0_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = 27;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69852 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69856 | 0) >> 2] | 0;
        $777 = i64toi32_i32$0;
        i64toi32_i32$0 = $8_1 + 16 | 0;
        HEAP32[i64toi32_i32$0 >> 2] = $777;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69844 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69848 | 0) >> 2] | 0;
        $779 = i64toi32_i32$1;
        i64toi32_i32$1 = $8_1;
        HEAP32[($8_1 + 8 | 0) >> 2] = $779;
        HEAP32[($8_1 + 12 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[(0 + 69852 | 0) >> 2] = $8_1 + 8 | 0;
        HEAP32[(0 + 69848 | 0) >> 2] = $2_1;
        HEAP32[(0 + 69844 | 0) >> 2] = $7_1;
        HEAP32[(0 + 69856 | 0) >> 2] = 0;
        $0_1 = $8_1 + 24 | 0;
        label$75 : while (1) {
         HEAP32[($0_1 + 4 | 0) >> 2] = 7;
         $7_1 = $0_1 + 8 | 0;
         $0_1 = $0_1 + 4 | 0;
         if ($7_1 >>> 0 < $5_1 >>> 0) {
          continue label$75
         }
         break label$75;
        };
        if (($8_1 | 0) == ($4_1 | 0)) {
         break label$6
        }
        HEAP32[($8_1 + 4 | 0) >> 2] = (HEAP32[($8_1 + 4 | 0) >> 2] | 0) & -2 | 0;
        $7_1 = $8_1 - $4_1 | 0;
        HEAP32[($4_1 + 4 | 0) >> 2] = $7_1 | 1 | 0;
        HEAP32[$8_1 >> 2] = $7_1;
        label$76 : {
         label$77 : {
          if ($7_1 >>> 0 > 255 >>> 0) {
           break label$77
          }
          $0_1 = ($7_1 & -8 | 0) + 69436 | 0;
          label$78 : {
           label$79 : {
            $5_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
            $7_1 = 1 << ($7_1 >>> 3 | 0) | 0;
            if ($5_1 & $7_1 | 0) {
             break label$79
            }
            HEAP32[(0 + 69396 | 0) >> 2] = $5_1 | $7_1 | 0;
            $5_1 = $0_1;
            break label$78;
           }
           $5_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
          }
          HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
          HEAP32[($5_1 + 12 | 0) >> 2] = $4_1;
          $7_1 = 12;
          $8_1 = 8;
          break label$76;
         }
         $0_1 = 31;
         label$80 : {
          if ($7_1 >>> 0 > 16777215 >>> 0) {
           break label$80
          }
          $0_1 = Math_clz32($7_1 >>> 8 | 0);
          $0_1 = ((($7_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
         }
         HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
         i64toi32_i32$1 = $4_1;
         i64toi32_i32$0 = 0;
         HEAP32[($4_1 + 16 | 0) >> 2] = 0;
         HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
         $5_1 = ($0_1 << 2 | 0) + 69700 | 0;
         label$81 : {
          label$82 : {
           label$83 : {
            $8_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
            $2_1 = 1 << $0_1 | 0;
            if ($8_1 & $2_1 | 0) {
             break label$83
            }
            HEAP32[(0 + 69400 | 0) >> 2] = $8_1 | $2_1 | 0;
            HEAP32[$5_1 >> 2] = $4_1;
            HEAP32[($4_1 + 24 | 0) >> 2] = $5_1;
            break label$82;
           }
           $0_1 = $7_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
           $8_1 = HEAP32[$5_1 >> 2] | 0;
           label$84 : while (1) {
            $5_1 = $8_1;
            if (((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($7_1 | 0)) {
             break label$81
            }
            $8_1 = $0_1 >>> 29 | 0;
            $0_1 = $0_1 << 1 | 0;
            $2_1 = ($5_1 + ($8_1 & 4 | 0) | 0) + 16 | 0;
            $8_1 = HEAP32[$2_1 >> 2] | 0;
            if ($8_1) {
             continue label$84
            }
            break label$84;
           };
           HEAP32[$2_1 >> 2] = $4_1;
           HEAP32[($4_1 + 24 | 0) >> 2] = $5_1;
          }
          $7_1 = 8;
          $8_1 = 12;
          $5_1 = $4_1;
          $0_1 = $4_1;
          break label$76;
         }
         $0_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
         HEAP32[($0_1 + 12 | 0) >> 2] = $4_1;
         HEAP32[($5_1 + 8 | 0) >> 2] = $4_1;
         HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
         $0_1 = 0;
         $7_1 = 24;
         $8_1 = 12;
        }
        HEAP32[($4_1 + $8_1 | 0) >> 2] = $5_1;
        HEAP32[($4_1 + $7_1 | 0) >> 2] = $0_1;
       }
       $0_1 = HEAP32[(0 + 69408 | 0) >> 2] | 0;
       if ($0_1 >>> 0 <= $3_1 >>> 0) {
        break label$5
       }
       $4_1 = $0_1 - $3_1 | 0;
       HEAP32[(0 + 69408 | 0) >> 2] = $4_1;
       $0_1 = HEAP32[(0 + 69420 | 0) >> 2] | 0;
       $5_1 = $0_1 + $3_1 | 0;
       HEAP32[(0 + 69420 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
       $0_1 = $0_1 + 8 | 0;
       break label$1;
      }
      HEAP32[($271() | 0) >> 2] = 48;
      $0_1 = 0;
      break label$1;
     }
     HEAP32[$0_1 >> 2] = $7_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0;
     $0_1 = $274($7_1 | 0, $8_1 | 0, $3_1 | 0) | 0;
     break label$1;
    }
    label$85 : {
     if (!$11_1) {
      break label$85
     }
     label$86 : {
      label$87 : {
       $7_1 = HEAP32[($8_1 + 28 | 0) >> 2] | 0;
       $5_1 = ($7_1 << 2 | 0) + 69700 | 0;
       if (($8_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
        break label$87
       }
       HEAP32[$5_1 >> 2] = $0_1;
       if ($0_1) {
        break label$86
       }
       $10_1 = $10_1 & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
       HEAP32[(0 + 69400 | 0) >> 2] = $10_1;
       break label$85;
      }
      HEAP32[($11_1 + ((HEAP32[($11_1 + 16 | 0) >> 2] | 0 | 0) == ($8_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
      if (!$0_1) {
       break label$85
      }
     }
     HEAP32[($0_1 + 24 | 0) >> 2] = $11_1;
     label$88 : {
      $5_1 = HEAP32[($8_1 + 16 | 0) >> 2] | 0;
      if (!$5_1) {
       break label$88
      }
      HEAP32[($0_1 + 16 | 0) >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
     }
     $5_1 = HEAP32[($8_1 + 20 | 0) >> 2] | 0;
     if (!$5_1) {
      break label$85
     }
     HEAP32[($0_1 + 20 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
    }
    label$89 : {
     label$90 : {
      if ($4_1 >>> 0 > 15 >>> 0) {
       break label$90
      }
      $0_1 = $4_1 + $3_1 | 0;
      HEAP32[($8_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
      $0_1 = $8_1 + $0_1 | 0;
      HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
      break label$89;
     }
     HEAP32[($8_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
     $7_1 = $8_1 + $3_1 | 0;
     HEAP32[($7_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
     HEAP32[($7_1 + $4_1 | 0) >> 2] = $4_1;
     label$91 : {
      if ($4_1 >>> 0 > 255 >>> 0) {
       break label$91
      }
      $0_1 = ($4_1 & -8 | 0) + 69436 | 0;
      label$92 : {
       label$93 : {
        $3_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
        $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
        if ($3_1 & $4_1 | 0) {
         break label$93
        }
        HEAP32[(0 + 69396 | 0) >> 2] = $3_1 | $4_1 | 0;
        $4_1 = $0_1;
        break label$92;
       }
       $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
      }
      HEAP32[($0_1 + 8 | 0) >> 2] = $7_1;
      HEAP32[($4_1 + 12 | 0) >> 2] = $7_1;
      HEAP32[($7_1 + 12 | 0) >> 2] = $0_1;
      HEAP32[($7_1 + 8 | 0) >> 2] = $4_1;
      break label$89;
     }
     $0_1 = 31;
     label$94 : {
      if ($4_1 >>> 0 > 16777215 >>> 0) {
       break label$94
      }
      $0_1 = Math_clz32($4_1 >>> 8 | 0);
      $0_1 = ((($4_1 >>> (38 - $0_1 | 0) | 0) & 1 | 0) - ($0_1 << 1 | 0) | 0) + 62 | 0;
     }
     HEAP32[($7_1 + 28 | 0) >> 2] = $0_1;
     i64toi32_i32$1 = $7_1;
     i64toi32_i32$0 = 0;
     HEAP32[($7_1 + 16 | 0) >> 2] = 0;
     HEAP32[($7_1 + 20 | 0) >> 2] = i64toi32_i32$0;
     $3_1 = ($0_1 << 2 | 0) + 69700 | 0;
     label$95 : {
      label$96 : {
       label$97 : {
        $5_1 = 1 << $0_1 | 0;
        if ($10_1 & $5_1 | 0) {
         break label$97
        }
        HEAP32[(0 + 69400 | 0) >> 2] = $10_1 | $5_1 | 0;
        HEAP32[$3_1 >> 2] = $7_1;
        HEAP32[($7_1 + 24 | 0) >> 2] = $3_1;
        break label$96;
       }
       $0_1 = $4_1 << (($0_1 | 0) == (31 | 0) ? 0 : 25 - ($0_1 >>> 1 | 0) | 0) | 0;
       $5_1 = HEAP32[$3_1 >> 2] | 0;
       label$98 : while (1) {
        $3_1 = $5_1;
        if (((HEAP32[($5_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($4_1 | 0)) {
         break label$95
        }
        $5_1 = $0_1 >>> 29 | 0;
        $0_1 = $0_1 << 1 | 0;
        $2_1 = ($3_1 + ($5_1 & 4 | 0) | 0) + 16 | 0;
        $5_1 = HEAP32[$2_1 >> 2] | 0;
        if ($5_1) {
         continue label$98
        }
        break label$98;
       };
       HEAP32[$2_1 >> 2] = $7_1;
       HEAP32[($7_1 + 24 | 0) >> 2] = $3_1;
      }
      HEAP32[($7_1 + 12 | 0) >> 2] = $7_1;
      HEAP32[($7_1 + 8 | 0) >> 2] = $7_1;
      break label$89;
     }
     $0_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
     HEAP32[($0_1 + 12 | 0) >> 2] = $7_1;
     HEAP32[($3_1 + 8 | 0) >> 2] = $7_1;
     HEAP32[($7_1 + 24 | 0) >> 2] = 0;
     HEAP32[($7_1 + 12 | 0) >> 2] = $3_1;
     HEAP32[($7_1 + 8 | 0) >> 2] = $0_1;
    }
    $0_1 = $8_1 + 8 | 0;
    break label$1;
   }
   label$99 : {
    if (!$10_1) {
     break label$99
    }
    label$100 : {
     label$101 : {
      $8_1 = HEAP32[($7_1 + 28 | 0) >> 2] | 0;
      $5_1 = ($8_1 << 2 | 0) + 69700 | 0;
      if (($7_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
       break label$101
      }
      HEAP32[$5_1 >> 2] = $0_1;
      if ($0_1) {
       break label$100
      }
      HEAP32[(0 + 69400 | 0) >> 2] = $9_1 & (__wasm_rotl_i32(-2 | 0, $8_1 | 0) | 0) | 0;
      break label$99;
     }
     HEAP32[($10_1 + ((HEAP32[($10_1 + 16 | 0) >> 2] | 0 | 0) == ($7_1 | 0) ? 16 : 20) | 0) >> 2] = $0_1;
     if (!$0_1) {
      break label$99
     }
    }
    HEAP32[($0_1 + 24 | 0) >> 2] = $10_1;
    label$102 : {
     $5_1 = HEAP32[($7_1 + 16 | 0) >> 2] | 0;
     if (!$5_1) {
      break label$102
     }
     HEAP32[($0_1 + 16 | 0) >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
    }
    $5_1 = HEAP32[($7_1 + 20 | 0) >> 2] | 0;
    if (!$5_1) {
     break label$99
    }
    HEAP32[($0_1 + 20 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 24 | 0) >> 2] = $0_1;
   }
   label$103 : {
    label$104 : {
     if ($4_1 >>> 0 > 15 >>> 0) {
      break label$104
     }
     $0_1 = $4_1 + $3_1 | 0;
     HEAP32[($7_1 + 4 | 0) >> 2] = $0_1 | 3 | 0;
     $0_1 = $7_1 + $0_1 | 0;
     HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 1 | 0;
     break label$103;
    }
    HEAP32[($7_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
    $3_1 = $7_1 + $3_1 | 0;
    HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
    HEAP32[($3_1 + $4_1 | 0) >> 2] = $4_1;
    label$105 : {
     if (!$6_1) {
      break label$105
     }
     $5_1 = ($6_1 & -8 | 0) + 69436 | 0;
     $0_1 = HEAP32[(0 + 69416 | 0) >> 2] | 0;
     label$106 : {
      label$107 : {
       $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
       if ($8_1 & $2_1 | 0) {
        break label$107
       }
       HEAP32[(0 + 69396 | 0) >> 2] = $8_1 | $2_1 | 0;
       $8_1 = $5_1;
       break label$106;
      }
      $8_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
     }
     HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
     HEAP32[($8_1 + 12 | 0) >> 2] = $0_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $8_1;
    }
    HEAP32[(0 + 69416 | 0) >> 2] = $3_1;
    HEAP32[(0 + 69404 | 0) >> 2] = $4_1;
   }
   $0_1 = $7_1 + 8 | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $274($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $5_1 = 0, $7_1 = 0, $8_1 = 0, $3_1 = 0, $6_1 = 0, $9_1 = 0;
  $3_1 = $0_1 + ((-8 - $0_1 | 0) & 7 | 0) | 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 | 3 | 0;
  $4_1 = $1_1 + ((-8 - $1_1 | 0) & 7 | 0) | 0;
  $5_1 = $3_1 + $2_1 | 0;
  $0_1 = $4_1 - $5_1 | 0;
  label$1 : {
   label$2 : {
    if (($4_1 | 0) != (HEAP32[(0 + 69420 | 0) >> 2] | 0 | 0)) {
     break label$2
    }
    HEAP32[(0 + 69420 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 69408 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 69408 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
    break label$1;
   }
   label$3 : {
    if (($4_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    HEAP32[(0 + 69416 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 69404 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 69404 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
    HEAP32[($5_1 + $2_1 | 0) >> 2] = $2_1;
    break label$1;
   }
   label$4 : {
    $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
    if (($1_1 & 3 | 0 | 0) != (1 | 0)) {
     break label$4
    }
    $6_1 = $1_1 & -8 | 0;
    $2_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
    label$5 : {
     label$6 : {
      if ($1_1 >>> 0 > 255 >>> 0) {
       break label$6
      }
      label$7 : {
       $7_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
       if (($2_1 | 0) != ($7_1 | 0)) {
        break label$7
       }
       HEAP32[(0 + 69396 | 0) >> 2] = (HEAP32[(0 + 69396 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1_1 >>> 3 | 0 | 0) | 0) | 0;
       break label$5;
      }
      HEAP32[($7_1 + 12 | 0) >> 2] = $2_1;
      HEAP32[($2_1 + 8 | 0) >> 2] = $7_1;
      break label$5;
     }
     $8_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       if (($2_1 | 0) == ($4_1 | 0)) {
        break label$9
       }
       $1_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
       HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
       HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
       break label$8;
      }
      label$10 : {
       label$11 : {
        label$12 : {
         $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
         if (!$1_1) {
          break label$12
         }
         $7_1 = $4_1 + 20 | 0;
         break label$11;
        }
        $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
        if (!$1_1) {
         break label$10
        }
        $7_1 = $4_1 + 16 | 0;
       }
       label$13 : while (1) {
        $9_1 = $7_1;
        $2_1 = $1_1;
        $7_1 = $2_1 + 20 | 0;
        $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
        if ($1_1) {
         continue label$13
        }
        $7_1 = $2_1 + 16 | 0;
        $1_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
        if ($1_1) {
         continue label$13
        }
        break label$13;
       };
       HEAP32[$9_1 >> 2] = 0;
       break label$8;
      }
      $2_1 = 0;
     }
     if (!$8_1) {
      break label$5
     }
     label$14 : {
      label$15 : {
       $7_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
       $1_1 = ($7_1 << 2 | 0) + 69700 | 0;
       if (($4_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
        break label$15
       }
       HEAP32[$1_1 >> 2] = $2_1;
       if ($2_1) {
        break label$14
       }
       HEAP32[(0 + 69400 | 0) >> 2] = (HEAP32[(0 + 69400 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
       break label$5;
      }
      HEAP32[($8_1 + ((HEAP32[($8_1 + 16 | 0) >> 2] | 0 | 0) == ($4_1 | 0) ? 16 : 20) | 0) >> 2] = $2_1;
      if (!$2_1) {
       break label$5
      }
     }
     HEAP32[($2_1 + 24 | 0) >> 2] = $8_1;
     label$16 : {
      $1_1 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
      if (!$1_1) {
       break label$16
      }
      HEAP32[($2_1 + 16 | 0) >> 2] = $1_1;
      HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
     }
     $1_1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
     if (!$1_1) {
      break label$5
     }
     HEAP32[($2_1 + 20 | 0) >> 2] = $1_1;
     HEAP32[($1_1 + 24 | 0) >> 2] = $2_1;
    }
    $0_1 = $6_1 + $0_1 | 0;
    $4_1 = $4_1 + $6_1 | 0;
    $1_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
   }
   HEAP32[($4_1 + 4 | 0) >> 2] = $1_1 & -2 | 0;
   HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
   HEAP32[($5_1 + $0_1 | 0) >> 2] = $0_1;
   label$17 : {
    if ($0_1 >>> 0 > 255 >>> 0) {
     break label$17
    }
    $2_1 = ($0_1 & -8 | 0) + 69436 | 0;
    label$18 : {
     label$19 : {
      $1_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($1_1 & $0_1 | 0) {
       break label$19
      }
      HEAP32[(0 + 69396 | 0) >> 2] = $1_1 | $0_1 | 0;
      $0_1 = $2_1;
      break label$18;
     }
     $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
    break label$1;
   }
   $2_1 = 31;
   label$20 : {
    if ($0_1 >>> 0 > 16777215 >>> 0) {
     break label$20
    }
    $2_1 = Math_clz32($0_1 >>> 8 | 0);
    $2_1 = ((($0_1 >>> (38 - $2_1 | 0) | 0) & 1 | 0) - ($2_1 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($5_1 + 28 | 0) >> 2] = $2_1;
   HEAP32[($5_1 + 16 | 0) >> 2] = 0;
   HEAP32[($5_1 + 20 | 0) >> 2] = 0;
   $1_1 = ($2_1 << 2 | 0) + 69700 | 0;
   label$21 : {
    label$22 : {
     label$23 : {
      $7_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
      $4_1 = 1 << $2_1 | 0;
      if ($7_1 & $4_1 | 0) {
       break label$23
      }
      HEAP32[(0 + 69400 | 0) >> 2] = $7_1 | $4_1 | 0;
      HEAP32[$1_1 >> 2] = $5_1;
      HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
      break label$22;
     }
     $2_1 = $0_1 << (($2_1 | 0) == (31 | 0) ? 0 : 25 - ($2_1 >>> 1 | 0) | 0) | 0;
     $7_1 = HEAP32[$1_1 >> 2] | 0;
     label$24 : while (1) {
      $1_1 = $7_1;
      if (((HEAP32[($1_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
       break label$21
      }
      $7_1 = $2_1 >>> 29 | 0;
      $2_1 = $2_1 << 1 | 0;
      $4_1 = ($1_1 + ($7_1 & 4 | 0) | 0) + 16 | 0;
      $7_1 = HEAP32[$4_1 >> 2] | 0;
      if ($7_1) {
       continue label$24
      }
      break label$24;
     };
     HEAP32[$4_1 >> 2] = $5_1;
     HEAP32[($5_1 + 24 | 0) >> 2] = $1_1;
    }
    HEAP32[($5_1 + 12 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 8 | 0) >> 2] = $5_1;
    break label$1;
   }
   $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
   HEAP32[($2_1 + 12 | 0) >> 2] = $5_1;
   HEAP32[($1_1 + 8 | 0) >> 2] = $5_1;
   HEAP32[($5_1 + 24 | 0) >> 2] = 0;
   HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($5_1 + 8 | 0) >> 2] = $2_1;
  }
  return $3_1 + 8 | 0 | 0;
 }
 
 function $275($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $4_1 = 0, $1_1 = 0, $5_1 = 0, $3_1 = 0, $6_1 = 0, $7_1 = 0;
  label$1 : {
   if (!$0_1) {
    break label$1
   }
   $1_1 = $0_1 + -8 | 0;
   $2_1 = HEAP32[($0_1 + -4 | 0) >> 2] | 0;
   $0_1 = $2_1 & -8 | 0;
   $3_1 = $1_1 + $0_1 | 0;
   label$2 : {
    if ($2_1 & 1 | 0) {
     break label$2
    }
    if (!($2_1 & 2 | 0)) {
     break label$1
    }
    $4_1 = HEAP32[$1_1 >> 2] | 0;
    $1_1 = $1_1 - $4_1 | 0;
    if ($1_1 >>> 0 < (HEAP32[(0 + 69412 | 0) >> 2] | 0) >>> 0) {
     break label$1
    }
    $0_1 = $4_1 + $0_1 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (($1_1 | 0) == (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
         break label$6
        }
        $2_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
        label$7 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$7
         }
         $5_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
         if (($2_1 | 0) != ($5_1 | 0)) {
          break label$5
         }
         HEAP32[(0 + 69396 | 0) >> 2] = (HEAP32[(0 + 69396 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
         break label$2;
        }
        $6_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
        label$8 : {
         if (($2_1 | 0) == ($1_1 | 0)) {
          break label$8
         }
         $4_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $4_1;
         break label$3;
        }
        label$9 : {
         label$10 : {
          $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$10
          }
          $5_1 = $1_1 + 20 | 0;
          break label$9;
         }
         $4_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$4
         }
         $5_1 = $1_1 + 16 | 0;
        }
        label$11 : while (1) {
         $7_1 = $5_1;
         $2_1 = $4_1;
         $5_1 = $2_1 + 20 | 0;
         $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         $5_1 = $2_1 + 16 | 0;
         $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         break label$11;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$3;
       }
       $2_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       if (($2_1 & 3 | 0 | 0) != (3 | 0)) {
        break label$2
       }
       HEAP32[(0 + 69404 | 0) >> 2] = $0_1;
       HEAP32[($3_1 + 4 | 0) >> 2] = $2_1 & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[$3_1 >> 2] = $0_1;
       return;
      }
      HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
      HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
      break label$2;
     }
     $2_1 = 0;
    }
    if (!$6_1) {
     break label$2
    }
    label$12 : {
     label$13 : {
      $5_1 = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
      $4_1 = ($5_1 << 2 | 0) + 69700 | 0;
      if (($1_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
       break label$13
      }
      HEAP32[$4_1 >> 2] = $2_1;
      if ($2_1) {
       break label$12
      }
      HEAP32[(0 + 69400 | 0) >> 2] = (HEAP32[(0 + 69400 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
      break label$2;
     }
     HEAP32[($6_1 + ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) == ($1_1 | 0) ? 16 : 20) | 0) >> 2] = $2_1;
     if (!$2_1) {
      break label$2
     }
    }
    HEAP32[($2_1 + 24 | 0) >> 2] = $6_1;
    label$14 : {
     $4_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$14
     }
     HEAP32[($2_1 + 16 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
    }
    $4_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    if (!$4_1) {
     break label$2
    }
    HEAP32[($2_1 + 20 | 0) >> 2] = $4_1;
    HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
   }
   if ($1_1 >>> 0 >= $3_1 >>> 0) {
    break label$1
   }
   $4_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
   if (!($4_1 & 1 | 0)) {
    break label$1
   }
   label$15 : {
    label$16 : {
     label$17 : {
      label$18 : {
       label$19 : {
        if ($4_1 & 2 | 0) {
         break label$19
        }
        label$20 : {
         if (($3_1 | 0) != (HEAP32[(0 + 69420 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 69420 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 69408 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 69408 | 0) >> 2] = $0_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         if (($1_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 69404 | 0) >> 2] = 0;
         HEAP32[(0 + 69416 | 0) >> 2] = 0;
         return;
        }
        label$21 : {
         if (($3_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
          break label$21
         }
         HEAP32[(0 + 69416 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 69404 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 69404 | 0) >> 2] = $0_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
         return;
        }
        $0_1 = ($4_1 & -8 | 0) + $0_1 | 0;
        $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
        label$22 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$22
         }
         label$23 : {
          $5_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
          if (($2_1 | 0) != ($5_1 | 0)) {
           break label$23
          }
          HEAP32[(0 + 69396 | 0) >> 2] = (HEAP32[(0 + 69396 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
          break label$16;
         }
         HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $5_1;
         break label$16;
        }
        $6_1 = HEAP32[($3_1 + 24 | 0) >> 2] | 0;
        label$24 : {
         if (($2_1 | 0) == ($3_1 | 0)) {
          break label$24
         }
         $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 8 | 0) >> 2] = $4_1;
         break label$17;
        }
        label$25 : {
         label$26 : {
          $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$26
          }
          $5_1 = $3_1 + 20 | 0;
          break label$25;
         }
         $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$18
         }
         $5_1 = $3_1 + 16 | 0;
        }
        label$27 : while (1) {
         $7_1 = $5_1;
         $2_1 = $4_1;
         $5_1 = $2_1 + 20 | 0;
         $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$27
         }
         $5_1 = $2_1 + 16 | 0;
         $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$27
         }
         break label$27;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$17;
       }
       HEAP32[($3_1 + 4 | 0) >> 2] = $4_1 & -2 | 0;
       HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
       HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
       break label$15;
      }
      $2_1 = 0;
     }
     if (!$6_1) {
      break label$16
     }
     label$28 : {
      label$29 : {
       $5_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
       $4_1 = ($5_1 << 2 | 0) + 69700 | 0;
       if (($3_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
        break label$29
       }
       HEAP32[$4_1 >> 2] = $2_1;
       if ($2_1) {
        break label$28
       }
       HEAP32[(0 + 69400 | 0) >> 2] = (HEAP32[(0 + 69400 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
       break label$16;
      }
      HEAP32[($6_1 + ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) == ($3_1 | 0) ? 16 : 20) | 0) >> 2] = $2_1;
      if (!$2_1) {
       break label$16
      }
     }
     HEAP32[($2_1 + 24 | 0) >> 2] = $6_1;
     label$30 : {
      $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
      if (!$4_1) {
       break label$30
      }
      HEAP32[($2_1 + 16 | 0) >> 2] = $4_1;
      HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
     }
     $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$16
     }
     HEAP32[($2_1 + 20 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $2_1;
    }
    HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
    HEAP32[($1_1 + $0_1 | 0) >> 2] = $0_1;
    if (($1_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
     break label$15
    }
    HEAP32[(0 + 69404 | 0) >> 2] = $0_1;
    return;
   }
   label$31 : {
    if ($0_1 >>> 0 > 255 >>> 0) {
     break label$31
    }
    $2_1 = ($0_1 & -8 | 0) + 69436 | 0;
    label$32 : {
     label$33 : {
      $4_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($4_1 & $0_1 | 0) {
       break label$33
      }
      HEAP32[(0 + 69396 | 0) >> 2] = $4_1 | $0_1 | 0;
      $0_1 = $2_1;
      break label$32;
     }
     $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $2_1;
    HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
    return;
   }
   $2_1 = 31;
   label$34 : {
    if ($0_1 >>> 0 > 16777215 >>> 0) {
     break label$34
    }
    $2_1 = Math_clz32($0_1 >>> 8 | 0);
    $2_1 = ((($0_1 >>> (38 - $2_1 | 0) | 0) & 1 | 0) - ($2_1 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($1_1 + 28 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 16 | 0) >> 2] = 0;
   HEAP32[($1_1 + 20 | 0) >> 2] = 0;
   $3_1 = ($2_1 << 2 | 0) + 69700 | 0;
   label$35 : {
    label$36 : {
     label$37 : {
      label$38 : {
       $4_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
       $5_1 = 1 << $2_1 | 0;
       if ($4_1 & $5_1 | 0) {
        break label$38
       }
       HEAP32[(0 + 69400 | 0) >> 2] = $4_1 | $5_1 | 0;
       $0_1 = 8;
       $2_1 = 24;
       $5_1 = $3_1;
       break label$37;
      }
      $2_1 = $0_1 << (($2_1 | 0) == (31 | 0) ? 0 : 25 - ($2_1 >>> 1 | 0) | 0) | 0;
      $5_1 = HEAP32[$3_1 >> 2] | 0;
      label$39 : while (1) {
       $4_1 = $5_1;
       if (((HEAP32[($4_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($0_1 | 0)) {
        break label$36
       }
       $5_1 = $2_1 >>> 29 | 0;
       $2_1 = $2_1 << 1 | 0;
       $3_1 = ($4_1 + ($5_1 & 4 | 0) | 0) + 16 | 0;
       $5_1 = HEAP32[$3_1 >> 2] | 0;
       if ($5_1) {
        continue label$39
       }
       break label$39;
      };
      $0_1 = 8;
      $2_1 = 24;
      $5_1 = $4_1;
     }
     $4_1 = $1_1;
     $7_1 = $4_1;
     break label$35;
    }
    $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    HEAP32[($5_1 + 12 | 0) >> 2] = $1_1;
    $2_1 = 8;
    $3_1 = $4_1 + 8 | 0;
    $7_1 = 0;
    $0_1 = 24;
   }
   HEAP32[$3_1 >> 2] = $1_1;
   HEAP32[($1_1 + $2_1 | 0) >> 2] = $5_1;
   HEAP32[($1_1 + 12 | 0) >> 2] = $4_1;
   HEAP32[($1_1 + $0_1 | 0) >> 2] = $7_1;
   $1_1 = (HEAP32[(0 + 69428 | 0) >> 2] | 0) + -1 | 0;
   HEAP32[(0 + 69428 | 0) >> 2] = $1_1 ? $1_1 : -1;
  }
 }
 
 function $276($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $6_1 = 0, $4_1 = 0, $5_1 = 0;
  $2_1 = 16;
  label$1 : {
   label$2 : {
    $3_1 = $0_1 >>> 0 > 16 >>> 0 ? $0_1 : 16;
    if ($3_1 & ($3_1 + -1 | 0) | 0) {
     break label$2
    }
    $0_1 = $3_1;
    break label$1;
   }
   label$3 : while (1) {
    $0_1 = $2_1;
    $2_1 = $0_1 << 1 | 0;
    if ($0_1 >>> 0 < $3_1 >>> 0) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   if ((-64 - $0_1 | 0) >>> 0 > $1_1 >>> 0) {
    break label$4
   }
   HEAP32[($271() | 0) >> 2] = 48;
   return 0 | 0;
  }
  label$5 : {
   $1_1 = $1_1 >>> 0 < 11 >>> 0 ? 16 : ($1_1 + 11 | 0) & -8 | 0;
   $2_1 = $273(($1_1 + $0_1 | 0) + 12 | 0 | 0) | 0;
   if ($2_1) {
    break label$5
   }
   return 0 | 0;
  }
  $3_1 = $2_1 + -8 | 0;
  label$6 : {
   label$7 : {
    if (($0_1 + -1 | 0) & $2_1 | 0) {
     break label$7
    }
    $0_1 = $3_1;
    break label$6;
   }
   $4_1 = $2_1 + -4 | 0;
   $5_1 = HEAP32[$4_1 >> 2] | 0;
   $2_1 = ((($2_1 + $0_1 | 0) + -1 | 0) & (0 - $0_1 | 0) | 0) + -8 | 0;
   $0_1 = $2_1 + (($2_1 - $3_1 | 0) >>> 0 > 15 >>> 0 ? 0 : $0_1) | 0;
   $2_1 = $0_1 - $3_1 | 0;
   $6_1 = ($5_1 & -8 | 0) - $2_1 | 0;
   label$8 : {
    if ($5_1 & 3 | 0) {
     break label$8
    }
    $3_1 = HEAP32[$3_1 >> 2] | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = $6_1;
    HEAP32[$0_1 >> 2] = $3_1 + $2_1 | 0;
    break label$6;
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = $6_1 | ((HEAP32[($0_1 + 4 | 0) >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
   $6_1 = $0_1 + $6_1 | 0;
   HEAP32[($6_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0 | 1 | 0;
   HEAP32[$4_1 >> 2] = $2_1 | ((HEAP32[$4_1 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
   $6_1 = $3_1 + $2_1 | 0;
   HEAP32[($6_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0 | 1 | 0;
   $278($3_1 | 0, $2_1 | 0);
  }
  label$9 : {
   $2_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
   if (!($2_1 & 3 | 0)) {
    break label$9
   }
   $3_1 = $2_1 & -8 | 0;
   if ($3_1 >>> 0 <= ($1_1 + 16 | 0) >>> 0) {
    break label$9
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | ($2_1 & 1 | 0) | 0 | 2 | 0;
   $2_1 = $0_1 + $1_1 | 0;
   $1_1 = $3_1 - $1_1 | 0;
   HEAP32[($2_1 + 4 | 0) >> 2] = $1_1 | 3 | 0;
   $3_1 = $0_1 + $3_1 | 0;
   HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($3_1 + 4 | 0) >> 2] | 0 | 1 | 0;
   $278($2_1 | 0, $1_1 | 0);
  }
  return $0_1 + 8 | 0 | 0;
 }
 
 function $277($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($1_1 | 0) != (8 | 0)) {
      break label$3
     }
     $1_1 = $273($2_1 | 0) | 0;
     break label$2;
    }
    $3_1 = 28;
    if ($1_1 >>> 0 < 4 >>> 0) {
     break label$1
    }
    if ($1_1 & 3 | 0) {
     break label$1
    }
    $4_1 = $1_1 >>> 2 | 0;
    if ($4_1 & ($4_1 + -1 | 0) | 0) {
     break label$1
    }
    $3_1 = 48;
    if ((-64 - $1_1 | 0) >>> 0 < $2_1 >>> 0) {
     break label$1
    }
    $1_1 = $276(($1_1 >>> 0 > 16 >>> 0 ? $1_1 : 16) | 0, $2_1 | 0) | 0;
   }
   label$4 : {
    if ($1_1) {
     break label$4
    }
    return 48 | 0;
   }
   HEAP32[$0_1 >> 2] = $1_1;
   $3_1 = 0;
  }
  return $3_1 | 0;
 }
 
 function $278($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $2_1 = 0, $6_1 = 0, $7_1 = 0;
  $2_1 = $0_1 + $1_1 | 0;
  label$1 : {
   label$2 : {
    $3_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    if ($3_1 & 1 | 0) {
     break label$2
    }
    if (!($3_1 & 2 | 0)) {
     break label$1
    }
    $4_1 = HEAP32[$0_1 >> 2] | 0;
    $1_1 = $4_1 + $1_1 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $0_1 = $0_1 - $4_1 | 0;
        if (($0_1 | 0) == (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
         break label$6
        }
        $3_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
        label$7 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$7
         }
         $5_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         if (($3_1 | 0) != ($5_1 | 0)) {
          break label$5
         }
         HEAP32[(0 + 69396 | 0) >> 2] = (HEAP32[(0 + 69396 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
         break label$2;
        }
        $6_1 = HEAP32[($0_1 + 24 | 0) >> 2] | 0;
        label$8 : {
         if (($3_1 | 0) == ($0_1 | 0)) {
          break label$8
         }
         $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
         HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
         break label$3;
        }
        label$9 : {
         label$10 : {
          $4_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$10
          }
          $5_1 = $0_1 + 20 | 0;
          break label$9;
         }
         $4_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$4
         }
         $5_1 = $0_1 + 16 | 0;
        }
        label$11 : while (1) {
         $7_1 = $5_1;
         $3_1 = $4_1;
         $5_1 = $3_1 + 20 | 0;
         $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         $5_1 = $3_1 + 16 | 0;
         $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$11
         }
         break label$11;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$3;
       }
       $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
       if (($3_1 & 3 | 0 | 0) != (3 | 0)) {
        break label$2
       }
       HEAP32[(0 + 69404 | 0) >> 2] = $1_1;
       HEAP32[($2_1 + 4 | 0) >> 2] = $3_1 & -2 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[$2_1 >> 2] = $1_1;
       return;
      }
      HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
      HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
      break label$2;
     }
     $3_1 = 0;
    }
    if (!$6_1) {
     break label$2
    }
    label$12 : {
     label$13 : {
      $5_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
      $4_1 = ($5_1 << 2 | 0) + 69700 | 0;
      if (($0_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
       break label$13
      }
      HEAP32[$4_1 >> 2] = $3_1;
      if ($3_1) {
       break label$12
      }
      HEAP32[(0 + 69400 | 0) >> 2] = (HEAP32[(0 + 69400 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
      break label$2;
     }
     HEAP32[($6_1 + ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) == ($0_1 | 0) ? 16 : 20) | 0) >> 2] = $3_1;
     if (!$3_1) {
      break label$2
     }
    }
    HEAP32[($3_1 + 24 | 0) >> 2] = $6_1;
    label$14 : {
     $4_1 = HEAP32[($0_1 + 16 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$14
     }
     HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $3_1;
    }
    $4_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
    if (!$4_1) {
     break label$2
    }
    HEAP32[($3_1 + 20 | 0) >> 2] = $4_1;
    HEAP32[($4_1 + 24 | 0) >> 2] = $3_1;
   }
   label$15 : {
    label$16 : {
     label$17 : {
      label$18 : {
       label$19 : {
        $4_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
        if ($4_1 & 2 | 0) {
         break label$19
        }
        label$20 : {
         if (($2_1 | 0) != (HEAP32[(0 + 69420 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 69420 | 0) >> 2] = $0_1;
         $1_1 = (HEAP32[(0 + 69408 | 0) >> 2] | 0) + $1_1 | 0;
         HEAP32[(0 + 69408 | 0) >> 2] = $1_1;
         HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
         if (($0_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 69404 | 0) >> 2] = 0;
         HEAP32[(0 + 69416 | 0) >> 2] = 0;
         return;
        }
        label$21 : {
         if (($2_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
          break label$21
         }
         HEAP32[(0 + 69416 | 0) >> 2] = $0_1;
         $1_1 = (HEAP32[(0 + 69404 | 0) >> 2] | 0) + $1_1 | 0;
         HEAP32[(0 + 69404 | 0) >> 2] = $1_1;
         HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
         HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
         return;
        }
        $1_1 = ($4_1 & -8 | 0) + $1_1 | 0;
        $3_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
        label$22 : {
         if ($4_1 >>> 0 > 255 >>> 0) {
          break label$22
         }
         label$23 : {
          $5_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
          if (($3_1 | 0) != ($5_1 | 0)) {
           break label$23
          }
          HEAP32[(0 + 69396 | 0) >> 2] = (HEAP32[(0 + 69396 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
          break label$16;
         }
         HEAP32[($5_1 + 12 | 0) >> 2] = $3_1;
         HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
         break label$16;
        }
        $6_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
        label$24 : {
         if (($3_1 | 0) == ($2_1 | 0)) {
          break label$24
         }
         $4_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
         HEAP32[($4_1 + 12 | 0) >> 2] = $3_1;
         HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
         break label$17;
        }
        label$25 : {
         label$26 : {
          $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
          if (!$4_1) {
           break label$26
          }
          $5_1 = $2_1 + 20 | 0;
          break label$25;
         }
         $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
         if (!$4_1) {
          break label$18
         }
         $5_1 = $2_1 + 16 | 0;
        }
        label$27 : while (1) {
         $7_1 = $5_1;
         $3_1 = $4_1;
         $5_1 = $3_1 + 20 | 0;
         $4_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$27
         }
         $5_1 = $3_1 + 16 | 0;
         $4_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
         if ($4_1) {
          continue label$27
         }
         break label$27;
        };
        HEAP32[$7_1 >> 2] = 0;
        break label$17;
       }
       HEAP32[($2_1 + 4 | 0) >> 2] = $4_1 & -2 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
       HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
       break label$15;
      }
      $3_1 = 0;
     }
     if (!$6_1) {
      break label$16
     }
     label$28 : {
      label$29 : {
       $5_1 = HEAP32[($2_1 + 28 | 0) >> 2] | 0;
       $4_1 = ($5_1 << 2 | 0) + 69700 | 0;
       if (($2_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
        break label$29
       }
       HEAP32[$4_1 >> 2] = $3_1;
       if ($3_1) {
        break label$28
       }
       HEAP32[(0 + 69400 | 0) >> 2] = (HEAP32[(0 + 69400 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
       break label$16;
      }
      HEAP32[($6_1 + ((HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) == ($2_1 | 0) ? 16 : 20) | 0) >> 2] = $3_1;
      if (!$3_1) {
       break label$16
      }
     }
     HEAP32[($3_1 + 24 | 0) >> 2] = $6_1;
     label$30 : {
      $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
      if (!$4_1) {
       break label$30
      }
      HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
      HEAP32[($4_1 + 24 | 0) >> 2] = $3_1;
     }
     $4_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
     if (!$4_1) {
      break label$16
     }
     HEAP32[($3_1 + 20 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 24 | 0) >> 2] = $3_1;
    }
    HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
    HEAP32[($0_1 + $1_1 | 0) >> 2] = $1_1;
    if (($0_1 | 0) != (HEAP32[(0 + 69416 | 0) >> 2] | 0 | 0)) {
     break label$15
    }
    HEAP32[(0 + 69404 | 0) >> 2] = $1_1;
    return;
   }
   label$31 : {
    if ($1_1 >>> 0 > 255 >>> 0) {
     break label$31
    }
    $3_1 = ($1_1 & -8 | 0) + 69436 | 0;
    label$32 : {
     label$33 : {
      $4_1 = HEAP32[(0 + 69396 | 0) >> 2] | 0;
      $1_1 = 1 << ($1_1 >>> 3 | 0) | 0;
      if ($4_1 & $1_1 | 0) {
       break label$33
      }
      HEAP32[(0 + 69396 | 0) >> 2] = $4_1 | $1_1 | 0;
      $1_1 = $3_1;
      break label$32;
     }
     $1_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
    }
    HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
    HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
    HEAP32[($0_1 + 12 | 0) >> 2] = $3_1;
    HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
    return;
   }
   $3_1 = 31;
   label$34 : {
    if ($1_1 >>> 0 > 16777215 >>> 0) {
     break label$34
    }
    $3_1 = Math_clz32($1_1 >>> 8 | 0);
    $3_1 = ((($1_1 >>> (38 - $3_1 | 0) | 0) & 1 | 0) - ($3_1 << 1 | 0) | 0) + 62 | 0;
   }
   HEAP32[($0_1 + 28 | 0) >> 2] = $3_1;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   $4_1 = ($3_1 << 2 | 0) + 69700 | 0;
   label$35 : {
    label$36 : {
     label$37 : {
      $5_1 = HEAP32[(0 + 69400 | 0) >> 2] | 0;
      $2_1 = 1 << $3_1 | 0;
      if ($5_1 & $2_1 | 0) {
       break label$37
      }
      HEAP32[(0 + 69400 | 0) >> 2] = $5_1 | $2_1 | 0;
      HEAP32[$4_1 >> 2] = $0_1;
      HEAP32[($0_1 + 24 | 0) >> 2] = $4_1;
      break label$36;
     }
     $3_1 = $1_1 << (($3_1 | 0) == (31 | 0) ? 0 : 25 - ($3_1 >>> 1 | 0) | 0) | 0;
     $5_1 = HEAP32[$4_1 >> 2] | 0;
     label$38 : while (1) {
      $4_1 = $5_1;
      if (((HEAP32[($4_1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) == ($1_1 | 0)) {
       break label$35
      }
      $5_1 = $3_1 >>> 29 | 0;
      $3_1 = $3_1 << 1 | 0;
      $2_1 = ($4_1 + ($5_1 & 4 | 0) | 0) + 16 | 0;
      $5_1 = HEAP32[$2_1 >> 2] | 0;
      if ($5_1) {
       continue label$38
      }
      break label$38;
     };
     HEAP32[$2_1 >> 2] = $0_1;
     HEAP32[($0_1 + 24 | 0) >> 2] = $4_1;
    }
    HEAP32[($0_1 + 12 | 0) >> 2] = $0_1;
    HEAP32[($0_1 + 8 | 0) >> 2] = $0_1;
    return;
   }
   $1_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
   HEAP32[($1_1 + 12 | 0) >> 2] = $0_1;
   HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 24 | 0) >> 2] = 0;
   HEAP32[($0_1 + 12 | 0) >> 2] = $4_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  }
 }
 
 function $279($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = 0;
  label$1 : {
   if ($0_1 & 3 | 0) {
    break label$1
   }
   if (($1_1 >>> 0) % ($0_1 >>> 0) | 0) {
    break label$1
   }
   $0_1 = $277($2_1 + 12 | 0 | 0, $0_1 | 0, $1_1 | 0) | 0;
   $3_1 = (wasm2js_i32$0 = 0, wasm2js_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0, wasm2js_i32$2 = $0_1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
  }
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $280($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   $0_1 = $281($0_1 | 0) | 0;
   if ($0_1) {
    break label$1
   }
   $282();
  }
  return $0_1 | 0;
 }
 
 function $281($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = $0_1 >>> 0 > 1 >>> 0 ? $0_1 : 1;
  label$1 : {
   label$2 : while (1) {
    $2_1 = $273($1_1 | 0) | 0;
    if ($2_1) {
     break label$1
    }
    $0_1 = $442() | 0;
    if (!$0_1) {
     break label$1
    }
    FUNCTION_TABLE[$0_1 | 0]();
    continue label$2;
   };
  }
  return $2_1 | 0;
 }
 
 function $282() {
  $292();
  wasm2js_trap();
 }
 
 function $283($0_1) {
  $0_1 = $0_1 | 0;
  $275($0_1 | 0);
 }
 
 function $284($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $283($0_1 | 0);
 }
 
 function $285($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   $1_1 = $286($0_1 | 0, $1_1 | 0) | 0;
   if ($1_1) {
    break label$1
   }
   $282();
  }
  return $1_1 | 0;
 }
 
 function $286($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0;
  $2_1 = $1_1 >>> 0 > 4 >>> 0 ? $1_1 : 4;
  $0_1 = $0_1 >>> 0 > 1 >>> 0 ? $0_1 : 1;
  label$1 : {
   label$2 : while (1) {
    $3_1 = $287($2_1 | 0, $0_1 | 0) | 0;
    if ($3_1) {
     break label$1
    }
    $1_1 = $442() | 0;
    if (!$1_1) {
     break label$1
    }
    FUNCTION_TABLE[$1_1 | 0]();
    continue label$2;
   };
  }
  return $3_1 | 0;
 }
 
 function $287($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = (($0_1 + $1_1 | 0) + -1 | 0) & (0 - $0_1 | 0) | 0;
  return $279($0_1 | 0, ($2_1 >>> 0 > $1_1 >>> 0 ? $2_1 : $1_1) | 0) | 0 | 0;
 }
 
 function $288($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $289($0_1 | 0);
 }
 
 function $289($0_1) {
  $0_1 = $0_1 | 0;
  $275($0_1 | 0);
 }
 
 function $290($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $288($0_1 | 0, $2_1 | 0);
 }
 
 function $291() {
  fimport$16();
  wasm2js_trap();
 }
 
 function $292() {
  $291();
  wasm2js_trap();
 }
 
 function $293($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[$0_1 >> 2] = 68984 + 8 | 0;
  return $0_1 | 0;
 }
 
 function $294($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = $269($1_1 | 0) | 0;
  $3_1 = $280($2_1 + 13 | 0 | 0) | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$3_1 >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $264($295($3_1 | 0) | 0 | 0, $1_1 | 0, $2_1 + 1 | 0 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $295($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 + 12 | 0 | 0;
 }
 
 function $296($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = $293($0_1 | 0) | 0;
  HEAP32[$0_1 >> 2] = 69028 + 8 | 0;
  $294($0_1 + 4 | 0 | 0, $1_1 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $297($0_1) {
  $0_1 = $0_1 | 0;
  return 1 | 0;
 }
 
 function $298($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $0_1 = $293($0_1 | 0) | 0;
  HEAP32[$0_1 >> 2] = 69048 + 8 | 0;
  $294($0_1 + 4 | 0 | 0, $1_1 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $299($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $300($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[(($301($0_1 | 0) | 0) + 11 | 0) >> 0] | 0) >>> 7 | 0 | 0;
 }
 
 function $301($0_1) {
  $0_1 = $0_1 | 0;
  return $302($0_1 | 0) | 0 | 0;
 }
 
 function $302($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $303($0_1) {
  $0_1 = $0_1 | 0;
  return 1 | 0;
 }
 
 function $304($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $305($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $306($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $307() {
  $305(69892 | 0);
  return 69896 | 0;
 }
 
 function $308() {
  $306(69892 | 0);
 }
 
 function $309($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  label$1 : {
   if (($0_1 | 0) == ($1_1 | 0)) {
    break label$1
   }
   label$2 : {
    $3_1 = $0_1 + $2_1 | 0;
    if (($1_1 - $3_1 | 0) >>> 0 > (0 - ($2_1 << 1 | 0) | 0) >>> 0) {
     break label$2
    }
    return $264($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
   }
   $4_1 = ($1_1 ^ $0_1 | 0) & 3 | 0;
   label$3 : {
    label$4 : {
     label$5 : {
      if ($0_1 >>> 0 >= $1_1 >>> 0) {
       break label$5
      }
      label$6 : {
       if (!$4_1) {
        break label$6
       }
       $3_1 = $0_1;
       break label$3;
      }
      label$7 : {
       if ($0_1 & 3 | 0) {
        break label$7
       }
       $3_1 = $0_1;
       break label$4;
      }
      $3_1 = $0_1;
      label$8 : while (1) {
       if (!$2_1) {
        break label$1
       }
       HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
       $1_1 = $1_1 + 1 | 0;
       $2_1 = $2_1 + -1 | 0;
       $3_1 = $3_1 + 1 | 0;
       if (!($3_1 & 3 | 0)) {
        break label$4
       }
       continue label$8;
      };
     }
     label$9 : {
      if ($4_1) {
       break label$9
      }
      label$10 : {
       if (!($3_1 & 3 | 0)) {
        break label$10
       }
       label$11 : while (1) {
        if (!$2_1) {
         break label$1
        }
        $2_1 = $2_1 + -1 | 0;
        $3_1 = $0_1 + $2_1 | 0;
        HEAP8[$3_1 >> 0] = HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0;
        if ($3_1 & 3 | 0) {
         continue label$11
        }
        break label$11;
       };
      }
      if ($2_1 >>> 0 <= 3 >>> 0) {
       break label$9
      }
      label$12 : while (1) {
       $2_1 = $2_1 + -4 | 0;
       HEAP32[($0_1 + $2_1 | 0) >> 2] = HEAP32[($1_1 + $2_1 | 0) >> 2] | 0;
       if ($2_1 >>> 0 > 3 >>> 0) {
        continue label$12
       }
       break label$12;
      };
     }
     if (!$2_1) {
      break label$1
     }
     label$13 : while (1) {
      $2_1 = $2_1 + -1 | 0;
      HEAP8[($0_1 + $2_1 | 0) >> 0] = HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0;
      if ($2_1) {
       continue label$13
      }
      break label$1;
     };
    }
    if ($2_1 >>> 0 <= 3 >>> 0) {
     break label$3
    }
    label$14 : while (1) {
     HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $3_1 = $3_1 + 4 | 0;
     $2_1 = $2_1 + -4 | 0;
     if ($2_1 >>> 0 > 3 >>> 0) {
      continue label$14
     }
     break label$14;
    };
   }
   if (!$2_1) {
    break label$1
   }
   label$15 : while (1) {
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    $3_1 = $3_1 + 1 | 0;
    $1_1 = $1_1 + 1 | 0;
    $2_1 = $2_1 + -1 | 0;
    if ($2_1) {
     continue label$15
    }
    break label$15;
   };
  }
  return $0_1 | 0;
 }
 
 function $310($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if (!($300($0_1 | 0) | 0)) {
    break label$1
   }
   return $319($0_1 | 0) | 0 | 0;
  }
  return $320($0_1 | 0) | 0 | 0;
 }
 
 function $311($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $321($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $312($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = 10;
  label$1 : {
   if (!($300($0_1 | 0) | 0)) {
    break label$1
   }
   $1_1 = ($322($0_1 | 0) | 0) + -1 | 0;
  }
  return $1_1 | 0;
 }
 
 function $313($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if (!($300($0_1 | 0) | 0)) {
    break label$1
   }
   return $323($0_1 | 0) | 0 | 0;
  }
  return $324($0_1 | 0) | 0 | 0;
 }
 
 function $314($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $315($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $316($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $325($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $317($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   $4_1 = $310($0_1 | 0) | 0;
   if ($2_1 >>> 0 <= $4_1 >>> 0) {
    break label$1
   }
   $315($0_1 | 0, $2_1 - $4_1 | 0 | 0);
  }
  $326($0_1 | 0, $2_1 | 0);
  HEAP8[($3_1 + 15 | 0) >> 0] = 0;
  $327($1_1 + $2_1 | 0 | 0, $3_1 + 15 | 0 | 0);
  label$2 : {
   if ($2_1 >>> 0 >= $4_1 >>> 0) {
    break label$2
   }
   $328($0_1 | 0, $4_1 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $318($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $7_1 = $7_1 | 0;
  var $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0;
  $8_1 = global$0 - 16 | 0;
  global$0 = $8_1;
  label$1 : {
   $9_1 = $329($0_1 | 0) | 0;
   if (($9_1 + ($1_1 ^ -1 | 0) | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   $10_1 = $313($0_1 | 0) | 0;
   label$2 : {
    if ((($9_1 >>> 1 | 0) + -8 | 0) >>> 0 <= $1_1 >>> 0) {
     break label$2
    }
    HEAP32[($8_1 + 12 | 0) >> 2] = $1_1 << 1 | 0;
    HEAP32[($8_1 + 4 | 0) >> 2] = $2_1 + $1_1 | 0;
    $9_1 = ($331(HEAP32[($330($8_1 + 4 | 0 | 0, $8_1 + 12 | 0 | 0) | 0) >> 2] | 0 | 0) | 0) + 1 | 0;
   }
   $332($0_1 | 0);
   $334($8_1 + 4 | 0 | 0, $333($0_1 | 0) | 0 | 0, $9_1 | 0);
   $9_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
   $335($9_1 | 0, HEAP32[($8_1 + 8 | 0) >> 2] | 0 | 0);
   label$3 : {
    if (!$4_1) {
     break label$3
    }
    $336($314($9_1 | 0) | 0 | 0, $314($10_1 | 0) | 0 | 0, $4_1 | 0) | 0;
   }
   label$4 : {
    if (!$6_1) {
     break label$4
    }
    $336(($314($9_1 | 0) | 0) + $4_1 | 0 | 0, $7_1 | 0, $6_1 | 0) | 0;
   }
   $11_1 = $5_1 + $4_1 | 0;
   $7_1 = $3_1 - $11_1 | 0;
   label$5 : {
    if (($3_1 | 0) == ($11_1 | 0)) {
     break label$5
    }
    $336((($314($9_1 | 0) | 0) + $4_1 | 0) + $6_1 | 0 | 0, (($314($10_1 | 0) | 0) + $4_1 | 0) + $5_1 | 0 | 0, $7_1 | 0) | 0;
   }
   label$6 : {
    $3_1 = $1_1 + 1 | 0;
    if (($3_1 | 0) == (11 | 0)) {
     break label$6
    }
    $337($333($0_1 | 0) | 0 | 0, $10_1 | 0, $3_1 | 0);
   }
   $338($0_1 | 0, $9_1 | 0);
   $339($0_1 | 0, HEAP32[($8_1 + 8 | 0) >> 2] | 0 | 0);
   $4_1 = ($6_1 + $4_1 | 0) + $7_1 | 0;
   $340($0_1 | 0, $4_1 | 0);
   HEAP8[($8_1 + 12 | 0) >> 0] = 0;
   $327($9_1 + $4_1 | 0 | 0, $8_1 + 12 | 0 | 0);
   $341($0_1 | 0, $2_1 + $1_1 | 0 | 0);
   global$0 = $8_1 + 16 | 0;
   return;
  }
  $342($0_1 | 0);
  wasm2js_trap();
 }
 
 function $319($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[(($301($0_1 | 0) | 0) + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $320($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[(($301($0_1 | 0) | 0) + 11 | 0) >> 0] | 0) & 127 | 0 | 0;
 }
 
 function $321($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = $370($2_1 + 15 | 0 | 0, $1_1 | 0, $0_1 | 0) | 0;
  global$0 = $2_1 + 16 | 0;
  return ($3_1 ? $1_1 : $0_1) | 0;
 }
 
 function $322($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAP32[(($301($0_1 | 0) | 0) + 8 | 0) >> 2] | 0) & 2147483647 | 0 | 0;
 }
 
 function $323($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[($349($0_1 | 0) | 0) >> 2] | 0 | 0;
 }
 
 function $324($0_1) {
  $0_1 = $0_1 | 0;
  return $350($349($0_1 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $325($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   $309($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  }
  return $0_1 | 0;
 }
 
 function $326($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (!($300($0_1 | 0) | 0)) {
    break label$1
   }
   $340($0_1 | 0, $1_1 | 0);
   return;
  }
  $344($0_1 | 0, $1_1 | 0);
 }
 
 function $327($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP8[$0_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
 }
 
 function $328($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $329($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = $346($345($0_1 | 0) | 0 | 0) | 0;
  return ($0_1 >>> ($0_1 >>> 0 > (($347() | 0) >>> 1 | 0) >>> 0) | 0) + -8 | 0 | 0;
 }
 
 function $330($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $360($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $331($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $7_1 = 0;
  $1_1 = 10;
  label$1 : {
   if ($0_1 >>> 0 < 11 >>> 0) {
    break label$1
   }
   $0_1 = $353($0_1 + 1 | 0 | 0) | 0;
   $7_1 = $0_1;
   $0_1 = $0_1 + -1 | 0;
   $1_1 = ($0_1 | 0) == (11 | 0) ? $7_1 : $0_1;
  }
  return $1_1 | 0;
 }
 
 function $332($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $333($0_1) {
  $0_1 = $0_1 | 0;
  return $352($0_1 | 0) | 0 | 0;
 }
 
 function $334($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $1_1 = $351($1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $335($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $336($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $354($1_1 | 0, $2_1 | 0, $0_1 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $337($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $356($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $338($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[($349($0_1 | 0) | 0) >> 2] = $1_1;
 }
 
 function $339($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $349($0_1 | 0) | 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = (HEAP32[($2_1 + 8 | 0) >> 2] | 0) & -2147483648 | 0 | ($1_1 & 2147483647 | 0) | 0;
  $0_1 = $349($0_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($0_1 + 8 | 0) >> 2] | 0 | -2147483648 | 0;
 }
 
 function $340($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[(($349($0_1 | 0) | 0) + 4 | 0) >> 2] = $1_1;
 }
 
 function $341($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $342($0_1) {
  $0_1 = $0_1 | 0;
  $348(65827 | 0);
  wasm2js_trap();
 }
 
 function $343($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 >>> 0 < 11 >>> 0 | 0;
 }
 
 function $344($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $349($0_1 | 0) | 0;
  HEAP8[($2_1 + 11 | 0) >> 0] = (HEAPU8[($2_1 + 11 | 0) >> 0] | 0) & 128 | 0 | ($1_1 & 127 | 0) | 0;
  $0_1 = $349($0_1 | 0) | 0;
  HEAP8[($0_1 + 11 | 0) >> 0] = (HEAPU8[($0_1 + 11 | 0) >> 0] | 0) & 127 | 0;
 }
 
 function $345($0_1) {
  $0_1 = $0_1 | 0;
  return $371($0_1 | 0) | 0 | 0;
 }
 
 function $346($0_1) {
  $0_1 = $0_1 | 0;
  return $347() | 0 | 0;
 }
 
 function $347() {
  return $372() | 0 | 0;
 }
 
 function $348($0_1) {
  $0_1 = $0_1 | 0;
  $291();
  wasm2js_trap();
 }
 
 function $349($0_1) {
  $0_1 = $0_1 | 0;
  return $374($0_1 | 0) | 0 | 0;
 }
 
 function $350($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $351($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (($346($0_1 | 0) | 0) >>> 0 >= $1_1 >>> 0) {
    break label$1
   }
   $375();
   wasm2js_trap();
  }
  return $376($1_1 | 0, 1 | 0) | 0 | 0;
 }
 
 function $352($0_1) {
  $0_1 = $0_1 | 0;
  return $380($0_1 | 0) | 0 | 0;
 }
 
 function $353($0_1) {
  $0_1 = $0_1 | 0;
  return ($0_1 + 7 | 0) & -8 | 0 | 0;
 }
 
 function $354($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $381($0_1 | 0, $0_1 + $1_1 | 0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $355($0_1) {
  $0_1 = $0_1 | 0;
  $332($0_1 | 0);
  label$1 : {
   if (!($300($0_1 | 0) | 0)) {
    break label$1
   }
   $337($333($0_1 | 0) | 0 | 0, $323($0_1 | 0) | 0 | 0, $322($0_1 | 0) | 0 | 0);
  }
  return $0_1 | 0;
 }
 
 function $356($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $404($1_1 | 0, $2_1 | 0, 1 | 0);
 }
 
 function $357($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $358($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0, $6_1 | 0);
  $6_1 = ($3_1 - $5_1 | 0) + $6_1 | 0;
  $340($0_1 | 0, $6_1 | 0);
  $341($0_1 | 0, $6_1 | 0);
 }
 
 function $358($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  var $7_1 = 0, $8_1 = 0, $9_1 = 0;
  $7_1 = global$0 - 16 | 0;
  global$0 = $7_1;
  label$1 : {
   $8_1 = $329($0_1 | 0) | 0;
   if (($8_1 - $1_1 | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   $9_1 = $313($0_1 | 0) | 0;
   label$2 : {
    if ((($8_1 >>> 1 | 0) + -8 | 0) >>> 0 <= $1_1 >>> 0) {
     break label$2
    }
    HEAP32[($7_1 + 12 | 0) >> 2] = $1_1 << 1 | 0;
    HEAP32[($7_1 + 4 | 0) >> 2] = $2_1 + $1_1 | 0;
    $8_1 = ($331(HEAP32[($330($7_1 + 4 | 0 | 0, $7_1 + 12 | 0 | 0) | 0) >> 2] | 0 | 0) | 0) + 1 | 0;
   }
   $332($0_1 | 0);
   $334($7_1 + 4 | 0 | 0, $333($0_1 | 0) | 0 | 0, $8_1 | 0);
   $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
   $335($8_1 | 0, HEAP32[($7_1 + 8 | 0) >> 2] | 0 | 0);
   label$3 : {
    if (!$4_1) {
     break label$3
    }
    $336($314($8_1 | 0) | 0 | 0, $314($9_1 | 0) | 0 | 0, $4_1 | 0) | 0;
   }
   label$4 : {
    $2_1 = $5_1 + $4_1 | 0;
    if (($3_1 | 0) == ($2_1 | 0)) {
     break label$4
    }
    $336((($314($8_1 | 0) | 0) + $4_1 | 0) + $6_1 | 0 | 0, (($314($9_1 | 0) | 0) + $4_1 | 0) + $5_1 | 0 | 0, $3_1 - $2_1 | 0 | 0) | 0;
   }
   label$5 : {
    $1_1 = $1_1 + 1 | 0;
    if (($1_1 | 0) == (11 | 0)) {
     break label$5
    }
    $337($333($0_1 | 0) | 0 | 0, $9_1 | 0, $1_1 | 0);
   }
   $338($0_1 | 0, $8_1 | 0);
   $339($0_1 | 0, HEAP32[($7_1 + 8 | 0) >> 2] | 0 | 0);
   global$0 = $7_1 + 16 | 0;
   return;
  }
  $342($0_1 | 0);
  wasm2js_trap();
 }
 
 function $359($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   if (($329($0_1 | 0) | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   label$2 : {
    label$3 : {
     if (!($343($2_1 | 0) | 0)) {
      break label$3
     }
     $344($0_1 | 0, $2_1 | 0);
     $4_1 = $324($0_1 | 0) | 0;
     break label$2;
    }
    $334($3_1 + 8 | 0 | 0, $333($0_1 | 0) | 0 | 0, ($331($2_1 | 0) | 0) + 1 | 0 | 0);
    $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
    $335($4_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
    $338($0_1 | 0, $4_1 | 0);
    $339($0_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
    $340($0_1 | 0, $2_1 | 0);
   }
   $336($314($4_1 | 0) | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
   HEAP8[($3_1 + 7 | 0) >> 0] = 0;
   $327($4_1 + $2_1 | 0 | 0, $3_1 + 7 | 0 | 0);
   $341($0_1 | 0, $2_1 | 0);
   global$0 = $3_1 + 16 | 0;
   return;
  }
  $342($0_1 | 0);
  wasm2js_trap();
 }
 
 function $360($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = $370($2_1 + 15 | 0 | 0, $0_1 | 0, $1_1 | 0) | 0;
  global$0 = $2_1 + 16 | 0;
  return ($3_1 ? $1_1 : $0_1) | 0;
 }
 
 function $361($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $5_1 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    $4_1 = $312($0_1 | 0) | 0;
    $5_1 = $310($0_1 | 0) | 0;
    if (($4_1 - $5_1 | 0) >>> 0 < $2_1 >>> 0) {
     break label$2
    }
    if (!$2_1) {
     break label$1
    }
    $315($0_1 | 0, $2_1 | 0);
    $4_1 = $314($313($0_1 | 0) | 0 | 0) | 0;
    $336($4_1 + $5_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
    $2_1 = $5_1 + $2_1 | 0;
    $326($0_1 | 0, $2_1 | 0);
    HEAP8[($3_1 + 15 | 0) >> 0] = 0;
    $327($4_1 + $2_1 | 0 | 0, $3_1 + 15 | 0 | 0);
    break label$1;
   }
   $318($0_1 | 0, $4_1 | 0, ($2_1 - $4_1 | 0) + $5_1 | 0 | 0, $5_1 | 0, $5_1 | 0, 0 | 0, $2_1 | 0, $1_1 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $362($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $363($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP8[($2_1 + 15 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    $3_1 = $300($0_1 | 0) | 0;
    if ($3_1) {
     break label$2
    }
    $4_1 = 10;
    $1_1 = $320($0_1 | 0) | 0;
    break label$1;
   }
   $4_1 = ($322($0_1 | 0) | 0) + -1 | 0;
   $1_1 = $319($0_1 | 0) | 0;
  }
  label$3 : {
   label$4 : {
    label$5 : {
     if (($1_1 | 0) != ($4_1 | 0)) {
      break label$5
     }
     $357($0_1 | 0, $4_1 | 0, 1 | 0, $4_1 | 0, $4_1 | 0, 0 | 0, 0 | 0);
     $315($0_1 | 0, 1 | 0);
     $313($0_1 | 0) | 0;
     break label$4;
    }
    $315($0_1 | 0, 1 | 0);
    $313($0_1 | 0) | 0;
    if ($3_1) {
     break label$4
    }
    $4_1 = $324($0_1 | 0) | 0;
    $344($0_1 | 0, $1_1 + 1 | 0 | 0);
    break label$3;
   }
   $4_1 = $323($0_1 | 0) | 0;
   $340($0_1 | 0, $1_1 + 1 | 0 | 0);
  }
  $0_1 = $4_1 + $1_1 | 0;
  $327($0_1 | 0, $2_1 + 15 | 0 | 0);
  HEAP8[($2_1 + 14 | 0) >> 0] = 0;
  $327($0_1 + 1 | 0 | 0, $2_1 + 14 | 0 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $364($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $6_1 = 0, $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $2_1;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   $4_1 = $310($0_1 | 0) | 0;
   $5_1 = $314($313($0_1 | 0) | 0 | 0) | 0;
   $2_1 = $4_1 - $1_1 | 0;
   HEAP32[($3_1 + 8 | 0) >> 2] = $2_1;
   $6_1 = HEAP32[($311($3_1 + 12 | 0 | 0, $3_1 + 8 | 0 | 0) | 0) >> 2] | 0;
   HEAP32[($3_1 + 12 | 0) >> 2] = $6_1;
   label$2 : {
    if (($2_1 | 0) == ($6_1 | 0)) {
     break label$2
    }
    $1_1 = $5_1 + $1_1 | 0;
    $316($1_1 | 0, $1_1 + $6_1 | 0 | 0, $2_1 - $6_1 | 0 | 0) | 0;
    $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
   }
   $317($0_1 | 0, $5_1 | 0, $4_1 - $2_1 | 0 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
 }
 
 function $365($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $409($362($0_1 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $366($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $367($0_1 | 0, $1_1 | 0);
 }
 
 function $367($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  $368($2_1 + 12 | 0 | 0, $2_1 + 21 | 0 | 0, $2_1 + 32 | 0 | 0, $1_1 | 0);
  $369($0_1 | 0, $2_1 + 21 | 0 | 0, HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $2_1 + 32 | 0;
 }
 
 function $368($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $412($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $369($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $0_1 = $365($0_1 | 0, $3_1 + 15 | 0 | 0, $3_1 + 14 | 0 | 0) | 0;
  $413($0_1 | 0, $1_1 | 0, $2_1 | 0);
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $370($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return (HEAP32[$1_1 >> 2] | 0) >>> 0 < (HEAP32[$2_1 >> 2] | 0) >>> 0 | 0;
 }
 
 function $371($0_1) {
  $0_1 = $0_1 | 0;
  return $373($0_1 | 0) | 0 | 0;
 }
 
 function $372() {
  return -1 | 0;
 }
 
 function $373($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $374($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $375() {
  $291();
  wasm2js_trap();
 }
 
 function $376($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (!($377($1_1 | 0) | 0)) {
    break label$1
   }
   return $378($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  return $379($0_1 | 0) | 0 | 0;
 }
 
 function $377($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 >>> 0 > 8 >>> 0 | 0;
 }
 
 function $378($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $285($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $379($0_1) {
  $0_1 = $0_1 | 0;
  return $280($0_1 | 0) | 0 | 0;
 }
 
 function $380($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $381($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $382($3_1 + 8 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0);
  $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $382($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $383($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $383($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $384($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $384($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $385($4_1 + 24 | 0 | 0, $1_1 | 0, $2_1 | 0);
  $387($4_1 + 16 | 0 | 0, $4_1 + 12 | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, $386($3_1 | 0) | 0 | 0);
  HEAP32[($4_1 + 12 | 0) >> 2] = $388($1_1 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = $389($3_1 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  $390($0_1 | 0, $4_1 + 12 | 0 | 0, $4_1 + 8 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
 }
 
 function $385($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $391($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $386($0_1) {
  $0_1 = $0_1 | 0;
  return $393($0_1 | 0) | 0 | 0;
 }
 
 function $387($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $392($0_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
 }
 
 function $388($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $395($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $389($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $396($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $390($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $394($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
 }
 
 function $391($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $397($1_1 | 0) | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $397($2_1 | 0) | 0;
  $398($0_1 | 0, $3_1 + 12 | 0 | 0, $3_1 + 8 | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
 }
 
 function $392($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
  $2_1 = $2_1 - $1_1 | 0;
  $325($3_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = $3_1 + $2_1 | 0;
  $400($0_1 | 0, $4_1 + 12 | 0 | 0, $4_1 + 8 | 0 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $393($0_1) {
  $0_1 = $0_1 | 0;
  return $314($0_1 | 0) | 0 | 0;
 }
 
 function $394($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $395($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $402($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $396($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $0_1 + ($1_1 - ($314($0_1 | 0) | 0) | 0) | 0 | 0;
 }
 
 function $397($0_1) {
  $0_1 = $0_1 | 0;
  return $399($0_1 | 0) | 0 | 0;
 }
 
 function $398($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $399($0_1) {
  $0_1 = $0_1 | 0;
  return $299($0_1 | 0) | 0 | 0;
 }
 
 function $400($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $401($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
 }
 
 function $401($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $402($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $403($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $403($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $0_1 + ($1_1 - ($299($0_1 | 0) | 0) | 0) | 0 | 0;
 }
 
 function $404($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if (!($377($2_1 | 0) | 0)) {
    break label$1
   }
   $405($0_1 | 0, $1_1 | 0, $2_1 | 0);
   return;
  }
  $406($0_1 | 0, $1_1 | 0);
 }
 
 function $405($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $407($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $406($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $408($0_1 | 0, $1_1 | 0);
 }
 
 function $407($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $290($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $408($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $284($0_1 | 0, $1_1 | 0);
 }
 
 function $409($0_1) {
  $0_1 = $0_1 | 0;
  return $410($0_1 | 0) | 0 | 0;
 }
 
 function $410($0_1) {
  $0_1 = $0_1 | 0;
  return $411($0_1 | 0) | 0 | 0;
 }
 
 function $411($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $412($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = $414($3_1 | 0) | 0;
  label$1 : {
   if (($1_1 | 0) == ($2_1 | 0)) {
    break label$1
   }
   if (($3_1 | 0) > (-1 | 0)) {
    break label$1
   }
   HEAP8[$1_1 >> 0] = 45;
   $1_1 = $1_1 + 1 | 0;
   $4_1 = $415($4_1 | 0) | 0;
  }
  $416($0_1 | 0, $1_1 | 0, $2_1 | 0, $4_1 | 0);
 }
 
 function $413($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $433($0_1 | 0, $1_1 | 0, $2_1 | 0, $432($1_1 | 0, $2_1 | 0) | 0 | 0);
 }
 
 function $414($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $415($0_1) {
  $0_1 = $0_1 | 0;
  return 0 - $0_1 | 0 | 0;
 }
 
 function $416($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  label$1 : {
   label$2 : {
    $4_1 = $2_1 - $1_1 | 0;
    if (($4_1 | 0) > (9 | 0)) {
     break label$2
    }
    $5_1 = 61;
    if (($417($3_1 | 0) | 0 | 0) > ($4_1 | 0)) {
     break label$1
    }
   }
   $5_1 = 0;
   $2_1 = $418($1_1 | 0, $3_1 | 0) | 0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
  HEAP32[$0_1 >> 2] = $2_1;
 }
 
 function $417($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = Math_imul(32 - ($419($0_1 | 1 | 0 | 0) | 0) | 0, 1233) >> 12 | 0;
  return $1_1 + ((HEAP32[(($1_1 << 2 | 0) + 68e3 | 0) >> 2] | 0) >>> 0 <= $0_1 >>> 0) | 0 | 0;
 }
 
 function $418($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $420($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $419($0_1) {
  $0_1 = $0_1 | 0;
  return Math_clz32($0_1) | 0;
 }
 
 function $420($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if ($1_1 >>> 0 > 999999 >>> 0) {
    break label$1
   }
   label$2 : {
    if ($1_1 >>> 0 > 9999 >>> 0) {
     break label$2
    }
    label$3 : {
     if ($1_1 >>> 0 > 99 >>> 0) {
      break label$3
     }
     label$4 : {
      if ($1_1 >>> 0 > 9 >>> 0) {
       break label$4
      }
      return $421($0_1 | 0, $1_1 | 0) | 0 | 0;
     }
     return $422($0_1 | 0, $1_1 | 0) | 0 | 0;
    }
    label$5 : {
     if ($1_1 >>> 0 > 999 >>> 0) {
      break label$5
     }
     return $423($0_1 | 0, $1_1 | 0) | 0 | 0;
    }
    return $424($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   label$6 : {
    if ($1_1 >>> 0 > 99999 >>> 0) {
     break label$6
    }
    return $425($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   return $426($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  label$7 : {
   if ($1_1 >>> 0 > 99999999 >>> 0) {
    break label$7
   }
   label$8 : {
    if ($1_1 >>> 0 > 9999999 >>> 0) {
     break label$8
    }
    return $427($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   return $428($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  label$9 : {
   if ($1_1 >>> 0 > 999999999 >>> 0) {
    break label$9
   }
   return $429($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  return $430($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $421($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP8[$0_1 >> 0] = $1_1 + 48 | 0;
  return $0_1 + 1 | 0 | 0;
 }
 
 function $422($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $431(($1_1 << 1 | 0) + 68048 | 0 | 0, 2 | 0, $0_1 | 0) | 0 | 0;
 }
 
 function $423($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (100 >>> 0) | 0;
  return $422($421($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 100) | 0 | 0) | 0 | 0;
 }
 
 function $424($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (100 >>> 0) | 0;
  return $422($422($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 100) | 0 | 0) | 0 | 0;
 }
 
 function $425($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e4 >>> 0) | 0;
  return $424($421($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e4) | 0 | 0) | 0 | 0;
 }
 
 function $426($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e4 >>> 0) | 0;
  return $424($422($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e4) | 0 | 0) | 0 | 0;
 }
 
 function $427($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e6 >>> 0) | 0;
  return $426($421($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e6) | 0 | 0) | 0 | 0;
 }
 
 function $428($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e6 >>> 0) | 0;
  return $426($422($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e6) | 0 | 0) | 0 | 0;
 }
 
 function $429($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e8 >>> 0) | 0;
  return $428($421($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e8) | 0 | 0) | 0 | 0;
 }
 
 function $430($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e8 >>> 0) | 0;
  return $428($422($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e8) | 0 | 0) | 0 | 0;
 }
 
 function $431($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $381($0_1 | 0, $0_1 + $1_1 | 0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $432($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $434($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $433($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  label$1 : {
   if (($329($0_1 | 0) | 0) >>> 0 < $3_1 >>> 0) {
    break label$1
   }
   label$2 : {
    label$3 : {
     if (!($343($3_1 | 0) | 0)) {
      break label$3
     }
     $344($0_1 | 0, $3_1 | 0);
     $5_1 = $324($0_1 | 0) | 0;
     break label$2;
    }
    $334($4_1 + 8 | 0 | 0, $333($0_1 | 0) | 0 | 0, ($331($3_1 | 0) | 0) + 1 | 0 | 0);
    $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    $335($5_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    $338($0_1 | 0, $5_1 | 0);
    $339($0_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    $340($0_1 | 0, $3_1 | 0);
   }
   label$4 : {
    label$5 : while (1) {
     if (($1_1 | 0) == ($2_1 | 0)) {
      break label$4
     }
     $327($5_1 | 0, $1_1 | 0);
     $5_1 = $5_1 + 1 | 0;
     $1_1 = $1_1 + 1 | 0;
     continue label$5;
    };
   }
   HEAP8[($4_1 + 7 | 0) >> 0] = 0;
   $327($5_1 | 0, $4_1 + 7 | 0 | 0);
   $341($0_1 | 0, $3_1 | 0);
   global$0 = $4_1 + 16 | 0;
   return;
  }
  $342($0_1 | 0);
  wasm2js_trap();
 }
 
 function $434($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $1_1 - $0_1 | 0 | 0;
 }
 
 function $435($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $436($0_1) {
  $0_1 = $0_1 | 0;
  return fimport$17($435(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $437($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  HEAP32[($271() | 0) >> 2] = $0_1;
  return -1 | 0;
 }
 
 function $438($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $8_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 32 | 0;
  global$0 = $3_1;
  $4_1 = HEAP32[($0_1 + 28 | 0) >> 2] | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  $5_1 = HEAP32[($0_1 + 20 | 0) >> 2] | 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = $2_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
  $1_1 = $5_1 - $4_1 | 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
  $6_1 = $1_1 + $2_1 | 0;
  $4_1 = $3_1 + 16 | 0;
  $7_1 = 2;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (!($437(fimport$18(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $3_1 + 16 | 0 | 0, 2 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        break label$5
       }
       $5_1 = $4_1;
       break label$4;
      }
      label$6 : while (1) {
       $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
       if (($6_1 | 0) == ($1_1 | 0)) {
        break label$3
       }
       label$7 : {
        if (($1_1 | 0) > (-1 | 0)) {
         break label$7
        }
        $5_1 = $4_1;
        break label$2;
       }
       $8_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
       $9_1 = $1_1 >>> 0 > $8_1 >>> 0;
       $5_1 = $4_1 + ($9_1 << 3 | 0) | 0;
       $8_1 = $1_1 - ($9_1 ? $8_1 : 0) | 0;
       HEAP32[$5_1 >> 2] = (HEAP32[$5_1 >> 2] | 0) + $8_1 | 0;
       $4_1 = $4_1 + ($9_1 ? 12 : 4) | 0;
       HEAP32[$4_1 >> 2] = (HEAP32[$4_1 >> 2] | 0) - $8_1 | 0;
       $6_1 = $6_1 - $1_1 | 0;
       $4_1 = $5_1;
       $7_1 = $7_1 - $9_1 | 0;
       if (!($437(fimport$18(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $4_1 | 0, $7_1 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
        continue label$6
       }
       break label$6;
      };
     }
     if (($6_1 | 0) != (-1 | 0)) {
      break label$2
     }
    }
    $1_1 = HEAP32[($0_1 + 44 | 0) >> 2] | 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 20 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 16 | 0) >> 2] = $1_1 + (HEAP32[($0_1 + 48 | 0) >> 2] | 0) | 0;
    $1_1 = $2_1;
    break label$1;
   }
   $1_1 = 0;
   HEAP32[($0_1 + 28 | 0) >> 2] = 0;
   HEAP32[($0_1 + 16 | 0) >> 2] = 0;
   HEAP32[($0_1 + 20 | 0) >> 2] = 0;
   HEAP32[$0_1 >> 2] = HEAP32[$0_1 >> 2] | 0 | 32 | 0;
   if (($7_1 | 0) == (2 | 0)) {
    break label$1
   }
   $1_1 = $2_1 - (HEAP32[($5_1 + 4 | 0) >> 2] | 0) | 0;
  }
  global$0 = $3_1 + 32 | 0;
  return $1_1 | 0;
 }
 
 function $439($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $1$hi;
  $2_1 = $437($505($0_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 & 255 | 0 | 0, $3_1 + 8 | 0 | 0) | 0 | 0) | 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
  $1_1 = i64toi32_i32$0;
  $1$hi = i64toi32_i32$1;
  global$0 = i64toi32_i32$2 + 16 | 0;
  i64toi32_i32$1 = -1;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$3 = $2_1 ? -1 : $1_1;
  i64toi32_i32$2 = $2_1 ? i64toi32_i32$1 : i64toi32_i32$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$3 | 0;
 }
 
 function $440($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $439(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $441($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[$0_1 >> 2] | 0 | 0;
 }
 
 function $442() {
  return $441(69912 | 0) | 0 | 0;
 }
 
 function $443($0_1) {
  $0_1 = $0_1 | 0;
  return ($273($0_1 + 80 | 0 | 0) | 0) + 80 | 0 | 0;
 }
 
 function $444($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0;
  $2_1 = HEAPU8[$1_1 >> 0] | 0;
  label$1 : {
   $3_1 = HEAPU8[$0_1 >> 0] | 0;
   if (!$3_1) {
    break label$1
   }
   if (($3_1 | 0) != ($2_1 & 255 | 0 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    $2_1 = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    $3_1 = HEAPU8[($0_1 + 1 | 0) >> 0] | 0;
    if (!$3_1) {
     break label$1
    }
    $1_1 = $1_1 + 1 | 0;
    $0_1 = $0_1 + 1 | 0;
    if (($3_1 | 0) == ($2_1 & 255 | 0 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  return $3_1 - ($2_1 & 255 | 0) | 0 | 0;
 }
 
 function $445($0_1) {
  $0_1 = $0_1 | 0;
  return $489($0_1 | 0) | 0 | 0;
 }
 
 function $446($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $447($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $448($0_1) {
  $0_1 = $0_1 | 0;
  $284($445($0_1 | 0) | 0 | 0, 8 | 0);
 }
 
 function $449($0_1) {
  $0_1 = $0_1 | 0;
  $284($445($0_1 | 0) | 0 | 0, 8 | 0);
 }
 
 function $450($0_1) {
  $0_1 = $0_1 | 0;
  $284($445($0_1 | 0) | 0 | 0, 12 | 0);
 }
 
 function $451($0_1) {
  $0_1 = $0_1 | 0;
  $284($445($0_1 | 0) | 0 | 0, 16 | 0);
 }
 
 function $452($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $453($0_1 | 0, $1_1 | 0, 0 | 0) | 0 | 0;
 }
 
 function $453($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if ($2_1) {
    break label$1
   }
   return (HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0) == (HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) | 0;
  }
  label$2 : {
   if (($0_1 | 0) != ($1_1 | 0)) {
    break label$2
   }
   return 1 | 0;
  }
  return !($444($454($0_1 | 0) | 0 | 0, $454($1_1 | 0) | 0 | 0) | 0) | 0;
 }
 
 function $454($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $455($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 64 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  label$1 : {
   label$2 : {
    if ($453($0_1 | 0, $1_1 | 0, 0 | 0) | 0) {
     break label$2
    }
    $4_1 = 0;
    if (!$1_1) {
     break label$2
    }
    $4_1 = 0;
    $1_1 = $456($1_1 | 0, 68284 | 0, 68332 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$2
    }
    $4_1 = HEAP32[$2_1 >> 2] | 0;
    if (!$4_1) {
     break label$1
    }
    $267($3_1 + 8 | 0 | 0, 0 | 0, 56 | 0) | 0;
    HEAP8[($3_1 + 59 | 0) >> 0] = 1;
    HEAP32[($3_1 + 16 | 0) >> 2] = -1;
    HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
    HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
    HEAP32[($3_1 + 52 | 0) >> 2] = 1;
    FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($1_1, $3_1 + 4 | 0, $4_1, 1);
    label$3 : {
     $4_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
     if (($4_1 | 0) != (1 | 0)) {
      break label$3
     }
     HEAP32[$2_1 >> 2] = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
    }
    $4_1 = ($4_1 | 0) == (1 | 0);
   }
   global$0 = $3_1 + 64 | 0;
   return $4_1 | 0;
  }
  fimport$1(66708 | 0, 65673 | 0, 473 | 0, 65790 | 0);
  wasm2js_trap();
 }
 
 function $456($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $6_1 = 0, $5_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $457($4_1 + 4 | 0 | 0, $0_1 | 0);
  $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  $6_1 = $453($5_1 | 0, $2_1 | 0, 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!$6_1) {
     break label$2
    }
    $6_1 = $458($0_1 | 0, $7_1 | 0, $1_1 | 0, $2_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $3_1 | 0) | 0;
    break label$1;
   }
   $6_1 = $459($0_1 | 0, $7_1 | 0, $2_1 | 0, $5_1 | 0, $3_1 | 0) | 0;
   if ($6_1) {
    break label$1
   }
   $6_1 = $460($0_1 | 0, $7_1 | 0, $1_1 | 0, $2_1 | 0, $5_1 | 0, $3_1 | 0) | 0;
  }
  global$0 = $4_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $457($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = HEAP32[$1_1 >> 2] | 0;
  $3_1 = HEAP32[($2_1 + -8 | 0) >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $1_1 + $3_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($2_1 + -4 | 0) >> 2] | 0;
 }
 
 function $458($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $7_1 = 0;
  $6_1 = global$0 - 64 | 0;
  global$0 = $6_1;
  $7_1 = 0;
  label$1 : {
   label$2 : {
    if (($5_1 | 0) < (0 | 0)) {
     break label$2
    }
    $7_1 = (0 - $5_1 | 0 | 0) == ($4_1 | 0) ? $1_1 : 0;
    break label$1;
   }
   if (($5_1 | 0) == (-2 | 0)) {
    break label$1
   }
   $7_1 = $6_1 + 28 | 0;
   i64toi32_i32$1 = $7_1;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $6_1 + 36 | 0;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $6_1 + 44 | 0;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $6_1;
   i64toi32_i32$0 = 0;
   HEAP32[($6_1 + 20 | 0) >> 2] = 0;
   HEAP32[($6_1 + 24 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($6_1 + 16 | 0) >> 2] = $5_1;
   HEAP32[($6_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[($6_1 + 8 | 0) >> 2] = $0_1;
   HEAP32[($6_1 + 4 | 0) >> 2] = $3_1;
   HEAP32[($6_1 + 60 | 0) >> 2] = 0;
   i64toi32_i32$1 = $6_1;
   i64toi32_i32$0 = 16777216;
   HEAP32[($6_1 + 52 | 0) >> 2] = 1;
   HEAP32[($6_1 + 56 | 0) >> 2] = i64toi32_i32$0;
   FUNCTION_TABLE[HEAP32[((HEAP32[$3_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($3_1, $6_1 + 4 | 0, $1_1, $1_1, 1, 0);
   $7_1 = (HEAP32[$7_1 >> 2] | 0 | 0) == (1 | 0) ? $1_1 : 0;
  }
  global$0 = $6_1 + 64 | 0;
  return $7_1 | 0;
 }
 
 function $459($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $6_1 = 0;
  $5_1 = global$0 - 64 | 0;
  global$0 = $5_1;
  $6_1 = 0;
  label$1 : {
   if (($4_1 | 0) < (0 | 0)) {
    break label$1
   }
   $0_1 = $0_1 - $4_1 | 0;
   if (($0_1 | 0) < ($1_1 | 0)) {
    break label$1
   }
   $6_1 = $5_1 + 28 | 0;
   i64toi32_i32$1 = $6_1;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $5_1 + 36 | 0;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $5_1 + 44 | 0;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $5_1;
   i64toi32_i32$0 = 0;
   HEAP32[($5_1 + 20 | 0) >> 2] = 0;
   HEAP32[($5_1 + 24 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($5_1 + 16 | 0) >> 2] = $4_1;
   HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
   HEAP32[($5_1 + 4 | 0) >> 2] = $3_1;
   HEAP32[($5_1 + 60 | 0) >> 2] = 0;
   i64toi32_i32$1 = $5_1;
   i64toi32_i32$0 = 16777216;
   HEAP32[($5_1 + 52 | 0) >> 2] = 1;
   HEAP32[($5_1 + 56 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($5_1 + 8 | 0) >> 2] = $0_1;
   FUNCTION_TABLE[HEAP32[((HEAP32[$3_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($3_1, $5_1 + 4 | 0, $1_1, $1_1, 1, 0);
   $6_1 = HEAP32[$6_1 >> 2] | 0 ? $0_1 : 0;
  }
  global$0 = $5_1 + 64 | 0;
  return $6_1 | 0;
 }
 
 function $460($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0, wasm2js_i32$3 = 0, wasm2js_i32$4 = 0, wasm2js_i32$5 = 0, wasm2js_i32$6 = 0, wasm2js_i32$7 = 0, wasm2js_i32$8 = 0;
  $6_1 = global$0 - 64 | 0;
  global$0 = $6_1;
  HEAP32[($6_1 + 16 | 0) >> 2] = $5_1;
  HEAP32[($6_1 + 12 | 0) >> 2] = $2_1;
  HEAP32[($6_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($6_1 + 4 | 0) >> 2] = $3_1;
  $5_1 = 0;
  $267($6_1 + 20 | 0 | 0, 0 | 0, 39 | 0) | 0;
  HEAP32[($6_1 + 60 | 0) >> 2] = 0;
  HEAP8[($6_1 + 59 | 0) >> 0] = 1;
  FUNCTION_TABLE[HEAP32[((HEAP32[$4_1 >> 2] | 0) + 24 | 0) >> 2] | 0 | 0]($4_1, $6_1 + 4 | 0, $1_1, 1, 0);
  label$1 : {
   label$2 : {
    switch (HEAP32[($6_1 + 40 | 0) >> 2] | 0 | 0) {
    case 0:
     $5_1 = (wasm2js_i32$0 = (wasm2js_i32$3 = (wasm2js_i32$6 = HEAP32[($6_1 + 24 | 0) >> 2] | 0, wasm2js_i32$7 = 0, wasm2js_i32$8 = (HEAP32[($6_1 + 36 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$8 ? wasm2js_i32$6 : wasm2js_i32$7), wasm2js_i32$4 = 0, wasm2js_i32$5 = (HEAP32[($6_1 + 32 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$5 ? wasm2js_i32$3 : wasm2js_i32$4), wasm2js_i32$1 = 0, wasm2js_i32$2 = (HEAP32[($6_1 + 44 | 0) >> 2] | 0 | 0) == (1 | 0), wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
     break label$1;
    case 1:
     break label$2;
    default:
     break label$1;
    };
   }
   label$4 : {
    if ((HEAP32[($6_1 + 28 | 0) >> 2] | 0 | 0) == (1 | 0)) {
     break label$4
    }
    if (HEAP32[($6_1 + 44 | 0) >> 2] | 0) {
     break label$1
    }
    if ((HEAP32[($6_1 + 32 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
    if ((HEAP32[($6_1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$1
    }
   }
   $5_1 = HEAP32[($6_1 + 20 | 0) >> 2] | 0;
  }
  global$0 = $6_1 + 64 | 0;
  return $5_1 | 0;
 }
 
 function $461($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  label$1 : {
   $4_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
   if ($4_1) {
    break label$1
   }
   HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
   HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 36 | 0) >> 2] = 1;
   HEAP32[($1_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
   return;
  }
  label$2 : {
   label$3 : {
    if ((HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0) != (HEAP32[($1_1 + 56 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    if ((HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0) != ($2_1 | 0)) {
     break label$3
    }
    if ((HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$2
    }
    HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
    return;
   }
   HEAP8[($1_1 + 54 | 0) >> 0] = 1;
   HEAP32[($1_1 + 24 | 0) >> 2] = 2;
   HEAP32[($1_1 + 36 | 0) >> 2] = $4_1 + 1 | 0;
  }
 }
 
 function $462($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $461($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
  }
 }
 
 function $463($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $461($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1);
 }
 
 function $464($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = 1;
  label$1 : {
   label$2 : {
    if ((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 24 | 0) {
     break label$2
    }
    $3_1 = 0;
    if (!$1_1) {
     break label$1
    }
    $4_1 = $456($1_1 | 0, 68284 | 0, 68380 | 0, 0 | 0) | 0;
    if (!$4_1) {
     break label$1
    }
    $3_1 = ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 24 | 0 | 0) != (0 | 0);
   }
   $3_1 = $453($0_1 | 0, $1_1 | 0, $3_1 | 0) | 0;
  }
  return $3_1 | 0;
 }
 
 function $465($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $6_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $3_1 = global$0 - 64 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    if (!($453($1_1 | 0, 68648 | 0, 0 | 0) | 0)) {
     break label$2
    }
    HEAP32[$2_1 >> 2] = 0;
    $4_1 = 1;
    break label$1;
   }
   label$3 : {
    if (!($464($0_1 | 0, $1_1 | 0, $1_1 | 0) | 0)) {
     break label$3
    }
    $4_1 = 1;
    $1_1 = HEAP32[$2_1 >> 2] | 0;
    if (!$1_1) {
     break label$1
    }
    HEAP32[$2_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
    break label$1;
   }
   label$4 : {
    if (!$1_1) {
     break label$4
    }
    $4_1 = 0;
    $1_1 = $456($1_1 | 0, 68284 | 0, 68428 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
    label$5 : {
     $5_1 = HEAP32[$2_1 >> 2] | 0;
     if (!$5_1) {
      break label$5
     }
     HEAP32[$2_1 >> 2] = HEAP32[$5_1 >> 2] | 0;
    }
    $5_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    $6_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    if (($5_1 & ($6_1 ^ -1 | 0) | 0) & 7 | 0) {
     break label$1
    }
    if ((($5_1 ^ -1 | 0) & $6_1 | 0) & 96 | 0) {
     break label$1
    }
    $4_1 = 1;
    if ($453(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0) {
     break label$1
    }
    label$6 : {
     if (!($453(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, 68636 | 0, 0 | 0) | 0)) {
      break label$6
     }
     $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
     if (!$1_1) {
      break label$1
     }
     $4_1 = !($456($1_1 | 0, 68284 | 0, 68480 | 0, 0 | 0) | 0);
     break label$1;
    }
    $5_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
    if (!$5_1) {
     break label$4
    }
    $4_1 = 0;
    label$7 : {
     $6_1 = $456($5_1 | 0, 68284 | 0, 68428 | 0, 0 | 0) | 0;
     if (!$6_1) {
      break label$7
     }
     if (!((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 1 | 0)) {
      break label$1
     }
     $4_1 = $466($6_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
     break label$1;
    }
    $4_1 = 0;
    label$8 : {
     $6_1 = $456($5_1 | 0, 68284 | 0, 68540 | 0, 0 | 0) | 0;
     if (!$6_1) {
      break label$8
     }
     if (!((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 1 | 0)) {
      break label$1
     }
     $4_1 = $467($6_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
     break label$1;
    }
    $4_1 = 0;
    $0_1 = $456($5_1 | 0, 68284 | 0, 68332 | 0, 0 | 0) | 0;
    if (!$0_1) {
     break label$1
    }
    $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
    if (!$1_1) {
     break label$1
    }
    $4_1 = 0;
    $1_1 = $456($1_1 | 0, 68284 | 0, 68332 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
    $4_1 = HEAP32[$2_1 >> 2] | 0;
    $267($3_1 + 8 | 0 | 0, 0 | 0, 56 | 0) | 0;
    HEAP8[($3_1 + 59 | 0) >> 0] = ($4_1 | 0) != (0 | 0);
    HEAP32[($3_1 + 16 | 0) >> 2] = -1;
    HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
    HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
    HEAP32[($3_1 + 52 | 0) >> 2] = 1;
    FUNCTION_TABLE[HEAP32[((HEAP32[$1_1 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($1_1, $3_1 + 4 | 0, $4_1, 1);
    label$9 : {
     $1_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
     if (($1_1 | 0) != (1 | 0)) {
      break label$9
     }
     HEAP32[$2_1 >> 2] = (wasm2js_i32$0 = HEAP32[($3_1 + 20 | 0) >> 2] | 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = $4_1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
    }
    $4_1 = ($1_1 | 0) == (1 | 0);
    break label$1;
   }
   $4_1 = 0;
  }
  global$0 = $3_1 + 64 | 0;
  return $4_1 | 0;
 }
 
 function $466($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  label$1 : {
   label$2 : while (1) {
    label$3 : {
     if ($1_1) {
      break label$3
     }
     return 0 | 0;
    }
    $2_1 = 0;
    $1_1 = $456($1_1 | 0, 68284 | 0, 68428 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
    if ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) & ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) ^ -1 | 0) | 0) {
     break label$1
    }
    label$4 : {
     if (!($453(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
      break label$4
     }
     return 1 | 0;
    }
    if (!((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 1 | 0)) {
     break label$1
    }
    $3_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
    if (!$3_1) {
     break label$1
    }
    label$5 : {
     $0_1 = $456($3_1 | 0, 68284 | 0, 68428 | 0, 0 | 0) | 0;
     if (!$0_1) {
      break label$5
     }
     $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
     continue label$2;
    }
    break label$2;
   };
   $2_1 = 0;
   $0_1 = $456($3_1 | 0, 68284 | 0, 68540 | 0, 0 | 0) | 0;
   if (!$0_1) {
    break label$1
   }
   $2_1 = $467($0_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  return $2_1 | 0;
 }
 
 function $467($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = 0;
  label$1 : {
   if (!$1_1) {
    break label$1
   }
   $1_1 = $456($1_1 | 0, 68284 | 0, 68540 | 0, 0 | 0) | 0;
   if (!$1_1) {
    break label$1
   }
   if ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) & ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) ^ -1 | 0) | 0) {
    break label$1
   }
   $2_1 = 0;
   if (!($453(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $2_1 = $453(HEAP32[($0_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0, 0 | 0) | 0;
  }
  return $2_1 | 0;
 }
 
 function $468($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  HEAP8[($1_1 + 53 | 0) >> 0] = 1;
  label$1 : {
   if ((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) != ($3_1 | 0)) {
    break label$1
   }
   HEAP8[($1_1 + 52 | 0) >> 0] = 1;
   label$2 : {
    label$3 : {
     $3_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
     if ($3_1) {
      break label$3
     }
     HEAP32[($1_1 + 36 | 0) >> 2] = 1;
     HEAP32[($1_1 + 24 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
     if (($4_1 | 0) != (1 | 0)) {
      break label$1
     }
     if ((HEAP32[($1_1 + 48 | 0) >> 2] | 0 | 0) == (1 | 0)) {
      break label$2
     }
     break label$1;
    }
    label$4 : {
     if (($3_1 | 0) != ($2_1 | 0)) {
      break label$4
     }
     label$5 : {
      $3_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
      if (($3_1 | 0) != (2 | 0)) {
       break label$5
      }
      HEAP32[($1_1 + 24 | 0) >> 2] = $4_1;
      $3_1 = $4_1;
     }
     if ((HEAP32[($1_1 + 48 | 0) >> 2] | 0 | 0) != (1 | 0)) {
      break label$1
     }
     if (($3_1 | 0) == (1 | 0)) {
      break label$2
     }
     break label$1;
    }
    HEAP32[($1_1 + 36 | 0) >> 2] = (HEAP32[($1_1 + 36 | 0) >> 2] | 0) + 1 | 0;
   }
   HEAP8[($1_1 + 54 | 0) >> 0] = 1;
  }
 }
 
 function $469($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if ((HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0) != ($2_1 | 0)) {
    break label$1
   }
   if ((HEAP32[($1_1 + 28 | 0) >> 2] | 0 | 0) == (1 | 0)) {
    break label$1
   }
   HEAP32[($1_1 + 28 | 0) >> 2] = $3_1;
  }
 }
 
 function $470($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $4_1 | 0) | 0)) {
    break label$1
   }
   $469($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  label$2 : {
   label$3 : {
    if (!($453($0_1 | 0, HEAP32[$1_1 >> 2] | 0 | 0, $4_1 | 0) | 0)) {
     break label$3
    }
    label$4 : {
     label$5 : {
      if ((HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0) == ($2_1 | 0)) {
       break label$5
      }
      if ((HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0) != ($2_1 | 0)) {
       break label$4
      }
     }
     if (($3_1 | 0) != (1 | 0)) {
      break label$2
     }
     HEAP32[($1_1 + 32 | 0) >> 2] = 1;
     return;
    }
    HEAP32[($1_1 + 32 | 0) >> 2] = $3_1;
    label$6 : {
     if ((HEAP32[($1_1 + 44 | 0) >> 2] | 0 | 0) == (4 | 0)) {
      break label$6
     }
     HEAP16[($1_1 + 52 | 0) >> 1] = 0;
     $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $2_1, 1, $4_1);
     label$7 : {
      if ((HEAPU8[($1_1 + 53 | 0) >> 0] | 0 | 0) != (1 | 0)) {
       break label$7
      }
      HEAP32[($1_1 + 44 | 0) >> 2] = 3;
      if (!(HEAPU8[($1_1 + 52 | 0) >> 0] | 0)) {
       break label$6
      }
      break label$2;
     }
     HEAP32[($1_1 + 44 | 0) >> 2] = 4;
    }
    HEAP32[($1_1 + 20 | 0) >> 2] = $2_1;
    HEAP32[($1_1 + 40 | 0) >> 2] = (HEAP32[($1_1 + 40 | 0) >> 2] | 0) + 1 | 0;
    if ((HEAP32[($1_1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$2
    }
    if ((HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$2
    }
    HEAP8[($1_1 + 54 | 0) >> 0] = 1;
    return;
   }
   $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
   FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 24 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1, $4_1);
  }
 }
 
 function $471($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $4_1 | 0) | 0)) {
    break label$1
   }
   $469($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  label$2 : {
   if (!($453($0_1 | 0, HEAP32[$1_1 >> 2] | 0 | 0, $4_1 | 0) | 0)) {
    break label$2
   }
   label$3 : {
    label$4 : {
     if ((HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0) == ($2_1 | 0)) {
      break label$4
     }
     if ((HEAP32[($1_1 + 20 | 0) >> 2] | 0 | 0) != ($2_1 | 0)) {
      break label$3
     }
    }
    if (($3_1 | 0) != (1 | 0)) {
     break label$2
    }
    HEAP32[($1_1 + 32 | 0) >> 2] = 1;
    return;
   }
   HEAP32[($1_1 + 20 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 32 | 0) >> 2] = $3_1;
   HEAP32[($1_1 + 40 | 0) >> 2] = (HEAP32[($1_1 + 40 | 0) >> 2] | 0) + 1 | 0;
   label$5 : {
    if ((HEAP32[($1_1 + 36 | 0) >> 2] | 0 | 0) != (1 | 0)) {
     break label$5
    }
    if ((HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) != (2 | 0)) {
     break label$5
    }
    HEAP8[($1_1 + 54 | 0) >> 0] = 1;
   }
   HEAP32[($1_1 + 44 | 0) >> 2] = 4;
  }
 }
 
 function $472($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $5_1 | 0) | 0)) {
    break label$1
   }
   $468($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
   return;
  }
  $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1, $4_1, $5_1);
 }
 
 function $473($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  label$1 : {
   if (!($453($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $5_1 | 0) | 0)) {
    break label$1
   }
   $468($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
  }
 }
 
 function $474($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  return ($456($0_1 | 0, 68284 | 0, 68428 | 0, 0 | 0) | 0 | 0) != (0 | 0) | 0;
 }
 
 function $475($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $476($0_1) {
  $0_1 = $0_1 | 0;
  $475($0_1 | 0) | 0;
  $284($0_1 | 0, 4 | 0);
 }
 
 function $477($0_1) {
  $0_1 = $0_1 | 0;
  return 65740 | 0;
 }
 
 function $478($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[$0_1 >> 2] = 69028 + 8 | 0;
  $479($0_1 + 4 | 0 | 0) | 0;
  return $475($0_1 | 0) | 0 | 0;
 }
 
 function $479($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  label$1 : {
   if (!($297($0_1 | 0) | 0)) {
    break label$1
   }
   $1_1 = $480(HEAP32[$0_1 >> 2] | 0 | 0) | 0;
   if (($481($1_1 + 8 | 0 | 0) | 0 | 0) > (-1 | 0)) {
    break label$1
   }
   $283($1_1 | 0);
  }
  return $0_1 | 0;
 }
 
 function $480($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 + -12 | 0 | 0;
 }
 
 function $481($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = (HEAP32[$0_1 >> 2] | 0) + -1 | 0;
  HEAP32[$0_1 >> 2] = $1_1;
  return $1_1 | 0;
 }
 
 function $482($0_1) {
  $0_1 = $0_1 | 0;
  $478($0_1 | 0) | 0;
  $284($0_1 | 0, 8 | 0);
 }
 
 function $483($0_1) {
  $0_1 = $0_1 | 0;
  return $484($0_1 + 4 | 0 | 0) | 0 | 0;
 }
 
 function $484($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[$0_1 >> 2] | 0 | 0;
 }
 
 function $485($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[$0_1 >> 2] = 69048 + 8 | 0;
  $479($0_1 + 4 | 0 | 0) | 0;
  return $475($0_1 | 0) | 0 | 0;
 }
 
 function $486($0_1) {
  $0_1 = $0_1 | 0;
  $485($0_1 | 0) | 0;
  $284($0_1 | 0, 8 | 0);
 }
 
 function $487($0_1) {
  $0_1 = $0_1 | 0;
  return $484($0_1 + 4 | 0 | 0) | 0 | 0;
 }
 
 function $488($0_1) {
  $0_1 = $0_1 | 0;
  $478($0_1 | 0) | 0;
  $284($0_1 | 0, 8 | 0);
 }
 
 function $489($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $490($0_1) {
  $0_1 = $0_1 | 0;
  global$1 = $0_1;
 }
 
 function $492() {
  global$3 = 65536;
  global$2 = (0 + 15 | 0) & -16 | 0;
 }
 
 function $493() {
  return global$0 - global$2 | 0 | 0;
 }
 
 function $494() {
  return global$3 | 0;
 }
 
 function $495() {
  return global$2 | 0;
 }
 
 function $496($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   $1_1 = 0;
   label$2 : {
    if (!(HEAP32[(0 + 69900 | 0) >> 2] | 0)) {
     break label$2
    }
    $1_1 = $496(HEAP32[(0 + 69900 | 0) >> 2] | 0 | 0) | 0;
   }
   label$3 : {
    if (!(HEAP32[(0 + 69360 | 0) >> 2] | 0)) {
     break label$3
    }
    $1_1 = $496(HEAP32[(0 + 69360 | 0) >> 2] | 0 | 0) | 0 | $1_1 | 0;
   }
   label$4 : {
    $0_1 = HEAP32[($307() | 0) >> 2] | 0;
    if (!$0_1) {
     break label$4
    }
    label$5 : while (1) {
     $2_1 = 0;
     label$6 : {
      if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) < (0 | 0)) {
       break label$6
      }
      $2_1 = $303($0_1 | 0) | 0;
     }
     label$7 : {
      if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
       break label$7
      }
      $1_1 = $496($0_1 | 0) | 0 | $1_1 | 0;
     }
     label$8 : {
      if (!$2_1) {
       break label$8
      }
      $304($0_1 | 0);
     }
     $0_1 = HEAP32[($0_1 + 56 | 0) >> 2] | 0;
     if ($0_1) {
      continue label$5
     }
     break label$5;
    };
   }
   $308();
   return $1_1 | 0;
  }
  label$9 : {
   label$10 : {
    if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) >= (0 | 0)) {
     break label$10
    }
    $2_1 = 1;
    break label$9;
   }
   $2_1 = !($303($0_1 | 0) | 0);
  }
  label$11 : {
   label$12 : {
    label$13 : {
     if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
      break label$13
     }
     FUNCTION_TABLE[HEAP32[($0_1 + 36 | 0) >> 2] | 0 | 0]($0_1, 0, 0) | 0;
     if (HEAP32[($0_1 + 20 | 0) >> 2] | 0) {
      break label$13
     }
     $1_1 = -1;
     if (!$2_1) {
      break label$12
     }
     break label$11;
    }
    label$14 : {
     $1_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
     $3_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
     if (($1_1 | 0) == ($3_1 | 0)) {
      break label$14
     }
     i64toi32_i32$1 = $1_1 - $3_1 | 0;
     i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
     i64toi32_i32$0 = FUNCTION_TABLE[HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0]($0_1, i64toi32_i32$1, i64toi32_i32$0, 1) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    }
    $1_1 = 0;
    HEAP32[($0_1 + 28 | 0) >> 2] = 0;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$1 = 0;
    HEAP32[($0_1 + 16 | 0) >> 2] = 0;
    HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$0 = $0_1;
    i64toi32_i32$1 = 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = 0;
    HEAP32[($0_1 + 8 | 0) >> 2] = i64toi32_i32$1;
    if ($2_1) {
     break label$11
    }
   }
   $304($0_1 | 0);
  }
  return $1_1 | 0;
 }
 
 function $497($0_1) {
  $0_1 = $0_1 | 0;
  global$0 = $0_1;
 }
 
 function $498($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = (global$0 - $0_1 | 0) & -16 | 0;
  global$0 = $1_1;
  return $1_1 | 0;
 }
 
 function $499() {
  return global$0 | 0;
 }
 
 function $500($0_1, $1_1, $2_1, $2$hi, $3_1, $3$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  $3$hi = $3$hi | 0;
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  return FUNCTION_TABLE[$0_1 | 0]($1_1, $2_1, i64toi32_i32$0, $3_1, $3$hi) | 0 | 0;
 }
 
 function $501($0_1, $1_1, $2_1, $2$hi, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = FUNCTION_TABLE[$0_1 | 0]($1_1, $2_1, i64toi32_i32$0, $3_1) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $502($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $23_1 = 0, $24_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, $9$hi = 0, $12$hi = 0, $13_1 = 0, $13$hi = 0, $15_1 = 0, $15$hi = 0, $18$hi = 0, $19_1 = 0, $19$hi = 0;
  $6_1 = $0_1;
  $7_1 = $1_1;
  i64toi32_i32$0 = 0;
  $9_1 = $2_1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $23_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $23_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$0 = $9_1;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $23_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $13_1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  $13$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  $15_1 = $4_1;
  $15$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $18$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $15$hi;
  i64toi32_i32$2 = $15_1;
  i64toi32_i32$1 = $18$hi;
  i64toi32_i32$3 = $24_1;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  $19_1 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $13$hi;
  i64toi32_i32$2 = $19$hi;
  return $500($6_1 | 0, $7_1 | 0, $13_1 | 0, i64toi32_i32$1 | 0, $19_1 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function $503($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $17_1 = 0, $18_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, $9$hi = 0, $12$hi = 0, $5_1 = 0, $5$hi = 0;
  $6_1 = $0_1;
  $7_1 = $1_1;
  i64toi32_i32$0 = 0;
  $9_1 = $2_1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $17_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $17_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$0 = $9_1;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $17_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$2 = $501($6_1 | 0, $7_1 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $4_1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5_1 = i64toi32_i32$2;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $490($18_1 | 0);
  i64toi32_i32$2 = $5$hi;
  return $5_1 | 0;
 }
 
 function $504($0_1, $1_1, $2_1, $3_1, $3$hi, $4_1, $4$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $3$hi = $3$hi | 0;
  $4_1 = $4_1 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $18_1 = 0, $19_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0, $12_1 = 0, $14_1 = 0;
  $5_1 = $0_1;
  $6_1 = $1_1;
  $7_1 = $2_1;
  i64toi32_i32$0 = $3$hi;
  $9_1 = $3_1;
  i64toi32_i32$2 = $3_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $18_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $12_1 = $18_1;
  i64toi32_i32$1 = $4$hi;
  $14_1 = $4_1;
  i64toi32_i32$0 = $4_1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $19_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $19_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  fimport$19($5_1 | 0, $6_1 | 0, $7_1 | 0, $9_1 | 0, $12_1 | 0, $14_1 | 0, $19_1 | 0);
 }
 
 function $505($0_1, $1_1, $1$hi, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $12_1 = 0, $4_1 = 0, $6_1 = 0, i64toi32_i32$2 = 0;
  $4_1 = $0_1;
  i64toi32_i32$0 = $1$hi;
  $6_1 = $1_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $12_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $12_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  return fimport$20($4_1 | 0, $6_1 | 0, $12_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4sdiv3Div3div17he78fc483e41d7ec7E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$2$hi = 0, i64toi32_i32$6 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $7$hi = 0, $9_1 = 0, $9$hi = 0, $14$hi = 0, $16$hi = 0, $17_1 = 0, $17$hi = 0, $23$hi = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$2 = var$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
   $21_1 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  var$2 = $21_1;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$0 = var$2;
  i64toi32_i32$2 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $7$hi = i64toi32_i32$2;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$0 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
  i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
  $9_1 = i64toi32_i32$4;
  $9$hi = i64toi32_i32$5;
  i64toi32_i32$5 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$5 >> 31 | 0;
   $22_1 = i64toi32_i32$5 >> i64toi32_i32$0 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$5 >> i64toi32_i32$0 | 0;
   $22_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$0 | 0) | 0;
  }
  var$2 = $22_1;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$5 = var$2;
  i64toi32_i32$2 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $14$hi = i64toi32_i32$2;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$2 = $14$hi;
  i64toi32_i32$1 = i64toi32_i32$5 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$5 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$0 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
  i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$4 | 0;
  $16$hi = i64toi32_i32$4;
  i64toi32_i32$4 = $9$hi;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$1 = __wasm_i64_udiv($9_1 | 0, i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
  $17_1 = i64toi32_i32$1;
  $17$hi = i64toi32_i32$4;
  i64toi32_i32$4 = var$1$hi;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$4 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$1 = i64toi32_i32$4 ^ i64toi32_i32$1 | 0;
  i64toi32_i32$4 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$5 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = i64toi32_i32$1 >> 31 | 0;
   $23_1 = i64toi32_i32$1 >> i64toi32_i32$5 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >> i64toi32_i32$5 | 0;
   $23_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$5 | 0) | 0;
  }
  var$0 = $23_1;
  var$0$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $17$hi;
  i64toi32_i32$1 = $17_1;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$4 = i64toi32_i32$2 ^ i64toi32_i32$4 | 0;
  $23$hi = i64toi32_i32$4;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$4 = $23$hi;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$0 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
  i64toi32_i32$0 = i64toi32_i32$4 - i64toi32_i32$0 | 0;
  i64toi32_i32$2 = i64toi32_i32$5;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65_1 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140_1 = 0, $140$hi = 0, $142$hi = 0, $144_1 = 0, $144$hi = 0, $151_1 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              i64toi32_i32$1 = var$1$hi;
              var$3 = var$1;
              if (!var$3) {
               break label$11
              }
              i64toi32_i32$0 = var$3;
              i64toi32_i32$2 = 0;
              i64toi32_i32$3 = 32;
              i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
              if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
               i64toi32_i32$2 = 0;
               $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
              } else {
               i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
              }
              var$4 = $38_1;
              if (!var$4) {
               break label$9
              }
              var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
              if (var$2 >>> 0 <= 31 >>> 0) {
               break label$8
              }
              break label$2;
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = i64toi32_i32$2;
             i64toi32_i32$1 = i64toi32_i32$2;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65_1 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65_1;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $41_1;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      i64toi32_i32$2 = var$1$hi;
      i64toi32_i32$1 = var$1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = -1;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
      if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
       i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
      }
      var$8 = i64toi32_i32$4;
      var$8$hi = i64toi32_i32$5;
      label$15 : while (1) {
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$2 = var$5;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        $45_1 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
        $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
       }
       $140_1 = $45_1;
       $140$hi = i64toi32_i32$1;
       i64toi32_i32$1 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = 0;
        $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
       }
       $142$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $140$hi;
       i64toi32_i32$1 = $140_1;
       i64toi32_i32$5 = $142$hi;
       i64toi32_i32$0 = $46_1;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
       var$5$hi = i64toi32_i32$5;
       $144_1 = var$5;
       $144$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$5 = var$5$hi;
       i64toi32_i32$5 = var$8$hi;
       i64toi32_i32$2 = var$8;
       i64toi32_i32$1 = var$5$hi;
       i64toi32_i32$0 = var$5;
       i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
       i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
       i64toi32_i32$5 = i64toi32_i32$3;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 63;
       i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
        $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
       } else {
        i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
       }
       var$6 = $47_1;
       var$6$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$2 = var$6$hi;
       i64toi32_i32$4 = var$6;
       i64toi32_i32$5 = var$1$hi;
       i64toi32_i32$0 = var$1;
       i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
       $151_1 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
       $151$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $144$hi;
       i64toi32_i32$2 = $144_1;
       i64toi32_i32$4 = $151$hi;
       i64toi32_i32$0 = $151_1;
       i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
       i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
       i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
       i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
       var$5 = i64toi32_i32$1;
       var$5$hi = i64toi32_i32$3;
       i64toi32_i32$3 = var$0$hi;
       i64toi32_i32$5 = var$0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        $48_1 = 0;
       } else {
        i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
        $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
       }
       $154$hi = i64toi32_i32$2;
       i64toi32_i32$2 = var$7$hi;
       i64toi32_i32$2 = $154$hi;
       i64toi32_i32$3 = $48_1;
       i64toi32_i32$5 = var$7$hi;
       i64toi32_i32$0 = var$7;
       i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
       var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
       var$0$hi = i64toi32_i32$5;
       i64toi32_i32$5 = var$6$hi;
       i64toi32_i32$2 = var$6;
       i64toi32_i32$3 = 0;
       i64toi32_i32$0 = 1;
       i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
       var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
       var$6$hi = i64toi32_i32$3;
       var$7 = var$6;
       var$7$hi = i64toi32_i32$3;
       var$2 = var$2 + -1 | 0;
       if (var$2) {
        continue label$15
       }
       break label$15;
      };
      break label$13;
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_sdiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4sdiv3Div3div17he78fc483e41d7ec7E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$0 = __wasm_intrinsics_temp_i64$hi;
  i64toi32_i32$1 = __wasm_intrinsics_temp_i64;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 // EMSCRIPTEN_END_FUNCS
;
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, $13, $66, $69, $77, $79, $81, $3, $2, $84, $85, $86, $56, $89, $90, $33, $1, $485, $266, $64, $188, $191, $195, $197, $199, $50, $35, $102, $107, $115, $143, $151, $158, $164, $170, $94, $214, $219, $225, $203, $206, $478, $262, $436, $438, $440, $445, $448, $446, $447, $452, $449, $455, $473, $471, $462, $450, $472, $470, $463, $451, $465, $475, $476, $477, $482, $483, $486, $487, $488]);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": $0, 
  "malloc": $273, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "__getTypeName": $260, 
  "fflush": $496, 
  "free": $275, 
  "emscripten_stack_init": $492, 
  "emscripten_stack_get_free": $493, 
  "emscripten_stack_get_base": $494, 
  "emscripten_stack_get_end": $495, 
  "_emscripten_stack_restore": $497, 
  "_emscripten_stack_alloc": $498, 
  "emscripten_stack_get_current": $499, 
  "__cxa_is_pointer_type": $474, 
  "dynCall_iijj": $502, 
  "dynCall_jiji": $503
 };
}

  return asmFunc(info);
}

)(info);
  },

  instantiate: /** @suppress{checkTypes} */ function(binary, info) {
    return {
      then: function(ok) {
        var module = new WebAssembly.Module(binary);
        ok({
          'instance': new WebAssembly.Instance(module, info)
        });
        // Emulate a simple WebAssembly.instantiate(..).then(()=>{}).catch(()=>{}) syntax.
        return { catch: function() {} };
      }
    };
  },

  RuntimeError: Error
};

// We don't need to actually download a wasm binary, mark it as present but empty.
wasmBinary = [];
