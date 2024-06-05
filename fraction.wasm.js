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
  base64DecodeToExistingUint8Array(bufferView, 65536, "aXNfaW5maW5pdHkAdW5zaWduZWQgc2hvcnQAdW5zaWduZWQgaW50AGZsb2F0AHVpbnQ2NF90AGFicwBudW1lcmF0b3IAZGVub21pbmF0b3IAZmxvb3IAdW5zaWduZWQgY2hhcgBzeXN0ZW0vbGliL2xpYmN4eGFiaS9zcmMvcHJpdmF0ZV90eXBlaW5mby5jcHAARnJhY3Rpb24AcmF3X2Fzc2lnbgBib29sAGNlaWwAcmVhbABjYW5fY2F0Y2gAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAYmFzaWNfc3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGZyYWN0aW9uVG9TdHJpbmcALWluZgBpbnZlcnNlAGRvdWJsZQB2b2lkAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50NjRfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50NjRfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AGFkanVzdGVkUHRyICYmICJjYXRjaGluZyBhIGNsYXNzIHdpdGhvdXQgYW4gb2JqZWN0PyIAOGZyYWN0aW9uAAAAsAsBABQEAQBQOGZyYWN0aW9uAAA0DAEAKAQBAAAAAAAgBAEAUEs4ZnJhY3Rpb24ANAwBAEQEAQABAAAAIAQBAHBwAHYAdnAANAQBADQEAQB8CwEAfAsBAHBwaWkAAAAANAQBAMgEAQBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQAAsAsBAIgEAQBwcHAATAsBAFAEAQBpcHAAoAsBAFAEAQBkcHAAIAQBAFAEAQAECwEAUAQBAAAAAAAgBAEANAQBAEwLAQBMCwEAcHBwaWkAAADIBAEAIAQBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAACwCwEAIAUBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVOU185YWxsb2NhdG9ySXdFRUVFAACwCwEAaAUBAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAsAsBALAFAQBOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAALALAQD8BQEATjEwZW1zY3JpcHRlbjN2YWxFAACwCwEASAYBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAAsAsBAGQGAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAALALAQCMBgEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAACwCwEAtAYBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAAsAsBANwGAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAALALAQAEBwEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAACwCwEALAcBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAAsAsBAFQHAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAALALAQB8BwEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAACwCwEApAcBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXhFRQAAsAsBAMwHAQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l5RUUAALALAQD0BwEATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAACwCwEAHAgBAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWRFRQAAsAsBAEQIAQAAAAAAAAAAAAoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFAMqaOwAAAAAAAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAADYCwEAaAkBAFgMAQBOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAADYCwEAmAkBAIwJAQBOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UAAADYCwEAyAkBAIwJAQBOMTBfX2N4eGFiaXYxMTlfX3BvaW50ZXJfdHlwZV9pbmZvRQDYCwEA+AkBAOwJAQBOMTBfX2N4eGFiaXYxMjBfX2Z1bmN0aW9uX3R5cGVfaW5mb0UAAAAA2AsBACgKAQCMCQEATjEwX19jeHhhYml2MTI5X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm9FAAAA2AsBAFwKAQDsCQEAAAAAANwKAQAeAAAAHwAAACAAAAAhAAAAIgAAAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQDYCwEAtAoBAIwJAQB2AAAAoAoBAOgKAQBEbgAAoAoBAPQKAQBiAAAAoAoBAAALAQBjAAAAoAoBAAwLAQBoAAAAoAoBABgLAQBhAAAAoAoBACQLAQBzAAAAoAoBADALAQB0AAAAoAoBADwLAQBpAAAAoAoBAEgLAQBqAAAAoAoBAFQLAQBsAAAAoAoBAGALAQBtAAAAoAoBAGwLAQB4AAAAoAoBAHgLAQB5AAAAoAoBAIQLAQBmAAAAoAoBAJALAQBkAAAAoAoBAJwLAQAAAAAAvAkBAB4AAAAjAAAAIAAAACEAAAAkAAAAJQAAACYAAAAnAAAAAAAAACAMAQAeAAAAKAAAACAAAAAhAAAAJAAAACkAAAAqAAAAKwAAAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQAAAADYCwEA+AsBALwJAQAAAAAAHAoBAB4AAAAsAAAAIAAAACEAAAAtAAAAU3Q5dHlwZV9pbmZvAAAAALALAQBIDAEA");
  base64DecodeToExistingUint8Array(bufferView, 68704, "IA8BAAAAAAAFAAAAAAAAAAAAAAAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAHQAAABgPAQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoDAEA");
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
 var fimport$0 = env._embind_register_class;
 var fimport$1 = env._embind_register_function;
 var fimport$2 = env._embind_register_class_constructor;
 var fimport$3 = env._embind_register_class_function;
 var fimport$4 = env._embind_register_void;
 var fimport$5 = env._embind_register_bool;
 var fimport$6 = env._embind_register_integer;
 var fimport$7 = env._embind_register_float;
 var fimport$8 = env._embind_register_std_string;
 var fimport$9 = env._embind_register_std_wstring;
 var fimport$10 = env._embind_register_emval;
 var fimport$11 = env._embind_register_memory_view;
 var fimport$12 = env._emscripten_memcpy_js;
 var fimport$13 = env.emscripten_resize_heap;
 var fimport$14 = env._abort_js;
 var wasi_snapshot_preview1 = imports.wasi_snapshot_preview1;
 var fimport$15 = wasi_snapshot_preview1.fd_close;
 var fimport$16 = wasi_snapshot_preview1.fd_write;
 var fimport$17 = env.__assert_fail;
 var fimport$18 = env._embind_register_bigint;
 var fimport$19 = wasi_snapshot_preview1.fd_seek;
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
  $353();
  $149();
  $153();
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
    $4($0_1 | 0, (($3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0) >= (0 | 0) & 1 | 0 ? 65828 : 65827) | 0) | 0;
    break label$1;
   }
   label$3 : {
    if (!(($2(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0) == (1 | 0) & 1 | 0)) {
     break label$3
    }
    $241($0_1 | 0, $3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
    break label$1;
   }
   $241($4_1 + 16 | 0 | 0, $3(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
   $36_1 = 24;
   $5($4_1 + 28 | 0 | 0, $4_1 + 16 | 0 | 0, (47 << $36_1 | 0) >> $36_1 | 0 | 0);
   $241($4_1 + 4 | 0 | 0, $2(HEAP32[($4_1 + 40 | 0) >> 2] | 0 | 0) | 0 | 0);
   $6($0_1 | 0, $4_1 + 28 | 0 | 0, $4_1 + 4 | 0 | 0);
   $230($4_1 + 4 | 0 | 0) | 0;
   $230($4_1 + 28 | 0 | 0) | 0;
   $230($4_1 + 16 | 0 | 0) | 0;
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
  $235($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0, $8(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0);
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
  $239(HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, ((HEAPU8[($5_1 + 7 | 0) >> 0] | 0) << $8_1 | 0) >> $8_1 | 0 | 0);
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
  $84($6_1 | 0) | 0;
  $85($6_1 | 0) | 0;
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $8($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $143(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
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
  $10_1 = $237(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $91(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0, $90(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
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
  i64toi32_i32$2 = $144($4_1 + 19 | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
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
  $19_1 = $145(HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  i64toi32_i32$2 = $4_1;
  i64toi32_i32$1 = HEAP32[$4_1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  $86_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $19_1;
  HEAP32[i64toi32_i32$1 >> 2] = $86_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $20_1 = 8;
  HEAP32[(i64toi32_i32$1 + $20_1 | 0) >> 2] = HEAP32[($4_1 + $20_1 | 0) >> 2] | 0;
  $146(HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 | 0);
  label$1 : {
   if (($92($5_1 | 0) | 0) & 1 | 0) {
    break label$1
   }
   $146($5_1 | 0, $90($5_1 | 0) | 0 | 0);
  }
  $30_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  global$0 = $4_1 + 32 | 0;
  return $30_1 | 0;
 }
 
 function $11() {
  $12(68860 | 0) | 0;
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
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $41_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $15_1 = 0, $16_1 = 0, $18_1 = 0, $19_1 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $31_1 = 0, $35_1 = 0, $39_1 = 0, $269_1 = 0, $43_1 = 0, $44_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, $297_1 = 0, $310_1 = 0, $53_1 = 0, $54_1 = 0, $56_1 = 0, $57_1 = 0, $58_1 = 0, $338_1 = 0, $351_1 = 0, $63_1 = 0, $64_1 = 0, $66_1 = 0, $67_1 = 0, $68_1 = 0, $379 = 0, $392 = 0, $73_1 = 0, $74_1 = 0, $76_1 = 0, $77_1 = 0, $78_1 = 0, $420 = 0, $433 = 0, $83_1 = 0, $84_1 = 0, $86_1 = 0, $87_1 = 0, $88_1 = 0, $461 = 0, $474 = 0, $93_1 = 0, $94_1 = 0, $96_1 = 0, $97_1 = 0, $98_1 = 0, $502 = 0, $515 = 0, $103_1 = 0, $104_1 = 0, $106_1 = 0, $107_1 = 0, $108_1 = 0, $543 = 0, $556 = 0, $113_1 = 0, $114_1 = 0, $116_1 = 0, $117_1 = 0, $118_1 = 0, $584 = 0, $594 = 0, $121_1 = 0, $122_1 = 0, $124_1 = 0, $125_1 = 0, $620 = 0;
  $2_1 = global$0 - 512 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 168 | 0) >> 2] = $2_1 + 147 | 0;
  HEAP32[($2_1 + 164 | 0) >> 2] = 65683;
  $15();
  HEAP32[($2_1 + 160 | 0) >> 2] = 2;
  HEAP32[($2_1 + 156 | 0) >> 2] = $17() | 0;
  HEAP32[($2_1 + 152 | 0) >> 2] = $18() | 0;
  HEAP32[($2_1 + 148 | 0) >> 2] = 3;
  $10_1 = $20() | 0;
  $11_1 = $21() | 0;
  $12_1 = $22() | 0;
  $13_1 = $23() | 0;
  HEAP32[($2_1 + 472 | 0) >> 2] = HEAP32[($2_1 + 160 | 0) >> 2] | 0;
  $15_1 = $24() | 0;
  $16_1 = HEAP32[($2_1 + 160 | 0) >> 2] | 0;
  HEAP32[($2_1 + 480 | 0) >> 2] = HEAP32[($2_1 + 156 | 0) >> 2] | 0;
  $18_1 = $25() | 0;
  $19_1 = HEAP32[($2_1 + 156 | 0) >> 2] | 0;
  HEAP32[($2_1 + 476 | 0) >> 2] = HEAP32[($2_1 + 152 | 0) >> 2] | 0;
  $21_1 = $25() | 0;
  $22_1 = HEAP32[($2_1 + 152 | 0) >> 2] | 0;
  $23_1 = HEAP32[($2_1 + 164 | 0) >> 2] | 0;
  HEAP32[($2_1 + 484 | 0) >> 2] = HEAP32[($2_1 + 148 | 0) >> 2] | 0;
  fimport$0($10_1 | 0, $11_1 | 0, $12_1 | 0, $13_1 | 0, $15_1 | 0, $16_1 | 0, $18_1 | 0, $19_1 | 0, $21_1 | 0, $22_1 | 0, $23_1 | 0, $26() | 0 | 0, HEAP32[($2_1 + 148 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 172 | 0) >> 2] = $2_1 + 147 | 0;
  HEAP32[($2_1 + 492 | 0) >> 2] = HEAP32[($2_1 + 172 | 0) >> 2] | 0;
  HEAP32[($2_1 + 488 | 0) >> 2] = 4;
  $31_1 = HEAP32[($2_1 + 492 | 0) >> 2] | 0;
  $28(HEAP32[($2_1 + 488 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 176 | 0) >> 2] = $31_1;
  HEAP32[($2_1 + 500 | 0) >> 2] = HEAP32[($2_1 + 176 | 0) >> 2] | 0;
  HEAP32[($2_1 + 496 | 0) >> 2] = 5;
  $35_1 = HEAP32[($2_1 + 500 | 0) >> 2] | 0;
  $30(HEAP32[($2_1 + 496 | 0) >> 2] | 0 | 0);
  HEAP32[($2_1 + 180 | 0) >> 2] = $35_1;
  HEAP32[($2_1 + 508 | 0) >> 2] = HEAP32[($2_1 + 180 | 0) >> 2] | 0;
  HEAP32[($2_1 + 504 | 0) >> 2] = 6;
  $39_1 = HEAP32[($2_1 + 508 | 0) >> 2] | 0;
  $32(HEAP32[($2_1 + 504 | 0) >> 2] | 0 | 0);
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
  HEAP32[($2_1 + 304 | 0) >> 2] = 65595;
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
  $33($47_1 | 0, $2_1 + 56 | 0 | 0);
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
  HEAP32[($2_1 + 272 | 0) >> 2] = 65605;
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
  $33($57_1 | 0, $2_1 + 48 | 0 | 0);
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
  HEAP32[($2_1 + 240 | 0) >> 2] = 65617;
  HEAP32[($2_1 + 236 | 0) >> 2] = $64_1;
  HEAP32[($2_1 + 232 | 0) >> 2] = $63_1;
  $66_1 = HEAP32[($2_1 + 244 | 0) >> 2] | 0;
  $67_1 = HEAP32[($2_1 + 240 | 0) >> 2] | 0;
  $68_1 = HEAP32[($2_1 + 232 | 0) >> 2] | 0;
  HEAP32[($2_1 + 228 | 0) >> 2] = HEAP32[($2_1 + 236 | 0) >> 2] | 0;
  HEAP32[($2_1 + 224 | 0) >> 2] = $68_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 224 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 228 | 0) >> 2] | 0;
  $379 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = $379;
  HEAP32[($2_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  $33($67_1 | 0, $2_1 + 40 | 0 | 0);
  HEAP32[($2_1 + 116 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 112 | 0) >> 2] = 10;
  i64toi32_i32$0 = HEAP32[($2_1 + 112 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 116 | 0) >> 2] | 0;
  $392 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 184 | 0) >> 2] = $392;
  HEAP32[($2_1 + 188 | 0) >> 2] = i64toi32_i32$1;
  $73_1 = HEAP32[($2_1 + 184 | 0) >> 2] | 0;
  $74_1 = HEAP32[($2_1 + 188 | 0) >> 2] | 0;
  HEAP32[($2_1 + 212 | 0) >> 2] = $66_1;
  HEAP32[($2_1 + 208 | 0) >> 2] = 65708;
  HEAP32[($2_1 + 204 | 0) >> 2] = $74_1;
  HEAP32[($2_1 + 200 | 0) >> 2] = $73_1;
  $76_1 = HEAP32[($2_1 + 212 | 0) >> 2] | 0;
  $77_1 = HEAP32[($2_1 + 208 | 0) >> 2] | 0;
  $78_1 = HEAP32[($2_1 + 200 | 0) >> 2] | 0;
  HEAP32[($2_1 + 196 | 0) >> 2] = HEAP32[($2_1 + 204 | 0) >> 2] | 0;
  HEAP32[($2_1 + 192 | 0) >> 2] = $78_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 192 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 196 | 0) >> 2] | 0;
  $420 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 32 | 0) >> 2] = $420;
  HEAP32[($2_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  $33($77_1 | 0, $2_1 + 32 | 0 | 0);
  HEAP32[($2_1 + 108 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 104 | 0) >> 2] = 11;
  i64toi32_i32$0 = HEAP32[($2_1 + 104 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 108 | 0) >> 2] | 0;
  $433 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 312 | 0) >> 2] = $433;
  HEAP32[($2_1 + 316 | 0) >> 2] = i64toi32_i32$1;
  $83_1 = HEAP32[($2_1 + 312 | 0) >> 2] | 0;
  $84_1 = HEAP32[($2_1 + 316 | 0) >> 2] | 0;
  HEAP32[($2_1 + 340 | 0) >> 2] = $76_1;
  HEAP32[($2_1 + 336 | 0) >> 2] = 65713;
  HEAP32[($2_1 + 332 | 0) >> 2] = $84_1;
  HEAP32[($2_1 + 328 | 0) >> 2] = $83_1;
  $86_1 = HEAP32[($2_1 + 340 | 0) >> 2] | 0;
  $87_1 = HEAP32[($2_1 + 336 | 0) >> 2] | 0;
  $88_1 = HEAP32[($2_1 + 328 | 0) >> 2] | 0;
  HEAP32[($2_1 + 324 | 0) >> 2] = HEAP32[($2_1 + 332 | 0) >> 2] | 0;
  HEAP32[($2_1 + 320 | 0) >> 2] = $88_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 320 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 324 | 0) >> 2] | 0;
  $461 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 24 | 0) >> 2] = $461;
  HEAP32[($2_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  $37($87_1 | 0, $2_1 + 24 | 0 | 0);
  HEAP32[($2_1 + 100 | 0) >> 2] = $41_1;
  HEAP32[($2_1 + 96 | 0) >> 2] = 12;
  i64toi32_i32$0 = HEAP32[($2_1 + 96 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 100 | 0) >> 2] | 0;
  $474 = i64toi32_i32$0;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 376 | 0) >> 2] = $474;
  HEAP32[($2_1 + 380 | 0) >> 2] = i64toi32_i32$1;
  $93_1 = HEAP32[($2_1 + 376 | 0) >> 2] | 0;
  $94_1 = HEAP32[($2_1 + 380 | 0) >> 2] | 0;
  HEAP32[($2_1 + 404 | 0) >> 2] = $86_1;
  HEAP32[($2_1 + 400 | 0) >> 2] = 65591;
  HEAP32[($2_1 + 396 | 0) >> 2] = $94_1;
  HEAP32[($2_1 + 392 | 0) >> 2] = $93_1;
  $96_1 = HEAP32[($2_1 + 404 | 0) >> 2] | 0;
  $97_1 = HEAP32[($2_1 + 400 | 0) >> 2] | 0;
  $98_1 = HEAP32[($2_1 + 392 | 0) >> 2] | 0;
  HEAP32[($2_1 + 388 | 0) >> 2] = HEAP32[($2_1 + 396 | 0) >> 2] | 0;
  HEAP32[($2_1 + 384 | 0) >> 2] = $98_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 384 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 388 | 0) >> 2] | 0;
  $502 = i64toi32_i32$1;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 16 | 0) >> 2] = $502;
  HEAP32[($2_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $39($97_1 | 0, $2_1 + 16 | 0 | 0);
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
  HEAP32[($2_1 + 368 | 0) >> 2] = 65832;
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
  $39($107_1 | 0, $2_1 + 8 | 0 | 0);
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
  $42($117_1 | 0, $2_1 | 0);
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
  HEAP32[($2_1 + 464 | 0) >> 2] = 65692;
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
  $44($124_1 | 0, $2_1 + 64 | 0 | 0);
  $45(65810 | 0, 16 | 0);
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
  $151($5_1 | 0);
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $15() {
  
 }
 
 function $16($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $54(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $17() {
  return 0 | 0;
 }
 
 function $18() {
  return 0 | 0;
 }
 
 function $19($0_1) {
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
   $172($4_1 | 0, 8 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $20() {
  return $55() | 0 | 0;
 }
 
 function $21() {
  return $56() | 0 | 0;
 }
 
 function $22() {
  return $57() | 0 | 0;
 }
 
 function $23() {
  return 0 | 0;
 }
 
 function $24() {
  return 66656 | 0;
 }
 
 function $25() {
  return 66659 | 0;
 }
 
 function $26() {
  return 66661 | 0;
 }
 
 function $27() {
  var $1_1 = 0;
  $1_1 = $168(8 | 0) | 0;
  $49($1_1 | 0) | 0;
  return $1_1 | 0;
 }
 
 function $28($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 17;
  $5_1 = $20() | 0;
  $9_1 = $59($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $60($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$2($5_1 | 0, $9_1 | 0, $13_1 | 0, $24() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $29($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $6_1 = 0, $11$hi = 0, $12$hi = 0, $11_1 = 0, $34_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $168(8 | 0) | 0;
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
  $63($6_1 | 0, $11_1 | 0, i64toi32_i32$0 | 0, $34_1 | 0, i64toi32_i32$1 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $30($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 18;
  $5_1 = $20() | 0;
  $9_1 = $65($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $66($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$2($5_1 | 0, $9_1 | 0, $13_1 | 0, $67() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $31($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $77($5_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $32($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $9_1 = 0, $13_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[$3_1 >> 2] = 19;
  $5_1 = $20() | 0;
  $9_1 = $79($3_1 + 7 | 0 | 0) | 0;
  $13_1 = $80($3_1 + 7 | 0 | 0) | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[$3_1 >> 2] | 0;
  fimport$2($5_1 | 0, $9_1 | 0, $13_1 | 0, $53() | 0 | 0, HEAP32[$3_1 >> 2] | 0 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
  global$0 = $3_1 + 16 | 0;
  return;
 }
 
 function $33($0_1, $1_1) {
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
  HEAP32[($4_1 + 12 | 0) >> 2] = 20;
  $8_1 = $20() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $103($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $104($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $105() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $106($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $34($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return (HEAP32[$4_1 >> 2] | 0 | 0) / (HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $35($0_1) {
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
 
 function $36($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  return +(+(HEAP32[$4_1 >> 2] | 0 | 0) / +(HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0));
 }
 
 function $37($0_1, $1_1) {
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
  HEAP32[($4_1 + 12 | 0) >> 2] = 21;
  $8_1 = $20() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $111($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $112($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $113() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $114($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $38($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $50_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $46($4_1 + 4 | 0 | 0, 0 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!(($47($5_1 | 0, $4_1 + 4 | 0 | 0) | 0) & 1 | 0)) {
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
   $48($0_1 | 0, $5_1 | 0);
  }
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $39($0_1, $1_1) {
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
  HEAP32[($4_1 + 12 | 0) >> 2] = 22;
  $8_1 = $20() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $118($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $119($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $53() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $120($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $40($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $5_1 = 0, $4_1 = 0, $12_1 = 0, $23_1 = 0, $16_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $49($0_1 | 0) | 0;
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
  $43($0_1 | 0, $16_1 | 0, $23_1 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $41($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return (HEAP32[((HEAP32[($3_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) == (0 | 0) & 1 | 0 | 0;
 }
 
 function $42($0_1, $1_1) {
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
  HEAP32[($4_1 + 12 | 0) >> 2] = 23;
  $8_1 = $20() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $125($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $126($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $105() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $127($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $43($0_1, $1_1, $2_1) {
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
 
 function $44($0_1, $1_1) {
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
  HEAP32[($4_1 + 12 | 0) >> 2] = 24;
  $8_1 = $20() | 0;
  $9_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $13_1 = $131($4_1 + 11 | 0 | 0) | 0;
  $17_1 = $132($4_1 + 11 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$3($8_1 | 0, $9_1 | 0, $13_1 | 0, $17_1 | 0, $133() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $134($4_1 + 16 | 0 | 0) | 0 | 0, 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $45($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $6_1 = 0, $10_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 20 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = 25;
  $6_1 = HEAP32[($4_1 + 24 | 0) >> 2] | 0;
  $10_1 = $51($4_1 + 19 | 0 | 0) | 0;
  $14_1 = $52($4_1 + 19 | 0 | 0) | 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  fimport$1($6_1 | 0, $10_1 | 0, $14_1 | 0, $53() | 0 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0, 0 & 1 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return;
 }
 
 function $46($0_1, $1_1) {
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
 
 function $47($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $11_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $11_1 = ($123(HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0) >= (0 | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $11_1 | 0;
 }
 
 function $48($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $49($0_1 | 0) | 0;
  $43($0_1 | 0, 0 - (HEAP32[(HEAP32[($4_1 + 12 | 0) >> 2] | 0) >> 2] | 0) | 0 | 0, HEAP32[((HEAP32[($4_1 + 12 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $49($0_1) {
  $0_1 = $0_1 | 0;
  var $4_1 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = 1;
  return $4_1 | 0;
 }
 
 function $50($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  FUNCTION_TABLE[$5_1 | 0]($4_1 + 12 | 0, $139(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0);
  $14_1 = $140($4_1 + 12 | 0 | 0) | 0;
  $230($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $14_1 | 0;
 }
 
 function $51($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $52($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $141() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $53() {
  return 66768 | 0;
 }
 
 function $54($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 66592 | 0;
 }
 
 function $55() {
  return 66592 | 0;
 }
 
 function $56() {
  return 66612 | 0;
 }
 
 function $57() {
  return 66640 | 0;
 }
 
 function $58($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $61(FUNCTION_TABLE[HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0]() | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $59($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 1 | 0;
 }
 
 function $60($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $62() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $61($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $62() {
  return 66664 | 0;
 }
 
 function $63($0_1, $1_1, $1$hi, $2_1, $2$hi) {
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
  $71($5_1 + 16 | 0 | 0, $5_1 + 8 | 0 | 0);
  i64toi32_i32$0 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
  HEAP32[$6_1 >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  HEAP32[($6_1 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $5_1 + 32 | 0;
  return $6_1 | 0;
 }
 
 function $64($0_1, $1_1, $1$hi, $2_1, $2$hi) {
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
  i64toi32_i32$1 = $68(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $39_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $5_1;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $39_1;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] | 0;
  i64toi32_i32$1 = $68(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $45_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $5_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $45_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $14_1 = $61(FUNCTION_TABLE[$6_1 | 0](i64toi32_i32$1 + 16 | 0, i64toi32_i32$1 + 8 | 0) | 0 | 0) | 0;
  global$0 = i64toi32_i32$1 + 48 | 0;
  return $14_1 | 0;
 }
 
 function $65($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 3 | 0;
 }
 
 function $66($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $69() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $67() {
  return 66680 | 0;
 }
 
 function $68($0_1, $0$hi) {
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
  i64toi32_i32$1 = $70(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  global$0 = $3_1 + 16 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $69() {
  return 66668 | 0;
 }
 
 function $70($0_1, $0$hi) {
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
 
 function $71($0_1, $1_1) {
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
  i64toi32_i32$1 = $72($19_1 | 0, i64toi32_i32$0 | 0, $60_1 | 0, i64toi32_i32$1 | 0) | 0;
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
 
 function $72($0_1, $0$hi, $1_1, $1$hi) {
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
  i64toi32_i32$1 = $73($4_1 + 15 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $14_1 = i64toi32_i32$1;
  $14$hi = i64toi32_i32$0;
  i64toi32_i32$0 = HEAP32[($4_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4_1 + 20 | 0) >> 2] | 0;
  i64toi32_i32$1 = $73($4_1 + 14 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $16$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$0 = $16$hi;
  $46_1 = i64toi32_i32$1;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$1 = $74($14_1 | 0, i64toi32_i32$0 | 0, $46_1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  global$0 = $4_1 + 32 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $73($0_1, $1_1, $1$hi) {
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
   i64toi32_i32$2 = $75() | 0;
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
 
 function $74($0_1, $0$hi, $1_1, $1$hi) {
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
   i64toi32_i32$1 = $74($14_1 | 0, i64toi32_i32$2 | 0, $52_1 | 0, i64toi32_i32$1 | 0) | 0;
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
 
 function $75() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $76() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $76() {
  var i64toi32_i32$0 = 0;
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return 0 | 0;
 }
 
 function $77($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  $88($5_1 | 0, HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $78($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $5_1 = 0, $14_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[($4_1 + 28 | 0) >> 2] | 0;
  $81($4_1 + 12 | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0);
  $14_1 = $61(FUNCTION_TABLE[$5_1 | 0]($4_1 + 12 | 0) | 0 | 0) | 0;
  $230($4_1 + 12 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $14_1 | 0;
 }
 
 function $79($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $80($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $82() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $81($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $83($0_1 | 0, (HEAP32[($4_1 + 8 | 0) >> 2] | 0) + 4 | 0 | 0, HEAP32[(HEAP32[($4_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return;
 }
 
 function $82() {
  return 66688 | 0;
 }
 
 function $83($0_1, $1_1, $2_1) {
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
  $235($6_1 | 0, HEAP32[($5_1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 4 | 0) >> 2] | 0 | 0);
  global$0 = $5_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $84($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function $85($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  $86($4_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $86($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $87($4_1 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $87($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $88($0_1, $1_1) {
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
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = (((HEAPU8[($89(HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0 | 0, 0 | 0) | 0) >> 0] | 0) << $10_1 | 0) >> $10_1 | 0 | 0) == (45 | 0) & 1 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $90(HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] | 0 | 0) | 0;
  label$1 : while (1) {
   $25_1 = 0;
   label$2 : {
    if (!((HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) < (HEAP32[$4_1 >> 2] | 0 | 0) & 1 | 0)) {
     break label$2
    }
    $30_1 = 24;
    $25_1 = (((HEAPU8[($89(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $30_1 | 0) >> $30_1 | 0 | 0) != (47 | 0);
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
    i64toi32_i32$0 = ((HEAPU8[($89(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $42_1 | 0) >> $42_1 | 0;
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
     i64toi32_i32$4 = ((HEAPU8[($89(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 4 | 0) >> 2] | 0 | 0) | 0) >> 0] | 0) << $65_1 | 0) >> $65_1 | 0;
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
   if (!((((HEAPU8[($89(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, 0 | 0) | 0) >> 0] | 0) << $75_1 | 0) >> $75_1 | 0 | 0) == (45 | 0) & 1 | 0)) {
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
  $71($4_1 + 16 | 0 | 0, $4_1 + 8 | 0 | 0);
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
 
 function $89($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $9_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = ($91(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) + (HEAP32[($4_1 + 4 | 0) >> 2] | 0) | 0;
  $9_1 = HEAP32[($4_1 + 12 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $90($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($92($4_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $9_1 = $93($4_1 | 0) | 0;
    break label$1;
   }
   $9_1 = $94($4_1 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $91($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $98($97(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $92($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $16_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $16_1 = (((HEAPU8[(($96(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 11 | 0) >> 0] | 0) >>> 7 | 0) & 255 | 0 | 0) != (0 & 255 | 0 | 0) & 1 | 0;
  global$0 = $3_1 + 16 | 0;
  return $16_1 | 0;
 }
 
 function $93($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[(($96(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 4 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $94($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $10_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $10_1 = ((HEAPU8[(($96(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) + 11 | 0) >> 0] | 0) & 127 | 0) & 255 | 0;
  global$0 = $3_1 + 16 | 0;
  return $10_1 | 0;
 }
 
 function $95($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = HEAP32[($96(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $96($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $99(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $97($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!(($92($4_1 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    $9_1 = $95($4_1 | 0) | 0;
    break label$1;
   }
   $9_1 = $100($4_1 | 0) | 0;
  }
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $98($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $99($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $100($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $6_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $6_1 = $101($96(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $101($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $102($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $24_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $107(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
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
  $24_1 = $108($4_1 + 4 | 0 | 0) | 0;
  global$0 = $4_1 + 16 | 0;
  return $24_1 | 0;
 }
 
 function $103($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $104($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $109() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $105() {
  return 66780 | 0;
 }
 
 function $106($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $107($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $108($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return HEAP32[(HEAP32[($3_1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0;
 }
 
 function $109() {
  return 66772 | 0;
 }
 
 function $110($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $26_1 = 0.0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $6_1 = $107(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
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
  $26_1 = +$115($4_1 + 16 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
  return +$26_1;
 }
 
 function $111($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $112($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $116() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $113() {
  return 66792 | 0;
 }
 
 function $114($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $115($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  return +(+HEAPF64[(HEAP32[($3_1 + 8 | 0) >> 2] | 0) >> 3]);
 }
 
 function $116() {
  return 66784 | 0;
 }
 
 function $117($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $26_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 24 | 0) >> 2] = $1_1;
  $6_1 = $107(HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0) | 0;
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
  $26_1 = $121($4_1 + 16 | 0 | 0) | 0;
  global$0 = $4_1 + 32 | 0;
  return $26_1 | 0;
 }
 
 function $118($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $119($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $122() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $120($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $121($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
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
 
 function $122() {
  return 66796 | 0;
 }
 
 function $123($0_1, $1_1) {
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
 
 function $124($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $12_1 = 0, $18_1 = 0, $6_1 = 0, $25_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  $6_1 = $107(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0;
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
  $25_1 = ($128((FUNCTION_TABLE[$18_1 | 0]($12_1) | 0) & 1 | 0 | 0) | 0) & 1 | 0;
  global$0 = $4_1 + 16 | 0;
  return $25_1 | 0;
 }
 
 function $125($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 2 | 0;
 }
 
 function $126($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $129() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $127($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $9_1 | 0;
 }
 
 function $128($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP8[($3_1 + 14 | 0) >> 0] = $0_1;
  return (HEAPU8[($3_1 + 14 | 0) >> 0] | 0) & 1 | 0 | 0;
 }
 
 function $129() {
  return 66804 | 0;
 }
 
 function $130($0_1, $1_1, $2_1, $3_1) {
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
  $8_1 = $135(HEAP32[($6_1 + 24 | 0) >> 2] | 0 | 0) | 0;
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
  $27_1 = $137(FUNCTION_TABLE[$20_1 | 0]($14_1, $136(HEAP32[($6_1 + 20 | 0) >> 2] | 0 | 0) | 0, $136(HEAP32[($6_1 + 16 | 0) >> 2] | 0 | 0) | 0) | 0 | 0) | 0;
  global$0 = $6_1 + 32 | 0;
  return $27_1 | 0;
 }
 
 function $131($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return 4 | 0;
 }
 
 function $132($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $4_1 = $138() | 0;
  global$0 = $3_1 + 16 | 0;
  return $4_1 | 0;
 }
 
 function $133() {
  return 66832 | 0;
 }
 
 function $134($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
  $6_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  $7_1 = HEAP32[$6_1 >> 2] | 0;
  HEAP32[($5_1 + 4 | 0) >> 2] = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
  HEAP32[$5_1 >> 2] = $7_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
  $9_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
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
  var i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$2 = 0, $5_1 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  $5_1 = $168(8 | 0) | 0;
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
 
 function $138() {
  return 66816 | 0;
 }
 
 function $139($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $140($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $12_1 = 0, $23_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $161((($142(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0) << 0 | 0) + 4 | 0 | 0) | 0;
  $12_1 = $142(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[(HEAP32[($3_1 + 4 | 0) >> 2] | 0) >> 2] = $12_1;
  $154((HEAP32[($3_1 + 4 | 0) >> 2] | 0) + 4 | 0 | 0, $91(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0 | 0, ($142(HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0) | 0) << 0 | 0 | 0) | 0;
  $23_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $23_1 | 0;
 }
 
 function $141() {
  return 66840 | 0;
 }
 
 function $142($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $90(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $143($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $157(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $144($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $10_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  label$1 : {
   if (($92(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0) | 0) & 1 | 0) {
    break label$1
   }
   $147(HEAP32[($4_1 + 8 | 0) >> 2] | 0 | 0);
  }
  $10_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  global$0 = $4_1 + 16 | 0;
  return $10_1 | 0;
 }
 
 function $145($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  $5_1 = $148(HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $5_1 | 0;
 }
 
 function $146($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = $0_1;
  HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
  return;
 }
 
 function $147($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[((global$0 - 16 | 0) + 12 | 0) >> 2] = $0_1;
  return;
 }
 
 function $148($0_1) {
  $0_1 = $0_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = $0_1;
  return HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $149() {
  $11();
  return;
 }
 
 function $150($0_1) {
  $0_1 = $0_1 | 0;
  return $156(HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0) | 0 | 0;
 }
 
 function $151($0_1) {
  $0_1 = $0_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[(0 + 68868 | 0) >> 2] | 0;
  HEAP32[(0 + 68868 | 0) >> 2] = $0_1;
 }
 
 function $152() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  fimport$4(68332 | 0, 65847 | 0);
  fimport$5(68356 | 0, 65703 | 0, 1 | 0, 0 | 0);
  fimport$6(68368 | 0, 65632 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$6(68392 | 0, 65625 | 0, 1 | 0, -128 | 0, 127 | 0);
  fimport$6(68380 | 0, 65623 | 0, 1 | 0, 0 | 0, 255 | 0);
  fimport$6(68404 | 0, 65557 | 0, 2 | 0, -32768 | 0, 32767 | 0);
  fimport$6(68416 | 0, 65548 | 0, 2 | 0, 0 | 0, 65535 | 0);
  fimport$6(68428 | 0, 65572 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$6(68440 | 0, 65563 | 0, 4 | 0, 0 | 0, -1 | 0);
  fimport$6(68452 | 0, 65737 | 0, 4 | 0, -2147483648 | 0, 2147483647 | 0);
  fimport$6(68464 | 0, 65728 | 0, 4 | 0, 0 | 0, -1 | 0);
  i64toi32_i32$0 = -2147483648;
  i64toi32_i32$1 = 2147483647;
  $365(68476 | 0, 65583 | 0, 8 | 0, 0 | 0, i64toi32_i32$0 | 0, -1 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = -1;
  $365(68488 | 0, 65582 | 0, 8 | 0, 0 | 0, i64toi32_i32$1 | 0, -1 | 0, i64toi32_i32$0 | 0);
  fimport$7(68500 | 0, 65576 | 0, 4 | 0);
  fimport$7(68512 | 0, 65840 | 0, 8 | 0);
  fimport$8(66760 | 0, 65768 | 0);
  fimport$8(66912 | 0, 66356 | 0);
  fimport$9(66984 | 0, 4 | 0, 65742 | 0);
  fimport$9(67060 | 0, 2 | 0, 65780 | 0);
  fimport$9(67136 | 0, 4 | 0, 65795 | 0);
  fimport$10(67164 | 0);
  fimport$11(67204 | 0, 0 | 0, 66287 | 0);
  fimport$11(67244 | 0, 0 | 0, 66389 | 0);
  fimport$11(67284 | 0, 1 | 0, 66317 | 0);
  fimport$11(67324 | 0, 2 | 0, 65852 | 0);
  fimport$11(67364 | 0, 3 | 0, 65883 | 0);
  fimport$11(67404 | 0, 4 | 0, 65923 | 0);
  fimport$11(67444 | 0, 5 | 0, 65952 | 0);
  fimport$11(67484 | 0, 4 | 0, 66426 | 0);
  fimport$11(67524 | 0, 5 | 0, 66456 | 0);
  fimport$11(67244 | 0, 0 | 0, 66054 | 0);
  fimport$11(67284 | 0, 1 | 0, 66021 | 0);
  fimport$11(67324 | 0, 2 | 0, 66120 | 0);
  fimport$11(67364 | 0, 3 | 0, 66086 | 0);
  fimport$11(67404 | 0, 4 | 0, 66254 | 0);
  fimport$11(67444 | 0, 5 | 0, 66220 | 0);
  fimport$11(67564 | 0, 8 | 0, 66187 | 0);
  fimport$11(67604 | 0, 9 | 0, 66153 | 0);
  fimport$11(67644 | 0, 6 | 0, 65990 | 0);
  fimport$11(67684 | 0, 7 | 0, 66495 | 0);
 }
 
 function $153() {
  HEAP32[(0 + 68872 | 0) >> 2] = 26;
  HEAP32[(0 + 68876 | 0) >> 2] = 0;
  $152();
  HEAP32[(0 + 68876 | 0) >> 2] = HEAP32[(0 + 68868 | 0) >> 2] | 0;
  HEAP32[(0 + 68868 | 0) >> 2] = 68872;
 }
 
 function $154($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0;
  label$1 : {
   if ($2_1 >>> 0 < 512 >>> 0) {
    break label$1
   }
   fimport$12($0_1 | 0, $1_1 | 0, $2_1 | 0);
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
 
 function $155($0_1, $1_1, $2_1) {
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
 
 function $156($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  label$1 : {
   $1_1 = ($157($0_1 | 0) | 0) + 1 | 0;
   $2_1 = $161($1_1 | 0) | 0;
   if ($2_1) {
    break label$1
   }
   return 0 | 0;
  }
  return $154($2_1 | 0, $0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $157($0_1) {
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
 
 function $158() {
  return __wasm_memory_size() << 16 | 0 | 0;
 }
 
 function $159() {
  return 68880 | 0;
 }
 
 function $160($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  $1_1 = HEAP32[(0 + 68704 | 0) >> 2] | 0;
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
    if ($0_1 >>> 0 <= ($158() | 0) >>> 0) {
     break label$1
    }
    if (fimport$13($0_1 | 0) | 0) {
     break label$1
    }
   }
   HEAP32[($159() | 0) >> 2] = 48;
   return -1 | 0;
  }
  HEAP32[(0 + 68704 | 0) >> 2] = $0_1;
  return $1_1 | 0;
 }
 
 function $161($0_1) {
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
              $2_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
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
                $0_1 = $4_1 + 68924 | 0;
                $4_1 = HEAP32[($4_1 + 68932 | 0) >> 2] | 0;
                $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
                if (($0_1 | 0) != ($5_1 | 0)) {
                 break label$14
                }
                HEAP32[(0 + 68884 | 0) >> 2] = $2_1 & (__wasm_rotl_i32(-2 | 0, $3_1 | 0) | 0) | 0;
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
             $6_1 = HEAP32[(0 + 68892 | 0) >> 2] | 0;
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
                $5_1 = $0_1 + 68924 | 0;
                $0_1 = HEAP32[($0_1 + 68932 | 0) >> 2] | 0;
                $7_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
                if (($5_1 | 0) != ($7_1 | 0)) {
                 break label$17
                }
                $2_1 = $2_1 & (__wasm_rotl_i32(-2 | 0, $4_1 | 0) | 0) | 0;
                HEAP32[(0 + 68884 | 0) >> 2] = $2_1;
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
               $5_1 = ($6_1 & -8 | 0) + 68924 | 0;
               $4_1 = HEAP32[(0 + 68904 | 0) >> 2] | 0;
               label$19 : {
                label$20 : {
                 $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
                 if ($2_1 & $8_1 | 0) {
                  break label$20
                 }
                 HEAP32[(0 + 68884 | 0) >> 2] = $2_1 | $8_1 | 0;
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
              HEAP32[(0 + 68904 | 0) >> 2] = $7_1;
              HEAP32[(0 + 68892 | 0) >> 2] = $3_1;
              break label$1;
             }
             $9_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
             if (!$9_1) {
              break label$10
             }
             $7_1 = HEAP32[(((__wasm_ctz_i32($9_1 | 0) | 0) << 2 | 0) + 69188 | 0) >> 2] | 0;
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
            $10_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
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
                $5_1 = HEAP32[(($6_1 << 2 | 0) + 69188 | 0) >> 2] | 0;
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
               $0_1 = HEAP32[(((__wasm_ctz_i32($0_1 | 0) | 0) << 2 | 0) + 69188 | 0) >> 2] | 0;
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
            if ($4_1 >>> 0 >= ((HEAP32[(0 + 68892 | 0) >> 2] | 0) - $3_1 | 0) >>> 0) {
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
            $0_1 = HEAP32[(0 + 68892 | 0) >> 2] | 0;
            if ($0_1 >>> 0 < $3_1 >>> 0) {
             break label$42
            }
            $4_1 = HEAP32[(0 + 68904 | 0) >> 2] | 0;
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
            HEAP32[(0 + 68892 | 0) >> 2] = $5_1;
            HEAP32[(0 + 68904 | 0) >> 2] = $7_1;
            $0_1 = $4_1 + 8 | 0;
            break label$1;
           }
           label$45 : {
            $7_1 = HEAP32[(0 + 68896 | 0) >> 2] | 0;
            if ($7_1 >>> 0 <= $3_1 >>> 0) {
             break label$45
            }
            $4_1 = $7_1 - $3_1 | 0;
            HEAP32[(0 + 68896 | 0) >> 2] = $4_1;
            $0_1 = HEAP32[(0 + 68908 | 0) >> 2] | 0;
            $5_1 = $0_1 + $3_1 | 0;
            HEAP32[(0 + 68908 | 0) >> 2] = $5_1;
            HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
            HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
            $0_1 = $0_1 + 8 | 0;
            break label$1;
           }
           label$46 : {
            label$47 : {
             if (!(HEAP32[(0 + 69356 | 0) >> 2] | 0)) {
              break label$47
             }
             $4_1 = HEAP32[(0 + 69364 | 0) >> 2] | 0;
             break label$46;
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = -1;
            HEAP32[(i64toi32_i32$1 + 69368 | 0) >> 2] = -1;
            HEAP32[(i64toi32_i32$1 + 69372 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 4096;
            HEAP32[(i64toi32_i32$1 + 69360 | 0) >> 2] = 4096;
            HEAP32[(i64toi32_i32$1 + 69364 | 0) >> 2] = i64toi32_i32$0;
            HEAP32[(0 + 69356 | 0) >> 2] = (($1_1 + 12 | 0) & -16 | 0) ^ 1431655768 | 0;
            HEAP32[(0 + 69376 | 0) >> 2] = 0;
            HEAP32[(0 + 69328 | 0) >> 2] = 0;
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
            $4_1 = HEAP32[(0 + 69324 | 0) >> 2] | 0;
            if (!$4_1) {
             break label$48
            }
            $5_1 = HEAP32[(0 + 69316 | 0) >> 2] | 0;
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
             if ((HEAPU8[(0 + 69328 | 0) >> 0] | 0) & 4 | 0) {
              break label$50
             }
             label$51 : {
              label$52 : {
               label$53 : {
                label$54 : {
                 label$55 : {
                  $4_1 = HEAP32[(0 + 68908 | 0) >> 2] | 0;
                  if (!$4_1) {
                   break label$55
                  }
                  $0_1 = 69332;
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
                 $7_1 = $160(0 | 0) | 0;
                 if (($7_1 | 0) == (-1 | 0)) {
                  break label$51
                 }
                 $2_1 = $8_1;
                 label$58 : {
                  $0_1 = HEAP32[(0 + 69360 | 0) >> 2] | 0;
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
                  $0_1 = HEAP32[(0 + 69324 | 0) >> 2] | 0;
                  if (!$0_1) {
                   break label$59
                  }
                  $4_1 = HEAP32[(0 + 69316 | 0) >> 2] | 0;
                  $5_1 = $4_1 + $2_1 | 0;
                  if ($5_1 >>> 0 <= $4_1 >>> 0) {
                   break label$51
                  }
                  if ($5_1 >>> 0 > $0_1 >>> 0) {
                   break label$51
                  }
                 }
                 $0_1 = $160($2_1 | 0) | 0;
                 if (($0_1 | 0) != ($7_1 | 0)) {
                  break label$53
                 }
                 break label$49;
                }
                $2_1 = ($2_1 - $7_1 | 0) & $11_1 | 0;
                $7_1 = $160($2_1 | 0) | 0;
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
               $4_1 = HEAP32[(0 + 69364 | 0) >> 2] | 0;
               $4_1 = (($6_1 - $2_1 | 0) + $4_1 | 0) & (0 - $4_1 | 0) | 0;
               if (($160($4_1 | 0) | 0 | 0) == (-1 | 0)) {
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
             HEAP32[(0 + 69328 | 0) >> 2] = HEAP32[(0 + 69328 | 0) >> 2] | 0 | 4 | 0;
            }
            $7_1 = $160($8_1 | 0) | 0;
            $0_1 = $160(0 | 0) | 0;
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
           $0_1 = (HEAP32[(0 + 69316 | 0) >> 2] | 0) + $2_1 | 0;
           HEAP32[(0 + 69316 | 0) >> 2] = $0_1;
           label$61 : {
            if ($0_1 >>> 0 <= (HEAP32[(0 + 69320 | 0) >> 2] | 0) >>> 0) {
             break label$61
            }
            HEAP32[(0 + 69320 | 0) >> 2] = $0_1;
           }
           label$62 : {
            label$63 : {
             $4_1 = HEAP32[(0 + 68908 | 0) >> 2] | 0;
             if (!$4_1) {
              break label$63
             }
             $0_1 = 69332;
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
              $0_1 = HEAP32[(0 + 68900 | 0) >> 2] | 0;
              if (!$0_1) {
               break label$66
              }
              if ($7_1 >>> 0 >= $0_1 >>> 0) {
               break label$65
              }
             }
             HEAP32[(0 + 68900 | 0) >> 2] = $7_1;
            }
            $0_1 = 0;
            HEAP32[(0 + 69336 | 0) >> 2] = $2_1;
            HEAP32[(0 + 69332 | 0) >> 2] = $7_1;
            HEAP32[(0 + 68916 | 0) >> 2] = -1;
            HEAP32[(0 + 68920 | 0) >> 2] = HEAP32[(0 + 69356 | 0) >> 2] | 0;
            HEAP32[(0 + 69344 | 0) >> 2] = 0;
            label$67 : while (1) {
             $4_1 = $0_1 << 3 | 0;
             $5_1 = $4_1 + 68924 | 0;
             HEAP32[($4_1 + 68932 | 0) >> 2] = $5_1;
             HEAP32[($4_1 + 68936 | 0) >> 2] = $5_1;
             $0_1 = $0_1 + 1 | 0;
             if (($0_1 | 0) != (32 | 0)) {
              continue label$67
             }
             break label$67;
            };
            $0_1 = $2_1 + -40 | 0;
            $4_1 = (-8 - $7_1 | 0) & 7 | 0;
            $5_1 = $0_1 - $4_1 | 0;
            HEAP32[(0 + 68896 | 0) >> 2] = $5_1;
            $4_1 = $7_1 + $4_1 | 0;
            HEAP32[(0 + 68908 | 0) >> 2] = $4_1;
            HEAP32[($4_1 + 4 | 0) >> 2] = $5_1 | 1 | 0;
            HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
            HEAP32[(0 + 68912 | 0) >> 2] = HEAP32[(0 + 69372 | 0) >> 2] | 0;
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
           HEAP32[(0 + 68908 | 0) >> 2] = $5_1;
           $7_1 = (HEAP32[(0 + 68896 | 0) >> 2] | 0) + $2_1 | 0;
           $0_1 = $7_1 - $0_1 | 0;
           HEAP32[(0 + 68896 | 0) >> 2] = $0_1;
           HEAP32[($5_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
           HEAP32[(($4_1 + $7_1 | 0) + 4 | 0) >> 2] = 40;
           HEAP32[(0 + 68912 | 0) >> 2] = HEAP32[(0 + 69372 | 0) >> 2] | 0;
           break label$6;
          }
          $0_1 = 0;
          break label$2;
         }
         $0_1 = 0;
         break label$3;
        }
        label$68 : {
         if ($7_1 >>> 0 >= (HEAP32[(0 + 68900 | 0) >> 2] | 0) >>> 0) {
          break label$68
         }
         HEAP32[(0 + 68900 | 0) >> 2] = $7_1;
        }
        $5_1 = $7_1 + $2_1 | 0;
        $0_1 = 69332;
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
        $0_1 = 69332;
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
        HEAP32[(0 + 68896 | 0) >> 2] = $11_1;
        $8_1 = $7_1 + $8_1 | 0;
        HEAP32[(0 + 68908 | 0) >> 2] = $8_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = $11_1 | 1 | 0;
        HEAP32[(($7_1 + $0_1 | 0) + 4 | 0) >> 2] = 40;
        HEAP32[(0 + 68912 | 0) >> 2] = HEAP32[(0 + 69372 | 0) >> 2] | 0;
        $0_1 = ($5_1 + ((39 - $5_1 | 0) & 7 | 0) | 0) + -47 | 0;
        $8_1 = $0_1 >>> 0 < ($4_1 + 16 | 0) >>> 0 ? $4_1 : $0_1;
        HEAP32[($8_1 + 4 | 0) >> 2] = 27;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69340 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69344 | 0) >> 2] | 0;
        $777 = i64toi32_i32$0;
        i64toi32_i32$0 = $8_1 + 16 | 0;
        HEAP32[i64toi32_i32$0 >> 2] = $777;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 69332 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 69336 | 0) >> 2] | 0;
        $779 = i64toi32_i32$1;
        i64toi32_i32$1 = $8_1;
        HEAP32[($8_1 + 8 | 0) >> 2] = $779;
        HEAP32[($8_1 + 12 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[(0 + 69340 | 0) >> 2] = $8_1 + 8 | 0;
        HEAP32[(0 + 69336 | 0) >> 2] = $2_1;
        HEAP32[(0 + 69332 | 0) >> 2] = $7_1;
        HEAP32[(0 + 69344 | 0) >> 2] = 0;
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
          $0_1 = ($7_1 & -8 | 0) + 68924 | 0;
          label$78 : {
           label$79 : {
            $5_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
            $7_1 = 1 << ($7_1 >>> 3 | 0) | 0;
            if ($5_1 & $7_1 | 0) {
             break label$79
            }
            HEAP32[(0 + 68884 | 0) >> 2] = $5_1 | $7_1 | 0;
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
         $5_1 = ($0_1 << 2 | 0) + 69188 | 0;
         label$81 : {
          label$82 : {
           label$83 : {
            $8_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
            $2_1 = 1 << $0_1 | 0;
            if ($8_1 & $2_1 | 0) {
             break label$83
            }
            HEAP32[(0 + 68888 | 0) >> 2] = $8_1 | $2_1 | 0;
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
       $0_1 = HEAP32[(0 + 68896 | 0) >> 2] | 0;
       if ($0_1 >>> 0 <= $3_1 >>> 0) {
        break label$5
       }
       $4_1 = $0_1 - $3_1 | 0;
       HEAP32[(0 + 68896 | 0) >> 2] = $4_1;
       $0_1 = HEAP32[(0 + 68908 | 0) >> 2] | 0;
       $5_1 = $0_1 + $3_1 | 0;
       HEAP32[(0 + 68908 | 0) >> 2] = $5_1;
       HEAP32[($5_1 + 4 | 0) >> 2] = $4_1 | 1 | 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $3_1 | 3 | 0;
       $0_1 = $0_1 + 8 | 0;
       break label$1;
      }
      HEAP32[($159() | 0) >> 2] = 48;
      $0_1 = 0;
      break label$1;
     }
     HEAP32[$0_1 >> 2] = $7_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = (HEAP32[($0_1 + 4 | 0) >> 2] | 0) + $2_1 | 0;
     $0_1 = $162($7_1 | 0, $8_1 | 0, $3_1 | 0) | 0;
     break label$1;
    }
    label$85 : {
     if (!$11_1) {
      break label$85
     }
     label$86 : {
      label$87 : {
       $7_1 = HEAP32[($8_1 + 28 | 0) >> 2] | 0;
       $5_1 = ($7_1 << 2 | 0) + 69188 | 0;
       if (($8_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
        break label$87
       }
       HEAP32[$5_1 >> 2] = $0_1;
       if ($0_1) {
        break label$86
       }
       $10_1 = $10_1 & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
       HEAP32[(0 + 68888 | 0) >> 2] = $10_1;
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
      $0_1 = ($4_1 & -8 | 0) + 68924 | 0;
      label$92 : {
       label$93 : {
        $3_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
        $4_1 = 1 << ($4_1 >>> 3 | 0) | 0;
        if ($3_1 & $4_1 | 0) {
         break label$93
        }
        HEAP32[(0 + 68884 | 0) >> 2] = $3_1 | $4_1 | 0;
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
     $3_1 = ($0_1 << 2 | 0) + 69188 | 0;
     label$95 : {
      label$96 : {
       label$97 : {
        $5_1 = 1 << $0_1 | 0;
        if ($10_1 & $5_1 | 0) {
         break label$97
        }
        HEAP32[(0 + 68888 | 0) >> 2] = $10_1 | $5_1 | 0;
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
      $5_1 = ($8_1 << 2 | 0) + 69188 | 0;
      if (($7_1 | 0) != (HEAP32[$5_1 >> 2] | 0 | 0)) {
       break label$101
      }
      HEAP32[$5_1 >> 2] = $0_1;
      if ($0_1) {
       break label$100
      }
      HEAP32[(0 + 68888 | 0) >> 2] = $9_1 & (__wasm_rotl_i32(-2 | 0, $8_1 | 0) | 0) | 0;
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
     $5_1 = ($6_1 & -8 | 0) + 68924 | 0;
     $0_1 = HEAP32[(0 + 68904 | 0) >> 2] | 0;
     label$106 : {
      label$107 : {
       $8_1 = 1 << ($6_1 >>> 3 | 0) | 0;
       if ($8_1 & $2_1 | 0) {
        break label$107
       }
       HEAP32[(0 + 68884 | 0) >> 2] = $8_1 | $2_1 | 0;
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
    HEAP32[(0 + 68904 | 0) >> 2] = $3_1;
    HEAP32[(0 + 68892 | 0) >> 2] = $4_1;
   }
   $0_1 = $7_1 + 8 | 0;
  }
  global$0 = $1_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $162($0_1, $1_1, $2_1) {
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
    if (($4_1 | 0) != (HEAP32[(0 + 68908 | 0) >> 2] | 0 | 0)) {
     break label$2
    }
    HEAP32[(0 + 68908 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 68896 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 68896 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = $2_1 | 1 | 0;
    break label$1;
   }
   label$3 : {
    if (($4_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
     break label$3
    }
    HEAP32[(0 + 68904 | 0) >> 2] = $5_1;
    $2_1 = (HEAP32[(0 + 68892 | 0) >> 2] | 0) + $0_1 | 0;
    HEAP32[(0 + 68892 | 0) >> 2] = $2_1;
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
       HEAP32[(0 + 68884 | 0) >> 2] = (HEAP32[(0 + 68884 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1_1 >>> 3 | 0 | 0) | 0) | 0;
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
       $1_1 = ($7_1 << 2 | 0) + 69188 | 0;
       if (($4_1 | 0) != (HEAP32[$1_1 >> 2] | 0 | 0)) {
        break label$15
       }
       HEAP32[$1_1 >> 2] = $2_1;
       if ($2_1) {
        break label$14
       }
       HEAP32[(0 + 68888 | 0) >> 2] = (HEAP32[(0 + 68888 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $7_1 | 0) | 0) | 0;
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
    $2_1 = ($0_1 & -8 | 0) + 68924 | 0;
    label$18 : {
     label$19 : {
      $1_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($1_1 & $0_1 | 0) {
       break label$19
      }
      HEAP32[(0 + 68884 | 0) >> 2] = $1_1 | $0_1 | 0;
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
   $1_1 = ($2_1 << 2 | 0) + 69188 | 0;
   label$21 : {
    label$22 : {
     label$23 : {
      $7_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
      $4_1 = 1 << $2_1 | 0;
      if ($7_1 & $4_1 | 0) {
       break label$23
      }
      HEAP32[(0 + 68888 | 0) >> 2] = $7_1 | $4_1 | 0;
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
 
 function $163($0_1) {
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
    if ($1_1 >>> 0 < (HEAP32[(0 + 68900 | 0) >> 2] | 0) >>> 0) {
     break label$1
    }
    $0_1 = $4_1 + $0_1 | 0;
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (($1_1 | 0) == (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
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
         HEAP32[(0 + 68884 | 0) >> 2] = (HEAP32[(0 + 68884 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
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
       HEAP32[(0 + 68892 | 0) >> 2] = $0_1;
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
      $4_1 = ($5_1 << 2 | 0) + 69188 | 0;
      if (($1_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
       break label$13
      }
      HEAP32[$4_1 >> 2] = $2_1;
      if ($2_1) {
       break label$12
      }
      HEAP32[(0 + 68888 | 0) >> 2] = (HEAP32[(0 + 68888 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
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
         if (($3_1 | 0) != (HEAP32[(0 + 68908 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 68908 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 68896 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 68896 | 0) >> 2] = $0_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = $0_1 | 1 | 0;
         if (($1_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 68892 | 0) >> 2] = 0;
         HEAP32[(0 + 68904 | 0) >> 2] = 0;
         return;
        }
        label$21 : {
         if (($3_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
          break label$21
         }
         HEAP32[(0 + 68904 | 0) >> 2] = $1_1;
         $0_1 = (HEAP32[(0 + 68892 | 0) >> 2] | 0) + $0_1 | 0;
         HEAP32[(0 + 68892 | 0) >> 2] = $0_1;
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
          HEAP32[(0 + 68884 | 0) >> 2] = (HEAP32[(0 + 68884 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
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
       $4_1 = ($5_1 << 2 | 0) + 69188 | 0;
       if (($3_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
        break label$29
       }
       HEAP32[$4_1 >> 2] = $2_1;
       if ($2_1) {
        break label$28
       }
       HEAP32[(0 + 68888 | 0) >> 2] = (HEAP32[(0 + 68888 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
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
    if (($1_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
     break label$15
    }
    HEAP32[(0 + 68892 | 0) >> 2] = $0_1;
    return;
   }
   label$31 : {
    if ($0_1 >>> 0 > 255 >>> 0) {
     break label$31
    }
    $2_1 = ($0_1 & -8 | 0) + 68924 | 0;
    label$32 : {
     label$33 : {
      $4_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
      $0_1 = 1 << ($0_1 >>> 3 | 0) | 0;
      if ($4_1 & $0_1 | 0) {
       break label$33
      }
      HEAP32[(0 + 68884 | 0) >> 2] = $4_1 | $0_1 | 0;
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
   $3_1 = ($2_1 << 2 | 0) + 69188 | 0;
   label$35 : {
    label$36 : {
     label$37 : {
      label$38 : {
       $4_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
       $5_1 = 1 << $2_1 | 0;
       if ($4_1 & $5_1 | 0) {
        break label$38
       }
       HEAP32[(0 + 68888 | 0) >> 2] = $4_1 | $5_1 | 0;
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
   $1_1 = (HEAP32[(0 + 68916 | 0) >> 2] | 0) + -1 | 0;
   HEAP32[(0 + 68916 | 0) >> 2] = $1_1 ? $1_1 : -1;
  }
 }
 
 function $164($0_1, $1_1) {
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
   HEAP32[($159() | 0) >> 2] = 48;
   return 0 | 0;
  }
  label$5 : {
   $1_1 = $1_1 >>> 0 < 11 >>> 0 ? 16 : ($1_1 + 11 | 0) & -8 | 0;
   $2_1 = $161(($1_1 + $0_1 | 0) + 12 | 0 | 0) | 0;
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
   $166($3_1 | 0, $2_1 | 0);
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
   $166($2_1 | 0, $1_1 | 0);
  }
  return $0_1 + 8 | 0 | 0;
 }
 
 function $165($0_1, $1_1, $2_1) {
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
     $1_1 = $161($2_1 | 0) | 0;
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
    $1_1 = $164(($1_1 >>> 0 > 16 >>> 0 ? $1_1 : 16) | 0, $2_1 | 0) | 0;
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
 
 function $166($0_1, $1_1) {
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
        if (($0_1 | 0) == (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
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
         HEAP32[(0 + 68884 | 0) >> 2] = (HEAP32[(0 + 68884 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
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
       HEAP32[(0 + 68892 | 0) >> 2] = $1_1;
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
      $4_1 = ($5_1 << 2 | 0) + 69188 | 0;
      if (($0_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
       break label$13
      }
      HEAP32[$4_1 >> 2] = $3_1;
      if ($3_1) {
       break label$12
      }
      HEAP32[(0 + 68888 | 0) >> 2] = (HEAP32[(0 + 68888 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
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
         if (($2_1 | 0) != (HEAP32[(0 + 68908 | 0) >> 2] | 0 | 0)) {
          break label$20
         }
         HEAP32[(0 + 68908 | 0) >> 2] = $0_1;
         $1_1 = (HEAP32[(0 + 68896 | 0) >> 2] | 0) + $1_1 | 0;
         HEAP32[(0 + 68896 | 0) >> 2] = $1_1;
         HEAP32[($0_1 + 4 | 0) >> 2] = $1_1 | 1 | 0;
         if (($0_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
          break label$1
         }
         HEAP32[(0 + 68892 | 0) >> 2] = 0;
         HEAP32[(0 + 68904 | 0) >> 2] = 0;
         return;
        }
        label$21 : {
         if (($2_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
          break label$21
         }
         HEAP32[(0 + 68904 | 0) >> 2] = $0_1;
         $1_1 = (HEAP32[(0 + 68892 | 0) >> 2] | 0) + $1_1 | 0;
         HEAP32[(0 + 68892 | 0) >> 2] = $1_1;
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
          HEAP32[(0 + 68884 | 0) >> 2] = (HEAP32[(0 + 68884 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4_1 >>> 3 | 0 | 0) | 0) | 0;
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
       $4_1 = ($5_1 << 2 | 0) + 69188 | 0;
       if (($2_1 | 0) != (HEAP32[$4_1 >> 2] | 0 | 0)) {
        break label$29
       }
       HEAP32[$4_1 >> 2] = $3_1;
       if ($3_1) {
        break label$28
       }
       HEAP32[(0 + 68888 | 0) >> 2] = (HEAP32[(0 + 68888 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $5_1 | 0) | 0) | 0;
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
    if (($0_1 | 0) != (HEAP32[(0 + 68904 | 0) >> 2] | 0 | 0)) {
     break label$15
    }
    HEAP32[(0 + 68892 | 0) >> 2] = $1_1;
    return;
   }
   label$31 : {
    if ($1_1 >>> 0 > 255 >>> 0) {
     break label$31
    }
    $3_1 = ($1_1 & -8 | 0) + 68924 | 0;
    label$32 : {
     label$33 : {
      $4_1 = HEAP32[(0 + 68884 | 0) >> 2] | 0;
      $1_1 = 1 << ($1_1 >>> 3 | 0) | 0;
      if ($4_1 & $1_1 | 0) {
       break label$33
      }
      HEAP32[(0 + 68884 | 0) >> 2] = $4_1 | $1_1 | 0;
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
   $4_1 = ($3_1 << 2 | 0) + 69188 | 0;
   label$35 : {
    label$36 : {
     label$37 : {
      $5_1 = HEAP32[(0 + 68888 | 0) >> 2] | 0;
      $2_1 = 1 << $3_1 | 0;
      if ($5_1 & $2_1 | 0) {
       break label$37
      }
      HEAP32[(0 + 68888 | 0) >> 2] = $5_1 | $2_1 | 0;
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
 
 function $167($0_1, $1_1) {
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
   $0_1 = $165($2_1 + 12 | 0 | 0, $0_1 | 0, $1_1 | 0) | 0;
   $3_1 = (wasm2js_i32$0 = 0, wasm2js_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0, wasm2js_i32$2 = $0_1, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
  }
  global$0 = $2_1 + 16 | 0;
  return $3_1 | 0;
 }
 
 function $168($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   $0_1 = $169($0_1 | 0) | 0;
   if ($0_1) {
    break label$1
   }
   $170();
  }
  return $0_1 | 0;
 }
 
 function $169($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0;
  $1_1 = $0_1 >>> 0 > 1 >>> 0 ? $0_1 : 1;
  label$1 : {
   label$2 : while (1) {
    $2_1 = $161($1_1 | 0) | 0;
    if ($2_1) {
     break label$1
    }
    $0_1 = $318() | 0;
    if (!$0_1) {
     break label$1
    }
    FUNCTION_TABLE[$0_1 | 0]();
    continue label$2;
   };
  }
  return $2_1 | 0;
 }
 
 function $170() {
  $180();
  wasm2js_trap();
 }
 
 function $171($0_1) {
  $0_1 = $0_1 | 0;
  $163($0_1 | 0);
 }
 
 function $172($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $171($0_1 | 0);
 }
 
 function $173($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   $1_1 = $174($0_1 | 0, $1_1 | 0) | 0;
   if ($1_1) {
    break label$1
   }
   $170();
  }
  return $1_1 | 0;
 }
 
 function $174($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $3_1 = 0, $2_1 = 0;
  $2_1 = $1_1 >>> 0 > 4 >>> 0 ? $1_1 : 4;
  $0_1 = $0_1 >>> 0 > 1 >>> 0 ? $0_1 : 1;
  label$1 : {
   label$2 : while (1) {
    $3_1 = $175($2_1 | 0, $0_1 | 0) | 0;
    if ($3_1) {
     break label$1
    }
    $1_1 = $318() | 0;
    if (!$1_1) {
     break label$1
    }
    FUNCTION_TABLE[$1_1 | 0]();
    continue label$2;
   };
  }
  return $3_1 | 0;
 }
 
 function $175($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = (($0_1 + $1_1 | 0) + -1 | 0) & (0 - $0_1 | 0) | 0;
  return $167($0_1 | 0, ($2_1 >>> 0 > $1_1 >>> 0 ? $2_1 : $1_1) | 0) | 0 | 0;
 }
 
 function $176($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $177($0_1 | 0);
 }
 
 function $177($0_1) {
  $0_1 = $0_1 | 0;
  $163($0_1 | 0);
 }
 
 function $178($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $176($0_1 | 0, $2_1 | 0);
 }
 
 function $179() {
  fimport$14();
  wasm2js_trap();
 }
 
 function $180() {
  $179();
  wasm2js_trap();
 }
 
 function $181($0_1) {
  $0_1 = $0_1 | 0;
  return 1 | 0;
 }
 
 function $182($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $183($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $184($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $185() {
  $183(69380 | 0);
  return 69384 | 0;
 }
 
 function $186() {
  $184(69380 | 0);
 }
 
 function $187($0_1, $1_1, $2_1) {
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
    return $154($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0;
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
 
 function $188($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if (!($194($0_1 | 0) | 0)) {
    break label$1
   }
   return $195($0_1 | 0) | 0 | 0;
  }
  return $196($0_1 | 0) | 0 | 0;
 }
 
 function $189($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = 10;
  label$1 : {
   if (!($194($0_1 | 0) | 0)) {
    break label$1
   }
   $1_1 = ($197($0_1 | 0) | 0) + -1 | 0;
  }
  return $1_1 | 0;
 }
 
 function $190($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if (!($194($0_1 | 0) | 0)) {
    break label$1
   }
   return $198($0_1 | 0) | 0 | 0;
  }
  return $199($0_1 | 0) | 0 | 0;
 }
 
 function $191($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $192($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $193($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1, $7_1) {
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
   $9_1 = $203($0_1 | 0) | 0;
   if (($9_1 + ($1_1 ^ -1 | 0) | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   $10_1 = $190($0_1 | 0) | 0;
   label$2 : {
    if ((($9_1 >>> 1 | 0) + -8 | 0) >>> 0 <= $1_1 >>> 0) {
     break label$2
    }
    HEAP32[($8_1 + 12 | 0) >> 2] = $1_1 << 1 | 0;
    HEAP32[($8_1 + 4 | 0) >> 2] = $2_1 + $1_1 | 0;
    $9_1 = ($205(HEAP32[($204($8_1 + 4 | 0 | 0, $8_1 + 12 | 0 | 0) | 0) >> 2] | 0 | 0) | 0) + 1 | 0;
   }
   $206($0_1 | 0);
   $208($8_1 + 4 | 0 | 0, $207($0_1 | 0) | 0 | 0, $9_1 | 0);
   $9_1 = HEAP32[($8_1 + 4 | 0) >> 2] | 0;
   $209($9_1 | 0, HEAP32[($8_1 + 8 | 0) >> 2] | 0 | 0);
   label$3 : {
    if (!$4_1) {
     break label$3
    }
    $210($191($9_1 | 0) | 0 | 0, $191($10_1 | 0) | 0 | 0, $4_1 | 0) | 0;
   }
   label$4 : {
    if (!$6_1) {
     break label$4
    }
    $210(($191($9_1 | 0) | 0) + $4_1 | 0 | 0, $7_1 | 0, $6_1 | 0) | 0;
   }
   $11_1 = $5_1 + $4_1 | 0;
   $7_1 = $3_1 - $11_1 | 0;
   label$5 : {
    if (($3_1 | 0) == ($11_1 | 0)) {
     break label$5
    }
    $210((($191($9_1 | 0) | 0) + $4_1 | 0) + $6_1 | 0 | 0, (($191($10_1 | 0) | 0) + $4_1 | 0) + $5_1 | 0 | 0, $7_1 | 0) | 0;
   }
   label$6 : {
    $3_1 = $1_1 + 1 | 0;
    if (($3_1 | 0) == (11 | 0)) {
     break label$6
    }
    $211($207($0_1 | 0) | 0 | 0, $10_1 | 0, $3_1 | 0);
   }
   $212($0_1 | 0, $9_1 | 0);
   $213($0_1 | 0, HEAP32[($8_1 + 8 | 0) >> 2] | 0 | 0);
   $4_1 = ($6_1 + $4_1 | 0) + $7_1 | 0;
   $214($0_1 | 0, $4_1 | 0);
   HEAP8[($8_1 + 12 | 0) >> 0] = 0;
   $202($9_1 + $4_1 | 0 | 0, $8_1 + 12 | 0 | 0);
   $215($0_1 | 0, $2_1 + $1_1 | 0 | 0);
   global$0 = $8_1 + 16 | 0;
   return;
  }
  $216($0_1 | 0);
  wasm2js_trap();
 }
 
 function $194($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[(($231($0_1 | 0) | 0) + 11 | 0) >> 0] | 0) >>> 7 | 0 | 0;
 }
 
 function $195($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[(($231($0_1 | 0) | 0) + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $196($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAPU8[(($231($0_1 | 0) | 0) + 11 | 0) >> 0] | 0) & 127 | 0 | 0;
 }
 
 function $197($0_1) {
  $0_1 = $0_1 | 0;
  return (HEAP32[(($231($0_1 | 0) | 0) + 8 | 0) >> 2] | 0) & 2147483647 | 0 | 0;
 }
 
 function $198($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[($224($0_1 | 0) | 0) >> 2] | 0 | 0;
 }
 
 function $199($0_1) {
  $0_1 = $0_1 | 0;
  return $225($224($0_1 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $200($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   $187($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  }
  return $0_1 | 0;
 }
 
 function $201($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (!($194($0_1 | 0) | 0)) {
    break label$1
   }
   $214($0_1 | 0, $1_1 | 0);
   return;
  }
  $219($0_1 | 0, $1_1 | 0);
 }
 
 function $202($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP8[$0_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
 }
 
 function $203($0_1) {
  $0_1 = $0_1 | 0;
  $0_1 = $221($220($0_1 | 0) | 0 | 0) | 0;
  return ($0_1 >>> ($0_1 >>> 0 > (($222() | 0) >>> 1 | 0) >>> 0) | 0) + -8 | 0 | 0;
 }
 
 function $204($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $236($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $205($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $7_1 = 0;
  $1_1 = 10;
  label$1 : {
   if ($0_1 >>> 0 < 11 >>> 0) {
    break label$1
   }
   $0_1 = $228($0_1 + 1 | 0 | 0) | 0;
   $7_1 = $0_1;
   $0_1 = $0_1 + -1 | 0;
   $1_1 = ($0_1 | 0) == (11 | 0) ? $7_1 : $0_1;
  }
  return $1_1 | 0;
 }
 
 function $206($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $207($0_1) {
  $0_1 = $0_1 | 0;
  return $227($0_1 | 0) | 0 | 0;
 }
 
 function $208($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $1_1 = $226($1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $209($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $210($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $229($1_1 | 0, $2_1 | 0, $0_1 | 0) | 0;
  return $0_1 | 0;
 }
 
 function $211($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $232($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $212($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[($224($0_1 | 0) | 0) >> 2] = $1_1;
 }
 
 function $213($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $224($0_1 | 0) | 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = (HEAP32[($2_1 + 8 | 0) >> 2] | 0) & -2147483648 | 0 | ($1_1 & 2147483647 | 0) | 0;
  $0_1 = $224($0_1 | 0) | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = HEAP32[($0_1 + 8 | 0) >> 2] | 0 | -2147483648 | 0;
 }
 
 function $214($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP32[(($224($0_1 | 0) | 0) + 4 | 0) >> 2] = $1_1;
 }
 
 function $215($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
 }
 
 function $216($0_1) {
  $0_1 = $0_1 | 0;
  $223(65755 | 0);
  wasm2js_trap();
 }
 
 function $217($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $218($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 >>> 0 < 11 >>> 0 | 0;
 }
 
 function $219($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $224($0_1 | 0) | 0;
  HEAP8[($2_1 + 11 | 0) >> 0] = (HEAPU8[($2_1 + 11 | 0) >> 0] | 0) & 128 | 0 | ($1_1 & 127 | 0) | 0;
  $0_1 = $224($0_1 | 0) | 0;
  HEAP8[($0_1 + 11 | 0) >> 0] = (HEAPU8[($0_1 + 11 | 0) >> 0] | 0) & 127 | 0;
 }
 
 function $220($0_1) {
  $0_1 = $0_1 | 0;
  return $247($0_1 | 0) | 0 | 0;
 }
 
 function $221($0_1) {
  $0_1 = $0_1 | 0;
  return $222() | 0 | 0;
 }
 
 function $222() {
  return $248() | 0 | 0;
 }
 
 function $223($0_1) {
  $0_1 = $0_1 | 0;
  $179();
  wasm2js_trap();
 }
 
 function $224($0_1) {
  $0_1 = $0_1 | 0;
  return $250($0_1 | 0) | 0 | 0;
 }
 
 function $225($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $226($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (($221($0_1 | 0) | 0) >>> 0 >= $1_1 >>> 0) {
    break label$1
   }
   $251();
   wasm2js_trap();
  }
  return $252($1_1 | 0, 1 | 0) | 0 | 0;
 }
 
 function $227($0_1) {
  $0_1 = $0_1 | 0;
  return $256($0_1 | 0) | 0 | 0;
 }
 
 function $228($0_1) {
  $0_1 = $0_1 | 0;
  return ($0_1 + 7 | 0) & -8 | 0 | 0;
 }
 
 function $229($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $257($0_1 | 0, $0_1 + $1_1 | 0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $230($0_1) {
  $0_1 = $0_1 | 0;
  $206($0_1 | 0);
  label$1 : {
   if (!($194($0_1 | 0) | 0)) {
    break label$1
   }
   $211($207($0_1 | 0) | 0 | 0, $198($0_1 | 0) | 0 | 0, $197($0_1 | 0) | 0 | 0);
  }
  return $0_1 | 0;
 }
 
 function $231($0_1) {
  $0_1 = $0_1 | 0;
  return $246($0_1 | 0) | 0 | 0;
 }
 
 function $232($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $280($1_1 | 0, $2_1 | 0, 1 | 0);
 }
 
 function $233($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  $6_1 = $6_1 | 0;
  $234($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0, $6_1 | 0);
  $6_1 = ($3_1 - $5_1 | 0) + $6_1 | 0;
  $214($0_1 | 0, $6_1 | 0);
  $215($0_1 | 0, $6_1 | 0);
 }
 
 function $234($0_1, $1_1, $2_1, $3_1, $4_1, $5_1, $6_1) {
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
   $8_1 = $203($0_1 | 0) | 0;
   if (($8_1 - $1_1 | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   $9_1 = $190($0_1 | 0) | 0;
   label$2 : {
    if ((($8_1 >>> 1 | 0) + -8 | 0) >>> 0 <= $1_1 >>> 0) {
     break label$2
    }
    HEAP32[($7_1 + 12 | 0) >> 2] = $1_1 << 1 | 0;
    HEAP32[($7_1 + 4 | 0) >> 2] = $2_1 + $1_1 | 0;
    $8_1 = ($205(HEAP32[($204($7_1 + 4 | 0 | 0, $7_1 + 12 | 0 | 0) | 0) >> 2] | 0 | 0) | 0) + 1 | 0;
   }
   $206($0_1 | 0);
   $208($7_1 + 4 | 0 | 0, $207($0_1 | 0) | 0 | 0, $8_1 | 0);
   $8_1 = HEAP32[($7_1 + 4 | 0) >> 2] | 0;
   $209($8_1 | 0, HEAP32[($7_1 + 8 | 0) >> 2] | 0 | 0);
   label$3 : {
    if (!$4_1) {
     break label$3
    }
    $210($191($8_1 | 0) | 0 | 0, $191($9_1 | 0) | 0 | 0, $4_1 | 0) | 0;
   }
   label$4 : {
    $2_1 = $5_1 + $4_1 | 0;
    if (($3_1 | 0) == ($2_1 | 0)) {
     break label$4
    }
    $210((($191($8_1 | 0) | 0) + $4_1 | 0) + $6_1 | 0 | 0, (($191($9_1 | 0) | 0) + $4_1 | 0) + $5_1 | 0 | 0, $3_1 - $2_1 | 0 | 0) | 0;
   }
   label$5 : {
    $1_1 = $1_1 + 1 | 0;
    if (($1_1 | 0) == (11 | 0)) {
     break label$5
    }
    $211($207($0_1 | 0) | 0 | 0, $9_1 | 0, $1_1 | 0);
   }
   $212($0_1 | 0, $8_1 | 0);
   $213($0_1 | 0, HEAP32[($7_1 + 8 | 0) >> 2] | 0 | 0);
   global$0 = $7_1 + 16 | 0;
   return;
  }
  $216($0_1 | 0);
  wasm2js_trap();
 }
 
 function $235($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   if (($203($0_1 | 0) | 0) >>> 0 < $2_1 >>> 0) {
    break label$1
   }
   label$2 : {
    label$3 : {
     if (!($218($2_1 | 0) | 0)) {
      break label$3
     }
     $219($0_1 | 0, $2_1 | 0);
     $4_1 = $199($0_1 | 0) | 0;
     break label$2;
    }
    $208($3_1 + 8 | 0 | 0, $207($0_1 | 0) | 0 | 0, ($205($2_1 | 0) | 0) + 1 | 0 | 0);
    $4_1 = HEAP32[($3_1 + 8 | 0) >> 2] | 0;
    $209($4_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
    $212($0_1 | 0, $4_1 | 0);
    $213($0_1 | 0, HEAP32[($3_1 + 12 | 0) >> 2] | 0 | 0);
    $214($0_1 | 0, $2_1 | 0);
   }
   $210($191($4_1 | 0) | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
   HEAP8[($3_1 + 7 | 0) >> 0] = 0;
   $202($4_1 + $2_1 | 0 | 0, $3_1 + 7 | 0 | 0);
   $215($0_1 | 0, $2_1 | 0);
   global$0 = $3_1 + 16 | 0;
   return;
  }
  $216($0_1 | 0);
  wasm2js_trap();
 }
 
 function $236($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $3_1 = $245($2_1 + 15 | 0 | 0, $0_1 | 0, $1_1 | 0) | 0;
  global$0 = $2_1 + 16 | 0;
  return ($3_1 ? $1_1 : $0_1) | 0;
 }
 
 function $237($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $5_1 = 0, $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    $4_1 = $189($0_1 | 0) | 0;
    $5_1 = $188($0_1 | 0) | 0;
    if (($4_1 - $5_1 | 0) >>> 0 < $2_1 >>> 0) {
     break label$2
    }
    if (!$2_1) {
     break label$1
    }
    $192($0_1 | 0, $2_1 | 0);
    $4_1 = $191($190($0_1 | 0) | 0 | 0) | 0;
    $210($4_1 + $5_1 | 0 | 0, $1_1 | 0, $2_1 | 0) | 0;
    $2_1 = $5_1 + $2_1 | 0;
    $201($0_1 | 0, $2_1 | 0);
    HEAP8[($3_1 + 15 | 0) >> 0] = 0;
    $202($4_1 + $2_1 | 0 | 0, $3_1 + 15 | 0 | 0);
    break label$1;
   }
   $193($0_1 | 0, $4_1 | 0, ($2_1 - $4_1 | 0) + $5_1 | 0 | 0, $5_1 | 0, $5_1 | 0, 0 | 0, $2_1 | 0, $1_1 | 0);
  }
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $238($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $239($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $4_1 = 0, $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP8[($2_1 + 15 | 0) >> 0] = $1_1;
  label$1 : {
   label$2 : {
    $3_1 = $194($0_1 | 0) | 0;
    if ($3_1) {
     break label$2
    }
    $4_1 = 10;
    $1_1 = $196($0_1 | 0) | 0;
    break label$1;
   }
   $4_1 = ($197($0_1 | 0) | 0) + -1 | 0;
   $1_1 = $195($0_1 | 0) | 0;
  }
  label$3 : {
   label$4 : {
    label$5 : {
     if (($1_1 | 0) != ($4_1 | 0)) {
      break label$5
     }
     $233($0_1 | 0, $4_1 | 0, 1 | 0, $4_1 | 0, $4_1 | 0, 0 | 0, 0 | 0);
     $192($0_1 | 0, 1 | 0);
     $190($0_1 | 0) | 0;
     break label$4;
    }
    $192($0_1 | 0, 1 | 0);
    $190($0_1 | 0) | 0;
    if ($3_1) {
     break label$4
    }
    $4_1 = $199($0_1 | 0) | 0;
    $219($0_1 | 0, $1_1 + 1 | 0 | 0);
    break label$3;
   }
   $4_1 = $198($0_1 | 0) | 0;
   $214($0_1 | 0, $1_1 + 1 | 0 | 0);
  }
  $0_1 = $4_1 + $1_1 | 0;
  $202($0_1 | 0, $2_1 + 15 | 0 | 0);
  HEAP8[($2_1 + 14 | 0) >> 0] = 0;
  $202($0_1 + 1 | 0 | 0, $2_1 + 14 | 0 | 0);
  global$0 = $2_1 + 16 | 0;
 }
 
 function $240($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $285($238($0_1 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $241($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $242($0_1 | 0, $1_1 | 0);
 }
 
 function $242($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  $243($2_1 + 12 | 0 | 0, $2_1 + 21 | 0 | 0, $2_1 + 32 | 0 | 0, $1_1 | 0);
  $244($0_1 | 0, $2_1 + 21 | 0 | 0, HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  global$0 = $2_1 + 32 | 0;
 }
 
 function $243($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $288($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $244($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $0_1 = $240($0_1 | 0, $3_1 + 15 | 0 | 0, $3_1 + 14 | 0 | 0) | 0;
  $289($0_1 | 0, $1_1 | 0, $2_1 | 0);
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $245($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return (HEAP32[$1_1 >> 2] | 0) >>> 0 < (HEAP32[$2_1 >> 2] | 0) >>> 0 | 0;
 }
 
 function $246($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $247($0_1) {
  $0_1 = $0_1 | 0;
  return $249($0_1 | 0) | 0 | 0;
 }
 
 function $248() {
  return -1 | 0;
 }
 
 function $249($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $250($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $251() {
  $179();
  wasm2js_trap();
 }
 
 function $252($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   if (!($253($1_1 | 0) | 0)) {
    break label$1
   }
   return $254($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  return $255($0_1 | 0) | 0 | 0;
 }
 
 function $253($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 >>> 0 > 8 >>> 0 | 0;
 }
 
 function $254($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $173($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $255($0_1) {
  $0_1 = $0_1 | 0;
  return $168($0_1 | 0) | 0 | 0;
 }
 
 function $256($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $257($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  $258($3_1 + 8 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0);
  $2_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
  global$0 = $3_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $258($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $259($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $259($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $260($0_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
 }
 
 function $260($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 32 | 0;
  global$0 = $4_1;
  $261($4_1 + 24 | 0 | 0, $1_1 | 0, $2_1 | 0);
  $263($4_1 + 16 | 0 | 0, $4_1 + 12 | 0 | 0, HEAP32[($4_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4_1 + 28 | 0) >> 2] | 0 | 0, $262($3_1 | 0) | 0 | 0);
  HEAP32[($4_1 + 12 | 0) >> 2] = $264($1_1 | 0, HEAP32[($4_1 + 16 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = $265($3_1 | 0, HEAP32[($4_1 + 20 | 0) >> 2] | 0 | 0) | 0;
  $266($0_1 | 0, $4_1 + 12 | 0 | 0, $4_1 + 8 | 0 | 0);
  global$0 = $4_1 + 32 | 0;
 }
 
 function $261($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $267($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $262($0_1) {
  $0_1 = $0_1 | 0;
  return $269($0_1 | 0) | 0 | 0;
 }
 
 function $263($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $268($0_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
 }
 
 function $264($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $271($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $265($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $272($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $266($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $270($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
 }
 
 function $267($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $273($1_1 | 0) | 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = $273($2_1 | 0) | 0;
  $274($0_1 | 0, $3_1 + 12 | 0 | 0, $3_1 + 8 | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
 }
 
 function $268($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  HEAP32[($4_1 + 12 | 0) >> 2] = $2_1;
  $2_1 = $2_1 - $1_1 | 0;
  $200($3_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = $3_1 + $2_1 | 0;
  $276($0_1 | 0, $4_1 + 12 | 0 | 0, $4_1 + 8 | 0 | 0);
  global$0 = $4_1 + 16 | 0;
 }
 
 function $269($0_1) {
  $0_1 = $0_1 | 0;
  return $191($0_1 | 0) | 0 | 0;
 }
 
 function $270($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $271($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $278($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $272($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $0_1 + ($1_1 - ($191($0_1 | 0) | 0) | 0) | 0 | 0;
 }
 
 function $273($0_1) {
  $0_1 = $0_1 | 0;
  return $275($0_1 | 0) | 0 | 0;
 }
 
 function $274($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $275($0_1) {
  $0_1 = $0_1 | 0;
  return $217($0_1 | 0) | 0 | 0;
 }
 
 function $276($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $277($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
 }
 
 function $277($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  HEAP32[$0_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[$2_1 >> 2] | 0;
  return $0_1 | 0;
 }
 
 function $278($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $279($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $279($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $0_1 + ($1_1 - ($217($0_1 | 0) | 0) | 0) | 0 | 0;
 }
 
 function $280($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  label$1 : {
   if (!($253($2_1 | 0) | 0)) {
    break label$1
   }
   $281($0_1 | 0, $1_1 | 0, $2_1 | 0);
   return;
  }
  $282($0_1 | 0, $1_1 | 0);
 }
 
 function $281($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $283($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $282($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $284($0_1 | 0, $1_1 | 0);
 }
 
 function $283($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $178($0_1 | 0, $1_1 | 0, $2_1 | 0);
 }
 
 function $284($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $172($0_1 | 0, $1_1 | 0);
 }
 
 function $285($0_1) {
  $0_1 = $0_1 | 0;
  return $286($0_1 | 0) | 0 | 0;
 }
 
 function $286($0_1) {
  $0_1 = $0_1 | 0;
  return $287($0_1 | 0) | 0 | 0;
 }
 
 function $287($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $288($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0;
  $4_1 = $290($3_1 | 0) | 0;
  label$1 : {
   if (($1_1 | 0) == ($2_1 | 0)) {
    break label$1
   }
   if (($3_1 | 0) > (-1 | 0)) {
    break label$1
   }
   HEAP8[$1_1 >> 0] = 45;
   $1_1 = $1_1 + 1 | 0;
   $4_1 = $291($4_1 | 0) | 0;
  }
  $292($0_1 | 0, $1_1 | 0, $2_1 | 0, $4_1 | 0);
 }
 
 function $289($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $309($0_1 | 0, $1_1 | 0, $2_1 | 0, $308($1_1 | 0, $2_1 | 0) | 0 | 0);
 }
 
 function $290($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $291($0_1) {
  $0_1 = $0_1 | 0;
  return 0 - $0_1 | 0 | 0;
 }
 
 function $292($0_1, $1_1, $2_1, $3_1) {
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
    if (($293($3_1 | 0) | 0 | 0) > ($4_1 | 0)) {
     break label$1
    }
   }
   $5_1 = 0;
   $2_1 = $294($1_1 | 0, $3_1 | 0) | 0;
  }
  HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
  HEAP32[$0_1 >> 2] = $2_1;
 }
 
 function $293($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = Math_imul(32 - ($295($0_1 | 1 | 0 | 0) | 0) | 0, 1233) >> 12 | 0;
  return $1_1 + ((HEAP32[(($1_1 << 2 | 0) + 67696 | 0) >> 2] | 0) >>> 0 <= $0_1 >>> 0) | 0 | 0;
 }
 
 function $294($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $296($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $295($0_1) {
  $0_1 = $0_1 | 0;
  return Math_clz32($0_1) | 0;
 }
 
 function $296($0_1, $1_1) {
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
      return $297($0_1 | 0, $1_1 | 0) | 0 | 0;
     }
     return $298($0_1 | 0, $1_1 | 0) | 0 | 0;
    }
    label$5 : {
     if ($1_1 >>> 0 > 999 >>> 0) {
      break label$5
     }
     return $299($0_1 | 0, $1_1 | 0) | 0 | 0;
    }
    return $300($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   label$6 : {
    if ($1_1 >>> 0 > 99999 >>> 0) {
     break label$6
    }
    return $301($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   return $302($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  label$7 : {
   if ($1_1 >>> 0 > 99999999 >>> 0) {
    break label$7
   }
   label$8 : {
    if ($1_1 >>> 0 > 9999999 >>> 0) {
     break label$8
    }
    return $303($0_1 | 0, $1_1 | 0) | 0 | 0;
   }
   return $304($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  label$9 : {
   if ($1_1 >>> 0 > 999999999 >>> 0) {
    break label$9
   }
   return $305($0_1 | 0, $1_1 | 0) | 0 | 0;
  }
  return $306($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $297($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  HEAP8[$0_1 >> 0] = $1_1 + 48 | 0;
  return $0_1 + 1 | 0 | 0;
 }
 
 function $298($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $307(($1_1 << 1 | 0) + 67744 | 0 | 0, 2 | 0, $0_1 | 0) | 0 | 0;
 }
 
 function $299($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (100 >>> 0) | 0;
  return $298($297($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 100) | 0 | 0) | 0 | 0;
 }
 
 function $300($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (100 >>> 0) | 0;
  return $298($298($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 100) | 0 | 0) | 0 | 0;
 }
 
 function $301($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e4 >>> 0) | 0;
  return $300($297($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e4) | 0 | 0) | 0 | 0;
 }
 
 function $302($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e4 >>> 0) | 0;
  return $300($298($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e4) | 0 | 0) | 0 | 0;
 }
 
 function $303($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e6 >>> 0) | 0;
  return $302($297($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e6) | 0 | 0) | 0 | 0;
 }
 
 function $304($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e6 >>> 0) | 0;
  return $302($298($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e6) | 0 | 0) | 0 | 0;
 }
 
 function $305($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e8 >>> 0) | 0;
  return $304($297($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e8) | 0 | 0) | 0 | 0;
 }
 
 function $306($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = ($1_1 >>> 0) / (1e8 >>> 0) | 0;
  return $304($298($0_1 | 0, $2_1 | 0) | 0 | 0, $1_1 - Math_imul($2_1, 1e8) | 0 | 0) | 0 | 0;
 }
 
 function $307($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $257($0_1 | 0, $0_1 + $1_1 | 0 | 0, $2_1 | 0) | 0 | 0;
 }
 
 function $308($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $310($0_1 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function $309($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  label$1 : {
   if (($203($0_1 | 0) | 0) >>> 0 < $3_1 >>> 0) {
    break label$1
   }
   label$2 : {
    label$3 : {
     if (!($218($3_1 | 0) | 0)) {
      break label$3
     }
     $219($0_1 | 0, $3_1 | 0);
     $5_1 = $199($0_1 | 0) | 0;
     break label$2;
    }
    $208($4_1 + 8 | 0 | 0, $207($0_1 | 0) | 0 | 0, ($205($3_1 | 0) | 0) + 1 | 0 | 0);
    $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
    $209($5_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    $212($0_1 | 0, $5_1 | 0);
    $213($0_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0);
    $214($0_1 | 0, $3_1 | 0);
   }
   label$4 : {
    label$5 : while (1) {
     if (($1_1 | 0) == ($2_1 | 0)) {
      break label$4
     }
     $202($5_1 | 0, $1_1 | 0);
     $5_1 = $5_1 + 1 | 0;
     $1_1 = $1_1 + 1 | 0;
     continue label$5;
    };
   }
   HEAP8[($4_1 + 7 | 0) >> 0] = 0;
   $202($5_1 | 0, $4_1 + 7 | 0 | 0);
   $215($0_1 | 0, $3_1 | 0);
   global$0 = $4_1 + 16 | 0;
   return;
  }
  $216($0_1 | 0);
  wasm2js_trap();
 }
 
 function $310($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  return $1_1 - $0_1 | 0 | 0;
 }
 
 function $311($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $312($0_1) {
  $0_1 = $0_1 | 0;
  return fimport$15($311(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0) | 0 | 0) | 0 | 0;
 }
 
 function $313($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  HEAP32[($159() | 0) >> 2] = $0_1;
  return -1 | 0;
 }
 
 function $314($0_1, $1_1, $2_1) {
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
       if (!($313(fimport$16(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $3_1 + 16 | 0 | 0, 2 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
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
       if (!($313(fimport$16(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $4_1 | 0, $7_1 | 0, $3_1 + 12 | 0 | 0) | 0 | 0) | 0)) {
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
 
 function $315($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = $1$hi;
  $2_1 = $313($366($0_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 & 255 | 0 | 0, $3_1 + 8 | 0 | 0) | 0 | 0) | 0;
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
 
 function $316($0_1, $1_1, $1$hi, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $315(HEAP32[($0_1 + 60 | 0) >> 2] | 0 | 0, $1_1 | 0, i64toi32_i32$0 | 0, $2_1 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function $317($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[$0_1 >> 2] | 0 | 0;
 }
 
 function $318() {
  return $317(69400 | 0) | 0 | 0;
 }
 
 function $319($0_1, $1_1) {
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
 
 function $320($0_1) {
  $0_1 = $0_1 | 0;
  return $350($0_1 | 0) | 0 | 0;
 }
 
 function $321($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $322($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $323($0_1) {
  $0_1 = $0_1 | 0;
  $172($320($0_1 | 0) | 0 | 0, 8 | 0);
 }
 
 function $324($0_1) {
  $0_1 = $0_1 | 0;
  $172($320($0_1 | 0) | 0 | 0, 8 | 0);
 }
 
 function $325($0_1) {
  $0_1 = $0_1 | 0;
  $172($320($0_1 | 0) | 0 | 0, 12 | 0);
 }
 
 function $326($0_1) {
  $0_1 = $0_1 | 0;
  $172($320($0_1 | 0) | 0 | 0, 16 | 0);
 }
 
 function $327($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  return $328($0_1 | 0, $1_1 | 0, 0 | 0) | 0 | 0;
 }
 
 function $328($0_1, $1_1, $2_1) {
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
  return !($319($329($0_1 | 0) | 0 | 0, $329($1_1 | 0) | 0 | 0) | 0) | 0;
 }
 
 function $329($0_1) {
  $0_1 = $0_1 | 0;
  return HEAP32[($0_1 + 4 | 0) >> 2] | 0 | 0;
 }
 
 function $330($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 64 | 0;
  global$0 = $3_1;
  $4_1 = 1;
  label$1 : {
   label$2 : {
    if ($328($0_1 | 0, $1_1 | 0, 0 | 0) | 0) {
     break label$2
    }
    $4_1 = 0;
    if (!$1_1) {
     break label$2
    }
    $4_1 = 0;
    $1_1 = $331($1_1 | 0, 67980 | 0, 68028 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$2
    }
    $4_1 = HEAP32[$2_1 >> 2] | 0;
    if (!$4_1) {
     break label$1
    }
    $155($3_1 + 8 | 0 | 0, 0 | 0, 56 | 0) | 0;
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
  fimport$17(66527 | 0, 65637 | 0, 473 | 0, 65718 | 0);
  wasm2js_trap();
 }
 
 function $331($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $6_1 = 0, $5_1 = 0, $7_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  $332($4_1 + 4 | 0 | 0, $0_1 | 0);
  $5_1 = HEAP32[($4_1 + 8 | 0) >> 2] | 0;
  $6_1 = $328($5_1 | 0, $2_1 | 0, 0 | 0) | 0;
  $7_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    if (!$6_1) {
     break label$2
    }
    $6_1 = $333($0_1 | 0, $7_1 | 0, $1_1 | 0, $2_1 | 0, HEAP32[($4_1 + 12 | 0) >> 2] | 0 | 0, $3_1 | 0) | 0;
    break label$1;
   }
   $6_1 = $334($0_1 | 0, $7_1 | 0, $2_1 | 0, $5_1 | 0, $3_1 | 0) | 0;
   if ($6_1) {
    break label$1
   }
   $6_1 = $335($0_1 | 0, $7_1 | 0, $1_1 | 0, $2_1 | 0, $5_1 | 0, $3_1 | 0) | 0;
  }
  global$0 = $4_1 + 16 | 0;
  return $6_1 | 0;
 }
 
 function $332($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = HEAP32[$1_1 >> 2] | 0;
  $3_1 = HEAP32[($2_1 + -8 | 0) >> 2] | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $1_1 + $3_1 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($2_1 + -4 | 0) >> 2] | 0;
 }
 
 function $333($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
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
 
 function $334($0_1, $1_1, $2_1, $3_1, $4_1) {
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
 
 function $335($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
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
  $155($6_1 + 20 | 0 | 0, 0 | 0, 39 | 0) | 0;
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
 
 function $336($0_1, $1_1, $2_1, $3_1) {
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
 
 function $337($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $336($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
  }
 }
 
 function $338($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $336($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 28 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1);
 }
 
 function $339($0_1, $1_1, $2_1) {
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
    $4_1 = $331($1_1 | 0, 67980 | 0, 68076 | 0, 0 | 0) | 0;
    if (!$4_1) {
     break label$1
    }
    $3_1 = ((HEAPU8[($4_1 + 8 | 0) >> 0] | 0) & 24 | 0 | 0) != (0 | 0);
   }
   $3_1 = $328($0_1 | 0, $1_1 | 0, $3_1 | 0) | 0;
  }
  return $3_1 | 0;
 }
 
 function $340($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $4_1 = 0, $3_1 = 0, $5_1 = 0, $6_1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $3_1 = global$0 - 64 | 0;
  global$0 = $3_1;
  label$1 : {
   label$2 : {
    if (!($328($1_1 | 0, 68344 | 0, 0 | 0) | 0)) {
     break label$2
    }
    HEAP32[$2_1 >> 2] = 0;
    $4_1 = 1;
    break label$1;
   }
   label$3 : {
    if (!($339($0_1 | 0, $1_1 | 0, $1_1 | 0) | 0)) {
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
    $1_1 = $331($1_1 | 0, 67980 | 0, 68124 | 0, 0 | 0) | 0;
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
    if ($328(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0) {
     break label$1
    }
    label$6 : {
     if (!($328(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, 68332 | 0, 0 | 0) | 0)) {
      break label$6
     }
     $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
     if (!$1_1) {
      break label$1
     }
     $4_1 = !($331($1_1 | 0, 67980 | 0, 68176 | 0, 0 | 0) | 0);
     break label$1;
    }
    $5_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
    if (!$5_1) {
     break label$4
    }
    $4_1 = 0;
    label$7 : {
     $6_1 = $331($5_1 | 0, 67980 | 0, 68124 | 0, 0 | 0) | 0;
     if (!$6_1) {
      break label$7
     }
     if (!((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 1 | 0)) {
      break label$1
     }
     $4_1 = $341($6_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
     break label$1;
    }
    $4_1 = 0;
    label$8 : {
     $6_1 = $331($5_1 | 0, 67980 | 0, 68236 | 0, 0 | 0) | 0;
     if (!$6_1) {
      break label$8
     }
     if (!((HEAPU8[($0_1 + 8 | 0) >> 0] | 0) & 1 | 0)) {
      break label$1
     }
     $4_1 = $342($6_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
     break label$1;
    }
    $4_1 = 0;
    $0_1 = $331($5_1 | 0, 67980 | 0, 68028 | 0, 0 | 0) | 0;
    if (!$0_1) {
     break label$1
    }
    $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
    if (!$1_1) {
     break label$1
    }
    $4_1 = 0;
    $1_1 = $331($1_1 | 0, 67980 | 0, 68028 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
    $4_1 = HEAP32[$2_1 >> 2] | 0;
    $155($3_1 + 8 | 0 | 0, 0 | 0, 56 | 0) | 0;
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
 
 function $341($0_1, $1_1) {
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
    $1_1 = $331($1_1 | 0, 67980 | 0, 68124 | 0, 0 | 0) | 0;
    if (!$1_1) {
     break label$1
    }
    if ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) & ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) ^ -1 | 0) | 0) {
     break label$1
    }
    label$4 : {
     if (!($328(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
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
     $0_1 = $331($3_1 | 0, 67980 | 0, 68124 | 0, 0 | 0) | 0;
     if (!$0_1) {
      break label$5
     }
     $1_1 = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
     continue label$2;
    }
    break label$2;
   };
   $2_1 = 0;
   $0_1 = $331($3_1 | 0, 67980 | 0, 68236 | 0, 0 | 0) | 0;
   if (!$0_1) {
    break label$1
   }
   $2_1 = $342($0_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  return $2_1 | 0;
 }
 
 function $342($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = 0;
  label$1 : {
   if (!$1_1) {
    break label$1
   }
   $1_1 = $331($1_1 | 0, 67980 | 0, 68236 | 0, 0 | 0) | 0;
   if (!$1_1) {
    break label$1
   }
   if ((HEAP32[($1_1 + 8 | 0) >> 2] | 0) & ((HEAP32[($0_1 + 8 | 0) >> 2] | 0) ^ -1 | 0) | 0) {
    break label$1
   }
   $2_1 = 0;
   if (!($328(HEAP32[($0_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, 0 | 0) | 0)) {
    break label$1
   }
   $2_1 = $328(HEAP32[($0_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0, 0 | 0) | 0;
  }
  return $2_1 | 0;
 }
 
 function $343($0_1, $1_1, $2_1, $3_1, $4_1) {
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
 
 function $344($0_1, $1_1, $2_1, $3_1) {
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
 
 function $345($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $4_1 | 0) | 0)) {
    break label$1
   }
   $344($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  label$2 : {
   label$3 : {
    if (!($328($0_1 | 0, HEAP32[$1_1 >> 2] | 0 | 0, $4_1 | 0) | 0)) {
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
 
 function $346($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $4_1 | 0) | 0)) {
    break label$1
   }
   $344($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0);
   return;
  }
  label$2 : {
   if (!($328($0_1 | 0, HEAP32[$1_1 >> 2] | 0 | 0, $4_1 | 0) | 0)) {
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
 
 function $347($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $5_1 | 0) | 0)) {
    break label$1
   }
   $343($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
   return;
  }
  $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
  FUNCTION_TABLE[HEAP32[((HEAP32[$0_1 >> 2] | 0) + 20 | 0) >> 2] | 0 | 0]($0_1, $1_1, $2_1, $3_1, $4_1, $5_1);
 }
 
 function $348($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  label$1 : {
   if (!($328($0_1 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0, $5_1 | 0) | 0)) {
    break label$1
   }
   $343($1_1 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
  }
 }
 
 function $349($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return 0 | 0;
  }
  return ($331($0_1 | 0, 67980 | 0, 68124 | 0, 0 | 0) | 0 | 0) != (0 | 0) | 0;
 }
 
 function $350($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 | 0;
 }
 
 function $351($0_1) {
  $0_1 = $0_1 | 0;
  global$1 = $0_1;
 }
 
 function $353() {
  global$3 = 65536;
  global$2 = (0 + 15 | 0) & -16 | 0;
 }
 
 function $354() {
  return global$0 - global$2 | 0 | 0;
 }
 
 function $355() {
  return global$3 | 0;
 }
 
 function $356() {
  return global$2 | 0;
 }
 
 function $357($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   $1_1 = 0;
   label$2 : {
    if (!(HEAP32[(0 + 69388 | 0) >> 2] | 0)) {
     break label$2
    }
    $1_1 = $357(HEAP32[(0 + 69388 | 0) >> 2] | 0 | 0) | 0;
   }
   label$3 : {
    if (!(HEAP32[(0 + 68856 | 0) >> 2] | 0)) {
     break label$3
    }
    $1_1 = $357(HEAP32[(0 + 68856 | 0) >> 2] | 0 | 0) | 0 | $1_1 | 0;
   }
   label$4 : {
    $0_1 = HEAP32[($185() | 0) >> 2] | 0;
    if (!$0_1) {
     break label$4
    }
    label$5 : while (1) {
     $2_1 = 0;
     label$6 : {
      if ((HEAP32[($0_1 + 76 | 0) >> 2] | 0 | 0) < (0 | 0)) {
       break label$6
      }
      $2_1 = $181($0_1 | 0) | 0;
     }
     label$7 : {
      if ((HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0) == (HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0)) {
       break label$7
      }
      $1_1 = $357($0_1 | 0) | 0 | $1_1 | 0;
     }
     label$8 : {
      if (!$2_1) {
       break label$8
      }
      $182($0_1 | 0);
     }
     $0_1 = HEAP32[($0_1 + 56 | 0) >> 2] | 0;
     if ($0_1) {
      continue label$5
     }
     break label$5;
    };
   }
   $186();
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
   $2_1 = !($181($0_1 | 0) | 0);
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
   $182($0_1 | 0);
  }
  return $1_1 | 0;
 }
 
 function $358($0_1) {
  $0_1 = $0_1 | 0;
  global$0 = $0_1;
 }
 
 function $359($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = (global$0 - $0_1 | 0) & -16 | 0;
  global$0 = $1_1;
  return $1_1 | 0;
 }
 
 function $360() {
  return global$0 | 0;
 }
 
 function $361($0_1, $1_1, $2_1, $2$hi, $3_1, $3$hi) {
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
 
 function $362($0_1, $1_1, $2_1, $2$hi, $3_1) {
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
 
 function $363($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
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
  return $361($6_1 | 0, $7_1 | 0, $13_1 | 0, i64toi32_i32$1 | 0, $19_1 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function $364($0_1, $1_1, $2_1, $3_1, $4_1) {
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
  i64toi32_i32$2 = $362($6_1 | 0, $7_1 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $4_1 | 0) | 0;
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
  $351($18_1 | 0);
  i64toi32_i32$2 = $5$hi;
  return $5_1 | 0;
 }
 
 function $365($0_1, $1_1, $2_1, $3_1, $3$hi, $4_1, $4$hi) {
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
  fimport$18($5_1 | 0, $6_1 | 0, $7_1 | 0, $9_1 | 0, $12_1 | 0, $14_1 | 0, $19_1 | 0);
 }
 
 function $366($0_1, $1_1, $1$hi, $2_1, $3_1) {
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
  return fimport$19($4_1 | 0, $6_1 | 0, $12_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0;
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
 var FUNCTION_TABLE = Table([null, $13, $16, $19, $27, $29, $31, $3, $2, $34, $35, $36, $38, $40, $41, $43, $1, $58, $64, $78, $102, $110, $117, $124, $130, $50, $152, $312, $314, $316, $320, $323, $321, $322, $327, $324, $330, $348, $346, $337, $325, $347, $345, $338, $326, $340]);
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
  "malloc": $161, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "__getTypeName": $150, 
  "fflush": $357, 
  "free": $163, 
  "emscripten_stack_init": $353, 
  "emscripten_stack_get_free": $354, 
  "emscripten_stack_get_base": $355, 
  "emscripten_stack_get_end": $356, 
  "_emscripten_stack_restore": $358, 
  "_emscripten_stack_alloc": $359, 
  "emscripten_stack_get_current": $360, 
  "__cxa_is_pointer_type": $349, 
  "dynCall_iijj": $363, 
  "dynCall_jiji": $364
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
