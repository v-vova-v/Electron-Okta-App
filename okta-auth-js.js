var OktaAuth =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/browser/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/OktaAuthBase.ts":
/*!*****************************!*\
  !*** ./lib/OktaAuthBase.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OktaAuthBase; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _builderUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builderUtil */ "./lib/builderUtil.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tx */ "./lib/tx/index.ts");



/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */




var OktaAuthBase = /*#__PURE__*/function () {
  function OktaAuthBase(args) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OktaAuthBase);

    Object(_builderUtil__WEBPACK_IMPORTED_MODULE_2__["assertValidConfig"])(args);
    this.options = {
      issuer: Object(_util__WEBPACK_IMPORTED_MODULE_3__["removeTrailingSlash"])(args.issuer),
      httpRequestClient: args.httpRequestClient,
      transformErrorXHR: args.transformErrorXHR,
      storageUtil: args.storageUtil,
      headers: args.headers
    };
    this.tx = {
      status: _tx__WEBPACK_IMPORTED_MODULE_4__["transactionStatus"].bind(null, this),
      resume: _tx__WEBPACK_IMPORTED_MODULE_4__["resumeTransaction"].bind(null, this),
      exists: Object.assign(_tx__WEBPACK_IMPORTED_MODULE_4__["transactionExists"].bind(null, this), {
        _get: function _get(name) {
          var storage = _this.options.storageUtil.storage;
          return storage.get(name);
        }
      }),
      introspect: _tx__WEBPACK_IMPORTED_MODULE_4__["introspect"].bind(null, this)
    };
  } // { username, password, (relayState), (context) }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(OktaAuthBase, [{
    key: "signIn",
    value: function signIn(opts) {
      return Object(_tx__WEBPACK_IMPORTED_MODULE_4__["postToTransaction"])(this, '/api/v1/authn', opts);
    }
  }, {
    key: "getIssuerOrigin",
    value: function getIssuerOrigin() {
      // Infer the URL from the issuer URL, omitting the /oauth2/{authServerId}
      return this.options.issuer.split('/oauth2/')[0];
    } // { username, (relayState) }

  }, {
    key: "forgotPassword",
    value: function forgotPassword(opts) {
      return Object(_tx__WEBPACK_IMPORTED_MODULE_4__["postToTransaction"])(this, '/api/v1/authn/recovery/password', opts);
    } // { username, (relayState) }

  }, {
    key: "unlockAccount",
    value: function unlockAccount(opts) {
      return Object(_tx__WEBPACK_IMPORTED_MODULE_4__["postToTransaction"])(this, '/api/v1/authn/recovery/unlock', opts);
    } // { recoveryToken }

  }, {
    key: "verifyRecoveryToken",
    value: function verifyRecoveryToken(opts) {
      return Object(_tx__WEBPACK_IMPORTED_MODULE_4__["postToTransaction"])(this, '/api/v1/authn/recovery/token', opts);
    }
  }]);

  return OktaAuthBase;
}();



/***/ }),

/***/ "./lib/PromiseQueue.ts":
/*!*****************************!*\
  !*** ./lib/PromiseQueue.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.ts");



/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
// Implements a queue for synchronous or asynchronous methods
// Methods will be wrapped in a promise and execute sequentially
// This can be used to prevent concurrent calls to a single method or a set of methods


var PromiseQueue = /*#__PURE__*/function () {
  function PromiseQueue() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PromiseQueue);

    this.queue = [];
    this.running = false;
  } // Returns a promise
  // If the method is synchronous, it will resolve when the method completes
  // If the method returns a promise, it will resolve (or reject) with the value from the method's promise


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PromiseQueue, [{
    key: "push",
    value: function push()
    /* method, thisObject, args... */
    {
      var _this = this;

      var args = Array.prototype.slice.call(arguments);
      var method = args[0];
      var thisObject = args[1];
      args = args.slice(2);
      return new Promise(function (resolve, reject) {
        _this.queue.push({
          method: method,
          thisObject: thisObject,
          args: args,
          resolve: resolve,
          reject: reject
        });

        _this.run();
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      if (this.running) {
        return;
      }

      if (this.queue.length === 0) {
        return;
      }

      this.running = true;
      var queueItem = this.queue.shift();
      var res = queueItem.method.apply(queueItem.thisObject, queueItem.args);

      if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(res)) {
        res.then(queueItem.resolve, queueItem.reject).finally(function () {
          _this2.running = false;

          _this2.run();
        });
      } else {
        queueItem.resolve(res);
        this.running = false;
        this.run();
      }
    }
  }]);

  return PromiseQueue;
}();

/* harmony default export */ __webpack_exports__["default"] = (PromiseQueue);

/***/ }),

/***/ "./lib/TokenManager.ts":
/*!*****************************!*\
  !*** ./lib/TokenManager.ts ***!
  \*****************************/
/*! exports provided: TokenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenManager", function() { return TokenManager; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser/browserStorage */ "./lib/browser/browserStorage.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./lib/constants.ts");
/* harmony import */ var _storageBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storageBuilder */ "./lib/storageBuilder.ts");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clock */ "./lib/clock.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./lib/types/index.ts");



/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* global localStorage, sessionStorage */

/* eslint complexity:[0,8] max-statements:[0,21] */







var DEFAULT_OPTIONS = {
  autoRenew: true,
  storage: 'localStorage',
  expireEarlySeconds: 30
};

function getExpireTime(tokenMgmtRef, token) {
  var expireTime = token.expiresAt - tokenMgmtRef.options.expireEarlySeconds;
  return expireTime;
}

function hasExpired(tokenMgmtRef, token) {
  var expireTime = getExpireTime(tokenMgmtRef, token);
  return expireTime <= tokenMgmtRef.clock.now();
}

function emitExpired(tokenMgmtRef, key, token) {
  tokenMgmtRef.emitter.emit('expired', key, token);
}

function emitRemoved(tokenMgmtRef, key) {
  tokenMgmtRef.emitter.emit('removed', key);
}

function emitError(tokenMgmtRef, error) {
  tokenMgmtRef.emitter.emit('error', error);
}

function clearExpireEventTimeout(tokenMgmtRef, key) {
  clearTimeout(tokenMgmtRef.expireTimeouts[key]);
  delete tokenMgmtRef.expireTimeouts[key]; // Remove the renew promise (if it exists)

  delete tokenMgmtRef.renewPromise[key];
}

function clearExpireEventTimeoutAll(tokenMgmtRef) {
  var expireTimeouts = tokenMgmtRef.expireTimeouts;

  for (var key in expireTimeouts) {
    if (!Object.prototype.hasOwnProperty.call(expireTimeouts, key)) {
      continue;
    }

    clearExpireEventTimeout(tokenMgmtRef, key);
  }
}

function setExpireEventTimeout(sdk, tokenMgmtRef, key, token) {
  var expireTime = getExpireTime(tokenMgmtRef, token);
  var expireEventWait = Math.max(expireTime - tokenMgmtRef.clock.now(), 0) * 1000; // Clear any existing timeout

  clearExpireEventTimeout(tokenMgmtRef, key);
  var expireEventTimeout = setTimeout(function () {
    emitExpired(tokenMgmtRef, key, token);
  }, expireEventWait); // Add a new timeout

  tokenMgmtRef.expireTimeouts[key] = expireEventTimeout;
}

function setExpireEventTimeoutAll(sdk, tokenMgmtRef, storage) {
  try {
    var tokenStorage = storage.getStorage();
  } catch (e) {
    // Any errors thrown on instantiation will not be caught,
    // because there are no listeners yet
    emitError(tokenMgmtRef, e);
    return;
  }

  for (var key in tokenStorage) {
    if (!Object.prototype.hasOwnProperty.call(tokenStorage, key)) {
      continue;
    }

    var token = tokenStorage[key];
    setExpireEventTimeout(sdk, tokenMgmtRef, key, token);
  }
}

function add(sdk, tokenMgmtRef, storage, key, token) {
  var tokenStorage = storage.getStorage();

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(token) || !token.scopes || !token.expiresAt && token.expiresAt !== 0 || !Object(_types__WEBPACK_IMPORTED_MODULE_8__["isIDToken"])(token) && !Object(_types__WEBPACK_IMPORTED_MODULE_8__["isAccessToken"])(token)) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('Token must be an Object with scopes, expiresAt, and an idToken or accessToken properties');
  }

  tokenStorage[key] = token;
  storage.setStorage(tokenStorage);
  setExpireEventTimeout(sdk, tokenMgmtRef, key, token);
}

function get(storage, key) {
  var tokenStorage = storage.getStorage();
  return tokenStorage[key];
}

function getAsync(sdk, tokenMgmtRef, storage, key) {
  return new Promise(function (resolve) {
    var token = get(storage, key);
    return resolve(token);
  });
}

function remove(tokenMgmtRef, storage, key) {
  // Clear any listener for this token
  clearExpireEventTimeout(tokenMgmtRef, key); // Remove it from storage

  var tokenStorage = storage.getStorage();
  delete tokenStorage[key];
  storage.setStorage(tokenStorage);
  emitRemoved(tokenMgmtRef, key);
}

function renew(sdk, tokenMgmtRef, storage, key) {
  // Multiple callers may receive the same promise. They will all resolve or reject from the same request.
  var existingPromise = tokenMgmtRef.renewPromise[key];

  if (existingPromise) {
    return existingPromise;
  }

  try {
    var token = get(storage, key);

    if (!token) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The tokenManager has no token for the key: ' + key);
    }
  } catch (e) {
    return Promise.reject(e);
  } // Remove existing autoRenew timeout for this key


  clearExpireEventTimeout(tokenMgmtRef, key); // Store the renew promise state, to avoid renewing again

  tokenMgmtRef.renewPromise[key] = sdk.token.renew(token).then(function (freshToken) {
    var oldToken = get(storage, key);

    if (!oldToken) {
      // It is possible to enter a state where the tokens have been cleared
      // after a renewal request was triggered. To ensure we do not store a
      // renewed token, we verify the promise key doesn't exist and return.
      return;
    }

    add(sdk, tokenMgmtRef, storage, key, freshToken);
    tokenMgmtRef.emitter.emit('renewed', key, freshToken, oldToken);
    return freshToken;
  }).catch(function (err) {
    if (err.name === 'OAuthError' || err.name === 'AuthSdkError') {
      remove(tokenMgmtRef, storage, key);
      err.tokenKey = key;
      err.accessToken = !!token.accessToken;
      emitError(tokenMgmtRef, err);
    }

    throw err;
  }).finally(function () {
    // Remove existing promise key
    delete tokenMgmtRef.renewPromise[key];
  });
  return tokenMgmtRef.renewPromise[key];
}

function clear(tokenMgmtRef, storage) {
  clearExpireEventTimeoutAll(tokenMgmtRef);
  storage.clearStorage();
}

function shouldThrottleRenew(renewTimeQueue) {
  var res = false;
  renewTimeQueue.push(Date.now());

  if (renewTimeQueue.length >= 10) {
    // get and remove first item from queue
    var firstTime = renewTimeQueue.shift();
    var lastTime = renewTimeQueue[renewTimeQueue.length - 1];
    res = lastTime - firstTime < 30 * 1000;
  }

  return res;
}

var TokenManager = function TokenManager(sdk, options) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TokenManager);

  options = Object.assign({}, DEFAULT_OPTIONS, Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeNils"])(options));

  if (options.storage === 'localStorage' && !_browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__["default"].browserHasLocalStorage()) {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["warn"])('This browser doesn\'t support localStorage. Switching to sessionStorage.');
    options.storage = 'sessionStorage';
  }

  if (options.storage === 'sessionStorage' && !_browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__["default"].browserHasSessionStorage()) {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["warn"])('This browser doesn\'t support sessionStorage. Switching to cookie-based storage.');
    options.storage = 'cookie';
  }

  var storageProvider;

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(options.storage) === 'object') {
    // A custom storage provider must implement getItem(key) and setItem(key, val)
    storageProvider = options.storage;
  } else {
    switch (options.storage) {
      case 'localStorage':
        storageProvider = localStorage;
        break;

      case 'sessionStorage':
        storageProvider = sessionStorage;
        break;

      case 'cookie':
        // Implement customized cookie storage to make sure each token is stored separatedly in cookie
        storageProvider = function (options) {
          var storage = _browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getCookieStorage(options);
          return {
            getItem: function getItem(key) {
              var data = storage.getItem();
              var value = {};
              Object.keys(data).forEach(function (k) {
                if (k.indexOf(key) === 0) {
                  value[k.replace("".concat(key, "_"), '')] = JSON.parse(data[k]);
                }
              });
              return JSON.stringify(value);
            },
            setItem: function setItem(key, value) {
              var existingValues = JSON.parse(this.getItem(key));
              value = JSON.parse(value); // Set key-value pairs from input to cookies

              Object.keys(value).forEach(function (k) {
                var storageKey = key + '_' + k;
                var valueToStore = JSON.stringify(value[k]);
                storage.setItem(storageKey, valueToStore);
                delete existingValues[k];
              }); // Delete unmatched keys from existing cookies

              Object.keys(existingValues).forEach(function (k) {
                _browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__["default"].storage.delete(key + '_' + k);
              });
            }
          };
        }(sdk.options.cookies);

        break;

      case 'memory':
        storageProvider = _browser_browserStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getInMemoryStorage();
        break;

      default:
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('Unrecognized storage option');
    }
  }

  var storageKey = options.storageKey || _constants__WEBPACK_IMPORTED_MODULE_5__["TOKEN_STORAGE_NAME"];
  var storage = Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_6__["default"])(storageProvider, storageKey);
  var clock = _clock__WEBPACK_IMPORTED_MODULE_7__["default"].create();
  var tokenMgmtRef = {
    clock: clock,
    options: options,
    emitter: sdk.emitter,
    expireTimeouts: {},
    renewPromise: {}
  };
  this.add = add.bind(this, sdk, tokenMgmtRef, storage);
  this.get = getAsync.bind(this, sdk, tokenMgmtRef, storage);
  this.remove = remove.bind(this, tokenMgmtRef, storage);
  this.clear = clear.bind(this, tokenMgmtRef, storage);
  this.renew = renew.bind(this, sdk, tokenMgmtRef, storage);
  this.on = tokenMgmtRef.emitter.on.bind(tokenMgmtRef.emitter);
  this.off = tokenMgmtRef.emitter.off.bind(tokenMgmtRef.emitter);
  this.hasExpired = hasExpired.bind(this, tokenMgmtRef);
  var renewTimeQueue = [];

  var onTokenExpiredHandler = function onTokenExpiredHandler(key) {
    if (options.autoRenew) {
      if (shouldThrottleRenew(renewTimeQueue)) {
        var error = new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('Too many token renew requests');
        emitError(tokenMgmtRef, error);
      } else {
        _this.renew(key).catch(function () {}); // Renew errors will emit an "error" event 

      }
    } else {
      _this.remove(key);
    }
  };

  this.on('expired', onTokenExpiredHandler);
  setExpireEventTimeoutAll(sdk, tokenMgmtRef, storage);
};

/***/ }),

/***/ "./lib/browser/browser.ts":
/*!********************************!*\
  !*** ./lib/browser/browser.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OktaAuthBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OktaAuthBase */ "./lib/OktaAuthBase.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features */ "./lib/browser/features.ts");
/* harmony import */ var _fetch_fetchRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetch/fetchRequest */ "./lib/fetch/fetchRequest.ts");
/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browserStorage */ "./lib/browser/browserStorage.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util */ "./lib/util.ts");
/* harmony import */ var _builderUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../builderUtil */ "./lib/builderUtil.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./lib/constants.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../session */ "./lib/session.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../token */ "./lib/token.ts");
/* harmony import */ var _TokenManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../TokenManager */ "./lib/TokenManager.ts");
/* harmony import */ var _oauthUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../oauthUtil */ "./lib/oauthUtil.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../http */ "./lib/http.ts");
/* harmony import */ var _PromiseQueue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../PromiseQueue */ "./lib/PromiseQueue.ts");
/* harmony import */ var _fingerprint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fingerprint */ "./lib/browser/fingerprint.ts");
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../tx */ "./lib/tx/index.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint-disable complexity */

/* eslint-disable max-statements */

/* SDK_VERSION is defined in webpack config */

/* global SDK_VERSION */
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

















var Emitter = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");

var OktaAuthBrowser = /*#__PURE__*/function (_OktaAuthBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(OktaAuthBrowser, _OktaAuthBase);

  var _super = _createSuper(OktaAuthBrowser);

  function OktaAuthBrowser(args) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, OktaAuthBrowser);

    args = Object.assign({
      httpRequestClient: _fetch_fetchRequest__WEBPACK_IMPORTED_MODULE_9__["default"],
      storageUtil: _browserStorage__WEBPACK_IMPORTED_MODULE_10__["default"]
    }, args);
    _this = _super.call(this, args);
    var cookieSettings = Object.assign({
      secure: true
    }, args.cookies);
    var isLocalhost = _this.features.isLocalhost() && !_this.features.isHTTPS();

    if (isLocalhost) {
      cookieSettings.secure = false; // Force secure=false if running on http://localhost
    }

    if (typeof cookieSettings.sameSite === 'undefined') {
      // Chrome >= 80 will block cookies with SameSite=None unless they are also Secure
      cookieSettings.sameSite = cookieSettings.secure ? 'none' : 'lax';
    }

    if (cookieSettings.secure && !_this.features.isHTTPS()) {
      // eslint-disable-next-line no-console
      console.warn('The current page is not being served with the HTTPS protocol.\n' + 'For security reasons, we strongly recommend using HTTPS.\n' + 'If you cannot use HTTPS, set "cookies.secure" option to false.');
      cookieSettings.secure = false;
    }

    _this.options = Object.assign(_this.options, {
      clientId: args.clientId,
      authorizeUrl: Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeTrailingSlash"])(args.authorizeUrl),
      userinfoUrl: Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeTrailingSlash"])(args.userinfoUrl),
      tokenUrl: Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeTrailingSlash"])(args.tokenUrl),
      revokeUrl: Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeTrailingSlash"])(args.revokeUrl),
      logoutUrl: Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeTrailingSlash"])(args.logoutUrl),
      pkce: args.pkce === false ? false : true,
      redirectUri: args.redirectUri,
      postLogoutRedirectUri: args.postLogoutRedirectUri,
      responseMode: args.responseMode,
      cookies: cookieSettings
    });
    _this.userAgent = Object(_builderUtil__WEBPACK_IMPORTED_MODULE_12__["getUserAgent"])(args, "okta-auth-js/".concat("4.1.0")); // Digital clocks will drift over time, so the server
    // can misalign with the time reported by the browser.
    // The maxClockSkew allows relaxing the time-based
    // validation of tokens (in seconds, not milliseconds).
    // It currently defaults to 300, because 5 min is the
    // default maximum tolerance allowed by Kerberos.
    // (https://technet.microsoft.com/en-us/library/cc976357.aspx)

    if (!args.maxClockSkew && args.maxClockSkew !== 0) {
      _this.options.maxClockSkew = _constants__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_MAX_CLOCK_SKEW"];
    } else {
      _this.options.maxClockSkew = args.maxClockSkew;
    } // Give the developer the ability to disable token signature
    // validation.


    _this.options.ignoreSignature = !!args.ignoreSignature;
    _this.session = {
      close: _session__WEBPACK_IMPORTED_MODULE_14__["closeSession"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      exists: _session__WEBPACK_IMPORTED_MODULE_14__["sessionExists"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      get: _session__WEBPACK_IMPORTED_MODULE_14__["getSession"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      refresh: _session__WEBPACK_IMPORTED_MODULE_14__["refreshSession"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      setCookieAndRedirect: _session__WEBPACK_IMPORTED_MODULE_14__["setCookieAndRedirect"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this))
    };
    _this._tokenQueue = new _PromiseQueue__WEBPACK_IMPORTED_MODULE_19__["default"]();
    _this.token = {
      getWithoutPrompt: _token__WEBPACK_IMPORTED_MODULE_15__["getWithoutPrompt"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      getWithPopup: _token__WEBPACK_IMPORTED_MODULE_15__["getWithPopup"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      getWithRedirect: _token__WEBPACK_IMPORTED_MODULE_15__["getWithRedirect"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      parseFromUrl: _token__WEBPACK_IMPORTED_MODULE_15__["parseFromUrl"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      decode: _token__WEBPACK_IMPORTED_MODULE_15__["decodeToken"],
      revoke: _token__WEBPACK_IMPORTED_MODULE_15__["revokeToken"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      renew: _token__WEBPACK_IMPORTED_MODULE_15__["renewToken"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      getUserInfo: _token__WEBPACK_IMPORTED_MODULE_15__["getUserInfo"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      verify: _token__WEBPACK_IMPORTED_MODULE_15__["verifyToken"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
      isLoginRedirect: _oauthUtil__WEBPACK_IMPORTED_MODULE_17__["isLoginRedirect"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this))
    }; // Wrap all async token API methods using MethodQueue to avoid issues with concurrency

    var syncMethods = ['decode', 'isLoginRedirect'];
    Object.keys(_this.token).forEach(function (key) {
      if (syncMethods.indexOf(key) >= 0) {
        // sync methods should not be wrapped
        return;
      }

      var method = _this.token[key];
      _this.token[key] = _PromiseQueue__WEBPACK_IMPORTED_MODULE_19__["default"].prototype.push.bind(_this._tokenQueue, method, null);
    });
    Object.assign(_this.token.getWithRedirect, {
      // This is exposed so we can set window.location in our tests
      _setLocation: function _setLocation(url) {
        window.location = url;
      }
    });
    Object.assign(_this.token.parseFromUrl, {
      // This is exposed so we can mock getting window.history in our tests
      _getHistory: function _getHistory() {
        return window.history;
      },
      // This is exposed so we can mock getting window.location in our tests
      _getLocation: function _getLocation() {
        return window.location;
      },
      // This is exposed so we can mock getting window.document in our tests
      _getDocument: function _getDocument() {
        return window.document;
      }
    }); // Fingerprint API

    _this.fingerprint = _fingerprint__WEBPACK_IMPORTED_MODULE_20__["default"].bind(null, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.emitter = new Emitter();
    _this.tokenManager = new _TokenManager__WEBPACK_IMPORTED_MODULE_16__["TokenManager"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), args.tokenManager);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(OktaAuthBrowser, [{
    key: "signIn",
    value: function signIn(opts) {
      var _this2 = this;

      opts = Object(_util__WEBPACK_IMPORTED_MODULE_11__["clone"])(opts || {});

      var _postToTransaction = function _postToTransaction(options) {
        delete opts.sendFingerprint;
        return Object(_tx__WEBPACK_IMPORTED_MODULE_21__["postToTransaction"])(_this2, '/api/v1/authn', opts, options);
      };

      if (!opts.sendFingerprint) {
        return _postToTransaction();
      }

      return this.fingerprint().then(function (fingerprint) {
        return _postToTransaction({
          headers: {
            'X-Device-Fingerprint': fingerprint
          }
        });
      });
    } // Ends the current Okta SSO session without redirecting to Okta.

  }, {
    key: "closeSession",
    value: function closeSession() {
      // Clear all local tokens
      this.tokenManager.clear();
      return this.session.close() // DELETE /api/v1/sessions/me
      .catch(function (e) {
        if (e.name === 'AuthApiError' && e.errorCode === 'E0000007') {
          // Session does not exist or has already been closed
          return;
        }

        throw e;
      });
    } // Revokes the access token for the application session

  }, {
    key: "revokeAccessToken",
    value: function revokeAccessToken(accessToken) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (accessToken) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.tokenManager.get(_constants__WEBPACK_IMPORTED_MODULE_13__["ACCESS_TOKEN_STORAGE_KEY"]);

              case 3:
                accessToken = _context.sent;
                this.tokenManager.remove(_constants__WEBPACK_IMPORTED_MODULE_13__["ACCESS_TOKEN_STORAGE_KEY"]);

              case 5:
                if (accessToken) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", Promise.resolve());

              case 7:
                return _context.abrupt("return", this.token.revoke(accessToken));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } // Revokes accessToken, clears all local tokens, then redirects to Okta to end the SSO session.

  }, {
    key: "signOut",
    value: function signOut(options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var defaultUri, currentUri, postLogoutRedirectUri, accessToken, revokeAccessToken, idToken, logoutUrl, state, idTokenHint, logoutUri;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = Object.assign({}, options); // postLogoutRedirectUri must be whitelisted in Okta Admin UI

                defaultUri = window.location.origin;
                currentUri = window.location.href;
                postLogoutRedirectUri = options.postLogoutRedirectUri || this.options.postLogoutRedirectUri || defaultUri;
                accessToken = options.accessToken;
                revokeAccessToken = options.revokeAccessToken !== false;
                idToken = options.idToken;
                logoutUrl = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_17__["getOAuthUrls"])(this).logoutUrl;

                if (!(typeof idToken === 'undefined')) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 11;
                return this.tokenManager.get(_constants__WEBPACK_IMPORTED_MODULE_13__["ID_TOKEN_STORAGE_KEY"]);

              case 11:
                idToken = _context2.sent;

              case 12:
                if (!(revokeAccessToken && typeof accessToken === 'undefined')) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 15;
                return this.tokenManager.get(_constants__WEBPACK_IMPORTED_MODULE_13__["ACCESS_TOKEN_STORAGE_KEY"]);

              case 15:
                accessToken = _context2.sent;

              case 16:
                // Clear all local tokens
                this.tokenManager.clear();

                if (!(revokeAccessToken && accessToken)) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 20;
                return this.revokeAccessToken(accessToken);

              case 20:
                if (idToken) {
                  _context2.next = 22;
                  break;
                }

                return _context2.abrupt("return", this.closeSession() // can throw if the user cannot be signed out
                .then(function () {
                  if (postLogoutRedirectUri === currentUri) {
                    window.location.reload(); // force a hard reload if URI is not changing
                  } else {
                    window.location.assign(postLogoutRedirectUri);
                  }
                }));

              case 22:
                // logout redirect using the idToken.
                state = options.state;
                idTokenHint = idToken.idToken; // a string

                logoutUri = logoutUrl + '?id_token_hint=' + encodeURIComponent(idTokenHint) + '&post_logout_redirect_uri=' + encodeURIComponent(postLogoutRedirectUri); // State allows option parameters to be passed to logout redirect uri

                if (state) {
                  logoutUri += '&state=' + encodeURIComponent(state);
                }

                window.location.assign(logoutUri);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "webfinger",
    value: function webfinger(opts) {
      var url = '/.well-known/webfinger' + Object(_util__WEBPACK_IMPORTED_MODULE_11__["toQueryString"])(opts);
      var options = {
        headers: {
          'Accept': 'application/jrd+json'
        }
      };
      return _http__WEBPACK_IMPORTED_MODULE_18__["default"].get(this, url, options);
    }
  }]);

  return OktaAuthBrowser;
}(_OktaAuthBase__WEBPACK_IMPORTED_MODULE_7__["default"]); // Hoist feature detection functions to static type


OktaAuthBrowser.features = OktaAuthBrowser.prototype.features = _features__WEBPACK_IMPORTED_MODULE_8__;
/* harmony default export */ __webpack_exports__["default"] = (OktaAuthBrowser);

/***/ }),

/***/ "./lib/browser/browserStorage.ts":
/*!***************************************!*\
  !*** ./lib/browser/browserStorage.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storageBuilder */ "./lib/storageBuilder.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./lib/constants.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */




var Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"); // Building this as an object allows us to mock the functions in our tests


var storageUtil = {
  // IE11 bug that Microsoft doesn't plan to fix
  // https://connect.microsoft.com/IE/Feedback/Details/1496040
  browserHasLocalStorage: function browserHasLocalStorage() {
    try {
      var storage = storageUtil.getLocalStorage();
      return storageUtil.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  browserHasSessionStorage: function browserHasSessionStorage() {
    try {
      var storage = storageUtil.getSessionStorage();
      return storageUtil.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  getPKCEStorage: function getPKCEStorage(options) {
    options = options || {};

    if (!options.preferLocalStorage && storageUtil.browserHasSessionStorage()) {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getSessionStorage(), _constants__WEBPACK_IMPORTED_MODULE_1__["PKCE_STORAGE_NAME"]);
    } else if (storageUtil.browserHasLocalStorage()) {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getLocalStorage(), _constants__WEBPACK_IMPORTED_MODULE_1__["PKCE_STORAGE_NAME"]);
    } else {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getCookieStorage(options), _constants__WEBPACK_IMPORTED_MODULE_1__["PKCE_STORAGE_NAME"]);
    }
  },
  getHttpCache: function getHttpCache(options) {
    if (storageUtil.browserHasLocalStorage()) {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getLocalStorage(), _constants__WEBPACK_IMPORTED_MODULE_1__["CACHE_STORAGE_NAME"]);
    } else if (storageUtil.browserHasSessionStorage()) {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getSessionStorage(), _constants__WEBPACK_IMPORTED_MODULE_1__["CACHE_STORAGE_NAME"]);
    } else {
      return Object(_storageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])(storageUtil.getCookieStorage(options), _constants__WEBPACK_IMPORTED_MODULE_1__["CACHE_STORAGE_NAME"]);
    }
  },
  getLocalStorage: function getLocalStorage() {
    return localStorage;
  },
  getSessionStorage: function getSessionStorage() {
    return sessionStorage;
  },
  // Provides webStorage-like interface for cookies
  getCookieStorage: function getCookieStorage(options) {
    var secure = options.secure;
    var sameSite = options.sameSite;

    if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_2__["default"]('getCookieStorage: "secure" and "sameSite" options must be provided');
    }

    return {
      getItem: storageUtil.storage.get,
      setItem: function setItem(key, value) {
        // Cookie shouldn't expire
        storageUtil.storage.set(key, value, '2200-01-01T00:00:00.000Z', {
          secure: secure,
          sameSite: sameSite
        });
      }
    };
  },
  // Provides an in-memory solution
  getInMemoryStorage: function getInMemoryStorage() {
    var store = {};
    return {
      getItem: function getItem(key) {
        return store[key];
      },
      setItem: function setItem(key, value) {
        store[key] = value;
      }
    };
  },
  testStorage: function testStorage(storage) {
    var key = 'okta-test-storage';

    try {
      storage.setItem(key, key);
      storage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  },
  storage: {
    set: function set(name, value, expiresAt, options) {
      var secure = options.secure;
      var sameSite = options.sameSite;

      if (typeof secure === 'undefined' || typeof sameSite === 'undefined') {
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_2__["default"]('storage.set: "secure" and "sameSite" options must be provided');
      }

      var cookieOptions = {
        path: options.path || '/',
        secure: secure,
        sameSite: sameSite
      }; // eslint-disable-next-line no-extra-boolean-cast

      if (!!Date.parse(expiresAt)) {
        // Expires value can be converted to a Date object.
        //
        // If the 'expiresAt' value is not provided, or the value cannot be
        // parsed as a Date object, the cookie will set as a session cookie.
        cookieOptions.expires = new Date(expiresAt);
      }

      Cookies.set(name, value, cookieOptions);
      return storageUtil.storage.get(name);
    },
    get: function get(name) {
      return Cookies.get(name);
    },
    delete: function _delete(name) {
      return Cookies.remove(name, {
        path: '/'
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (storageUtil);

/***/ }),

/***/ "./lib/browser/features.ts":
/*!*********************************!*\
  !*** ./lib/browser/features.ts ***!
  \*********************************/
/*! exports provided: getUserAgent, isFingerprintSupported, isPopupPostMessageSupported, isTokenVerifySupported, hasTextEncoder, isPKCESupported, isHTTPS, isLocalhost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFingerprintSupported", function() { return isFingerprintSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPopupPostMessageSupported", function() { return isPopupPostMessageSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenVerifySupported", function() { return isTokenVerifySupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTextEncoder", function() { return hasTextEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPKCESupported", function() { return isPKCESupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTTPS", function() { return isHTTPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalhost", function() { return isLocalhost; });
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
var isWindowsPhone = /windows phone|iemobile|wpdesktop/i;
function getUserAgent() {
  return navigator.userAgent;
}
function isFingerprintSupported() {
  var agent = getUserAgent();
  return agent && !isWindowsPhone.test(agent);
}
function isPopupPostMessageSupported() {
  var isIE8or9 = document.documentMode && document.documentMode < 10;

  if (window.postMessage && !isIE8or9) {
    return true;
  }

  return false;
}
function isTokenVerifySupported() {
  return typeof crypto !== 'undefined' && crypto.subtle && typeof Uint8Array !== 'undefined';
}
function hasTextEncoder() {
  return typeof TextEncoder !== 'undefined';
}
function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}
function isHTTPS() {
  return window.location.protocol === 'https:';
}
function isLocalhost() {
  return window.location.hostname === 'localhost';
}

/***/ }),

/***/ "./lib/browser/fingerprint.ts":
/*!************************************!*\
  !*** ./lib/browser/fingerprint.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fingerprint; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors */ "./lib/errors/index.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features */ "./lib/browser/features.ts");
/* harmony import */ var _oauthUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oauthUtil */ "./lib/oauthUtil.ts");



function fingerprint(sdk, options) {
  options = options || {};

  if (!Object(_features__WEBPACK_IMPORTED_MODULE_1__["isFingerprintSupported"])()) {
    return Promise.reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["AuthSdkError"]('Fingerprinting is not supported on this device'));
  }

  var timeout;
  var iframe;
  var listener;
  var promise = new Promise(function (resolve, reject) {
    iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // eslint-disable-next-line complexity

    listener = function listener(e) {
      if (!e || !e.data || e.origin !== sdk.getIssuerOrigin()) {
        return;
      }

      try {
        var msg = JSON.parse(e.data);
      } catch (err) {
        // iframe messages should all be parsable
        // skip not parsable messages come from other sources in same origin (browser extensions)
        // TODO: add namespace flag in okta-core to distinguish messages that come from other sources
        return;
      }

      if (!msg) {
        return;
      }

      if (msg.type === 'FingerprintAvailable') {
        return resolve(msg.fingerprint);
      }

      if (msg.type === 'FingerprintServiceReady') {
        e.source.postMessage(JSON.stringify({
          type: 'GetFingerprint'
        }), '*');
      }
    };

    Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_2__["addListener"])(window, 'message', listener);
    iframe.src = sdk.getIssuerOrigin() + '/auth/services/devicefingerprint';
    document.body.appendChild(iframe);
    timeout = setTimeout(function () {
      reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["AuthSdkError"]('Fingerprinting timed out'));
    }, options.timeout || 15000);
  });
  return promise.finally(function () {
    clearTimeout(timeout);
    Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_2__["removeListener"])(window, 'message', listener);

    if (document.body.contains(iframe)) {
      iframe.parentElement.removeChild(iframe);
    }
  });
}

/***/ }),

/***/ "./lib/browser/index.ts":
/*!******************************!*\
  !*** ./lib/browser/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./lib/browser/browser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OktaAuth", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./lib/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_TOKEN_KEY_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_TOKEN_KEY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_POLLING_DELAY", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_POLLING_DELAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_CLOCK_SKEW", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_MAX_CLOCK_SKEW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_DURATION", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CACHE_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_OAUTH_PARAMS_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["REDIRECT_OAUTH_PARAMS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_STATE_COOKIE_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["REDIRECT_STATE_COOKIE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_NONCE_COOKIE_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["REDIRECT_NONCE_COOKIE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORAGE_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["TOKEN_STORAGE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CACHE_STORAGE_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["CACHE_STORAGE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PKCE_STORAGE_NAME", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["PKCE_STORAGE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_STORAGE_KEY", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN_STORAGE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ID_TOKEN_STORAGE_KEY", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ID_TOKEN_STORAGE_KEY"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./lib/types/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["OktaAuth","STATE_TOKEN_KEY_NAME","DEFAULT_POLLING_DELAY","DEFAULT_MAX_CLOCK_SKEW","DEFAULT_CACHE_DURATION","REDIRECT_OAUTH_PARAMS_NAME","REDIRECT_STATE_COOKIE_NAME","REDIRECT_NONCE_COOKIE_NAME","TOKEN_STORAGE_NAME","CACHE_STORAGE_NAME","PKCE_STORAGE_NAME","ACCESS_TOKEN_STORAGE_KEY","ID_TOKEN_STORAGE_KEY","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tx */ "./lib/tx/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionStatus", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["transactionStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resumeTransaction", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["resumeTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionExists", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["transactionExists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postToTransaction", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["postToTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspect", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["introspect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthTransaction", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["AuthTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPollFn", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["getPollFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionState", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["TransactionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addStateToken", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["addStateToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStateToken", function() { return _tx__WEBPACK_IMPORTED_MODULE_3__["getStateToken"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./lib/errors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthApiError", function() { return _errors__WEBPACK_IMPORTED_MODULE_4__["AuthApiError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPollStopError", function() { return _errors__WEBPACK_IMPORTED_MODULE_4__["AuthPollStopError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSdkError", function() { return _errors__WEBPACK_IMPORTED_MODULE_4__["AuthSdkError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthError", function() { return _errors__WEBPACK_IMPORTED_MODULE_4__["OAuthError"]; });

/* harmony import */ var _TokenManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TokenManager */ "./lib/TokenManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenManager", function() { return _TokenManager__WEBPACK_IMPORTED_MODULE_5__["TokenManager"]; });

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */







/***/ }),

/***/ "./lib/builderUtil.ts":
/*!****************************!*\
  !*** ./lib/builderUtil.ts ***!
  \****************************/
/*! exports provided: assertValidConfig, getUserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidConfig", function() { return assertValidConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/*!
 * Copyright (c) 2018-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
 // TODO: use @okta/configuration-validation (move module to this monorepo?)
// eslint-disable-next-line complexity

function assertValidConfig(args) {
  args = args || {};
  var issuer = args.issuer;

  if (!issuer) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('No issuer passed to constructor. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }

  var isUrlRegex = new RegExp('^http?s?://.+');

  if (!isUrlRegex.test(args.issuer)) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('Issuer must be a valid URL. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }

  if (issuer.indexOf('-admin.') !== -1) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('Issuer URL passed to constructor contains "-admin" in subdomain. ' + 'Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})');
  }

  var userAgent = args.userAgent;
  var userAgentTemplateWithNoPlaceholder = userAgent && userAgent.template && userAgent.template.indexOf('$OKTA_AUTH_JS') === -1;

  if (userAgentTemplateWithNoPlaceholder) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('UserAgentTemplate must include "$OKTA_AUTH_JS" placeholder. ' + 'Required usage: new OktaAuth({userAgentTemplate: "xxx $OKTA_AUTH_JS xxx"})');
  }
}

function getUserAgent(args, sdkValue) {
  var userAgent = args.userAgent || {};

  if (userAgent.value) {
    return userAgent.value;
  }

  if (userAgent.template) {
    return userAgent.template.replace('$OKTA_AUTH_JS', sdkValue);
  }

  return sdkValue;
}



/***/ }),

/***/ "./lib/clock.ts":
/*!**********************!*\
  !*** ./lib/clock.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SdkClock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
var SdkClock = /*#__PURE__*/function () {
  function SdkClock(localOffset) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SdkClock);

    // Calculated local clock offset from server time (in milliseconds). Can be positive or negative.
    this.localOffset = parseInt(localOffset || 0);
  } // factory method. Create an instance of a clock from current context.


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SdkClock, [{
    key: "now",
    // Return the current time (in seconds)
    value: function now() {
      var now = (Date.now() + this.localOffset) / 1000;
      return now;
    }
  }], [{
    key: "create",
    value: function create()
    /* sdk, options */
    {
      // TODO: calculate localOffset
      var localOffset = 0;
      return new SdkClock(localOffset);
    }
  }]);

  return SdkClock;
}();



/***/ }),

/***/ "./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/*! exports provided: STATE_TOKEN_KEY_NAME, DEFAULT_POLLING_DELAY, DEFAULT_MAX_CLOCK_SKEW, DEFAULT_CACHE_DURATION, REDIRECT_OAUTH_PARAMS_NAME, REDIRECT_STATE_COOKIE_NAME, REDIRECT_NONCE_COOKIE_NAME, TOKEN_STORAGE_NAME, CACHE_STORAGE_NAME, PKCE_STORAGE_NAME, ACCESS_TOKEN_STORAGE_KEY, ID_TOKEN_STORAGE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_TOKEN_KEY_NAME", function() { return STATE_TOKEN_KEY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_POLLING_DELAY", function() { return DEFAULT_POLLING_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_CLOCK_SKEW", function() { return DEFAULT_MAX_CLOCK_SKEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CACHE_DURATION", function() { return DEFAULT_CACHE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_OAUTH_PARAMS_NAME", function() { return REDIRECT_OAUTH_PARAMS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_STATE_COOKIE_NAME", function() { return REDIRECT_STATE_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_NONCE_COOKIE_NAME", function() { return REDIRECT_NONCE_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORAGE_NAME", function() { return TOKEN_STORAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_STORAGE_NAME", function() { return CACHE_STORAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PKCE_STORAGE_NAME", function() { return PKCE_STORAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_STORAGE_KEY", function() { return ACCESS_TOKEN_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_TOKEN_STORAGE_KEY", function() { return ID_TOKEN_STORAGE_KEY; });
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
var STATE_TOKEN_KEY_NAME = 'oktaStateToken';
var DEFAULT_POLLING_DELAY = 500;
var DEFAULT_MAX_CLOCK_SKEW = 300;
var DEFAULT_CACHE_DURATION = 86400;
var REDIRECT_OAUTH_PARAMS_NAME = 'okta-oauth-redirect-params';
var REDIRECT_STATE_COOKIE_NAME = 'okta-oauth-state';
var REDIRECT_NONCE_COOKIE_NAME = 'okta-oauth-nonce';
var TOKEN_STORAGE_NAME = 'okta-token-storage';
var CACHE_STORAGE_NAME = 'okta-cache-storage';
var PKCE_STORAGE_NAME = 'okta-pkce-storage';
var ACCESS_TOKEN_STORAGE_KEY = 'accessToken';
var ID_TOKEN_STORAGE_KEY = 'idToken';

/***/ }),

/***/ "./lib/crypto.ts":
/*!***********************!*\
  !*** ./lib/crypto.ts ***!
  \***********************/
/*! exports provided: getOidcHash, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOidcHash", function() { return getOidcHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* global crypto */


function getOidcHash(str) {
  var buffer = new TextEncoder().encode(str);
  return crypto.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var intBuffer = new Uint8Array(arrayBuffer);
    var firstHalf = intBuffer.slice(0, 16);
    var hash = String.fromCharCode.apply(null, firstHalf);
    var b64u = Object(_util__WEBPACK_IMPORTED_MODULE_0__["stringToBase64Url"])(hash); // url-safe base64 variant

    return b64u;
  });
}

function verifyToken(idToken, key) {
  key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["clone"])(key);
  var format = 'jwk';
  var algo = {
    name: 'RSASSA-PKCS1-v1_5',
    hash: {
      name: 'SHA-256'
    }
  };
  var extractable = true;
  var usages = ['verify']; // https://connect.microsoft.com/IE/feedback/details/2242108/webcryptoapi-importing-jwk-with-use-field-fails
  // This is a metadata tag that specifies the intent of how the key should be used.
  // It's not necessary to properly verify the jwt's signature.

  delete key.use; // @ts-ignore

  return crypto.subtle.importKey(format, key, algo, extractable, usages).then(function (cryptoKey) {
    var jwt = idToken.split('.');
    var payload = Object(_util__WEBPACK_IMPORTED_MODULE_0__["stringToBuffer"])(jwt[0] + '.' + jwt[1]);
    var b64Signature = Object(_util__WEBPACK_IMPORTED_MODULE_0__["base64UrlDecode"])(jwt[2]);
    var signature = Object(_util__WEBPACK_IMPORTED_MODULE_0__["stringToBuffer"])(b64Signature);
    return crypto.subtle.verify(algo, cryptoKey, signature, payload);
  });
}



/***/ }),

/***/ "./lib/errors/AuthApiError.ts":
/*!************************************!*\
  !*** ./lib/errors/AuthApiError.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthApiError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomError */ "./lib/errors/CustomError.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


var AuthApiError = /*#__PURE__*/function (_CustomError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(AuthApiError, _CustomError);

  var _super = _createSuper(AuthApiError);

  function AuthApiError(err, xhr) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthApiError);

    var message = err.errorSummary;
    _this = _super.call(this, message);
    _this.name = 'AuthApiError';
    _this.errorSummary = err.errorSummary;
    _this.errorCode = err.errorCode;
    _this.errorLink = err.errorLink;
    _this.errorId = err.errorId;
    _this.errorCauses = err.errorCauses;

    if (xhr) {
      _this.xhr = xhr;
    }

    return _this;
  }

  return AuthApiError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./lib/errors/AuthPollStopError.ts":
/*!*****************************************!*\
  !*** ./lib/errors/AuthPollStopError.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthPollStopError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomError */ "./lib/errors/CustomError.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


var AuthPollStopError = /*#__PURE__*/function (_CustomError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(AuthPollStopError, _CustomError);

  var _super = _createSuper(AuthPollStopError);

  function AuthPollStopError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthPollStopError);

    var message = 'The poll was stopped by the sdk';
    return _super.call(this, message);
  }

  return AuthPollStopError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./lib/errors/AuthSdkError.ts":
/*!************************************!*\
  !*** ./lib/errors/AuthSdkError.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthSdkError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomError */ "./lib/errors/CustomError.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


var AuthSdkError = /*#__PURE__*/function (_CustomError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(AuthSdkError, _CustomError);

  var _super = _createSuper(AuthSdkError);

  function AuthSdkError(msg, xhr) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthSdkError);

    _this = _super.call(this, msg);
    _this.name = 'AuthSdkError';
    _this.errorCode = 'INTERNAL';
    _this.errorSummary = msg;
    _this.errorLink = 'INTERNAL';
    _this.errorId = 'INTERNAL';
    _this.errorCauses = [];

    if (xhr) {
      _this.xhr = xhr;
    }

    return _this;
  }

  return AuthSdkError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./lib/errors/CustomError.ts":
/*!***********************************!*\
  !*** ./lib/errors/CustomError.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
var CustomError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CustomError, _Error);

  var _super = _createSuper(CustomError);

  function CustomError(message) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CustomError);

    // https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    _this = _super.call(this, message); // 'Error' breaks prototype chain here

    Object.setPrototypeOf(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), (this instanceof CustomError ? this.constructor : void 0).prototype); // restore prototype chain

    return _this;
  }

  return CustomError;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));



/***/ }),

/***/ "./lib/errors/OAuthError.ts":
/*!**********************************!*\
  !*** ./lib/errors/OAuthError.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OAuthError; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomError */ "./lib/errors/CustomError.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


var OAuthError = /*#__PURE__*/function (_CustomError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(OAuthError, _CustomError);

  var _super = _createSuper(OAuthError);

  function OAuthError(errorCode, summary) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OAuthError);

    _this = _super.call(this, summary);
    _this.name = 'OAuthError';
    _this.errorCode = errorCode;
    _this.errorSummary = summary;
    return _this;
  }

  return OAuthError;
}(_CustomError__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./lib/errors/index.ts":
/*!*****************************!*\
  !*** ./lib/errors/index.ts ***!
  \*****************************/
/*! exports provided: AuthApiError, AuthPollStopError, AuthSdkError, OAuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthApiError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthApiError */ "./lib/errors/AuthApiError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthApiError", function() { return _AuthApiError__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AuthPollStopError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPollStopError */ "./lib/errors/AuthPollStopError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPollStopError", function() { return _AuthPollStopError__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _AuthSdkError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSdkError", function() { return _AuthSdkError__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _OAuthError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OAuthError */ "./lib/errors/OAuthError.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuthError", function() { return _OAuthError__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */






/***/ }),

/***/ "./lib/fetch/fetchRequest.ts":
/*!***********************************!*\
  !*** ./lib/fetch/fetchRequest.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);


/*!
 * Copyright (c) 2018-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


function readData(response) {
  if (response.headers.get('Content-Type') && response.headers.get('Content-Type').toLowerCase().indexOf('application/json') >= 0) {
    return response.json() // JSON parse can fail if response is not a valid object
    .catch(function (e) {
      return {
        error: e,
        errorSummary: 'Could not parse server response'
      };
    });
  } else {
    return response.text();
  }
}

function formatResult(status, data) {
  var isObject = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(data) === 'object';
  var result = {
    responseText: isObject ? JSON.stringify(data) : data,
    status: status
  };

  if (isObject) {
    result.responseType = 'json';
    result.responseJSON = data;
  }

  return result;
}
/* eslint-disable complexity */


function fetchRequest(method, url, args) {
  var body = args.data;
  var headers = args.headers || {};
  var contentType = headers['Content-Type'] || headers['content-type'] || ''; // JSON encode body (if appropriate)

  if (contentType === 'application/json' && body && typeof body !== 'string') {
    body = JSON.stringify(body);
  }

  var fetchPromise = cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
    method: method,
    headers: args.headers,
    body: body,
    credentials: args.withCredentials ? 'include' : 'omit'
  }).then(function (response) {
    var error = !response.ok;
    var status = response.status;
    return readData(response).then(function (data) {
      return formatResult(status, data);
    }).then(function (result) {
      if (error) {
        // Throwing result object since error handling is done in http.js
        throw result;
      }

      return result;
    });
  });
  return fetchPromise;
}

/* harmony default export */ __webpack_exports__["default"] = (fetchRequest);

/***/ }),

/***/ "./lib/http.ts":
/*!*********************!*\
  !*** ./lib/http.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _errors_AuthApiError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/AuthApiError */ "./lib/errors/AuthApiError.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./lib/constants.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* eslint-disable complexity */




function httpRequest(sdk, options) {
  options = options || {};
  var url = options.url,
      method = options.method,
      args = options.args,
      saveAuthnState = options.saveAuthnState,
      accessToken = options.accessToken,
      withCredentials = options.withCredentials !== false,
      // default value is true
  storageUtil = sdk.options.storageUtil,
      storage = storageUtil.storage,
      httpCache = storageUtil.getHttpCache(sdk.options.cookies);

  if (options.cacheResponse) {
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[url];

    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      return Promise.resolve(cachedResponse.response);
    }
  }

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Okta-User-Agent-Extended': sdk.userAgent
  };
  Object.assign(headers, sdk.options.headers, options.headers);
  headers = Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeNils"])(headers);

  if (accessToken && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(accessToken)) {
    headers['Authorization'] = 'Bearer ' + accessToken;
  }

  var ajaxOptions = {
    headers: headers,
    data: args || undefined,
    withCredentials: withCredentials
  };
  var err, res;
  return sdk.options.httpRequestClient(method, url, ajaxOptions).then(function (resp) {
    res = resp.responseText;

    if (res && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(res)) {
      res = JSON.parse(res);
    }

    if (saveAuthnState) {
      if (!res.stateToken) {
        storage.delete(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"]);
      }
    }

    if (res && res.stateToken && res.expiresAt) {
      storage.set(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"], res.stateToken, res.expiresAt, sdk.options.cookies);
    }

    if (res && options.cacheResponse) {
      httpCache.updateStorage(url, {
        expiresAt: Math.floor(Date.now() / 1000) + _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CACHE_DURATION"],
        response: res
      });
    }

    return res;
  }).catch(function (resp) {
    var serverErr = resp.responseText || {};

    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(serverErr)) {
      try {
        serverErr = JSON.parse(serverErr);
      } catch (e) {
        serverErr = {
          errorSummary: 'Unknown error'
        };
      }
    }

    if (resp.status >= 500) {
      serverErr.errorSummary = 'Unknown error';
    }

    if (sdk.options.transformErrorXHR) {
      resp = sdk.options.transformErrorXHR(Object(_util__WEBPACK_IMPORTED_MODULE_0__["clone"])(resp));
    }

    err = new _errors_AuthApiError__WEBPACK_IMPORTED_MODULE_1__["default"](serverErr, resp);

    if (err.errorCode === 'E0000011') {
      storage.delete(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"]);
    }

    throw err;
  });
}

function get(sdk, url, options) {
  url = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isAbsoluteUrl"])(url) ? url : sdk.getIssuerOrigin() + url;
  var getOptions = {
    url: url,
    method: 'GET'
  };
  Object.assign(getOptions, options);
  return httpRequest(sdk, getOptions);
}

function post(sdk, url, args, options) {
  url = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isAbsoluteUrl"])(url) ? url : sdk.getIssuerOrigin() + url;
  var postOptions = {
    url: url,
    method: 'POST',
    args: args,
    saveAuthnState: true
  };
  Object.assign(postOptions, options);
  return httpRequest(sdk, postOptions);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  post: post,
  httpRequest: httpRequest
});

/***/ }),

/***/ "./lib/oauthUtil.ts":
/*!**************************!*\
  !*** ./lib/oauthUtil.ts ***!
  \**************************/
/*! exports provided: generateState, generateNonce, getWellKnown, getKey, validateClaims, getOAuthUrls, loadFrame, loadPopup, urlParamsToObject, isLoginRedirect, addListener, removeListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateState", function() { return generateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateNonce", function() { return generateNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWellKnown", function() { return getWellKnown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateClaims", function() { return validateClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOAuthUrls", function() { return getOAuthUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFrame", function() { return loadFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPopup", function() { return loadPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlParamsToObject", function() { return urlParamsToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoginRedirect", function() { return isLoginRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./lib/http.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _browser_browserStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser/browserStorage */ "./lib/browser/browserStorage.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* global window, document */

/* eslint-disable complexity, max-statements */





function generateState() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_1__["genRandomString"])(64);
}

function generateNonce() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_1__["genRandomString"])(64);
}

function addListener(eventTarget, name, fn) {
  if (eventTarget.addEventListener) {
    eventTarget.addEventListener(name, fn);
  } else {
    eventTarget.attachEvent('on' + name, fn);
  }
}

function removeListener(eventTarget, name, fn) {
  if (eventTarget.removeEventListener) {
    eventTarget.removeEventListener(name, fn);
  } else {
    eventTarget.detachEvent('on' + name, fn);
  }
}

function loadFrame(src) {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = src;
  return document.body.appendChild(iframe);
}

function loadPopup(src, options) {
  var title = options.popupTitle || 'External Identity Provider User Authentication';
  var appearance = 'toolbar=no, scrollbars=yes, resizable=yes, ' + 'top=100, left=500, width=600, height=600';

  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isIE11OrLess"])()) {
    // IE<=11 doesn't fully support postMessage at time of writting.
    // the following simple solution happened to solve the issue
    // without adding another proxy layer which makes flow more complecated.
    var winEl = window.open('/', title, appearance);
    winEl.location.href = src;
    return winEl;
  } else {
    return window.open(src, title, appearance);
  }
}

function getWellKnown(sdk, issuer) {
  var authServerUri = issuer || sdk.options.issuer;
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(sdk, authServerUri + '/.well-known/openid-configuration', {
    cacheResponse: true
  });
}

function getKey(sdk, issuer, kid) {
  var httpCache = _browser_browserStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getHttpCache(sdk.options.cookies);
  return getWellKnown(sdk, issuer).then(function (wellKnown) {
    var jwksUri = wellKnown['jwks_uri']; // Check our kid against the cached version (if it exists and isn't expired)

    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[jwksUri];

    if (cachedResponse && Date.now() / 1000 < cachedResponse.expiresAt) {
      var cachedKey = Object(_util__WEBPACK_IMPORTED_MODULE_1__["find"])(cachedResponse.response.keys, {
        kid: kid
      });

      if (cachedKey) {
        return cachedKey;
      }
    } // Remove cache for the key


    httpCache.clearStorage(jwksUri); // Pull the latest keys if the key wasn't in the cache

    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(sdk, jwksUri, {
      cacheResponse: true
    }).then(function (res) {
      var key = Object(_util__WEBPACK_IMPORTED_MODULE_1__["find"])(res.keys, {
        kid: kid
      });

      if (key) {
        return key;
      }

      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The key id, ' + kid + ', was not found in the server\'s keys');
    });
  });
}

function validateClaims(sdk, claims, validationParams) {
  var aud = validationParams.clientId;
  var iss = validationParams.issuer;
  var nonce = validationParams.nonce;

  if (!claims || !iss || !aud) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The jwt, iss, and aud arguments are all required');
  }

  if (nonce && claims.nonce !== nonce) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('OAuth flow response nonce doesn\'t match request nonce');
  }

  var now = Math.floor(Date.now() / 1000);

  if (claims.iss !== iss) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The issuer [' + claims.iss + '] ' + 'does not match [' + iss + ']');
  }

  if (claims.aud !== aud) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The audience [' + claims.aud + '] ' + 'does not match [' + aud + ']');
  }

  if (claims.iat > claims.exp) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The JWT expired before it was issued');
  }

  if (now - sdk.options.maxClockSkew > claims.exp) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The JWT expired and is no longer valid');
  }

  if (claims.iat > now + sdk.options.maxClockSkew) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('The JWT was issued in the future');
  }
}

function getOAuthUrls(sdk, options) {
  if (arguments.length > 2) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('As of version 3.0, "getOAuthUrls" takes only a single set of options');
  }

  options = options || {}; // Get user-supplied arguments

  var authorizeUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.authorizeUrl) || sdk.options.authorizeUrl;
  var issuer = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.issuer) || sdk.options.issuer;
  var userinfoUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.userinfoUrl) || sdk.options.userinfoUrl;
  var tokenUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.tokenUrl) || sdk.options.tokenUrl;
  var logoutUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.logoutUrl) || sdk.options.logoutUrl;
  var revokeUrl = Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(options.revokeUrl) || sdk.options.revokeUrl;
  var baseUrl = issuer.indexOf('/oauth2') > 0 ? issuer : issuer + '/oauth2';
  authorizeUrl = authorizeUrl || baseUrl + '/v1/authorize';
  userinfoUrl = userinfoUrl || baseUrl + '/v1/userinfo';
  tokenUrl = tokenUrl || baseUrl + '/v1/token';
  revokeUrl = revokeUrl || baseUrl + '/v1/revoke';
  logoutUrl = logoutUrl || baseUrl + '/v1/logout';

  return {
    issuer: issuer,
    authorizeUrl: authorizeUrl,
    userinfoUrl: userinfoUrl,
    tokenUrl: tokenUrl,
    revokeUrl: revokeUrl,
    logoutUrl: logoutUrl
  };
}

function urlParamsToObject(hashOrSearch) {
  // Predefine regexs for parsing hash
  var plus2space = /\+/g;
  var paramSplit = /([^&=]+)=?([^&]*)/g;
  var fragment = hashOrSearch; // Some hash based routers will automatically add a / character after the hash

  if (fragment.charAt(0) === '#' && fragment.charAt(1) === '/') {
    fragment = fragment.substring(2);
  } // Remove the leading # or ?


  if (fragment.charAt(0) === '#' || fragment.charAt(0) === '?') {
    fragment = fragment.substring(1);
  }

  var obj = {}; // Loop until we have no more params

  var param;

  while (true) {
    // eslint-disable-line no-constant-condition
    param = paramSplit.exec(fragment);

    if (!param) {
      break;
    }

    var key = param[1];
    var value = param[2]; // id_token should remain base64url encoded

    if (key === 'id_token' || key === 'access_token' || key === 'code') {
      obj[key] = value;
    } else {
      obj[key] = decodeURIComponent(value.replace(plus2space, ' '));
    }
  }

  return obj;
}

function hasTokensInHash(hash) {
  return /((id|access)_token=)/i.test(hash);
}

function hasCodeInUrl(hashOrSearch) {
  return /(code=)/i.test(hashOrSearch);
}
/**
 * Check if tokens or a code have been passed back into the url, which happens in
 * the social auth IDP redirect flow.
 */


function isLoginRedirect(sdk) {
  var authParams = sdk.options;

  if (authParams.pkce || authParams.responseType === 'code' || authParams.responseMode === 'query') {
    // Look for code
    return authParams.responseMode === 'fragment' ? hasCodeInUrl(window.location.hash) : hasCodeInUrl(window.location.search);
  } // Look for tokens (Implicit OIDC flow)


  return hasTokensInHash(window.location.hash);
}



/***/ }),

/***/ "./lib/pkce.ts":
/*!*********************!*\
  !*** ./lib/pkce.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./lib/http.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/*!
 * Copyright (c) 2019-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* global crypto */

/* eslint-disable complexity, max-statements */


 // Code verifier: Random URL-safe string with a minimum length of 43 characters.
// Code challenge: Base64 URL-encoded SHA-256 hash of the code verifier.

var MIN_VERIFIER_LENGTH = 43;
var MAX_VERIFIER_LENGTH = 128;
var DEFAULT_CODE_CHALLENGE_METHOD = 'S256';

function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2);
}

function getRandomString(length) {
  var a = new Uint8Array(Math.ceil(length / 2));
  crypto.getRandomValues(a);
  var str = Array.from(a, dec2hex).join('');
  return str.slice(0, length);
}

function generateVerifier(prefix) {
  var verifier = prefix || '';

  if (verifier.length < MIN_VERIFIER_LENGTH) {
    verifier = verifier + getRandomString(MIN_VERIFIER_LENGTH - verifier.length);
  }

  return encodeURIComponent(verifier).slice(0, MAX_VERIFIER_LENGTH);
}

function getStorage(sdk, options) {
  options = Object.assign({}, sdk.options.cookies, options);
  return sdk.options.storageUtil.getPKCEStorage(options);
}

function saveMeta(sdk, meta) {
  // There must be only one PKCE flow executing at a time.
  // Before saving meta, check to see if a codeVerfier is already stored.
  var storage = getStorage(sdk, {
    preferLocalStorage: true
  });
  var obj = storage.getStorage();

  if (obj.codeVerifier) {
    // eslint-disable-next-line max-len
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["warn"])('saveMeta: PKCE codeVerifier exists in localStorage. This may indicate an auth flow is already in progress.');
  }

  storage = getStorage(sdk);
  obj = storage.getStorage();

  if (obj.codeVerifier) {
    // eslint-disable-next-line max-len
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["warn"])('saveMeta: PKCE codeVerifier exists in sessionStorage. This may indicate an auth flow is already in progress.');
  } // clear all PKCE meta storage before saving.


  clearMeta(sdk);
  storage.setStorage(meta);
}

function loadMeta(sdk) {
  // Try reading from localStorage first.
  // This is for compatibility with older versions of the signin widget. OKTA-304806
  var storage = getStorage(sdk, {
    preferLocalStorage: true
  });
  var obj = storage.getStorage(); // Verify the Meta

  if (!obj.codeVerifier) {
    // If meta is not valid, read from sessionStorage. This is expected for current versions of the SDK.
    storage = getStorage(sdk, {
      preferLocalStorage: false
    });
    obj = storage.getStorage();

    if (!obj.codeVerifier) {
      // If meta is not valid, throw an exception to avoid misleading server-side error
      // The most likely cause of this error is trying to handle a callback twice
      // eslint-disable-next-line max-len
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.', null);
    }
  }

  return obj;
}

function clearMeta(sdk) {
  // clear sessionStorage (current version)
  var storage = getStorage(sdk);
  storage.clearStorage(); // clear localStorage (previous versions, signin widget)

  storage = getStorage(sdk, {
    preferLocalStorage: true
  });
  storage.clearStorage();
}

function computeChallenge(str) {
  var buffer = new TextEncoder().encode(str);
  return crypto.subtle.digest('SHA-256', buffer).then(function (arrayBuffer) {
    var hash = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
    var b64u = Object(_util__WEBPACK_IMPORTED_MODULE_2__["stringToBase64Url"])(hash); // url-safe base64 variant

    return b64u;
  });
}

function validateOptions(options) {
  // Quick validation
  if (!options.clientId) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('A clientId must be specified in the OktaAuth constructor to get a token');
  }

  if (!options.redirectUri) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('The redirectUri passed to /authorize must also be passed to /token');
  }

  if (!options.authorizationCode) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('An authorization code (returned from /authorize) must be passed to /token');
  }

  if (!options.codeVerifier) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('The "codeVerifier" (generated and saved by your app) must be passed to /token');
  }
}

function getPostData(options) {
  // Convert options to OAuth params
  var params = Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeNils"])({
    'client_id': options.clientId,
    'redirect_uri': options.redirectUri,
    'grant_type': 'authorization_code',
    'code': options.authorizationCode,
    'code_verifier': options.codeVerifier
  }); // Encode as URL string

  return Object(_util__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])(params).slice(1);
} // exchange authorization code for an access token


function getToken(sdk, options, urls) {
  validateOptions(options);
  var data = getPostData(options);
  return _http__WEBPACK_IMPORTED_MODULE_1__["default"].httpRequest(sdk, {
    url: urls.tokenUrl,
    method: 'POST',
    args: data,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  DEFAULT_CODE_CHALLENGE_METHOD: DEFAULT_CODE_CHALLENGE_METHOD,
  generateVerifier: generateVerifier,
  clearMeta: clearMeta,
  saveMeta: saveMeta,
  loadMeta: loadMeta,
  computeChallenge: computeChallenge,
  getToken: getToken
});

/***/ }),

/***/ "./lib/session.ts":
/*!************************!*\
  !*** ./lib/session.ts ***!
  \************************/
/*! exports provided: sessionExists, getSession, closeSession, refreshSession, setCookieAndRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionExists", function() { return sessionExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSession", function() { return closeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshSession", function() { return refreshSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookieAndRedirect", function() { return setCookieAndRedirect; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./lib/http.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* global window */



function sessionExists(sdk) {
  return sdk.session.get().then(function (res) {
    if (res.status === 'ACTIVE') {
      return true;
    }

    return false;
  }).catch(function () {
    return false;
  });
}

function getSession(sdk) {
  return _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(sdk, '/api/v1/sessions/me').then(function (session) {
    var res = Object(_util__WEBPACK_IMPORTED_MODULE_0__["omit"])(session, '_links');

    res.refresh = function () {
      return _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(sdk, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getLink"])(session, 'refresh').href);
    };

    res.user = function () {
      return _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(sdk, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getLink"])(session, 'user').href);
    };

    return res;
  }).catch(function () {
    // Return INACTIVE status on failure
    return {
      status: 'INACTIVE'
    };
  });
}

function closeSession(sdk) {
  return _http__WEBPACK_IMPORTED_MODULE_1__["default"].httpRequest(sdk, {
    url: sdk.getIssuerOrigin() + '/api/v1/sessions/me',
    method: 'DELETE'
  });
}

function refreshSession(sdk) {
  return _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(sdk, '/api/v1/sessions/me/lifecycle/refresh');
}

function setCookieAndRedirect(sdk, sessionToken, redirectUrl) {
  redirectUrl = redirectUrl || window.location.href;
  window.location.assign(sdk.getIssuerOrigin() + '/login/sessionCookieRedirect' + Object(_util__WEBPACK_IMPORTED_MODULE_0__["toQueryString"])({
    checkAccountSetupComplete: true,
    token: sessionToken,
    redirectUrl: redirectUrl
  }));
}



/***/ }),

/***/ "./lib/storageBuilder.ts":
/*!*******************************!*\
  !*** ./lib/storageBuilder.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
 // storage must have getItem and setItem

function storageBuilder(webstorage, storageName) {
  if (typeof storageName !== 'string' || !storageName.length) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('"storageName" is required');
  }

  function getStorage() {
    var storageString = webstorage.getItem(storageName);
    storageString = storageString || '{}';

    try {
      return JSON.parse(storageString);
    } catch (e) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('Unable to parse storage string: ' + storageName);
    }
  }

  function setStorage(storage) {
    try {
      var storageString = JSON.stringify(storage);
      webstorage.setItem(storageName, storageString);
    } catch (e) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_0__["default"]('Unable to set storage: ' + storageName);
    }
  }

  function clearStorage(key) {
    if (!key) {
      return setStorage({});
    }

    var storage = getStorage();
    delete storage[key];
    setStorage(storage);
  }

  function updateStorage(key, value) {
    var storage = getStorage();
    storage[key] = value;
    setStorage(storage);
  }

  return {
    getStorage: getStorage,
    setStorage: setStorage,
    clearStorage: clearStorage,
    updateStorage: updateStorage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (storageBuilder);

/***/ }),

/***/ "./lib/token.ts":
/*!**********************!*\
  !*** ./lib/token.ts ***!
  \**********************/
/*! exports provided: revokeToken, getToken, getWithoutPrompt, getWithPopup, getWithRedirect, parseFromUrl, decodeToken, renewToken, getUserInfo, verifyToken, handleOAuthResponse, prepareTokenParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeToken", function() { return revokeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithoutPrompt", function() { return getWithoutPrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithPopup", function() { return getWithPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithRedirect", function() { return getWithRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFromUrl", function() { return parseFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeToken", function() { return decodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renewToken", function() { return renewToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOAuthResponse", function() { return handleOAuthResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTokenParams", function() { return prepareTokenParams; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http */ "./lib/http.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.ts");
/* harmony import */ var _oauthUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oauthUtil */ "./lib/oauthUtil.ts");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crypto */ "./lib/crypto.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _errors_OAuthError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/OAuthError */ "./lib/errors/OAuthError.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./lib/constants.ts");
/* harmony import */ var _browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser/browserStorage */ "./lib/browser/browserStorage.ts");
/* harmony import */ var _pkce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pkce */ "./lib/pkce.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./lib/types/index.ts");


/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/* global window, document, btoa */

/* eslint-disable complexity, max-statements */












var cookies = _browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__["default"].storage; // Only the access token can be revoked in SPA applications

function revokeToken(sdk, token) {
  return Promise.resolve().then(function () {
    if (!token || !token.accessToken) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('A valid access token object is required');
    }

    var clientId = sdk.options.clientId;

    if (!clientId) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('A clientId must be specified in the OktaAuth constructor to revoke a token');
    }

    var revokeUrl = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["getOAuthUrls"])(sdk).revokeUrl;
    var accessToken = token.accessToken;
    var args = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])({
      // eslint-disable-next-line camelcase
      token_type_hint: 'access_token',
      token: accessToken
    }).slice(1);
    var creds = btoa(clientId);
    return _http__WEBPACK_IMPORTED_MODULE_1__["default"].post(sdk, revokeUrl, args, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + creds
      }
    });
  });
}

function decodeToken(token) {
  var jwt = token.split('.');
  var decodedToken;

  try {
    decodedToken = {
      header: JSON.parse(Object(_util__WEBPACK_IMPORTED_MODULE_2__["base64UrlToString"])(jwt[0])),
      payload: JSON.parse(Object(_util__WEBPACK_IMPORTED_MODULE_2__["base64UrlToString"])(jwt[1])),
      signature: jwt[2]
    };
  } catch (e) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Malformed token');
  }

  return decodedToken;
} // Verify the id token


function verifyToken(sdk, token, validationParams) {
  return Promise.resolve().then(function () {
    if (!token || !token.idToken) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Only idTokens may be verified');
    }

    var jwt = decodeToken(token.idToken);
    var validationOptions = {
      clientId: sdk.options.clientId,
      issuer: sdk.options.issuer,
      ignoreSignature: sdk.options.ignoreSignature
    };
    Object.assign(validationOptions, validationParams); // Standard claim validation

    Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["validateClaims"])(sdk, jwt.payload, validationOptions); // If the browser doesn't support native crypto or we choose not
    // to verify the signature, bail early

    if (validationOptions.ignoreSignature == true || !sdk.features.isTokenVerifySupported()) {
      return token;
    }

    return Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["getKey"])(sdk, token.issuer, jwt.header.kid).then(function (key) {
      return _crypto__WEBPACK_IMPORTED_MODULE_4__["verifyToken"](token.idToken, key);
    }).then(function (valid) {
      if (!valid) {
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('The token signature is not valid');
      }

      if (validationParams && validationParams.accessToken && token.claims.at_hash) {
        return _crypto__WEBPACK_IMPORTED_MODULE_4__["getOidcHash"](validationParams.accessToken).then(function (hash) {
          if (hash !== token.claims.at_hash) {
            throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Token hash verification failed');
          }
        });
      }
    }).then(function () {
      return token;
    });
  });
}

function addPostMessageListener(sdk, timeout, state) {
  var responseHandler;
  var timeoutId;
  var msgReceivedOrTimeout = new Promise(function (resolve, reject) {
    responseHandler = function responseHandler(e) {
      
      if (!e.data || e.data.state !== state) {
        // A message not meant for us
        return;
      } // Configuration mismatch between saved token and current app instance
      // This may happen if apps with different issuers are running on the same host url
      // If they share the same storage key, they may read and write tokens in the same location.
      // Common when developing against http://localhost


      if (e.origin !== sdk.getIssuerOrigin()) {
        return reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('The request does not match client configuration'));
      }

      resolve(e.data);
    };

    Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["addListener"])(window, 'message', responseHandler);
    timeoutId = setTimeout(function () {
      reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('OAuth flow timed out'));
    }, timeout || 120000);
  });
  return msgReceivedOrTimeout.finally(function () {
    clearTimeout(timeoutId);
    Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["removeListener"])(window, 'message', responseHandler);
  });
}

function exchangeCodeForToken(sdk, oauthParams, authorizationCode, urls) {
  // PKCE authorization_code flow
  // Retrieve saved values and build oauthParams for call to /token
  var meta = _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].loadMeta(sdk);
  var getTokenParams = {
    clientId: oauthParams.clientId,
    authorizationCode: authorizationCode,
    codeVerifier: meta.codeVerifier,
    redirectUri: meta.redirectUri
  };
  return _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].getToken(sdk, getTokenParams, urls).then(function (res) {
    validateResponse(res, getTokenParams);
    return res;
  }).finally(function () {
    _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].clearMeta(sdk);
  });
}

function validateResponse(res, oauthParams) {
  if (res['error'] || res['error_description']) {
    throw new _errors_OAuthError__WEBPACK_IMPORTED_MODULE_6__["default"](res['error'], res['error_description']);
  }

  if (res.state !== oauthParams.state) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('OAuth flow response state doesn\'t match request state');
  }
} // eslint-disable-next-line max-len


function handleOAuthResponse(sdk, tokenParams, res, urls) {
  urls = urls || {};
  var responseType = tokenParams.responseType;

  if (!Array.isArray(responseType)) {
    responseType = [responseType];
  }

  var scopes = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(tokenParams.scopes);
  var clientId = tokenParams.clientId || sdk.options.clientId;
  var pkce = sdk.options.pkce !== false;
  return Promise.resolve().then(function () {
    validateResponse(res, tokenParams); // PKCE flow
    // We do not support "hybrid" scenarios where the response includes both a code and a token.
    // If the response contains a code it is used immediately to obtain new tokens.

    if (res.code && pkce) {
      // responseType is not sent to the token endpoint.
      // We populate this array to validate the response below
      responseType = ['token']; // an accessToken will always be returned

      if (scopes.indexOf('openid') !== -1) {
        responseType.push('id_token'); // an idToken will be returned if "openid" is in the scopes
      }

      return exchangeCodeForToken(sdk, tokenParams, res.code, urls);
    }

    return res;
  }).then(function (res) {
    var tokenDict = {};
    var expiresIn = res.expires_in;
    var tokenType = res.token_type;
    var accessToken = res.access_token;
    var idToken = res.id_token;

    if (accessToken) {
      tokenDict.accessToken = {
        value: accessToken,
        accessToken: accessToken,
        expiresAt: Number(expiresIn) + Math.floor(Date.now() / 1000),
        tokenType: tokenType,
        scopes: scopes,
        authorizeUrl: urls.authorizeUrl,
        userinfoUrl: urls.userinfoUrl
      };
    }

    if (idToken) {
      var jwt = sdk.token.decode(idToken);
      var idTokenObj = {
        value: idToken,
        idToken: idToken,
        claims: jwt.payload,
        expiresAt: jwt.payload.exp,
        scopes: scopes,
        authorizeUrl: urls.authorizeUrl,
        issuer: urls.issuer,
        clientId: clientId
      };
      var validationParams = {
        clientId: clientId,
        issuer: urls.issuer,
        nonce: tokenParams.nonce,
        accessToken: accessToken
      };

      if (tokenParams.ignoreSignature !== undefined) {
        validationParams.ignoreSignature = tokenParams.ignoreSignature;
      }

      return verifyToken(sdk, idTokenObj, validationParams).then(function () {
        tokenDict.idToken = idTokenObj;
        return tokenDict;
      });
    }

    return tokenDict;
  }).then(function (tokenDict) {
    // Validate received tokens against requested response types 
    if (responseType.indexOf('token') !== -1 && !tokenDict.accessToken) {
      // eslint-disable-next-line max-len
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');
    }

    if (responseType.indexOf('id_token') !== -1 && !tokenDict.idToken) {
      // eslint-disable-next-line max-len
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');
    }

    return {
      tokens: tokenDict,
      state: res.state,
      code: res.code
    };
  });
}

function getDefaultTokenParams(sdk) {
  return {
    pkce: sdk.options.pkce,
    clientId: sdk.options.clientId,
    redirectUri: sdk.options.redirectUri || window.location.href,
    responseType: ['token', 'id_token'],
    responseMode: sdk.options.responseMode,
    state: Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["generateState"])(),
    nonce: Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["generateNonce"])(),
    scopes: ['openid', 'email'],
    ignoreSignature: sdk.options.ignoreSignature
  };
}

function convertTokenParamsToOAuthParams(tokenParams) {
  // Quick validation
  if (!tokenParams.clientId) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('A clientId must be specified in the OktaAuth constructor to get a token');
  }

  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(tokenParams.responseType) && tokenParams.responseType.indexOf(' ') !== -1) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Multiple OAuth responseTypes must be defined as an array');
  } // Convert our params to their actual OAuth equivalents


  var oauthParams = {
    'client_id': tokenParams.clientId,
    'code_challenge': tokenParams.codeChallenge,
    'code_challenge_method': tokenParams.codeChallengeMethod,
    'display': tokenParams.display,
    'idp': tokenParams.idp,
    'idp_scope': tokenParams.idpScope,
    'login_hint': tokenParams.loginHint,
    'max_age': tokenParams.maxAge,
    'nonce': tokenParams.nonce,
    'prompt': tokenParams.prompt,
    'redirect_uri': tokenParams.redirectUri,
    'response_mode': tokenParams.responseMode,
    'response_type': tokenParams.responseType,
    'sessionToken': tokenParams.sessionToken,
    'state': tokenParams.state
  };
  oauthParams = Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeNils"])(oauthParams);
  ['idp_scope', 'response_type'].forEach(function (mayBeArray) {
    if (Array.isArray(oauthParams[mayBeArray])) {
      oauthParams[mayBeArray] = oauthParams[mayBeArray].join(' ');
    }
  });

  if (tokenParams.responseType.indexOf('id_token') !== -1 && tokenParams.scopes.indexOf('openid') === -1) {
    throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('openid scope must be specified in the scopes argument when requesting an id_token');
  } else {
    oauthParams.scope = tokenParams.scopes.join(' ');
  }

  return oauthParams;
}

function buildAuthorizeParams(tokenParams) {
  var oauthQueryParams = convertTokenParamsToOAuthParams(tokenParams);
  return Object(_util__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])(oauthQueryParams);
}
/*
 * Retrieve an idToken from an Okta or a third party idp
 *
 * Two main flows:
 *
 *  1) Exchange a sessionToken for a token
 *
 *    Required:
 *      clientId: passed via the OktaAuth constructor or into getToken
 *      sessionToken: 'yourtoken'
 *
 *    Optional:
 *      redirectUri: defaults to window.location.href
 *      scopes: defaults to ['openid', 'email']
 *
 *    Forced:
 *      prompt: 'none'
 *      responseMode: 'okta_post_message'
 *      display: undefined
 *
 *  2) Get a token from an idp
 *
 *    Required:
 *      clientId: passed via the OktaAuth constructor or into getToken
 *
 *    Optional:
 *      redirectUri: defaults to window.location.href
 *      scopes: defaults to ['openid', 'email']
 *      idp: defaults to Okta as an idp
 *      prompt: no default. Pass 'none' to throw an error if user is not signed in
 *
 *    Forced:
 *      display: 'popup'
 *
 *  Only common optional params shown. Any OAuth parameters not explicitly forced are available to override
 *
 * @param {Object} oauthOptions
 * @param {String} [oauthOptions.clientId] ID of this client
 * @param {String} [oauthOptions.redirectUri] URI that the iframe or popup will go to once authenticated
 * @param {String[]} [oauthOptions.scopes] OAuth 2.0 scopes to request (openid must be specified)
 * @param {String} [oauthOptions.idp] ID of an external IdP to use for user authentication
 * @param {String} [oauthOptions.sessionToken] Bootstrap Session Token returned by the Okta Authentication API
 * @param {String} [oauthOptions.prompt] Determines whether the Okta login will be displayed on failure.
 *                                       Use 'none' to prevent this behavior
 *
 * @param {Object} options
 * @param {Integer} [options.timeout] Time in ms before the flow is automatically terminated. Defaults to 120000
 * @param {String} [options.popupTitle] Title dispayed in the popup.
 *                                      Defaults to 'External Identity Provider User Authentication'
 */


function getToken(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('As of version 3.0, "getToken" takes only a single set of options'));
  }

  options = options || {};
  return prepareTokenParams(sdk, options).then(function (tokenParams) {
    // Start overriding any options that don't make sense
    var sessionTokenOverrides = {
      prompt: 'none',
      responseMode: 'okta_post_message',
      display: null
    };
    var idpOverrides = {
      display: 'popup'
    };

    if (options.sessionToken) {
      Object.assign(tokenParams, sessionTokenOverrides);
    } else if (options.idp) {
      Object.assign(tokenParams, idpOverrides);
    } // Use the query params to build the authorize url


    var requestUrl, endpoint, urls; // Get authorizeUrl and issuer

    urls = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["getOAuthUrls"])(sdk, tokenParams);
    endpoint = options.codeVerifier ? urls.tokenUrl : urls.authorizeUrl;
    requestUrl = endpoint + buildAuthorizeParams(tokenParams); // Determine the flow type
    

    var flowType;

    if (tokenParams.sessionToken || tokenParams.display === null) {
      flowType = 'IFRAME';
    } else if (tokenParams.display === 'popup') {
      flowType = 'POPUP';
    } else {
      flowType = 'IMPLICIT';
    } // Execute the flow type


    switch (flowType) {
      case 'IFRAME':
        var iframePromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        var iframeEl = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["loadFrame"])(requestUrl);
        return iframePromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          if (document.body.contains(iframeEl)) {
            iframeEl.parentElement.removeChild(iframeEl);
          }
        });

      case 'POPUP':
        var oauthPromise; // resolves with OAuth response
        // Add listener on postMessage before window creation, so
        // postMessage isn't triggered before we're listening

        if (tokenParams.responseMode === 'okta_post_message') {
          if (!sdk.features.isPopupPostMessageSupported()) {
            throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('This browser doesn\'t have full postMessage support');
          }

          oauthPromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        } // Create the window


        var windowOptions = {
          popupTitle: options.popupTitle
        };
        var windowEl = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["loadPopup"])(requestUrl, windowOptions); // The popup may be closed without receiving an OAuth response. Setup a poller to monitor the window.

        var popupPromise = new Promise(function (resolve, reject) {
          var closePoller = setInterval(function () {
            if (!windowEl || windowEl.closed) {
              clearInterval(closePoller);
              reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to parse OAuth flow response'));
            }
          }, 100); // Proxy the OAuth promise results

          oauthPromise.then(function (res) {
            clearInterval(closePoller);
            resolve(res);
          }).catch(function (err) {
            clearInterval(closePoller);
            reject(err);
          });
        });
        return popupPromise.then(function (res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function () {
          if (windowEl && !windowEl.closed) {
            windowEl.close();
          }
        });

      default:
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('The full page redirect flow is not supported');
    }
  }).catch(function (e) {
    if (sdk.options.pkce) {
      _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].clearMeta(sdk);
    }

    throw e;
  });
}

function getWithoutPrompt(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('As of version 3.0, "getWithoutPrompt" takes only a single set of options'));
  }

  options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(options) || {};
  Object.assign(options, {
    prompt: 'none',
    responseMode: 'okta_post_message',
    display: null
  });
  return getToken(sdk, options);
}

function getWithPopup(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('As of version 3.0, "getWithPopup" takes only a single set of options'));
  }

  options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(options) || {};
  Object.assign(options, {
    display: 'popup',
    responseMode: 'okta_post_message'
  });
  return getToken(sdk, options);
}

function prepareTokenParams(sdk, options) {
  if (Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["isLoginRedirect"])(sdk)) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('The app should not attempt to call getToken on callback. ' + 'Authorize flow is already in process. Use parseFromUrl() to receive tokens.'));
  } // clone and prepare options


  options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(options) || {}; // build params using defaults + options

  var tokenParams = getDefaultTokenParams(sdk);
  Object.assign(tokenParams, options);

  if (tokenParams.pkce === false) {
    return Promise.resolve(tokenParams);
  } // PKCE flow


  if (!sdk.features.isPKCESupported()) {
    var errorMessage = 'PKCE requires a modern browser with encryption support running in a secure context.';

    if (!sdk.features.isHTTPS()) {
      // eslint-disable-next-line max-len
      errorMessage += '\nThe current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.';
    }

    if (!sdk.features.hasTextEncoder()) {
      // eslint-disable-next-line max-len
      errorMessage += '\n"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.';
    }

    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"](errorMessage));
  } // set default code challenge method, if none provided


  if (!tokenParams.codeChallengeMethod) {
    tokenParams.codeChallengeMethod = _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].DEFAULT_CODE_CHALLENGE_METHOD;
  } // responseType is forced


  tokenParams.responseType = 'code';
  return Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["getWellKnown"])(sdk, null).then(function (res) {
    var methods = res['code_challenge_methods_supported'] || [];

    if (methods.indexOf(tokenParams.codeChallengeMethod) === -1) {
      throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Invalid code_challenge_method');
    }
  }).then(function () {
    // PKCE authorization_code flow
    var codeVerifier = _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].generateVerifier(tokenParams.codeVerifier); // We will need these values after redirect when we call /token

    var meta = {
      codeVerifier: codeVerifier,
      redirectUri: tokenParams.redirectUri
    };
    _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].saveMeta(sdk, meta);
    return _pkce__WEBPACK_IMPORTED_MODULE_9__["default"].computeChallenge(codeVerifier);
  }).then(function (codeChallenge) {
    // Clone/copy the params. Set codeChallenge
    var clonedParams = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(tokenParams) || {};
    Object.assign(clonedParams, tokenParams, {
      codeChallenge: codeChallenge
    });
    return clonedParams;
  });
}

function addOAuthParamsToStorage(sdk, tokenParams, urls) {
  var responseType = tokenParams.responseType,
      state = tokenParams.state,
      nonce = tokenParams.nonce,
      scopes = tokenParams.scopes,
      clientId = tokenParams.clientId,
      ignoreSignature = tokenParams.ignoreSignature;
  var tokenParamsStr = JSON.stringify({
    responseType: responseType,
    state: state,
    nonce: nonce,
    scopes: scopes,
    clientId: clientId,
    urls: urls,
    ignoreSignature: ignoreSignature
  });

  if (_browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__["default"].browserHasSessionStorage()) {
    _browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionStorage().setItem(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"], tokenParamsStr);
  } else {
    cookies.set(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"], tokenParamsStr, null, sdk.options.cookies);
  }
}

function getWithRedirect(sdk, options) {
  if (arguments.length > 2) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('As of version 3.0, "getWithRedirect" takes only a single set of options'));
  }

  options = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(options) || {};
  return prepareTokenParams(sdk, options).then(function (tokenParams) {
    var urls = Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["getOAuthUrls"])(sdk, options);
    var requestUrl = urls.authorizeUrl + buildAuthorizeParams(tokenParams);
    console.log({requestUrl})
    
    addOAuthParamsToStorage(sdk, tokenParams, urls); // Set nonce cookie for servers to validate nonce in id_token

    cookies.set(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_NONCE_COOKIE_NAME"], tokenParams.nonce, null, sdk.options.cookies); // Set state cookie for servers to validate state

    cookies.set(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_STATE_COOKIE_NAME"], tokenParams.state, null, sdk.options.cookies);
    
    sdk.token.getWithRedirect._setLocation(requestUrl);
  });
}

function renewToken(sdk, token) {
  if (!Object(_types__WEBPACK_IMPORTED_MODULE_10__["isToken"])(token)) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Renew must be passed a token with ' + 'an array of scopes and an accessToken or idToken'));
  }

  var responseType;

  if (sdk.options.pkce) {
    responseType = 'code';
  } else if (Object(_types__WEBPACK_IMPORTED_MODULE_10__["isAccessToken"])(token)) {
    responseType = 'token';
  } else {
    responseType = 'id_token';
  }

  var scopes = token.scopes,
      authorizeUrl = token.authorizeUrl,
      userinfoUrl = token.userinfoUrl,
      issuer = token.issuer;
  return getWithoutPrompt(sdk, {
    responseType: responseType,
    scopes: scopes,
    authorizeUrl: authorizeUrl,
    userinfoUrl: userinfoUrl,
    issuer: issuer
  }).then(function (res) {
    // Multiple tokens may have come back. Return only the token which was requested.
    var tokens = res.tokens;
    return Object(_types__WEBPACK_IMPORTED_MODULE_10__["isIDToken"])(token) ? tokens.idToken : tokens.accessToken;
  });
}

function removeHash(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();

  var nativeDoc = sdk.token.parseFromUrl._getDocument();

  var nativeLoc = sdk.token.parseFromUrl._getLocation();

  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.search);
  } else {
    nativeLoc.hash = '';
  }
}

function removeSearch(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();

  var nativeDoc = sdk.token.parseFromUrl._getDocument();

  var nativeLoc = sdk.token.parseFromUrl._getLocation();

  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.hash);
  } else {
    nativeLoc.search = '';
  }
}

function getOAuthParamsStrFromStorage() {
  var oauthParamsStr;

  if (_browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__["default"].browserHasSessionStorage()) {
    var storage = _browser_browserStorage__WEBPACK_IMPORTED_MODULE_8__["default"].getSessionStorage();
    oauthParamsStr = storage.getItem(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"]);
    storage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"]);
  } else {
    oauthParamsStr = cookies.get(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"]);
    cookies.delete(_constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"]);
  }
  return oauthParamsStr;
}

function parseFromUrl(sdk, options) {
  console.log({options});
  options = options || {};
  

  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(options)) {
    options = {
      url: options
    };
  } else {
    options = options;
  } // https://openid.net/specs/openid-connect-core-1_0.html#Authentication


  var defaultResponseMode = sdk.options.pkce ? 'query' : 'fragment';
  var url = options.url;
  
  var responseMode = options.responseMode || sdk.options.responseMode || defaultResponseMode;

  var nativeLoc = sdk.token.parseFromUrl._getLocation();

  var paramStr;

  if (responseMode === 'query') {
    paramStr = url ? url.substring(url.indexOf('?')) : nativeLoc.search;
  } else {
    paramStr = url ? url.substring(url.indexOf('#')) : nativeLoc.hash;
  }

  if (!paramStr) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to parse a token from the url'));
  }

  var oauthParamsStr = getOAuthParamsStrFromStorage();

  if (!oauthParamsStr) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to retrieve OAuth redirect params from storage'));
  }

  try {
    var oauthParams = JSON.parse(oauthParamsStr);
    var urls = oauthParams.urls;
    delete oauthParams.urls;
  } catch (e) {
    return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('Unable to parse the ' + _constants__WEBPACK_IMPORTED_MODULE_7__["REDIRECT_OAUTH_PARAMS_NAME"] + ' value from storage: ' + e.message));
  }

  return Promise.resolve(Object(_oauthUtil__WEBPACK_IMPORTED_MODULE_3__["urlParamsToObject"])(paramStr)).then(function (res) {
    if (!url) {
      // Clean hash or search from the url
      responseMode === 'query' ? removeSearch(sdk) : removeHash(sdk);
    }

    return handleOAuthResponse(sdk, oauthParams, res, urls);
  });
}

function getUserInfo(sdk, accessTokenObject, idTokenObject) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (accessTokenObject) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return sdk.tokenManager.get(_constants__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN_STORAGE_KEY"]);

          case 3:
            accessTokenObject = _context.sent;

          case 4:
            if (idTokenObject) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return sdk.tokenManager.get(_constants__WEBPACK_IMPORTED_MODULE_7__["ID_TOKEN_STORAGE_KEY"]);

          case 7:
            idTokenObject = _context.sent;

          case 8:
            if (!(!accessTokenObject || !Object(_types__WEBPACK_IMPORTED_MODULE_10__["isToken"])(accessTokenObject) && !accessTokenObject.accessToken && !accessTokenObject.userinfoUrl)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('getUserInfo requires an access token object')));

          case 10:
            if (!(!idTokenObject || !Object(_types__WEBPACK_IMPORTED_MODULE_10__["isToken"])(idTokenObject) && !idTokenObject.idToken)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('getUserInfo requires an ID token object')));

          case 12:
            return _context.abrupt("return", _http__WEBPACK_IMPORTED_MODULE_1__["default"].httpRequest(sdk, {
              url: accessTokenObject.userinfoUrl,
              method: 'GET',
              accessToken: accessTokenObject.accessToken
            }).then(function (userInfo) {
              // Only return the userinfo response if subjects match to mitigate token substitution attacks
              if (userInfo.sub === idTokenObject.claims.sub) {
                return userInfo;
              }

              return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_5__["default"]('getUserInfo request was rejected due to token mismatch'));
            }).catch(function (err) {
              if (err.xhr && (err.xhr.status === 401 || err.xhr.status === 403)) {
                var authenticateHeader;

                if (err.xhr.headers && Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(err.xhr.headers.get) && err.xhr.headers.get('WWW-Authenticate')) {
                  authenticateHeader = err.xhr.headers.get('WWW-Authenticate');
                } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(err.xhr.getResponseHeader)) {
                  authenticateHeader = err.xhr.getResponseHeader('WWW-Authenticate');
                }

                if (authenticateHeader) {
                  var errorMatches = authenticateHeader.match(/error="(.*?)"/) || [];
                  var errorDescriptionMatches = authenticateHeader.match(/error_description="(.*?)"/) || [];
                  var error = errorMatches[1];
                  var errorDescription = errorDescriptionMatches[1];

                  if (error && errorDescription) {
                    err = new _errors_OAuthError__WEBPACK_IMPORTED_MODULE_6__["default"](error, errorDescription);
                  }
                }
              }

              throw err;
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}



/***/ }),

/***/ "./lib/tx/AuthTransaction.ts":
/*!***********************************!*\
  !*** ./lib/tx/AuthTransaction.ts ***!
  \***********************************/
/*! exports provided: AuthTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTransaction", function() { return AuthTransaction; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./lib/http.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./lib/tx/util.ts");
/* harmony import */ var _poll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poll */ "./lib/tx/poll.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./lib/tx/api.ts");


/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */






var AuthTransaction = function AuthTransaction(sdk) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthTransaction);

  if (res) {
    this.data = res;
    Object.assign(this, flattenEmbedded(sdk, res, res, {}));
    delete this.stateToken; // RECOVERY_CHALLENGE has some responses without _links.
    // Without _links, we emulate cancel to make it intuitive
    // to return to the starting state. We may remove this
    // when OKTA-75434 is resolved

    if (res.status === 'RECOVERY_CHALLENGE' && !res._links) {
      this.cancel = function () {
        return Promise.resolve(new AuthTransaction(sdk));
      };
    }
  }
};

function link2fn(sdk, res, obj, link, ref) {
  if (Array.isArray(link)) {
    return function (name, opts) {
      if (!name) {
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('Must provide a link name');
      }

      var lk = Object(_util__WEBPACK_IMPORTED_MODULE_2__["find"])(link, {
        name: name
      });

      if (!lk) {
        throw new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('No link found for that name');
      }

      return link2fn(sdk, res, obj, lk, ref)(opts);
    };
  } else if (link.hints && link.hints.allow && link.hints.allow.length === 1) {
    var method = link.hints.allow[0];

    switch (method) {
      case 'GET':
        return function () {
          return _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(sdk, link.href);
        };

      case 'POST':
        // eslint-disable-next-line max-statements,complexity
        return function (opts) {
          if (ref && ref.isPolling) {
            ref.isPolling = false;
          }

          var data = Object(_util__WEBPACK_IMPORTED_MODULE_4__["addStateToken"])(res, opts);

          if (res.status === 'MFA_ENROLL' || res.status === 'FACTOR_ENROLL') {
            // Add factorType and provider
            Object.assign(data, {
              factorType: obj.factorType,
              provider: obj.provider
            });
          }

          var params = {};
          var autoPush = data.autoPush;

          if (autoPush !== undefined) {
            if (typeof autoPush === 'function') {
              try {
                params.autoPush = !!autoPush();
              } catch (e) {
                return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('AutoPush resulted in an error.'));
              }
            } else if (autoPush !== null) {
              params.autoPush = !!autoPush;
            }

            data = Object(_util__WEBPACK_IMPORTED_MODULE_2__["omit"])(data, 'autoPush');
          }

          var rememberDevice = data.rememberDevice;

          if (rememberDevice !== undefined) {
            if (typeof rememberDevice === 'function') {
              try {
                params.rememberDevice = !!rememberDevice();
              } catch (e) {
                return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('RememberDevice resulted in an error.'));
              }
            } else if (rememberDevice !== null) {
              params.rememberDevice = !!rememberDevice;
            }

            data = Object(_util__WEBPACK_IMPORTED_MODULE_2__["omit"])(data, 'rememberDevice');
          } else if (data.profile && data.profile.updatePhone !== undefined) {
            if (data.profile.updatePhone) {
              params.updatePhone = true;
            }

            data.profile = Object(_util__WEBPACK_IMPORTED_MODULE_2__["omit"])(data.profile, 'updatePhone');
          }

          var href = link.href + Object(_util__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])(params);
          return Object(_api__WEBPACK_IMPORTED_MODULE_6__["postToTransaction"])(sdk, href, data);
        };
    }
  }
}

function links2fns(sdk, res, obj, ref) {
  var fns = {};

  for (var linkName in obj._links) {
    if (!Object.prototype.hasOwnProperty.call(obj._links, linkName)) {
      continue;
    }

    var link = obj._links[linkName];

    if (linkName === 'next') {
      linkName = link.name;
    }

    if (link.type) {
      fns[linkName] = link;
      continue;
    }

    switch (linkName) {
      // poll is only found at the transaction
      // level, so we don't need to pass the link
      case 'poll':
        fns.poll = Object(_poll__WEBPACK_IMPORTED_MODULE_5__["getPollFn"])(sdk, res, ref);
        break;

      default:
        var fn = link2fn(sdk, res, obj, link, ref);

        if (fn) {
          fns[linkName] = fn;
        }

    }
  }

  return fns;
} // eslint-disable-next-line complexity


function flattenEmbedded(sdk, res, obj, ref) {
  obj = obj || res;
  obj = Object(_util__WEBPACK_IMPORTED_MODULE_2__["clone"])(obj);

  if (Array.isArray(obj)) {
    var objArr = [];

    for (var o = 0, ol = obj.length; o < ol; o++) {
      objArr.push(flattenEmbedded(sdk, res, obj[o], ref));
    }

    return objArr;
  }

  var embedded = obj._embedded || {};

  for (var key in embedded) {
    if (!Object.prototype.hasOwnProperty.call(embedded, key)) {
      continue;
    } // Flatten any nested _embedded objects


    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(embedded[key]) || Array.isArray(embedded[key])) {
      embedded[key] = flattenEmbedded(sdk, res, embedded[key], ref);
    }
  } // Convert any links on the embedded object


  var fns = links2fns(sdk, res, obj, ref);
  Object.assign(embedded, fns);
  obj = Object(_util__WEBPACK_IMPORTED_MODULE_2__["omit"])(obj, '_embedded', '_links');
  Object.assign(obj, embedded);
  return obj;
}

/***/ }),

/***/ "./lib/tx/TransactionState.ts":
/*!************************************!*\
  !*** ./lib/tx/TransactionState.ts ***!
  \************************************/
/*! exports provided: TransactionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionState", function() { return TransactionState; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);

var TransactionState = function TransactionState() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TransactionState);
};

/***/ }),

/***/ "./lib/tx/api.ts":
/*!***********************!*\
  !*** ./lib/tx/api.ts ***!
  \***********************/
/*! exports provided: transactionStatus, resumeTransaction, transactionExists, postToTransaction, introspect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionStatus", function() { return transactionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resumeTransaction", function() { return resumeTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionExists", function() { return transactionExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postToTransaction", function() { return postToTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspect", function() { return introspect; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http */ "./lib/http.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./lib/constants.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/tx/util.ts");
/* harmony import */ var _AuthTransaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthTransaction */ "./lib/tx/AuthTransaction.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

/* eslint-disable complexity, max-statements */






function transactionStatus(sdk, args) {
  args = Object(_util__WEBPACK_IMPORTED_MODULE_3__["addStateToken"])(sdk, args);
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn', args);
}

function resumeTransaction(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"]);

    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_1__["default"]('No transaction to resume'));
    }
  }

  return sdk.tx.status(args).then(function (res) {
    return new _AuthTransaction__WEBPACK_IMPORTED_MODULE_4__["AuthTransaction"](sdk, res);
  });
}

function introspect(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"]);

    if (stateToken) {
      args = {
        stateToken: stateToken
      };
    } else {
      return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_1__["default"]('No transaction to evaluate'));
    }
  }

  return transactionStep(sdk, args).then(function (res) {
    return new _AuthTransaction__WEBPACK_IMPORTED_MODULE_4__["AuthTransaction"](sdk, res);
  });
}

function transactionStep(sdk, args) {
  args = Object(_util__WEBPACK_IMPORTED_MODULE_3__["addStateToken"])(sdk, args); // v1 pipeline introspect API

  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(sdk, sdk.getIssuerOrigin() + '/api/v1/authn/introspect', args);
}

function transactionExists(sdk) {
  // We have a cookie state token
  return !!sdk.tx.exists._get(_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_TOKEN_KEY_NAME"]);
}

function postToTransaction(sdk, url, args, options) {
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(sdk, url, args, options).then(function (res) {
    return new _AuthTransaction__WEBPACK_IMPORTED_MODULE_4__["AuthTransaction"](sdk, res);
  });
}



/***/ }),

/***/ "./lib/tx/index.ts":
/*!*************************!*\
  !*** ./lib/tx/index.ts ***!
  \*************************/
/*! exports provided: transactionStatus, resumeTransaction, transactionExists, postToTransaction, introspect, AuthTransaction, getPollFn, TransactionState, addStateToken, getStateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/tx/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionStatus", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["transactionStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resumeTransaction", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["resumeTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionExists", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["transactionExists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postToTransaction", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["postToTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspect", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["introspect"]; });

/* harmony import */ var _AuthTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthTransaction */ "./lib/tx/AuthTransaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthTransaction", function() { return _AuthTransaction__WEBPACK_IMPORTED_MODULE_1__["AuthTransaction"]; });

/* harmony import */ var _poll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poll */ "./lib/tx/poll.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPollFn", function() { return _poll__WEBPACK_IMPORTED_MODULE_2__["getPollFn"]; });

/* harmony import */ var _TransactionState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionState */ "./lib/tx/TransactionState.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionState", function() { return _TransactionState__WEBPACK_IMPORTED_MODULE_3__["TransactionState"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./lib/tx/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addStateToken", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["addStateToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStateToken", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["getStateToken"]; });

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */






/***/ }),

/***/ "./lib/tx/poll.ts":
/*!************************!*\
  !*** ./lib/tx/poll.ts ***!
  \************************/
/*! exports provided: getPollFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPollFn", function() { return getPollFn; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http */ "./lib/http.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./lib/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./lib/constants.ts");
/* harmony import */ var _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/AuthSdkError */ "./lib/errors/AuthSdkError.ts");
/* harmony import */ var _errors_AuthPollStopError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/AuthPollStopError */ "./lib/errors/AuthPollStopError.ts");
/* harmony import */ var _AuthTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthTransaction */ "./lib/tx/AuthTransaction.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./lib/tx/util.ts");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */







function getPollFn(sdk, res, ref) {
  return function (options) {
    var delay;
    var rememberDevice;
    var autoPush;
    var transactionCallBack;

    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(options)) {
      delay = options;
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isObject"])(options)) {
      options = options;
      delay = options.delay;
      rememberDevice = options.rememberDevice;
      autoPush = options.autoPush;
      transactionCallBack = options.transactionCallBack;
    }

    if (!delay && delay !== 0) {
      delay = _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_POLLING_DELAY"];
    } // Get the poll function


    var pollLink = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getLink"])(res, 'next', 'poll'); // eslint-disable-next-line complexity

    function pollFn() {
      var opts = {};

      if (typeof autoPush === 'function') {
        try {
          opts.autoPush = !!autoPush();
        } catch (e) {
          return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('AutoPush resulted in an error.'));
        }
      } else if (autoPush !== undefined && autoPush !== null) {
        opts.autoPush = !!autoPush;
      }

      if (typeof rememberDevice === 'function') {
        try {
          opts.rememberDevice = !!rememberDevice();
        } catch (e) {
          return Promise.reject(new _errors_AuthSdkError__WEBPACK_IMPORTED_MODULE_3__["default"]('RememberDevice resulted in an error.'));
        }
      } else if (rememberDevice !== undefined && rememberDevice !== null) {
        opts.rememberDevice = !!rememberDevice;
      }

      var href = pollLink.href + Object(_util__WEBPACK_IMPORTED_MODULE_1__["toQueryString"])(opts);
      return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post(sdk, href, Object(_util__WEBPACK_IMPORTED_MODULE_6__["getStateToken"])(res), {
        saveAuthnState: false
      });
    }

    ref.isPolling = true;
    var retryCount = 0;

    var recursivePoll = function recursivePoll() {
      // If the poll was manually stopped during the delay
      if (!ref.isPolling) {
        return Promise.reject(new _errors_AuthPollStopError__WEBPACK_IMPORTED_MODULE_4__["default"]());
      }

      return pollFn().then(function (pollRes) {
        // Reset our retry counter on success
        retryCount = 0; // If we're still waiting

        if (pollRes.factorResult && pollRes.factorResult === 'WAITING') {
          // If the poll was manually stopped while the pollFn was called
          if (!ref.isPolling) {
            throw new _errors_AuthPollStopError__WEBPACK_IMPORTED_MODULE_4__["default"]();
          }

          if (typeof transactionCallBack === 'function') {
            transactionCallBack(pollRes);
          } // Continue poll


          return Object(_util__WEBPACK_IMPORTED_MODULE_1__["delay"])(delay).then(recursivePoll);
        } else {
          // Any non-waiting result, even if polling was stopped
          // during a request, will return
          ref.isPolling = false;
          return new _AuthTransaction__WEBPACK_IMPORTED_MODULE_5__["AuthTransaction"](sdk, pollRes);
        }
      }).catch(function (err) {
        // Exponential backoff, up to 16 seconds
        if (err.xhr && (err.xhr.status === 0 || err.xhr.status === 429) && retryCount <= 4) {
          var delayLength = Math.pow(2, retryCount) * 1000;
          retryCount++;
          return Object(_util__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayLength).then(recursivePoll);
        }

        throw err;
      });
    };

    return recursivePoll().catch(function (err) {
      ref.isPolling = false;
      throw err;
    });
  };
}

/***/ }),

/***/ "./lib/tx/util.ts":
/*!************************!*\
  !*** ./lib/tx/util.ts ***!
  \************************/
/*! exports provided: addStateToken, getStateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStateToken", function() { return addStateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateToken", function() { return getStateToken; });
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
function addStateToken(res, options) {
  var builtArgs = {};
  Object.assign(builtArgs, options); // Add the stateToken if one isn't passed and we have one

  if (!builtArgs.stateToken && res.stateToken) {
    builtArgs.stateToken = res.stateToken;
  }

  return builtArgs;
}
function getStateToken(res) {
  return addStateToken(res);
}

/***/ }),

/***/ "./lib/types/Cookies.ts":
/*!******************************!*\
  !*** ./lib/types/Cookies.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/JWT.ts":
/*!**************************!*\
  !*** ./lib/types/JWT.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/OAuth.ts":
/*!****************************!*\
  !*** ./lib/types/OAuth.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable camelcase */

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/OktaAuthOptions.ts":
/*!**************************************!*\
  !*** ./lib/types/OktaAuthOptions.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/Storage.ts":
/*!******************************!*\
  !*** ./lib/types/Storage.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
// type StorageBuilder = (storage: Storage | SimpleStorage, name: string) => StorageProvider;

/***/ }),

/***/ "./lib/types/Token.ts":
/*!****************************!*\
  !*** ./lib/types/Token.ts ***!
  \****************************/
/*! exports provided: isToken, isAccessToken, isIDToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToken", function() { return isToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAccessToken", function() { return isAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIDToken", function() { return isIDToken; });
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
function isToken(obj) {
  if (obj && (obj.accessToken || obj.idToken) && Array.isArray(obj.scopes)) {
    return true;
  }

  return false;
}
function isAccessToken(obj) {
  return obj && obj.accessToken;
}
function isIDToken(obj) {
  return obj && obj.idToken;
}

/***/ }),

/***/ "./lib/types/UserClaims.ts":
/*!*********************************!*\
  !*** ./lib/types/UserClaims.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/api.ts":
/*!**************************!*\
  !*** ./lib/types/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/***/ }),

/***/ "./lib/types/http.ts":
/*!***************************!*\
  !*** ./lib/types/http.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/types/index.ts":
/*!****************************!*\
  !*** ./lib/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/types/api.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cookies */ "./lib/types/Cookies.ts");
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Cookies__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Cookies__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./lib/types/http.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _JWT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JWT */ "./lib/types/JWT.ts");
/* harmony import */ var _JWT__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_JWT__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JWT__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JWT__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _OAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OAuth */ "./lib/types/OAuth.ts");
/* harmony import */ var _OAuth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_OAuth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _OAuth__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _OAuth__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _OktaAuthOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OktaAuthOptions */ "./lib/types/OktaAuthOptions.ts");
/* harmony import */ var _OktaAuthOptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OktaAuthOptions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _OktaAuthOptions__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _OktaAuthOptions__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Storage */ "./lib/types/Storage.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Storage__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Storage__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Token */ "./lib/types/Token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isToken", function() { return _Token__WEBPACK_IMPORTED_MODULE_7__["isToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAccessToken", function() { return _Token__WEBPACK_IMPORTED_MODULE_7__["isAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIDToken", function() { return _Token__WEBPACK_IMPORTED_MODULE_7__["isIDToken"]; });

/* harmony import */ var _UserClaims__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserClaims */ "./lib/types/UserClaims.ts");
/* harmony import */ var _UserClaims__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UserClaims__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _UserClaims__WEBPACK_IMPORTED_MODULE_8__) if(["isToken","isAccessToken","isIDToken","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _UserClaims__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */










/***/ }),

/***/ "./lib/util.ts":
/*!*********************!*\
  !*** ./lib/util.ts ***!
  \*********************/
/*! exports provided: stringToBase64Url, base64ToBase64Url, base64UrlToBase64, base64UrlToString, stringToBuffer, base64UrlDecode, bind, isAbsoluteUrl, isString, isObject, isNumber, isoToUTCString, toQueryString, genRandomString, extend, removeNils, clone, omit, find, getLink, getNativeConsole, getConsole, warn, deprecate, deprecateWrap, removeTrailingSlash, isIE11OrLess, isFunction, delay, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToBase64Url", function() { return stringToBase64Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToBase64Url", function() { return base64ToBase64Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64UrlToBase64", function() { return base64UrlToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64UrlToString", function() { return base64UrlToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToBuffer", function() { return stringToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64UrlDecode", function() { return base64UrlDecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsoluteUrl", function() { return isAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoToUTCString", function() { return isoToUTCString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return toQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genRandomString", function() { return genRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNils", function() { return removeNils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLink", function() { return getLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeConsole", function() { return getNativeConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsole", function() { return getConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateWrap", function() { return deprecateWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function() { return removeTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE11OrLess", function() { return isIE11OrLess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* global window, document, btoa, atob */
// converts a string to base64 (url/filename safe variant)
function stringToBase64Url(str) {
  var b64 = btoa(str);
  return base64ToBase64Url(b64);
} // converts a standard base64-encoded string to a "url/filename safe" variant

function base64ToBase64Url(b64) {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
} // converts a "url/filename safe" base64 string to a "standard" base64 string

function base64UrlToBase64(b64u) {
  return b64u.replace(/-/g, '+').replace(/_/g, '/');
}
function base64UrlToString(b64u) {
  var b64 = base64UrlToBase64(b64u);

  switch (b64.length % 4) {
    case 0:
      break;

    case 2:
      b64 += '==';
      break;

    case 3:
      b64 += '=';
      break;

    default:
      throw 'Not a valid Base64Url';
  }

  var utf8 = atob(b64);

  try {
    return decodeURIComponent(escape(utf8));
  } catch (e) {
    return utf8;
  }
}
function stringToBuffer(str) {
  var buffer = new Uint8Array(str.length);

  for (var i = 0; i < str.length; i++) {
    buffer[i] = str.charCodeAt(i);
  }

  return buffer;
}
function base64UrlDecode(str) {
  return atob(base64UrlToBase64(str));
}
function bind(fn, ctx) {
  var additionalArgs = Array.prototype.slice.call(arguments, 2);
  return function () {
    var args = Array.prototype.slice.call(arguments);
    args = additionalArgs.concat(args);
    return fn.apply(ctx, args);
  };
}
function isAbsoluteUrl(url) {
  return /^(?:[a-z]+:)?\/\//i.test(url);
}
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}
function isoToUTCString(str) {
  var parts = str.match(/\d+/g),
      isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]),
      isoDate = new Date(isoTime);
  return isoDate.toUTCString();
}
function toQueryString(obj) {
  var str = [];

  if (obj !== null) {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== null) {
        str.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }

  if (str.length) {
    return '?' + str.join('&');
  } else {
    return '';
  }
}
function genRandomString(length) {
  var randomCharset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var random = '';

  for (var c = 0, cl = randomCharset.length; c < length; ++c) {
    random += randomCharset[Math.floor(Math.random() * cl)];
  }

  return random;
} // TODO: replace all references with `Object.assign` then remove this function

function extend() {
  // First object will be modified!
  var obj1 = arguments[0]; // Properties from other objects will be copied over

  var objArray = [].slice.call(arguments, 1);
  objArray.forEach(function (obj) {
    for (var prop in obj) {
      // copy over all properties with defined values
      if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== undefined) {
        obj1[prop] = obj[prop];
      }
    }
  });
  return obj1; // return the modified object
}
function removeNils(obj) {
  var cleaned = {};

  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      var value = obj[prop];

      if (value !== null && value !== undefined) {
        cleaned[prop] = value;
      }
    }
  }

  return cleaned;
}
function clone(obj) {
  if (obj) {
    var str = JSON.stringify(obj);

    if (str) {
      return JSON.parse(str);
    }
  }

  return obj;
} // Analogous to _.omit

function omit(obj) {
  // var props = Array.prototype.slice.call(arguments, 1);
  var newobj = {};

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p) && props.indexOf(p) == -1) {
      newobj[p] = obj[p];
    }
  }

  return clone(newobj);
}
function find(collection, searchParams) {
  var c = collection.length;

  while (c--) {
    var item = collection[c];
    var found = true;

    for (var prop in searchParams) {
      if (!Object.prototype.hasOwnProperty.call(searchParams, prop)) {
        continue;
      }

      if (item[prop] !== searchParams[prop]) {
        found = false;
        break;
      }
    }

    if (found) {
      return item;
    }
  }
}
function getLink(obj, linkName, altName) {
  if (!obj || !obj._links) {
    return;
  }

  var link = clone(obj._links[linkName]); // If a link has a name and we have an altName, return if they match

  if (link && link.name && altName) {
    if (link.name === altName) {
      return link;
    }
  } else {
    return link;
  }
}
function getNativeConsole() {
  if (typeof window !== 'undefined') {
    return window.console;
  } else if (typeof console !== 'undefined') {
    return console;
  } else {
    return undefined;
  }
}
function getConsole() {
  var nativeConsole = getNativeConsole();

  if (nativeConsole && nativeConsole.log) {
    return nativeConsole;
  }

  return {
    log: function log() {}
  };
}
function warn(text) {
  /* eslint-disable no-console */
  getConsole().log('[okta-auth-sdk] WARN: ' + text);
  /* eslint-enable */
}
function deprecate(text) {
  /* eslint-disable no-console */
  getConsole().log('[okta-auth-sdk] DEPRECATION: ' + text);
  /* eslint-enable */
}
function deprecateWrap(text, fn) {
  return function () {
    deprecate(text);
    return fn.apply(null, arguments);
  };
}
function removeTrailingSlash(path) {
  if (!path) {
    return;
  } // Remove any whitespace before or after string


  var trimmed = path.replace(/^\s+|\s+$/gm, ''); // Remove trailing slash(es)

  trimmed = trimmed.replace(/\/+$/, '');
  return trimmed;
}
function isIE11OrLess() {
  return !!document.documentMode && document.documentMode <= 11;
}
function isFunction(fn) {
  return !!fn && {}.toString.call(fn) === '[object Function]';
}
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
function isPromise(obj) {
  return obj && obj.finally && typeof obj.finally === 'function';
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

var irrelevant = (function (exports) {
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill
exports = __self__.fetch // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers
exports.Request = __self__.Request
exports.Response = __self__.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Pa3RhQXV0aC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9Pa3RhQXV0aEJhc2UudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvUHJvbWlzZVF1ZXVlLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL1Rva2VuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9icm93c2VyL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvYnJvd3Nlci9icm93c2VyU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9icm93c2VyL2ZlYXR1cmVzLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL2Jyb3dzZXIvZmluZ2VycHJpbnQudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvYnJvd3Nlci9pbmRleC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9idWlsZGVyVXRpbC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9jbG9jay50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvY3J5cHRvLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL2Vycm9ycy9BdXRoQXBpRXJyb3IudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvZXJyb3JzL0F1dGhQb2xsU3RvcEVycm9yLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL2Vycm9ycy9BdXRoU2RrRXJyb3IudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvZXJyb3JzL0N1c3RvbUVycm9yLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL2Vycm9ycy9PQXV0aEVycm9yLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL2Vycm9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9mZXRjaC9mZXRjaFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvaHR0cC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9vYXV0aFV0aWwudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvcGtjZS50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi9zZXNzaW9uLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3N0b3JhZ2VCdWlsZGVyLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3Rva2VuLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3R4L0F1dGhUcmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi90eC9UcmFuc2FjdGlvblN0YXRlLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3R4L2FwaS50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi90eC9pbmRleC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi90eC9wb2xsLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3R4L3V0aWwudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvQ29va2llcy50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi90eXBlcy9KV1QudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvT0F1dGgudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvT2t0YUF1dGhPcHRpb25zLnRzIiwid2VicGFjazovL09rdGFBdXRoLy4vbGliL3R5cGVzL1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvVG9rZW4udHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvVXNlckNsYWltcy50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL2xpYi90eXBlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9saWIvdXRpbC50cyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL09rdGFBdXRoLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovL09rdGFBdXRoLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL09rdGFBdXRoLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Pa3RhQXV0aC8uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vT2t0YUF1dGgvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL09rdGFBdXRoLy4vbm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJPa3RhQXV0aEJhc2UiLCJhcmdzIiwiYXNzZXJ0VmFsaWRDb25maWciLCJvcHRpb25zIiwiaXNzdWVyIiwicmVtb3ZlVHJhaWxpbmdTbGFzaCIsImh0dHBSZXF1ZXN0Q2xpZW50IiwidHJhbnNmb3JtRXJyb3JYSFIiLCJzdG9yYWdlVXRpbCIsImhlYWRlcnMiLCJ0eCIsInN0YXR1cyIsInRyYW5zYWN0aW9uU3RhdHVzIiwiYmluZCIsInJlc3VtZSIsInJlc3VtZVRyYW5zYWN0aW9uIiwiZXhpc3RzIiwiT2JqZWN0IiwiYXNzaWduIiwidHJhbnNhY3Rpb25FeGlzdHMiLCJfZ2V0IiwibmFtZSIsInN0b3JhZ2UiLCJnZXQiLCJpbnRyb3NwZWN0Iiwib3B0cyIsInBvc3RUb1RyYW5zYWN0aW9uIiwic3BsaXQiLCJQcm9taXNlUXVldWUiLCJxdWV1ZSIsInJ1bm5pbmciLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm1ldGhvZCIsInRoaXNPYmplY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJydW4iLCJsZW5ndGgiLCJxdWV1ZUl0ZW0iLCJzaGlmdCIsInJlcyIsImFwcGx5IiwiaXNQcm9taXNlIiwidGhlbiIsImZpbmFsbHkiLCJERUZBVUxUX09QVElPTlMiLCJhdXRvUmVuZXciLCJleHBpcmVFYXJseVNlY29uZHMiLCJnZXRFeHBpcmVUaW1lIiwidG9rZW5NZ210UmVmIiwidG9rZW4iLCJleHBpcmVUaW1lIiwiZXhwaXJlc0F0IiwiaGFzRXhwaXJlZCIsImNsb2NrIiwibm93IiwiZW1pdEV4cGlyZWQiLCJrZXkiLCJlbWl0dGVyIiwiZW1pdCIsImVtaXRSZW1vdmVkIiwiZW1pdEVycm9yIiwiZXJyb3IiLCJjbGVhckV4cGlyZUV2ZW50VGltZW91dCIsImNsZWFyVGltZW91dCIsImV4cGlyZVRpbWVvdXRzIiwicmVuZXdQcm9taXNlIiwiY2xlYXJFeHBpcmVFdmVudFRpbWVvdXRBbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEV4cGlyZUV2ZW50VGltZW91dCIsInNkayIsImV4cGlyZUV2ZW50V2FpdCIsIk1hdGgiLCJtYXgiLCJleHBpcmVFdmVudFRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2V0RXhwaXJlRXZlbnRUaW1lb3V0QWxsIiwidG9rZW5TdG9yYWdlIiwiZ2V0U3RvcmFnZSIsImUiLCJhZGQiLCJpc09iamVjdCIsInNjb3BlcyIsImlzSURUb2tlbiIsImlzQWNjZXNzVG9rZW4iLCJBdXRoU2RrRXJyb3IiLCJzZXRTdG9yYWdlIiwiZ2V0QXN5bmMiLCJyZW1vdmUiLCJyZW5ldyIsImV4aXN0aW5nUHJvbWlzZSIsImZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImNhdGNoIiwiZXJyIiwidG9rZW5LZXkiLCJhY2Nlc3NUb2tlbiIsImNsZWFyIiwiY2xlYXJTdG9yYWdlIiwic2hvdWxkVGhyb3R0bGVSZW5ldyIsInJlbmV3VGltZVF1ZXVlIiwiRGF0ZSIsImZpcnN0VGltZSIsImxhc3RUaW1lIiwiVG9rZW5NYW5hZ2VyIiwicmVtb3ZlTmlscyIsImJyb3dzZXJIYXNMb2NhbFN0b3JhZ2UiLCJ3YXJuIiwiYnJvd3Nlckhhc1Nlc3Npb25TdG9yYWdlIiwic3RvcmFnZVByb3ZpZGVyIiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRDb29raWVTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ2YWx1ZSIsImtleXMiLCJmb3JFYWNoIiwiayIsImluZGV4T2YiLCJyZXBsYWNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImV4aXN0aW5nVmFsdWVzIiwic3RvcmFnZUtleSIsInZhbHVlVG9TdG9yZSIsImRlbGV0ZSIsImNvb2tpZXMiLCJnZXRJbk1lbW9yeVN0b3JhZ2UiLCJUT0tFTl9TVE9SQUdFX05BTUUiLCJzdG9yYWdlQnVpbGRlciIsIlNka0Nsb2NrIiwiY3JlYXRlIiwib24iLCJvZmYiLCJvblRva2VuRXhwaXJlZEhhbmRsZXIiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwiRW1pdHRlciIsInJlcXVpcmUiLCJPa3RhQXV0aEJyb3dzZXIiLCJmZXRjaFJlcXVlc3QiLCJicm93c2VyU3RvcmFnZSIsImNvb2tpZVNldHRpbmdzIiwic2VjdXJlIiwiaXNMb2NhbGhvc3QiLCJmZWF0dXJlcyIsImlzSFRUUFMiLCJzYW1lU2l0ZSIsImNvbnNvbGUiLCJjbGllbnRJZCIsImF1dGhvcml6ZVVybCIsInVzZXJpbmZvVXJsIiwidG9rZW5VcmwiLCJyZXZva2VVcmwiLCJsb2dvdXRVcmwiLCJwa2NlIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJyZXNwb25zZU1vZGUiLCJ1c2VyQWdlbnQiLCJnZXRVc2VyQWdlbnQiLCJTREtfVkVSU0lPTiIsIm1heENsb2NrU2tldyIsIkRFRkFVTFRfTUFYX0NMT0NLX1NLRVciLCJpZ25vcmVTaWduYXR1cmUiLCJzZXNzaW9uIiwiY2xvc2UiLCJjbG9zZVNlc3Npb24iLCJzZXNzaW9uRXhpc3RzIiwiZ2V0U2Vzc2lvbiIsInJlZnJlc2giLCJyZWZyZXNoU2Vzc2lvbiIsInNldENvb2tpZUFuZFJlZGlyZWN0IiwiX3Rva2VuUXVldWUiLCJnZXRXaXRob3V0UHJvbXB0IiwiZ2V0V2l0aFBvcHVwIiwiZ2V0V2l0aFJlZGlyZWN0IiwicGFyc2VGcm9tVXJsIiwiZGVjb2RlIiwiZGVjb2RlVG9rZW4iLCJyZXZva2UiLCJyZXZva2VUb2tlbiIsInJlbmV3VG9rZW4iLCJnZXRVc2VySW5mbyIsInZlcmlmeSIsInZlcmlmeVRva2VuIiwiaXNMb2dpblJlZGlyZWN0Iiwic3luY01ldGhvZHMiLCJfc2V0TG9jYXRpb24iLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIl9nZXRIaXN0b3J5IiwiaGlzdG9yeSIsIl9nZXRMb2NhdGlvbiIsIl9nZXREb2N1bWVudCIsImRvY3VtZW50IiwiZmluZ2VycHJpbnQiLCJ0b2tlbk1hbmFnZXIiLCJjbG9uZSIsIl9wb3N0VG9UcmFuc2FjdGlvbiIsInNlbmRGaW5nZXJwcmludCIsImVycm9yQ29kZSIsIkFDQ0VTU19UT0tFTl9TVE9SQUdFX0tFWSIsImRlZmF1bHRVcmkiLCJvcmlnaW4iLCJjdXJyZW50VXJpIiwiaHJlZiIsInJldm9rZUFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsImdldE9BdXRoVXJscyIsIklEX1RPS0VOX1NUT1JBR0VfS0VZIiwicmVsb2FkIiwic3RhdGUiLCJpZFRva2VuSGludCIsImxvZ291dFVyaSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvUXVlcnlTdHJpbmciLCJodHRwIiwiQ29va2llcyIsImdldExvY2FsU3RvcmFnZSIsInRlc3RTdG9yYWdlIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJnZXRQS0NFU3RvcmFnZSIsInByZWZlckxvY2FsU3RvcmFnZSIsIlBLQ0VfU1RPUkFHRV9OQU1FIiwiZ2V0SHR0cENhY2hlIiwiQ0FDSEVfU1RPUkFHRV9OQU1FIiwic2V0Iiwic3RvcmUiLCJyZW1vdmVJdGVtIiwiY29va2llT3B0aW9ucyIsInBhdGgiLCJleHBpcmVzIiwiaXNXaW5kb3dzUGhvbmUiLCJuYXZpZ2F0b3IiLCJpc0ZpbmdlcnByaW50U3VwcG9ydGVkIiwiYWdlbnQiLCJ0ZXN0IiwiaXNQb3B1cFBvc3RNZXNzYWdlU3VwcG9ydGVkIiwiaXNJRThvcjkiLCJkb2N1bWVudE1vZGUiLCJwb3N0TWVzc2FnZSIsImlzVG9rZW5WZXJpZnlTdXBwb3J0ZWQiLCJjcnlwdG8iLCJzdWJ0bGUiLCJVaW50OEFycmF5IiwiaGFzVGV4dEVuY29kZXIiLCJUZXh0RW5jb2RlciIsImlzUEtDRVN1cHBvcnRlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJ0aW1lb3V0IiwiaWZyYW1lIiwibGlzdGVuZXIiLCJwcm9taXNlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImdldElzc3Vlck9yaWdpbiIsIm1zZyIsInR5cGUiLCJzb3VyY2UiLCJhZGRMaXN0ZW5lciIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUxpc3RlbmVyIiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJpc1VybFJlZ2V4IiwiUmVnRXhwIiwidXNlckFnZW50VGVtcGxhdGVXaXRoTm9QbGFjZWhvbGRlciIsInRlbXBsYXRlIiwic2RrVmFsdWUiLCJsb2NhbE9mZnNldCIsInBhcnNlSW50IiwiU1RBVEVfVE9LRU5fS0VZX05BTUUiLCJERUZBVUxUX1BPTExJTkdfREVMQVkiLCJERUZBVUxUX0NBQ0hFX0RVUkFUSU9OIiwiUkVESVJFQ1RfT0FVVEhfUEFSQU1TX05BTUUiLCJSRURJUkVDVF9TVEFURV9DT09LSUVfTkFNRSIsIlJFRElSRUNUX05PTkNFX0NPT0tJRV9OQU1FIiwiZ2V0T2lkY0hhc2giLCJzdHIiLCJidWZmZXIiLCJlbmNvZGUiLCJkaWdlc3QiLCJhcnJheUJ1ZmZlciIsImludEJ1ZmZlciIsImZpcnN0SGFsZiIsImhhc2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiNjR1Iiwic3RyaW5nVG9CYXNlNjRVcmwiLCJmb3JtYXQiLCJhbGdvIiwiZXh0cmFjdGFibGUiLCJ1c2FnZXMiLCJ1c2UiLCJpbXBvcnRLZXkiLCJjcnlwdG9LZXkiLCJqd3QiLCJwYXlsb2FkIiwic3RyaW5nVG9CdWZmZXIiLCJiNjRTaWduYXR1cmUiLCJiYXNlNjRVcmxEZWNvZGUiLCJzaWduYXR1cmUiLCJBdXRoQXBpRXJyb3IiLCJ4aHIiLCJtZXNzYWdlIiwiZXJyb3JTdW1tYXJ5IiwiZXJyb3JMaW5rIiwiZXJyb3JJZCIsImVycm9yQ2F1c2VzIiwiQ3VzdG9tRXJyb3IiLCJBdXRoUG9sbFN0b3BFcnJvciIsInNldFByb3RvdHlwZU9mIiwiRXJyb3IiLCJPQXV0aEVycm9yIiwic3VtbWFyeSIsInJlYWREYXRhIiwicmVzcG9uc2UiLCJ0b0xvd2VyQ2FzZSIsImpzb24iLCJ0ZXh0IiwiZm9ybWF0UmVzdWx0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VKU09OIiwiY29udGVudFR5cGUiLCJmZXRjaFByb21pc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwid2l0aENyZWRlbnRpYWxzIiwib2siLCJodHRwUmVxdWVzdCIsInNhdmVBdXRoblN0YXRlIiwiaHR0cENhY2hlIiwiY2FjaGVSZXNwb25zZSIsImNhY2hlQ29udGVudHMiLCJjYWNoZWRSZXNwb25zZSIsImlzU3RyaW5nIiwiYWpheE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJyZXNwIiwic3RhdGVUb2tlbiIsInVwZGF0ZVN0b3JhZ2UiLCJmbG9vciIsInNlcnZlckVyciIsImlzQWJzb2x1dGVVcmwiLCJnZXRPcHRpb25zIiwicG9zdCIsInBvc3RPcHRpb25zIiwiZ2VuZXJhdGVTdGF0ZSIsImdlblJhbmRvbVN0cmluZyIsImdlbmVyYXRlTm9uY2UiLCJldmVudFRhcmdldCIsImZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwibG9hZEZyYW1lIiwibG9hZFBvcHVwIiwidGl0bGUiLCJwb3B1cFRpdGxlIiwiYXBwZWFyYW5jZSIsImlzSUUxMU9yTGVzcyIsIndpbkVsIiwib3BlbiIsImdldFdlbGxLbm93biIsImF1dGhTZXJ2ZXJVcmkiLCJnZXRLZXkiLCJraWQiLCJ3ZWxsS25vd24iLCJqd2tzVXJpIiwiY2FjaGVkS2V5IiwiZmluZCIsInZhbGlkYXRlQ2xhaW1zIiwiY2xhaW1zIiwidmFsaWRhdGlvblBhcmFtcyIsImF1ZCIsImlzcyIsIm5vbmNlIiwiaWF0IiwiZXhwIiwiYmFzZVVybCIsInVybFBhcmFtc1RvT2JqZWN0IiwiaGFzaE9yU2VhcmNoIiwicGx1czJzcGFjZSIsInBhcmFtU3BsaXQiLCJmcmFnbWVudCIsImNoYXJBdCIsInN1YnN0cmluZyIsIm9iaiIsInBhcmFtIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsImhhc1Rva2Vuc0luSGFzaCIsImhhc0NvZGVJblVybCIsImF1dGhQYXJhbXMiLCJzZWFyY2giLCJNSU5fVkVSSUZJRVJfTEVOR1RIIiwiTUFYX1ZFUklGSUVSX0xFTkdUSCIsIkRFRkFVTFRfQ09ERV9DSEFMTEVOR0VfTUVUSE9EIiwiZGVjMmhleCIsImRlYyIsInRvU3RyaW5nIiwic3Vic3RyIiwiZ2V0UmFuZG9tU3RyaW5nIiwiYSIsImNlaWwiLCJnZXRSYW5kb21WYWx1ZXMiLCJmcm9tIiwiam9pbiIsImdlbmVyYXRlVmVyaWZpZXIiLCJwcmVmaXgiLCJ2ZXJpZmllciIsInNhdmVNZXRhIiwibWV0YSIsImNvZGVWZXJpZmllciIsImNsZWFyTWV0YSIsImxvYWRNZXRhIiwiY29tcHV0ZUNoYWxsZW5nZSIsInZhbGlkYXRlT3B0aW9ucyIsImF1dGhvcml6YXRpb25Db2RlIiwiZ2V0UG9zdERhdGEiLCJwYXJhbXMiLCJnZXRUb2tlbiIsInVybHMiLCJvbWl0IiwiZ2V0TGluayIsInVzZXIiLCJzZXNzaW9uVG9rZW4iLCJyZWRpcmVjdFVybCIsImNoZWNrQWNjb3VudFNldHVwQ29tcGxldGUiLCJ3ZWJzdG9yYWdlIiwic3RvcmFnZU5hbWUiLCJzdG9yYWdlU3RyaW5nIiwidG9rZW5fdHlwZV9oaW50IiwiY3JlZHMiLCJidG9hIiwiZGVjb2RlZFRva2VuIiwiaGVhZGVyIiwiYmFzZTY0VXJsVG9TdHJpbmciLCJ2YWxpZGF0aW9uT3B0aW9ucyIsInNka0NyeXB0byIsInZhbGlkIiwiYXRfaGFzaCIsImFkZFBvc3RNZXNzYWdlTGlzdGVuZXIiLCJyZXNwb25zZUhhbmRsZXIiLCJ0aW1lb3V0SWQiLCJtc2dSZWNlaXZlZE9yVGltZW91dCIsImV4Y2hhbmdlQ29kZUZvclRva2VuIiwib2F1dGhQYXJhbXMiLCJQS0NFIiwiZ2V0VG9rZW5QYXJhbXMiLCJ2YWxpZGF0ZVJlc3BvbnNlIiwiaGFuZGxlT0F1dGhSZXNwb25zZSIsInRva2VuUGFyYW1zIiwiaXNBcnJheSIsImNvZGUiLCJ0b2tlbkRpY3QiLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwidG9rZW5UeXBlIiwidG9rZW5fdHlwZSIsImFjY2Vzc190b2tlbiIsImlkX3Rva2VuIiwiTnVtYmVyIiwiaWRUb2tlbk9iaiIsInRva2VucyIsImdldERlZmF1bHRUb2tlblBhcmFtcyIsImNvbnZlcnRUb2tlblBhcmFtc1RvT0F1dGhQYXJhbXMiLCJjb2RlQ2hhbGxlbmdlIiwiY29kZUNoYWxsZW5nZU1ldGhvZCIsImlkcCIsImlkcFNjb3BlIiwibG9naW5IaW50IiwibWF4QWdlIiwicHJvbXB0IiwibWF5QmVBcnJheSIsInNjb3BlIiwiYnVpbGRBdXRob3JpemVQYXJhbXMiLCJvYXV0aFF1ZXJ5UGFyYW1zIiwicHJlcGFyZVRva2VuUGFyYW1zIiwic2Vzc2lvblRva2VuT3ZlcnJpZGVzIiwiaWRwT3ZlcnJpZGVzIiwicmVxdWVzdFVybCIsImVuZHBvaW50IiwiZmxvd1R5cGUiLCJpZnJhbWVQcm9taXNlIiwiaWZyYW1lRWwiLCJvYXV0aFByb21pc2UiLCJ3aW5kb3dPcHRpb25zIiwid2luZG93RWwiLCJwb3B1cFByb21pc2UiLCJjbG9zZVBvbGxlciIsInNldEludGVydmFsIiwiY2xvc2VkIiwiY2xlYXJJbnRlcnZhbCIsImVycm9yTWVzc2FnZSIsIm1ldGhvZHMiLCJjbG9uZWRQYXJhbXMiLCJhZGRPQXV0aFBhcmFtc1RvU3RvcmFnZSIsInRva2VuUGFyYW1zU3RyIiwiaXNUb2tlbiIsInJlbW92ZUhhc2giLCJuYXRpdmVIaXN0b3J5IiwibmF0aXZlRG9jIiwibmF0aXZlTG9jIiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJyZW1vdmVTZWFyY2giLCJnZXRPQXV0aFBhcmFtc1N0ckZyb21TdG9yYWdlIiwib2F1dGhQYXJhbXNTdHIiLCJkZWZhdWx0UmVzcG9uc2VNb2RlIiwicGFyYW1TdHIiLCJhY2Nlc3NUb2tlbk9iamVjdCIsImlkVG9rZW5PYmplY3QiLCJ1c2VySW5mbyIsInN1YiIsImF1dGhlbnRpY2F0ZUhlYWRlciIsImlzRnVuY3Rpb24iLCJnZXRSZXNwb25zZUhlYWRlciIsImVycm9yTWF0Y2hlcyIsIm1hdGNoIiwiZXJyb3JEZXNjcmlwdGlvbk1hdGNoZXMiLCJlcnJvckRlc2NyaXB0aW9uIiwiQXV0aFRyYW5zYWN0aW9uIiwiZmxhdHRlbkVtYmVkZGVkIiwiX2xpbmtzIiwiY2FuY2VsIiwibGluazJmbiIsImxpbmsiLCJyZWYiLCJsayIsImhpbnRzIiwiYWxsb3ciLCJpc1BvbGxpbmciLCJhZGRTdGF0ZVRva2VuIiwiZmFjdG9yVHlwZSIsInByb3ZpZGVyIiwiYXV0b1B1c2giLCJyZW1lbWJlckRldmljZSIsInByb2ZpbGUiLCJ1cGRhdGVQaG9uZSIsImxpbmtzMmZucyIsImZucyIsImxpbmtOYW1lIiwicG9sbCIsImdldFBvbGxGbiIsIm9iakFyciIsIm8iLCJvbCIsImVtYmVkZGVkIiwiX2VtYmVkZGVkIiwiVHJhbnNhY3Rpb25TdGF0ZSIsInRyYW5zYWN0aW9uU3RlcCIsImRlbGF5IiwidHJhbnNhY3Rpb25DYWxsQmFjayIsImlzTnVtYmVyIiwicG9sbExpbmsiLCJwb2xsRm4iLCJnZXRTdGF0ZVRva2VuIiwicmV0cnlDb3VudCIsInJlY3Vyc2l2ZVBvbGwiLCJwb2xsUmVzIiwiZmFjdG9yUmVzdWx0IiwiZGVsYXlGbiIsImRlbGF5TGVuZ3RoIiwicG93IiwiYnVpbHRBcmdzIiwiYjY0IiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJiYXNlNjRVcmxUb0Jhc2U2NCIsInV0ZjgiLCJhdG9iIiwiZXNjYXBlIiwiaSIsImNoYXJDb2RlQXQiLCJjdHgiLCJhZGRpdGlvbmFsQXJncyIsImNvbmNhdCIsImlzb1RvVVRDU3RyaW5nIiwicGFydHMiLCJpc29UaW1lIiwiVVRDIiwiaXNvRGF0ZSIsInRvVVRDU3RyaW5nIiwicmFuZG9tQ2hhcnNldCIsInJhbmRvbSIsImMiLCJjbCIsImV4dGVuZCIsIm9iajEiLCJvYmpBcnJheSIsInByb3AiLCJjbGVhbmVkIiwibmV3b2JqIiwicHJvcHMiLCJwIiwiY29sbGVjdGlvbiIsInNlYXJjaFBhcmFtcyIsIml0ZW0iLCJmb3VuZCIsImFsdE5hbWUiLCJnZXROYXRpdmVDb25zb2xlIiwiZ2V0Q29uc29sZSIsIm5hdGl2ZUNvbnNvbGUiLCJsb2ciLCJkZXByZWNhdGUiLCJkZXByZWNhdGVXcmFwIiwidHJpbW1lZCIsIm1zIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHQUFHO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsS0FBSyxJQUEwQztBQUMvQyxFQUFFLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNqQjtBQUNBO0FBQ0EsS0FBSyxJQUEyQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0JBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELDZCQUE2QixFQUFFO0FBQy9COztBQUVBLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCLENBQUM7Ozs7Ozs7Ozs7OztBQ3BLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im9rdGEtYXV0aC1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2Jyb3dzZXIvaW5kZXgudHNcIik7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IGFzc2VydFZhbGlkQ29uZmlnIH0gZnJvbSAnLi9idWlsZGVyVXRpbCc7XG5pbXBvcnQgeyByZW1vdmVUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IHRyYW5zYWN0aW9uU3RhdHVzLCByZXN1bWVUcmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25FeGlzdHMsIGludHJvc3BlY3QsIHBvc3RUb1RyYW5zYWN0aW9uIH0gZnJvbSAnLi90eCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPa3RhQXV0aEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICAgICAgYXNzZXJ0VmFsaWRDb25maWcoYXJncyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGlzc3VlcjogcmVtb3ZlVHJhaWxpbmdTbGFzaChhcmdzLmlzc3VlciksXG4gICAgICAgICAgICBodHRwUmVxdWVzdENsaWVudDogYXJncy5odHRwUmVxdWVzdENsaWVudCxcbiAgICAgICAgICAgIHRyYW5zZm9ybUVycm9yWEhSOiBhcmdzLnRyYW5zZm9ybUVycm9yWEhSLFxuICAgICAgICAgICAgc3RvcmFnZVV0aWw6IGFyZ3Muc3RvcmFnZVV0aWwsXG4gICAgICAgICAgICBoZWFkZXJzOiBhcmdzLmhlYWRlcnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50eCA9IHtcbiAgICAgICAgICAgIHN0YXR1czogdHJhbnNhY3Rpb25TdGF0dXMuYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIHJlc3VtZTogcmVzdW1lVHJhbnNhY3Rpb24uYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIGV4aXN0czogT2JqZWN0LmFzc2lnbih0cmFuc2FjdGlvbkV4aXN0cy5iaW5kKG51bGwsIHRoaXMpLCB7XG4gICAgICAgICAgICAgICAgX2dldDogKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMub3B0aW9ucy5zdG9yYWdlVXRpbC5zdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbnRyb3NwZWN0OiBpbnRyb3NwZWN0LmJpbmQobnVsbCwgdGhpcylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8geyB1c2VybmFtZSwgcGFzc3dvcmQsIChyZWxheVN0YXRlKSwgKGNvbnRleHQpIH1cbiAgICBzaWduSW4ob3B0cykge1xuICAgICAgICByZXR1cm4gcG9zdFRvVHJhbnNhY3Rpb24odGhpcywgJy9hcGkvdjEvYXV0aG4nLCBvcHRzKTtcbiAgICB9XG4gICAgZ2V0SXNzdWVyT3JpZ2luKCkge1xuICAgICAgICAvLyBJbmZlciB0aGUgVVJMIGZyb20gdGhlIGlzc3VlciBVUkwsIG9taXR0aW5nIHRoZSAvb2F1dGgyL3thdXRoU2VydmVySWR9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNzdWVyLnNwbGl0KCcvb2F1dGgyLycpWzBdO1xuICAgIH1cbiAgICAvLyB7IHVzZXJuYW1lLCAocmVsYXlTdGF0ZSkgfVxuICAgIGZvcmdvdFBhc3N3b3JkKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHBvc3RUb1RyYW5zYWN0aW9uKHRoaXMsICcvYXBpL3YxL2F1dGhuL3JlY292ZXJ5L3Bhc3N3b3JkJywgb3B0cyk7XG4gICAgfVxuICAgIC8vIHsgdXNlcm5hbWUsIChyZWxheVN0YXRlKSB9XG4gICAgdW5sb2NrQWNjb3VudChvcHRzKSB7XG4gICAgICAgIHJldHVybiBwb3N0VG9UcmFuc2FjdGlvbih0aGlzLCAnL2FwaS92MS9hdXRobi9yZWNvdmVyeS91bmxvY2snLCBvcHRzKTtcbiAgICB9XG4gICAgLy8geyByZWNvdmVyeVRva2VuIH1cbiAgICB2ZXJpZnlSZWNvdmVyeVRva2VuKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHBvc3RUb1RyYW5zYWN0aW9uKHRoaXMsICcvYXBpL3YxL2F1dGhuL3JlY292ZXJ5L3Rva2VuJywgb3B0cyk7XG4gICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBJbXBsZW1lbnRzIGEgcXVldWUgZm9yIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cyBtZXRob2RzXG4vLyBNZXRob2RzIHdpbGwgYmUgd3JhcHBlZCBpbiBhIHByb21pc2UgYW5kIGV4ZWN1dGUgc2VxdWVudGlhbGx5XG4vLyBUaGlzIGNhbiBiZSB1c2VkIHRvIHByZXZlbnQgY29uY3VycmVudCBjYWxscyB0byBhIHNpbmdsZSBtZXRob2Qgb3IgYSBzZXQgb2YgbWV0aG9kc1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlsJztcbmNsYXNzIFByb21pc2VRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBwcm9taXNlXG4gICAgLy8gSWYgdGhlIG1ldGhvZCBpcyBzeW5jaHJvbm91cywgaXQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIG1ldGhvZCBjb21wbGV0ZXNcbiAgICAvLyBJZiB0aGUgbWV0aG9kIHJldHVybnMgYSBwcm9taXNlLCBpdCB3aWxsIHJlc29sdmUgKG9yIHJlamVjdCkgd2l0aCB0aGUgdmFsdWUgZnJvbSB0aGUgbWV0aG9kJ3MgcHJvbWlzZVxuICAgIHB1c2goIC8qIG1ldGhvZCwgdGhpc09iamVjdCwgYXJncy4uLiAqLykge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBtZXRob2QgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgdGhpc09iamVjdCA9IGFyZ3NbMV07XG4gICAgICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgdGhpc09iamVjdCxcbiAgICAgICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB2YXIgcXVldWVJdGVtID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICB2YXIgcmVzID0gcXVldWVJdGVtLm1ldGhvZC5hcHBseShxdWV1ZUl0ZW0udGhpc09iamVjdCwgcXVldWVJdGVtLmFyZ3MpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgICAgIHJlcy50aGVuKHF1ZXVlSXRlbS5yZXNvbHZlLCBxdWV1ZUl0ZW0ucmVqZWN0KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZUl0ZW0ucmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZVF1ZXVlO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuLyogZ2xvYmFsIGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UgKi9cbi8qIGVzbGludCBjb21wbGV4aXR5OlswLDhdIG1heC1zdGF0ZW1lbnRzOlswLDIxXSAqL1xuaW1wb3J0IHsgcmVtb3ZlTmlscywgd2FybiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IEF1dGhTZGtFcnJvciBmcm9tICcuL2Vycm9ycy9BdXRoU2RrRXJyb3InO1xuaW1wb3J0IHN0b3JhZ2VVdGlsIGZyb20gJy4vYnJvd3Nlci9icm93c2VyU3RvcmFnZSc7XG5pbXBvcnQgeyBUT0tFTl9TVE9SQUdFX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgc3RvcmFnZUJ1aWxkZXIgZnJvbSAnLi9zdG9yYWdlQnVpbGRlcic7XG5pbXBvcnQgU2RrQ2xvY2sgZnJvbSAnLi9jbG9jayc7XG5pbXBvcnQgeyBpc0lEVG9rZW4sIGlzQWNjZXNzVG9rZW4gfSBmcm9tICcuL3R5cGVzJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgYXV0b1JlbmV3OiB0cnVlLFxuICAgIHN0b3JhZ2U6ICdsb2NhbFN0b3JhZ2UnLFxuICAgIGV4cGlyZUVhcmx5U2Vjb25kczogMzBcbn07XG5mdW5jdGlvbiBnZXRFeHBpcmVUaW1lKHRva2VuTWdtdFJlZiwgdG9rZW4pIHtcbiAgICB2YXIgZXhwaXJlVGltZSA9IHRva2VuLmV4cGlyZXNBdCAtIHRva2VuTWdtdFJlZi5vcHRpb25zLmV4cGlyZUVhcmx5U2Vjb25kcztcbiAgICByZXR1cm4gZXhwaXJlVGltZTtcbn1cbmZ1bmN0aW9uIGhhc0V4cGlyZWQodG9rZW5NZ210UmVmLCB0b2tlbikge1xuICAgIHZhciBleHBpcmVUaW1lID0gZ2V0RXhwaXJlVGltZSh0b2tlbk1nbXRSZWYsIHRva2VuKTtcbiAgICByZXR1cm4gZXhwaXJlVGltZSA8PSB0b2tlbk1nbXRSZWYuY2xvY2subm93KCk7XG59XG5mdW5jdGlvbiBlbWl0RXhwaXJlZCh0b2tlbk1nbXRSZWYsIGtleSwgdG9rZW4pIHtcbiAgICB0b2tlbk1nbXRSZWYuZW1pdHRlci5lbWl0KCdleHBpcmVkJywga2V5LCB0b2tlbik7XG59XG5mdW5jdGlvbiBlbWl0UmVtb3ZlZCh0b2tlbk1nbXRSZWYsIGtleSkge1xuICAgIHRva2VuTWdtdFJlZi5lbWl0dGVyLmVtaXQoJ3JlbW92ZWQnLCBrZXkpO1xufVxuZnVuY3Rpb24gZW1pdEVycm9yKHRva2VuTWdtdFJlZiwgZXJyb3IpIHtcbiAgICB0b2tlbk1nbXRSZWYuZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycm9yKTtcbn1cbmZ1bmN0aW9uIGNsZWFyRXhwaXJlRXZlbnRUaW1lb3V0KHRva2VuTWdtdFJlZiwga2V5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRva2VuTWdtdFJlZi5leHBpcmVUaW1lb3V0c1trZXldKTtcbiAgICBkZWxldGUgdG9rZW5NZ210UmVmLmV4cGlyZVRpbWVvdXRzW2tleV07XG4gICAgLy8gUmVtb3ZlIHRoZSByZW5ldyBwcm9taXNlIChpZiBpdCBleGlzdHMpXG4gICAgZGVsZXRlIHRva2VuTWdtdFJlZi5yZW5ld1Byb21pc2Vba2V5XTtcbn1cbmZ1bmN0aW9uIGNsZWFyRXhwaXJlRXZlbnRUaW1lb3V0QWxsKHRva2VuTWdtdFJlZikge1xuICAgIHZhciBleHBpcmVUaW1lb3V0cyA9IHRva2VuTWdtdFJlZi5leHBpcmVUaW1lb3V0cztcbiAgICBmb3IgKHZhciBrZXkgaW4gZXhwaXJlVGltZW91dHMpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwaXJlVGltZW91dHMsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyRXhwaXJlRXZlbnRUaW1lb3V0KHRva2VuTWdtdFJlZiwga2V5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRFeHBpcmVFdmVudFRpbWVvdXQoc2RrLCB0b2tlbk1nbXRSZWYsIGtleSwgdG9rZW4pIHtcbiAgICB2YXIgZXhwaXJlVGltZSA9IGdldEV4cGlyZVRpbWUodG9rZW5NZ210UmVmLCB0b2tlbik7XG4gICAgdmFyIGV4cGlyZUV2ZW50V2FpdCA9IE1hdGgubWF4KGV4cGlyZVRpbWUgLSB0b2tlbk1nbXRSZWYuY2xvY2subm93KCksIDApICogMTAwMDtcbiAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dFxuICAgIGNsZWFyRXhwaXJlRXZlbnRUaW1lb3V0KHRva2VuTWdtdFJlZiwga2V5KTtcbiAgICB2YXIgZXhwaXJlRXZlbnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVtaXRFeHBpcmVkKHRva2VuTWdtdFJlZiwga2V5LCB0b2tlbik7XG4gICAgfSwgZXhwaXJlRXZlbnRXYWl0KTtcbiAgICAvLyBBZGQgYSBuZXcgdGltZW91dFxuICAgIHRva2VuTWdtdFJlZi5leHBpcmVUaW1lb3V0c1trZXldID0gZXhwaXJlRXZlbnRUaW1lb3V0O1xufVxuZnVuY3Rpb24gc2V0RXhwaXJlRXZlbnRUaW1lb3V0QWxsKHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHRva2VuU3RvcmFnZSA9IHN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBBbnkgZXJyb3JzIHRocm93biBvbiBpbnN0YW50aWF0aW9uIHdpbGwgbm90IGJlIGNhdWdodCxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzIHlldFxuICAgICAgICBlbWl0RXJyb3IodG9rZW5NZ210UmVmLCBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdG9rZW5TdG9yYWdlKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRva2VuU3RvcmFnZSwga2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5TdG9yYWdlW2tleV07XG4gICAgICAgIHNldEV4cGlyZUV2ZW50VGltZW91dChzZGssIHRva2VuTWdtdFJlZiwga2V5LCB0b2tlbik7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkKHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlLCBrZXksIHRva2VuKSB7XG4gICAgdmFyIHRva2VuU3RvcmFnZSA9IHN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgIGlmICghaXNPYmplY3QodG9rZW4pIHx8XG4gICAgICAgICF0b2tlbi5zY29wZXMgfHxcbiAgICAgICAgKCF0b2tlbi5leHBpcmVzQXQgJiYgdG9rZW4uZXhwaXJlc0F0ICE9PSAwKSB8fFxuICAgICAgICAoIWlzSURUb2tlbih0b2tlbikgJiYgIWlzQWNjZXNzVG9rZW4odG9rZW4pKSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdUb2tlbiBtdXN0IGJlIGFuIE9iamVjdCB3aXRoIHNjb3BlcywgZXhwaXJlc0F0LCBhbmQgYW4gaWRUb2tlbiBvciBhY2Nlc3NUb2tlbiBwcm9wZXJ0aWVzJyk7XG4gICAgfVxuICAgIHRva2VuU3RvcmFnZVtrZXldID0gdG9rZW47XG4gICAgc3RvcmFnZS5zZXRTdG9yYWdlKHRva2VuU3RvcmFnZSk7XG4gICAgc2V0RXhwaXJlRXZlbnRUaW1lb3V0KHNkaywgdG9rZW5NZ210UmVmLCBrZXksIHRva2VuKTtcbn1cbmZ1bmN0aW9uIGdldChzdG9yYWdlLCBrZXkpIHtcbiAgICB2YXIgdG9rZW5TdG9yYWdlID0gc3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRva2VuU3RvcmFnZVtrZXldO1xufVxuZnVuY3Rpb24gZ2V0QXN5bmMoc2RrLCB0b2tlbk1nbXRSZWYsIHN0b3JhZ2UsIGtleSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgdG9rZW4gPSBnZXQoc3RvcmFnZSwga2V5KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodG9rZW4pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVtb3ZlKHRva2VuTWdtdFJlZiwgc3RvcmFnZSwga2V5KSB7XG4gICAgLy8gQ2xlYXIgYW55IGxpc3RlbmVyIGZvciB0aGlzIHRva2VuXG4gICAgY2xlYXJFeHBpcmVFdmVudFRpbWVvdXQodG9rZW5NZ210UmVmLCBrZXkpO1xuICAgIC8vIFJlbW92ZSBpdCBmcm9tIHN0b3JhZ2VcbiAgICB2YXIgdG9rZW5TdG9yYWdlID0gc3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgZGVsZXRlIHRva2VuU3RvcmFnZVtrZXldO1xuICAgIHN0b3JhZ2Uuc2V0U3RvcmFnZSh0b2tlblN0b3JhZ2UpO1xuICAgIGVtaXRSZW1vdmVkKHRva2VuTWdtdFJlZiwga2V5KTtcbn1cbmZ1bmN0aW9uIHJlbmV3KHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlLCBrZXkpIHtcbiAgICAvLyBNdWx0aXBsZSBjYWxsZXJzIG1heSByZWNlaXZlIHRoZSBzYW1lIHByb21pc2UuIFRoZXkgd2lsbCBhbGwgcmVzb2x2ZSBvciByZWplY3QgZnJvbSB0aGUgc2FtZSByZXF1ZXN0LlxuICAgIHZhciBleGlzdGluZ1Byb21pc2UgPSB0b2tlbk1nbXRSZWYucmVuZXdQcm9taXNlW2tleV07XG4gICAgaWYgKGV4aXN0aW5nUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9taXNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgdG9rZW4gPSBnZXQoc3RvcmFnZSwga2V5KTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhlIHRva2VuTWFuYWdlciBoYXMgbm8gdG9rZW4gZm9yIHRoZSBrZXk6ICcgKyBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGF1dG9SZW5ldyB0aW1lb3V0IGZvciB0aGlzIGtleVxuICAgIGNsZWFyRXhwaXJlRXZlbnRUaW1lb3V0KHRva2VuTWdtdFJlZiwga2V5KTtcbiAgICAvLyBTdG9yZSB0aGUgcmVuZXcgcHJvbWlzZSBzdGF0ZSwgdG8gYXZvaWQgcmVuZXdpbmcgYWdhaW5cbiAgICB0b2tlbk1nbXRSZWYucmVuZXdQcm9taXNlW2tleV0gPSBzZGsudG9rZW4ucmVuZXcodG9rZW4pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChmcmVzaFRva2VuKSB7XG4gICAgICAgIHZhciBvbGRUb2tlbiA9IGdldChzdG9yYWdlLCBrZXkpO1xuICAgICAgICBpZiAoIW9sZFRva2VuKSB7XG4gICAgICAgICAgICAvLyBJdCBpcyBwb3NzaWJsZSB0byBlbnRlciBhIHN0YXRlIHdoZXJlIHRoZSB0b2tlbnMgaGF2ZSBiZWVuIGNsZWFyZWRcbiAgICAgICAgICAgIC8vIGFmdGVyIGEgcmVuZXdhbCByZXF1ZXN0IHdhcyB0cmlnZ2VyZWQuIFRvIGVuc3VyZSB3ZSBkbyBub3Qgc3RvcmUgYVxuICAgICAgICAgICAgLy8gcmVuZXdlZCB0b2tlbiwgd2UgdmVyaWZ5IHRoZSBwcm9taXNlIGtleSBkb2Vzbid0IGV4aXN0IGFuZCByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWRkKHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlLCBrZXksIGZyZXNoVG9rZW4pO1xuICAgICAgICB0b2tlbk1nbXRSZWYuZW1pdHRlci5lbWl0KCdyZW5ld2VkJywga2V5LCBmcmVzaFRva2VuLCBvbGRUb2tlbik7XG4gICAgICAgIHJldHVybiBmcmVzaFRva2VuO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ09BdXRoRXJyb3InIHx8IGVyci5uYW1lID09PSAnQXV0aFNka0Vycm9yJykge1xuICAgICAgICAgICAgcmVtb3ZlKHRva2VuTWdtdFJlZiwgc3RvcmFnZSwga2V5KTtcbiAgICAgICAgICAgIGVyci50b2tlbktleSA9IGtleTtcbiAgICAgICAgICAgIGVyci5hY2Nlc3NUb2tlbiA9ICEhdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5NZ210UmVmLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KVxuICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBwcm9taXNlIGtleVxuICAgICAgICBkZWxldGUgdG9rZW5NZ210UmVmLnJlbmV3UHJvbWlzZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b2tlbk1nbXRSZWYucmVuZXdQcm9taXNlW2tleV07XG59XG5mdW5jdGlvbiBjbGVhcih0b2tlbk1nbXRSZWYsIHN0b3JhZ2UpIHtcbiAgICBjbGVhckV4cGlyZUV2ZW50VGltZW91dEFsbCh0b2tlbk1nbXRSZWYpO1xuICAgIHN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiBzaG91bGRUaHJvdHRsZVJlbmV3KHJlbmV3VGltZVF1ZXVlKSB7XG4gICAgbGV0IHJlcyA9IGZhbHNlO1xuICAgIHJlbmV3VGltZVF1ZXVlLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgaWYgKHJlbmV3VGltZVF1ZXVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICAvLyBnZXQgYW5kIHJlbW92ZSBmaXJzdCBpdGVtIGZyb20gcXVldWVcbiAgICAgICAgY29uc3QgZmlyc3RUaW1lID0gcmVuZXdUaW1lUXVldWUuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgbGFzdFRpbWUgPSByZW5ld1RpbWVRdWV1ZVtyZW5ld1RpbWVRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgcmVzID0gbGFzdFRpbWUgLSBmaXJzdFRpbWUgPCAzMCAqIDEwMDA7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgY2xhc3MgVG9rZW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzZGssIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgcmVtb3ZlTmlscyhvcHRpb25zKSk7XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3JhZ2UgPT09ICdsb2NhbFN0b3JhZ2UnICYmICFzdG9yYWdlVXRpbC5icm93c2VySGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHdhcm4oJ1RoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UuIFN3aXRjaGluZyB0byBzZXNzaW9uU3RvcmFnZS4nKTtcbiAgICAgICAgICAgIG9wdGlvbnMuc3RvcmFnZSA9ICdzZXNzaW9uU3RvcmFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcmFnZSA9PT0gJ3Nlc3Npb25TdG9yYWdlJyAmJiAhc3RvcmFnZVV0aWwuYnJvd3Nlckhhc1Nlc3Npb25TdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHdhcm4oJ1RoaXMgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBzZXNzaW9uU3RvcmFnZS4gU3dpdGNoaW5nIHRvIGNvb2tpZS1iYXNlZCBzdG9yYWdlLicpO1xuICAgICAgICAgICAgb3B0aW9ucy5zdG9yYWdlID0gJ2Nvb2tpZSc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JhZ2VQcm92aWRlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnN0b3JhZ2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBBIGN1c3RvbSBzdG9yYWdlIHByb3ZpZGVyIG11c3QgaW1wbGVtZW50IGdldEl0ZW0oa2V5KSBhbmQgc2V0SXRlbShrZXksIHZhbClcbiAgICAgICAgICAgIHN0b3JhZ2VQcm92aWRlciA9IG9wdGlvbnMuc3RvcmFnZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVByb3ZpZGVyID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZXNzaW9uU3RvcmFnZSc6XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQcm92aWRlciA9IHNlc3Npb25TdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb29raWUnOlxuICAgICAgICAgICAgICAgICAgICAvLyBJbXBsZW1lbnQgY3VzdG9taXplZCBjb29raWUgc3RvcmFnZSB0byBtYWtlIHN1cmUgZWFjaCB0b2tlbiBpcyBzdG9yZWQgc2VwYXJhdGVkbHkgaW4gY29va2llXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQcm92aWRlciA9IChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2UgPSBzdG9yYWdlVXRpbC5nZXRDb29raWVTdG9yYWdlKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gc3RvcmFnZS5nZXRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsuaW5kZXhPZihrZXkpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbay5yZXBsYWNlKGAke2tleX1fYCwgJycpXSA9IEpTT04ucGFyc2UoZGF0YVtrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVmFsdWVzID0gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBrZXktdmFsdWUgcGFpcnMgZnJvbSBpbnB1dCB0byBjb29raWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBrZXkgKyAnXycgKyBrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9TdG9yZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB2YWx1ZVRvU3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV4aXN0aW5nVmFsdWVzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHVubWF0Y2hlZCBrZXlzIGZyb20gZXhpc3RpbmcgY29va2llc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhleGlzdGluZ1ZhbHVlcykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VVdGlsLnN0b3JhZ2UuZGVsZXRlKGtleSArICdfJyArIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KHNkay5vcHRpb25zLmNvb2tpZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVtb3J5JzpcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVByb3ZpZGVyID0gc3RvcmFnZVV0aWwuZ2V0SW5NZW1vcnlTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1VucmVjb2duaXplZCBzdG9yYWdlIG9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yYWdlS2V5ID0gb3B0aW9ucy5zdG9yYWdlS2V5IHx8IFRPS0VOX1NUT1JBR0VfTkFNRTtcbiAgICAgICAgdmFyIHN0b3JhZ2UgPSBzdG9yYWdlQnVpbGRlcihzdG9yYWdlUHJvdmlkZXIsIHN0b3JhZ2VLZXkpO1xuICAgICAgICB2YXIgY2xvY2sgPSBTZGtDbG9jay5jcmVhdGUoIC8qIHNkaywgb3B0aW9ucyAqLyk7XG4gICAgICAgIHZhciB0b2tlbk1nbXRSZWYgPSB7XG4gICAgICAgICAgICBjbG9jazogY2xvY2ssXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgZW1pdHRlcjogc2RrLmVtaXR0ZXIsXG4gICAgICAgICAgICBleHBpcmVUaW1lb3V0czoge30sXG4gICAgICAgICAgICByZW5ld1Byb21pc2U6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkID0gYWRkLmJpbmQodGhpcywgc2RrLCB0b2tlbk1nbXRSZWYsIHN0b3JhZ2UpO1xuICAgICAgICB0aGlzLmdldCA9IGdldEFzeW5jLmJpbmQodGhpcywgc2RrLCB0b2tlbk1nbXRSZWYsIHN0b3JhZ2UpO1xuICAgICAgICB0aGlzLnJlbW92ZSA9IHJlbW92ZS5iaW5kKHRoaXMsIHRva2VuTWdtdFJlZiwgc3RvcmFnZSk7XG4gICAgICAgIHRoaXMuY2xlYXIgPSBjbGVhci5iaW5kKHRoaXMsIHRva2VuTWdtdFJlZiwgc3RvcmFnZSk7XG4gICAgICAgIHRoaXMucmVuZXcgPSByZW5ldy5iaW5kKHRoaXMsIHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlKTtcbiAgICAgICAgdGhpcy5vbiA9IHRva2VuTWdtdFJlZi5lbWl0dGVyLm9uLmJpbmQodG9rZW5NZ210UmVmLmVtaXR0ZXIpO1xuICAgICAgICB0aGlzLm9mZiA9IHRva2VuTWdtdFJlZi5lbWl0dGVyLm9mZi5iaW5kKHRva2VuTWdtdFJlZi5lbWl0dGVyKTtcbiAgICAgICAgdGhpcy5oYXNFeHBpcmVkID0gaGFzRXhwaXJlZC5iaW5kKHRoaXMsIHRva2VuTWdtdFJlZik7XG4gICAgICAgIGNvbnN0IHJlbmV3VGltZVF1ZXVlID0gW107XG4gICAgICAgIGNvbnN0IG9uVG9rZW5FeHBpcmVkSGFuZGxlciA9IChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9SZW5ldykge1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRUaHJvdHRsZVJlbmV3KHJlbmV3VGltZVF1ZXVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBBdXRoU2RrRXJyb3IoJ1RvbyBtYW55IHRva2VuIHJlbmV3IHJlcXVlc3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtaXRFcnJvcih0b2tlbk1nbXRSZWYsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZXcoa2V5KS5jYXRjaCgoKSA9PiB7IH0pOyAvLyBSZW5ldyBlcnJvcnMgd2lsbCBlbWl0IGFuIFwiZXJyb3JcIiBldmVudCBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdleHBpcmVkJywgb25Ub2tlbkV4cGlyZWRIYW5kbGVyKTtcbiAgICAgICAgc2V0RXhwaXJlRXZlbnRUaW1lb3V0QWxsKHNkaywgdG9rZW5NZ210UmVmLCBzdG9yYWdlKTtcbiAgICB9XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG4vKiBTREtfVkVSU0lPTiBpcyBkZWZpbmVkIGluIHdlYnBhY2sgY29uZmlnICovXG4vKiBnbG9iYWwgU0RLX1ZFUlNJT04gKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IE9rdGFBdXRoQmFzZSBmcm9tICcuLi9Pa3RhQXV0aEJhc2UnO1xuaW1wb3J0ICogYXMgZmVhdHVyZXMgZnJvbSAnLi9mZWF0dXJlcyc7XG5pbXBvcnQgZmV0Y2hSZXF1ZXN0IGZyb20gJy4uL2ZldGNoL2ZldGNoUmVxdWVzdCc7XG5pbXBvcnQgYnJvd3NlclN0b3JhZ2UgZnJvbSAnLi9icm93c2VyU3RvcmFnZSc7XG5pbXBvcnQgeyByZW1vdmVUcmFpbGluZ1NsYXNoLCB0b1F1ZXJ5U3RyaW5nLCBjbG9uZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgZ2V0VXNlckFnZW50IH0gZnJvbSAnLi4vYnVpbGRlclV0aWwnO1xuaW1wb3J0IHsgREVGQVVMVF9NQVhfQ0xPQ0tfU0tFVywgQUNDRVNTX1RPS0VOX1NUT1JBR0VfS0VZLCBJRF9UT0tFTl9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjbG9zZVNlc3Npb24sIHNlc3Npb25FeGlzdHMsIGdldFNlc3Npb24sIHJlZnJlc2hTZXNzaW9uLCBzZXRDb29raWVBbmRSZWRpcmVjdCB9IGZyb20gJy4uL3Nlc3Npb24nO1xuaW1wb3J0IHsgZ2V0V2l0aG91dFByb21wdCwgZ2V0V2l0aFBvcHVwLCBnZXRXaXRoUmVkaXJlY3QsIHBhcnNlRnJvbVVybCwgZGVjb2RlVG9rZW4sIHJldm9rZVRva2VuLCByZW5ld1Rva2VuLCBnZXRVc2VySW5mbywgdmVyaWZ5VG9rZW4gfSBmcm9tICcuLi90b2tlbic7XG5pbXBvcnQgeyBUb2tlbk1hbmFnZXIgfSBmcm9tICcuLi9Ub2tlbk1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0T0F1dGhVcmxzLCBpc0xvZ2luUmVkaXJlY3QgfSBmcm9tICcuLi9vYXV0aFV0aWwnO1xuaW1wb3J0IGh0dHAgZnJvbSAnLi4vaHR0cCc7XG5pbXBvcnQgUHJvbWlzZVF1ZXVlIGZyb20gJy4uL1Byb21pc2VRdWV1ZSc7XG5pbXBvcnQgZmluZ2VycHJpbnQgZnJvbSAnLi9maW5nZXJwcmludCc7XG5pbXBvcnQgeyBwb3N0VG9UcmFuc2FjdGlvbiB9IGZyb20gJy4uL3R4JztcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbmNsYXNzIE9rdGFBdXRoQnJvd3NlciBleHRlbmRzIE9rdGFBdXRoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoYXJncykge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBodHRwUmVxdWVzdENsaWVudDogZmV0Y2hSZXF1ZXN0LFxuICAgICAgICAgICAgc3RvcmFnZVV0aWw6IGJyb3dzZXJTdG9yYWdlXG4gICAgICAgIH0sIGFyZ3MpO1xuICAgICAgICBzdXBlcihhcmdzKTtcbiAgICAgICAgdmFyIGNvb2tpZVNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBzZWN1cmU6IHRydWVcbiAgICAgICAgfSwgYXJncy5jb29raWVzKTtcbiAgICAgICAgdmFyIGlzTG9jYWxob3N0ID0gKHRoaXMuZmVhdHVyZXMuaXNMb2NhbGhvc3QoKSAmJiAhdGhpcy5mZWF0dXJlcy5pc0hUVFBTKCkpO1xuICAgICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcbiAgICAgICAgICAgIGNvb2tpZVNldHRpbmdzLnNlY3VyZSA9IGZhbHNlOyAvLyBGb3JjZSBzZWN1cmU9ZmFsc2UgaWYgcnVubmluZyBvbiBodHRwOi8vbG9jYWxob3N0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb29raWVTZXR0aW5ncy5zYW1lU2l0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIENocm9tZSA+PSA4MCB3aWxsIGJsb2NrIGNvb2tpZXMgd2l0aCBTYW1lU2l0ZT1Ob25lIHVubGVzcyB0aGV5IGFyZSBhbHNvIFNlY3VyZVxuICAgICAgICAgICAgY29va2llU2V0dGluZ3Muc2FtZVNpdGUgPSBjb29raWVTZXR0aW5ncy5zZWN1cmUgPyAnbm9uZScgOiAnbGF4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29va2llU2V0dGluZ3Muc2VjdXJlICYmICF0aGlzLmZlYXR1cmVzLmlzSFRUUFMoKSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGN1cnJlbnQgcGFnZSBpcyBub3QgYmVpbmcgc2VydmVkIHdpdGggdGhlIEhUVFBTIHByb3RvY29sLlxcbicgK1xuICAgICAgICAgICAgICAgICdGb3Igc2VjdXJpdHkgcmVhc29ucywgd2Ugc3Ryb25nbHkgcmVjb21tZW5kIHVzaW5nIEhUVFBTLlxcbicgK1xuICAgICAgICAgICAgICAgICdJZiB5b3UgY2Fubm90IHVzZSBIVFRQUywgc2V0IFwiY29va2llcy5zZWN1cmVcIiBvcHRpb24gdG8gZmFsc2UuJyk7XG4gICAgICAgICAgICBjb29raWVTZXR0aW5ncy5zZWN1cmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgY2xpZW50SWQ6IGFyZ3MuY2xpZW50SWQsXG4gICAgICAgICAgICBhdXRob3JpemVVcmw6IHJlbW92ZVRyYWlsaW5nU2xhc2goYXJncy5hdXRob3JpemVVcmwpLFxuICAgICAgICAgICAgdXNlcmluZm9Vcmw6IHJlbW92ZVRyYWlsaW5nU2xhc2goYXJncy51c2VyaW5mb1VybCksXG4gICAgICAgICAgICB0b2tlblVybDogcmVtb3ZlVHJhaWxpbmdTbGFzaChhcmdzLnRva2VuVXJsKSxcbiAgICAgICAgICAgIHJldm9rZVVybDogcmVtb3ZlVHJhaWxpbmdTbGFzaChhcmdzLnJldm9rZVVybCksXG4gICAgICAgICAgICBsb2dvdXRVcmw6IHJlbW92ZVRyYWlsaW5nU2xhc2goYXJncy5sb2dvdXRVcmwpLFxuICAgICAgICAgICAgcGtjZTogYXJncy5wa2NlID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBhcmdzLnJlZGlyZWN0VXJpLFxuICAgICAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiBhcmdzLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSxcbiAgICAgICAgICAgIHJlc3BvbnNlTW9kZTogYXJncy5yZXNwb25zZU1vZGUsXG4gICAgICAgICAgICBjb29raWVzOiBjb29raWVTZXR0aW5nc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VyQWdlbnQgPSBnZXRVc2VyQWdlbnQoYXJncywgYG9rdGEtYXV0aC1qcy8ke1NES19WRVJTSU9OfWApO1xuICAgICAgICAvLyBEaWdpdGFsIGNsb2NrcyB3aWxsIGRyaWZ0IG92ZXIgdGltZSwgc28gdGhlIHNlcnZlclxuICAgICAgICAvLyBjYW4gbWlzYWxpZ24gd2l0aCB0aGUgdGltZSByZXBvcnRlZCBieSB0aGUgYnJvd3Nlci5cbiAgICAgICAgLy8gVGhlIG1heENsb2NrU2tldyBhbGxvd3MgcmVsYXhpbmcgdGhlIHRpbWUtYmFzZWRcbiAgICAgICAgLy8gdmFsaWRhdGlvbiBvZiB0b2tlbnMgKGluIHNlY29uZHMsIG5vdCBtaWxsaXNlY29uZHMpLlxuICAgICAgICAvLyBJdCBjdXJyZW50bHkgZGVmYXVsdHMgdG8gMzAwLCBiZWNhdXNlIDUgbWluIGlzIHRoZVxuICAgICAgICAvLyBkZWZhdWx0IG1heGltdW0gdG9sZXJhbmNlIGFsbG93ZWQgYnkgS2VyYmVyb3MuXG4gICAgICAgIC8vIChodHRwczovL3RlY2huZXQubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2NjOTc2MzU3LmFzcHgpXG4gICAgICAgIGlmICghYXJncy5tYXhDbG9ja1NrZXcgJiYgYXJncy5tYXhDbG9ja1NrZXcgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhDbG9ja1NrZXcgPSBERUZBVUxUX01BWF9DTE9DS19TS0VXO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1heENsb2NrU2tldyA9IGFyZ3MubWF4Q2xvY2tTa2V3O1xuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgdGhlIGRldmVsb3BlciB0aGUgYWJpbGl0eSB0byBkaXNhYmxlIHRva2VuIHNpZ25hdHVyZVxuICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlU2lnbmF0dXJlID0gISFhcmdzLmlnbm9yZVNpZ25hdHVyZTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0ge1xuICAgICAgICAgICAgY2xvc2U6IGNsb3NlU2Vzc2lvbi5iaW5kKG51bGwsIHRoaXMpLFxuICAgICAgICAgICAgZXhpc3RzOiBzZXNzaW9uRXhpc3RzLmJpbmQobnVsbCwgdGhpcyksXG4gICAgICAgICAgICBnZXQ6IGdldFNlc3Npb24uYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHJlZnJlc2hTZXNzaW9uLmJpbmQobnVsbCwgdGhpcyksXG4gICAgICAgICAgICBzZXRDb29raWVBbmRSZWRpcmVjdDogc2V0Q29va2llQW5kUmVkaXJlY3QuYmluZChudWxsLCB0aGlzKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl90b2tlblF1ZXVlID0gbmV3IFByb21pc2VRdWV1ZSgpO1xuICAgICAgICB0aGlzLnRva2VuID0ge1xuICAgICAgICAgICAgZ2V0V2l0aG91dFByb21wdDogZ2V0V2l0aG91dFByb21wdC5iaW5kKG51bGwsIHRoaXMpLFxuICAgICAgICAgICAgZ2V0V2l0aFBvcHVwOiBnZXRXaXRoUG9wdXAuYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIGdldFdpdGhSZWRpcmVjdDogZ2V0V2l0aFJlZGlyZWN0LmJpbmQobnVsbCwgdGhpcyksXG4gICAgICAgICAgICBwYXJzZUZyb21Vcmw6IHBhcnNlRnJvbVVybC5iaW5kKG51bGwsIHRoaXMpLFxuICAgICAgICAgICAgZGVjb2RlOiBkZWNvZGVUb2tlbixcbiAgICAgICAgICAgIHJldm9rZTogcmV2b2tlVG9rZW4uYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIHJlbmV3OiByZW5ld1Rva2VuLmJpbmQobnVsbCwgdGhpcyksXG4gICAgICAgICAgICBnZXRVc2VySW5mbzogZ2V0VXNlckluZm8uYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIHZlcmlmeTogdmVyaWZ5VG9rZW4uYmluZChudWxsLCB0aGlzKSxcbiAgICAgICAgICAgIGlzTG9naW5SZWRpcmVjdDogaXNMb2dpblJlZGlyZWN0LmJpbmQobnVsbCwgdGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV3JhcCBhbGwgYXN5bmMgdG9rZW4gQVBJIG1ldGhvZHMgdXNpbmcgTWV0aG9kUXVldWUgdG8gYXZvaWQgaXNzdWVzIHdpdGggY29uY3VycmVuY3lcbiAgICAgICAgY29uc3Qgc3luY01ldGhvZHMgPSBbJ2RlY29kZScsICdpc0xvZ2luUmVkaXJlY3QnXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy50b2tlbikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHN5bmNNZXRob2RzLmluZGV4T2Yoa2V5KSA+PSAwKSB7IC8vIHN5bmMgbWV0aG9kcyBzaG91bGQgbm90IGJlIHdyYXBwZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy50b2tlbltrZXldO1xuICAgICAgICAgICAgdGhpcy50b2tlbltrZXldID0gUHJvbWlzZVF1ZXVlLnByb3RvdHlwZS5wdXNoLmJpbmQodGhpcy5fdG9rZW5RdWV1ZSwgbWV0aG9kLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50b2tlbi5nZXRXaXRoUmVkaXJlY3QsIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwb3NlZCBzbyB3ZSBjYW4gc2V0IHdpbmRvdy5sb2NhdGlvbiBpbiBvdXIgdGVzdHNcbiAgICAgICAgICAgIF9zZXRMb2NhdGlvbjogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50b2tlbi5wYXJzZUZyb21VcmwsIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwb3NlZCBzbyB3ZSBjYW4gbW9jayBnZXR0aW5nIHdpbmRvdy5oaXN0b3J5IGluIG91ciB0ZXN0c1xuICAgICAgICAgICAgX2dldEhpc3Rvcnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBvc2VkIHNvIHdlIGNhbiBtb2NrIGdldHRpbmcgd2luZG93LmxvY2F0aW9uIGluIG91ciB0ZXN0c1xuICAgICAgICAgICAgX2dldExvY2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cG9zZWQgc28gd2UgY2FuIG1vY2sgZ2V0dGluZyB3aW5kb3cuZG9jdW1lbnQgaW4gb3VyIHRlc3RzXG4gICAgICAgICAgICBfZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmluZ2VycHJpbnQgQVBJXG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludC5iaW5kKG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgICAgICB0aGlzLnRva2VuTWFuYWdlciA9IG5ldyBUb2tlbk1hbmFnZXIodGhpcywgYXJncy50b2tlbk1hbmFnZXIpO1xuICAgIH1cbiAgICBzaWduSW4ob3B0cykge1xuICAgICAgICBvcHRzID0gY2xvbmUob3B0cyB8fCB7fSk7XG4gICAgICAgIGNvbnN0IF9wb3N0VG9UcmFuc2FjdGlvbiA9IChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgb3B0cy5zZW5kRmluZ2VycHJpbnQ7XG4gICAgICAgICAgICByZXR1cm4gcG9zdFRvVHJhbnNhY3Rpb24odGhpcywgJy9hcGkvdjEvYXV0aG4nLCBvcHRzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFvcHRzLnNlbmRGaW5nZXJwcmludCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wb3N0VG9UcmFuc2FjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmdlcnByaW50KClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChmaW5nZXJwcmludCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wb3N0VG9UcmFuc2FjdGlvbih7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnWC1EZXZpY2UtRmluZ2VycHJpbnQnOiBmaW5nZXJwcmludFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gRW5kcyB0aGUgY3VycmVudCBPa3RhIFNTTyBzZXNzaW9uIHdpdGhvdXQgcmVkaXJlY3RpbmcgdG8gT2t0YS5cbiAgICBjbG9zZVNlc3Npb24oKSB7XG4gICAgICAgIC8vIENsZWFyIGFsbCBsb2NhbCB0b2tlbnNcbiAgICAgICAgdGhpcy50b2tlbk1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbi5jbG9zZSgpIC8vIERFTEVURSAvYXBpL3YxL3Nlc3Npb25zL21lXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdBdXRoQXBpRXJyb3InICYmIGUuZXJyb3JDb2RlID09PSAnRTAwMDAwMDcnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2Vzc2lvbiBkb2VzIG5vdCBleGlzdCBvciBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXZva2VzIHRoZSBhY2Nlc3MgdG9rZW4gZm9yIHRoZSBhcHBsaWNhdGlvbiBzZXNzaW9uXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbiA9ICh5aWVsZCB0aGlzLnRva2VuTWFuYWdlci5nZXQoQUNDRVNTX1RPS0VOX1NUT1JBR0VfS0VZKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbk1hbmFnZXIucmVtb3ZlKEFDQ0VTU19UT0tFTl9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBY2Nlc3MgdG9rZW4gbWF5IGhhdmUgYmVlbiByZW1vdmVkLiBJbiB0aGlzIGNhc2UsIHdlIHdpbGwgc2lsZW50bHkgc3VjY2VlZC5cbiAgICAgICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbi5yZXZva2UoYWNjZXNzVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gUmV2b2tlcyBhY2Nlc3NUb2tlbiwgY2xlYXJzIGFsbCBsb2NhbCB0b2tlbnMsIHRoZW4gcmVkaXJlY3RzIHRvIE9rdGEgdG8gZW5kIHRoZSBTU08gc2Vzc2lvbi5cbiAgICBzaWduT3V0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIC8vIHBvc3RMb2dvdXRSZWRpcmVjdFVyaSBtdXN0IGJlIHdoaXRlbGlzdGVkIGluIE9rdGEgQWRtaW4gVUlcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VXJpID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VXJpID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICB2YXIgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gb3B0aW9ucy5wb3N0TG9nb3V0UmVkaXJlY3RVcmlcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMucG9zdExvZ291dFJlZGlyZWN0VXJpXG4gICAgICAgICAgICAgICAgfHwgZGVmYXVsdFVyaTtcbiAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IG9wdGlvbnMuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICB2YXIgcmV2b2tlQWNjZXNzVG9rZW4gPSBvcHRpb25zLnJldm9rZUFjY2Vzc1Rva2VuICE9PSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpZFRva2VuID0gb3B0aW9ucy5pZFRva2VuO1xuICAgICAgICAgICAgdmFyIGxvZ291dFVybCA9IGdldE9BdXRoVXJscyh0aGlzKS5sb2dvdXRVcmw7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkVG9rZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWRUb2tlbiA9IHlpZWxkIHRoaXMudG9rZW5NYW5hZ2VyLmdldChJRF9UT0tFTl9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV2b2tlQWNjZXNzVG9rZW4gJiYgdHlwZW9mIGFjY2Vzc1Rva2VuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuID0geWllbGQgdGhpcy50b2tlbk1hbmFnZXIuZ2V0KEFDQ0VTU19UT0tFTl9TVE9SQUdFX0tFWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhciBhbGwgbG9jYWwgdG9rZW5zXG4gICAgICAgICAgICB0aGlzLnRva2VuTWFuYWdlci5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHJldm9rZUFjY2Vzc1Rva2VuICYmIGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5yZXZva2VBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyBpZFRva2VuPyBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIHN0b3JhZ2Ugd2FzIGNsZWFyZWQuXG4gICAgICAgICAgICAvLyBGYWxsYmFjayB0byBYSFIgc2lnbk91dCwgdGhlbiBzaW11bGF0ZSBhIHJlZGlyZWN0IHRvIHRoZSBwb3N0IGxvZ291dCB1cmlcbiAgICAgICAgICAgIGlmICghaWRUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlU2Vzc2lvbigpIC8vIGNhbiB0aHJvdyBpZiB0aGUgdXNlciBjYW5ub3QgYmUgc2lnbmVkIG91dFxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3N0TG9nb3V0UmVkaXJlY3RVcmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgLy8gZm9yY2UgYSBoYXJkIHJlbG9hZCBpZiBVUkkgaXMgbm90IGNoYW5naW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxvZ291dCByZWRpcmVjdCB1c2luZyB0aGUgaWRUb2tlbi5cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgICAgICAgICB2YXIgaWRUb2tlbkhpbnQgPSBpZFRva2VuLmlkVG9rZW47IC8vIGEgc3RyaW5nXG4gICAgICAgICAgICB2YXIgbG9nb3V0VXJpID0gbG9nb3V0VXJsICsgJz9pZF90b2tlbl9oaW50PScgKyBlbmNvZGVVUklDb21wb25lbnQoaWRUb2tlbkhpbnQpICtcbiAgICAgICAgICAgICAgICAnJnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBvc3RMb2dvdXRSZWRpcmVjdFVyaSk7XG4gICAgICAgICAgICAvLyBTdGF0ZSBhbGxvd3Mgb3B0aW9uIHBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIGxvZ291dCByZWRpcmVjdCB1cmlcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGxvZ291dFVyaSArPSAnJnN0YXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihsb2dvdXRVcmkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2ViZmluZ2VyKG9wdHMpIHtcbiAgICAgICAgdmFyIHVybCA9ICcvLndlbGwta25vd24vd2ViZmluZ2VyJyArIHRvUXVlcnlTdHJpbmcob3B0cyk7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanJkK2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBodHRwLmdldCh0aGlzLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbn1cbi8vIEhvaXN0IGZlYXR1cmUgZGV0ZWN0aW9uIGZ1bmN0aW9ucyB0byBzdGF0aWMgdHlwZVxuT2t0YUF1dGhCcm93c2VyLmZlYXR1cmVzID0gT2t0YUF1dGhCcm93c2VyLnByb3RvdHlwZS5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuZXhwb3J0IGRlZmF1bHQgT2t0YUF1dGhCcm93c2VyO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuaW1wb3J0IHN0b3JhZ2VCdWlsZGVyIGZyb20gJy4uL3N0b3JhZ2VCdWlsZGVyJztcbmltcG9ydCB7IFBLQ0VfU1RPUkFHRV9OQU1FLCBDQUNIRV9TVE9SQUdFX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IEF1dGhTZGtFcnJvciBmcm9tICcuLi9lcnJvcnMvQXV0aFNka0Vycm9yJztcbmNvbnN0IENvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcbi8vIEJ1aWxkaW5nIHRoaXMgYXMgYW4gb2JqZWN0IGFsbG93cyB1cyB0byBtb2NrIHRoZSBmdW5jdGlvbnMgaW4gb3VyIHRlc3RzXG52YXIgc3RvcmFnZVV0aWwgPSB7XG4gICAgLy8gSUUxMSBidWcgdGhhdCBNaWNyb3NvZnQgZG9lc24ndCBwbGFuIHRvIGZpeFxuICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL0ZlZWRiYWNrL0RldGFpbHMvMTQ5NjA0MFxuICAgIGJyb3dzZXJIYXNMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlID0gc3RvcmFnZVV0aWwuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVV0aWwudGVzdFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYnJvd3Nlckhhc1Nlc3Npb25TdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3RvcmFnZSA9IHN0b3JhZ2VVdGlsLmdldFNlc3Npb25TdG9yYWdlKCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVV0aWwudGVzdFN0b3JhZ2Uoc3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UEtDRVN0b3JhZ2U6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMucHJlZmVyTG9jYWxTdG9yYWdlICYmIHN0b3JhZ2VVdGlsLmJyb3dzZXJIYXNTZXNzaW9uU3RvcmFnZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZUJ1aWxkZXIoc3RvcmFnZVV0aWwuZ2V0U2Vzc2lvblN0b3JhZ2UoKSwgUEtDRV9TVE9SQUdFX05BTUUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0b3JhZ2VVdGlsLmJyb3dzZXJIYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VCdWlsZGVyKHN0b3JhZ2VVdGlsLmdldExvY2FsU3RvcmFnZSgpLCBQS0NFX1NUT1JBR0VfTkFNRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZUJ1aWxkZXIoc3RvcmFnZVV0aWwuZ2V0Q29va2llU3RvcmFnZShvcHRpb25zKSwgUEtDRV9TVE9SQUdFX05BTUUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRIdHRwQ2FjaGU6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChzdG9yYWdlVXRpbC5icm93c2VySGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlQnVpbGRlcihzdG9yYWdlVXRpbC5nZXRMb2NhbFN0b3JhZ2UoKSwgQ0FDSEVfU1RPUkFHRV9OQU1FKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdG9yYWdlVXRpbC5icm93c2VySGFzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VCdWlsZGVyKHN0b3JhZ2VVdGlsLmdldFNlc3Npb25TdG9yYWdlKCksIENBQ0hFX1NUT1JBR0VfTkFNRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZUJ1aWxkZXIoc3RvcmFnZVV0aWwuZ2V0Q29va2llU3RvcmFnZShvcHRpb25zKSwgQ0FDSEVfU1RPUkFHRV9OQU1FKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XG4gICAgfSxcbiAgICBnZXRTZXNzaW9uU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2U7XG4gICAgfSxcbiAgICAvLyBQcm92aWRlcyB3ZWJTdG9yYWdlLWxpa2UgaW50ZXJmYWNlIGZvciBjb29raWVzXG4gICAgZ2V0Q29va2llU3RvcmFnZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2VjdXJlID0gb3B0aW9ucy5zZWN1cmU7XG4gICAgICAgIGNvbnN0IHNhbWVTaXRlID0gb3B0aW9ucy5zYW1lU2l0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWN1cmUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzYW1lU2l0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ2dldENvb2tpZVN0b3JhZ2U6IFwic2VjdXJlXCIgYW5kIFwic2FtZVNpdGVcIiBvcHRpb25zIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0SXRlbTogc3RvcmFnZVV0aWwuc3RvcmFnZS5nZXQsXG4gICAgICAgICAgICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENvb2tpZSBzaG91bGRuJ3QgZXhwaXJlXG4gICAgICAgICAgICAgICAgc3RvcmFnZVV0aWwuc3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSwgJzIyMDAtMDEtMDFUMDA6MDA6MDAuMDAwWicsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBzZWN1cmUsXG4gICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiBzYW1lU2l0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8gUHJvdmlkZXMgYW4gaW4tbWVtb3J5IHNvbHV0aW9uXG4gICAgZ2V0SW5NZW1vcnlTdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZVtrZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEl0ZW06IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgdGVzdFN0b3JhZ2U6IGZ1bmN0aW9uIChzdG9yYWdlKSB7XG4gICAgICAgIHZhciBrZXkgPSAnb2t0YS10ZXN0LXN0b3JhZ2UnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwga2V5KTtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3RvcmFnZToge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgZXhwaXJlc0F0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBzZWN1cmUgPSBvcHRpb25zLnNlY3VyZTtcbiAgICAgICAgICAgIGNvbnN0IHNhbWVTaXRlID0gb3B0aW9ucy5zYW1lU2l0ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VjdXJlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc2FtZVNpdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignc3RvcmFnZS5zZXQ6IFwic2VjdXJlXCIgYW5kIFwic2FtZVNpdGVcIiBvcHRpb25zIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb29raWVPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCAnLycsXG4gICAgICAgICAgICAgICAgc2VjdXJlLFxuICAgICAgICAgICAgICAgIHNhbWVTaXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLWJvb2xlYW4tY2FzdFxuICAgICAgICAgICAgaWYgKCEhKERhdGUucGFyc2UoZXhwaXJlc0F0KSkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHBpcmVzIHZhbHVlIGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBEYXRlIG9iamVjdC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSAnZXhwaXJlc0F0JyB2YWx1ZSBpcyBub3QgcHJvdmlkZWQsIG9yIHRoZSB2YWx1ZSBjYW5ub3QgYmVcbiAgICAgICAgICAgICAgICAvLyBwYXJzZWQgYXMgYSBEYXRlIG9iamVjdCwgdGhlIGNvb2tpZSB3aWxsIHNldCBhcyBhIHNlc3Npb24gY29va2llLlxuICAgICAgICAgICAgICAgIGNvb2tpZU9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKGV4cGlyZXNBdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb29raWVzLnNldChuYW1lLCB2YWx1ZSwgY29va2llT3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZVV0aWwuc3RvcmFnZS5nZXQobmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBDb29raWVzLmdldChuYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIENvb2tpZXMucmVtb3ZlKG5hbWUsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VVdGlsO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBpc1dpbmRvd3NQaG9uZSA9IC93aW5kb3dzIHBob25lfGllbW9iaWxlfHdwZGVza3RvcC9pO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJBZ2VudCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbmdlcnByaW50U3VwcG9ydGVkKCkge1xuICAgIGNvbnN0IGFnZW50ID0gZ2V0VXNlckFnZW50KCk7XG4gICAgcmV0dXJuIGFnZW50ICYmICFpc1dpbmRvd3NQaG9uZS50ZXN0KGFnZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BvcHVwUG9zdE1lc3NhZ2VTdXBwb3J0ZWQoKSB7XG4gICAgdmFyIGlzSUU4b3I5ID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDEwO1xuICAgIGlmICh3aW5kb3cucG9zdE1lc3NhZ2UgJiYgIWlzSUU4b3I5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlblZlcmlmeVN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnN1YnRsZSAmJiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaGFzVGV4dEVuY29kZXIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBUZXh0RW5jb2RlciAhPT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQS0NFU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBpc1Rva2VuVmVyaWZ5U3VwcG9ydGVkKCkgJiYgaGFzVGV4dEVuY29kZXIoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0hUVFBTKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxob3N0KCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnO1xufVxuIiwiaW1wb3J0IHsgQXV0aFNka0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IGlzRmluZ2VycHJpbnRTdXBwb3J0ZWQgfSBmcm9tICcuL2ZlYXR1cmVzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciB9IGZyb20gJy4uL29hdXRoVXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5nZXJwcmludChzZGssIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIWlzRmluZ2VycHJpbnRTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignRmluZ2VycHJpbnRpbmcgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGRldmljZScpKTtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgdmFyIGlmcmFtZTtcbiAgICB2YXIgbGlzdGVuZXI7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICAgICAgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihlKSB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUuZGF0YSB8fCBlLm9yaWdpbiAhPT0gc2RrLmdldElzc3Vlck9yaWdpbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGlmcmFtZSBtZXNzYWdlcyBzaG91bGQgYWxsIGJlIHBhcnNhYmxlXG4gICAgICAgICAgICAgICAgLy8gc2tpcCBub3QgcGFyc2FibGUgbWVzc2FnZXMgY29tZSBmcm9tIG90aGVyIHNvdXJjZXMgaW4gc2FtZSBvcmlnaW4gKGJyb3dzZXIgZXh0ZW5zaW9ucylcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgbmFtZXNwYWNlIGZsYWcgaW4gb2t0YS1jb3JlIHRvIGRpc3Rpbmd1aXNoIG1lc3NhZ2VzIHRoYXQgY29tZSBmcm9tIG90aGVyIHNvdXJjZXNcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1zZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ0ZpbmdlcnByaW50QXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG1zZy5maW5nZXJwcmludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdGaW5nZXJwcmludFNlcnZpY2VSZWFkeScpIHtcbiAgICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHZXRGaW5nZXJwcmludCdcbiAgICAgICAgICAgICAgICB9KSwgZS5vcmlnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhZGRMaXN0ZW5lcih3aW5kb3csICdtZXNzYWdlJywgbGlzdGVuZXIpO1xuICAgICAgICBpZnJhbWUuc3JjID0gc2RrLmdldElzc3Vlck9yaWdpbigpICsgJy9hdXRoL3NlcnZpY2VzL2RldmljZWZpbmdlcnByaW50JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEF1dGhTZGtFcnJvcignRmluZ2VycHJpbnRpbmcgdGltZWQgb3V0JykpO1xuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgfHwgMTUwMDApO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHdpbmRvdywgJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGlmcmFtZSkpIHtcbiAgICAgICAgICAgIGlmcmFtZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2t0YUF1dGggfSBmcm9tICcuL2Jyb3dzZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4uL3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4uL3R4JztcbmV4cG9ydCAqIGZyb20gJy4uL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuLi9Ub2tlbk1hbmFnZXInO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4vZXJyb3JzL0F1dGhTZGtFcnJvcic7XG4vLyBUT0RPOiB1c2UgQG9rdGEvY29uZmlndXJhdGlvbi12YWxpZGF0aW9uIChtb3ZlIG1vZHVsZSB0byB0aGlzIG1vbm9yZXBvPylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBhc3NlcnRWYWxpZENvbmZpZyhhcmdzKSB7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgdmFyIGlzc3VlciA9IGFyZ3MuaXNzdWVyO1xuICAgIGlmICghaXNzdWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ05vIGlzc3VlciBwYXNzZWQgdG8gY29uc3RydWN0b3IuICcgK1xuICAgICAgICAgICAgJ1JlcXVpcmVkIHVzYWdlOiBuZXcgT2t0YUF1dGgoe2lzc3VlcjogXCJodHRwczovL3t5b3VyT2t0YURvbWFpbn0uY29tL29hdXRoMi97YXV0aFNlcnZlcklkfVwifSknKTtcbiAgICB9XG4gICAgdmFyIGlzVXJsUmVnZXggPSBuZXcgUmVnRXhwKCdeaHR0cD9zPzovLy4rJyk7XG4gICAgaWYgKCFpc1VybFJlZ2V4LnRlc3QoYXJncy5pc3N1ZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ0lzc3VlciBtdXN0IGJlIGEgdmFsaWQgVVJMLiAnICtcbiAgICAgICAgICAgICdSZXF1aXJlZCB1c2FnZTogbmV3IE9rdGFBdXRoKHtpc3N1ZXI6IFwiaHR0cHM6Ly97eW91ck9rdGFEb21haW59LmNvbS9vYXV0aDIve2F1dGhTZXJ2ZXJJZH1cIn0pJyk7XG4gICAgfVxuICAgIGlmIChpc3N1ZXIuaW5kZXhPZignLWFkbWluLicpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdJc3N1ZXIgVVJMIHBhc3NlZCB0byBjb25zdHJ1Y3RvciBjb250YWlucyBcIi1hZG1pblwiIGluIHN1YmRvbWFpbi4gJyArXG4gICAgICAgICAgICAnUmVxdWlyZWQgdXNhZ2U6IG5ldyBPa3RhQXV0aCh7aXNzdWVyOiBcImh0dHBzOi8ve3lvdXJPa3RhRG9tYWlufS5jb219KScpO1xuICAgIH1cbiAgICB2YXIgdXNlckFnZW50ID0gYXJncy51c2VyQWdlbnQ7XG4gICAgdmFyIHVzZXJBZ2VudFRlbXBsYXRlV2l0aE5vUGxhY2Vob2xkZXIgPSB1c2VyQWdlbnQgJiYgdXNlckFnZW50LnRlbXBsYXRlICYmIHVzZXJBZ2VudC50ZW1wbGF0ZS5pbmRleE9mKCckT0tUQV9BVVRIX0pTJykgPT09IC0xO1xuICAgIGlmICh1c2VyQWdlbnRUZW1wbGF0ZVdpdGhOb1BsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1VzZXJBZ2VudFRlbXBsYXRlIG11c3QgaW5jbHVkZSBcIiRPS1RBX0FVVEhfSlNcIiBwbGFjZWhvbGRlci4gJyArXG4gICAgICAgICAgICAnUmVxdWlyZWQgdXNhZ2U6IG5ldyBPa3RhQXV0aCh7dXNlckFnZW50VGVtcGxhdGU6IFwieHh4ICRPS1RBX0FVVEhfSlMgeHh4XCJ9KScpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudChhcmdzLCBzZGtWYWx1ZSkge1xuICAgIHZhciB1c2VyQWdlbnQgPSBhcmdzLnVzZXJBZ2VudCB8fCB7fTtcbiAgICBpZiAodXNlckFnZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyQWdlbnQudmFsdWU7XG4gICAgfVxuICAgIGlmICh1c2VyQWdlbnQudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJBZ2VudC50ZW1wbGF0ZS5yZXBsYWNlKCckT0tUQV9BVVRIX0pTJywgc2RrVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc2RrVmFsdWU7XG59XG5leHBvcnQgeyBhc3NlcnRWYWxpZENvbmZpZywgZ2V0VXNlckFnZW50IH07XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNka0Nsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbE9mZnNldCkge1xuICAgICAgICAvLyBDYWxjdWxhdGVkIGxvY2FsIGNsb2NrIG9mZnNldCBmcm9tIHNlcnZlciB0aW1lIChpbiBtaWxsaXNlY29uZHMpLiBDYW4gYmUgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gICAgICAgIHRoaXMubG9jYWxPZmZzZXQgPSBwYXJzZUludChsb2NhbE9mZnNldCB8fCAwKTtcbiAgICB9XG4gICAgLy8gZmFjdG9yeSBtZXRob2QuIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGNsb2NrIGZyb20gY3VycmVudCBjb250ZXh0LlxuICAgIHN0YXRpYyBjcmVhdGUoIC8qIHNkaywgb3B0aW9ucyAqLykge1xuICAgICAgICAvLyBUT0RPOiBjYWxjdWxhdGUgbG9jYWxPZmZzZXRcbiAgICAgICAgdmFyIGxvY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIG5ldyBTZGtDbG9jayhsb2NhbE9mZnNldCk7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgY3VycmVudCB0aW1lIChpbiBzZWNvbmRzKVxuICAgIG5vdygpIHtcbiAgICAgICAgdmFyIG5vdyA9IChEYXRlLm5vdygpICsgdGhpcy5sb2NhbE9mZnNldCkgLyAxMDAwO1xuICAgICAgICByZXR1cm4gbm93O1xuICAgIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFX1RPS0VOX0tFWV9OQU1FID0gJ29rdGFTdGF0ZVRva2VuJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPTExJTkdfREVMQVkgPSA1MDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVhfQ0xPQ0tfU0tFVyA9IDMwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBQ0hFX0RVUkFUSU9OID0gODY0MDA7XG5leHBvcnQgY29uc3QgUkVESVJFQ1RfT0FVVEhfUEFSQU1TX05BTUUgPSAnb2t0YS1vYXV0aC1yZWRpcmVjdC1wYXJhbXMnO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX1NUQVRFX0NPT0tJRV9OQU1FID0gJ29rdGEtb2F1dGgtc3RhdGUnO1xuZXhwb3J0IGNvbnN0IFJFRElSRUNUX05PTkNFX0NPT0tJRV9OQU1FID0gJ29rdGEtb2F1dGgtbm9uY2UnO1xuZXhwb3J0IGNvbnN0IFRPS0VOX1NUT1JBR0VfTkFNRSA9ICdva3RhLXRva2VuLXN0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IENBQ0hFX1NUT1JBR0VfTkFNRSA9ICdva3RhLWNhY2hlLXN0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFBLQ0VfU1RPUkFHRV9OQU1FID0gJ29rdGEtcGtjZS1zdG9yYWdlJztcbmV4cG9ydCBjb25zdCBBQ0NFU1NfVE9LRU5fU1RPUkFHRV9LRVkgPSAnYWNjZXNzVG9rZW4nO1xuZXhwb3J0IGNvbnN0IElEX1RPS0VOX1NUT1JBR0VfS0VZID0gJ2lkVG9rZW4nO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiBnbG9iYWwgY3J5cHRvICovXG5pbXBvcnQgeyBzdHJpbmdUb0Jhc2U2NFVybCwgY2xvbmUsIHN0cmluZ1RvQnVmZmVyLCBiYXNlNjRVcmxEZWNvZGUgfSBmcm9tICcuL3V0aWwnO1xuZnVuY3Rpb24gZ2V0T2lkY0hhc2goc3RyKSB7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHIpO1xuICAgIHJldHVybiBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTI1NicsIGJ1ZmZlcikudGhlbihmdW5jdGlvbiAoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdmFyIGludEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICAgICAgdmFyIGZpcnN0SGFsZiA9IGludEJ1ZmZlci5zbGljZSgwLCAxNik7XG4gICAgICAgIHZhciBoYXNoID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBmaXJzdEhhbGYpO1xuICAgICAgICB2YXIgYjY0dSA9IHN0cmluZ1RvQmFzZTY0VXJsKGhhc2gpOyAvLyB1cmwtc2FmZSBiYXNlNjQgdmFyaWFudFxuICAgICAgICByZXR1cm4gYjY0dTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHZlcmlmeVRva2VuKGlkVG9rZW4sIGtleSkge1xuICAgIGtleSA9IGNsb25lKGtleSk7XG4gICAgdmFyIGZvcm1hdCA9ICdqd2snO1xuICAgIHZhciBhbGdvID0ge1xuICAgICAgICBuYW1lOiAnUlNBU1NBLVBLQ1MxLXYxXzUnLFxuICAgICAgICBoYXNoOiB7IG5hbWU6ICdTSEEtMjU2JyB9XG4gICAgfTtcbiAgICB2YXIgZXh0cmFjdGFibGUgPSB0cnVlO1xuICAgIHZhciB1c2FnZXMgPSBbJ3ZlcmlmeSddO1xuICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMjI0MjEwOC93ZWJjcnlwdG9hcGktaW1wb3J0aW5nLWp3ay13aXRoLXVzZS1maWVsZC1mYWlsc1xuICAgIC8vIFRoaXMgaXMgYSBtZXRhZGF0YSB0YWcgdGhhdCBzcGVjaWZpZXMgdGhlIGludGVudCBvZiBob3cgdGhlIGtleSBzaG91bGQgYmUgdXNlZC5cbiAgICAvLyBJdCdzIG5vdCBuZWNlc3NhcnkgdG8gcHJvcGVybHkgdmVyaWZ5IHRoZSBqd3QncyBzaWduYXR1cmUuXG4gICAgZGVsZXRlIGtleS51c2U7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBjcnlwdG8uc3VidGxlLmltcG9ydEtleShmb3JtYXQsIGtleSwgYWxnbywgZXh0cmFjdGFibGUsIHVzYWdlcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNyeXB0b0tleSkge1xuICAgICAgICB2YXIgand0ID0gaWRUb2tlbi5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgcGF5bG9hZCA9IHN0cmluZ1RvQnVmZmVyKGp3dFswXSArICcuJyArIGp3dFsxXSk7XG4gICAgICAgIHZhciBiNjRTaWduYXR1cmUgPSBiYXNlNjRVcmxEZWNvZGUoand0WzJdKTtcbiAgICAgICAgdmFyIHNpZ25hdHVyZSA9IHN0cmluZ1RvQnVmZmVyKGI2NFNpZ25hdHVyZSk7XG4gICAgICAgIHJldHVybiBjcnlwdG8uc3VidGxlLnZlcmlmeShhbGdvLCBjcnlwdG9LZXksIHNpZ25hdHVyZSwgcGF5bG9hZCk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBnZXRPaWRjSGFzaCwgdmVyaWZ5VG9rZW4gfTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4vQ3VzdG9tRXJyb3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aEFwaUVycm9yIGV4dGVuZHMgQ3VzdG9tRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVyciwgeGhyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIuZXJyb3JTdW1tYXJ5O1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0F1dGhBcGlFcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JTdW1tYXJ5ID0gZXJyLmVycm9yU3VtbWFyeTtcbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnIuZXJyb3JDb2RlO1xuICAgICAgICB0aGlzLmVycm9yTGluayA9IGVyci5lcnJvckxpbms7XG4gICAgICAgIHRoaXMuZXJyb3JJZCA9IGVyci5lcnJvcklkO1xuICAgICAgICB0aGlzLmVycm9yQ2F1c2VzID0gZXJyLmVycm9yQ2F1c2VzO1xuICAgICAgICBpZiAoeGhyKSB7XG4gICAgICAgICAgICB0aGlzLnhociA9IHhocjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4vQ3VzdG9tRXJyb3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFBvbGxTdG9wRXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnVGhlIHBvbGwgd2FzIHN0b3BwZWQgYnkgdGhlIHNkayc7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4vQ3VzdG9tRXJyb3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNka0Vycm9yIGV4dGVuZHMgQ3VzdG9tRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1zZywgeGhyKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBdXRoU2RrRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9yQ29kZSA9ICdJTlRFUk5BTCc7XG4gICAgICAgIHRoaXMuZXJyb3JTdW1tYXJ5ID0gbXNnO1xuICAgICAgICB0aGlzLmVycm9yTGluayA9ICdJTlRFUk5BTCc7XG4gICAgICAgIHRoaXMuZXJyb3JJZCA9ICdJTlRFUk5BTCc7XG4gICAgICAgIHRoaXMuZXJyb3JDYXVzZXMgPSBbXTtcbiAgICAgICAgaWYgKHhocikge1xuICAgICAgICAgICAgdGhpcy54aHIgPSB4aHI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDExMDIwNjAvdHlwZXNjcmlwdC1leHRlbmRpbmctZXJyb3ItY2xhc3NcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7IC8vICdFcnJvcicgYnJlYWtzIHByb3RvdHlwZSBjaGFpbiBoZXJlXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7IC8vIHJlc3RvcmUgcHJvdG90eXBlIGNoYWluXG4gICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi9DdXN0b21FcnJvcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPQXV0aEVycm9yIGV4dGVuZHMgQ3VzdG9tRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZSwgc3VtbWFyeSkge1xuICAgICAgICBzdXBlcihzdW1tYXJ5KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ09BdXRoRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvclN1bW1hcnkgPSBzdW1tYXJ5O1xuICAgIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IEF1dGhBcGlFcnJvciBmcm9tICcuL0F1dGhBcGlFcnJvcic7XG5pbXBvcnQgQXV0aFBvbGxTdG9wRXJyb3IgZnJvbSAnLi9BdXRoUG9sbFN0b3BFcnJvcic7XG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4vQXV0aFNka0Vycm9yJztcbmltcG9ydCBPQXV0aEVycm9yIGZyb20gJy4vT0F1dGhFcnJvcic7XG5leHBvcnQgeyBBdXRoQXBpRXJyb3IsIEF1dGhQb2xsU3RvcEVycm9yLCBBdXRoU2RrRXJyb3IsIE9BdXRoRXJyb3IgfTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcbmZ1bmN0aW9uIHJlYWREYXRhKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJlxuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPj0gMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAvLyBKU09OIHBhcnNlIGNhbiBmYWlsIGlmIHJlc3BvbnNlIGlzIG5vdCBhIHZhbGlkIG9iamVjdFxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICAgICAgICBlcnJvclN1bW1hcnk6ICdDb3VsZCBub3QgcGFyc2Ugc2VydmVyIHJlc3BvbnNlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdFJlc3VsdChzdGF0dXMsIGRhdGEpIHtcbiAgICBjb25zdCBpc09iamVjdCA9IHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JztcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dDogaXNPYmplY3QgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGEsXG4gICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgfTtcbiAgICBpZiAoaXNPYmplY3QpIHtcbiAgICAgICAgcmVzdWx0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgcmVzdWx0LnJlc3BvbnNlSlNPTiA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5mdW5jdGlvbiBmZXRjaFJlcXVlc3QobWV0aG9kLCB1cmwsIGFyZ3MpIHtcbiAgICB2YXIgYm9keSA9IGFyZ3MuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IGFyZ3MuaGVhZGVycyB8fCB7fTtcbiAgICB2YXIgY29udGVudFR5cGUgPSAoaGVhZGVyc1snQ29udGVudC1UeXBlJ10gfHwgaGVhZGVyc1snY29udGVudC10eXBlJ10gfHwgJycpO1xuICAgIC8vIEpTT04gZW5jb2RlIGJvZHkgKGlmIGFwcHJvcHJpYXRlKVxuICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nICYmIGJvZHkgJiYgdHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gICAgdmFyIGZldGNoUHJvbWlzZSA9IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogYXJncy5oZWFkZXJzLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICBjcmVkZW50aWFsczogYXJncy53aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnb21pdCdcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIGVycm9yID0gIXJlc3BvbnNlLm9rO1xuICAgICAgICB2YXIgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICByZXR1cm4gcmVhZERhdGEocmVzcG9uc2UpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRSZXN1bHQoc3RhdHVzLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvd2luZyByZXN1bHQgb2JqZWN0IHNpbmNlIGVycm9yIGhhbmRsaW5nIGlzIGRvbmUgaW4gaHR0cC5qc1xuICAgICAgICAgICAgICAgIHRocm93IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmZXRjaFByb21pc2U7XG59XG5leHBvcnQgZGVmYXVsdCBmZXRjaFJlcXVlc3Q7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5pbXBvcnQgeyBpc1N0cmluZywgY2xvbmUsIGlzQWJzb2x1dGVVcmwsIHJlbW92ZU5pbHMgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IEF1dGhBcGlFcnJvciBmcm9tICcuL2Vycm9ycy9BdXRoQXBpRXJyb3InO1xuaW1wb3J0IHsgU1RBVEVfVE9LRU5fS0VZX05BTUUsIERFRkFVTFRfQ0FDSEVfRFVSQVRJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5mdW5jdGlvbiBodHRwUmVxdWVzdChzZGssIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgdXJsID0gb3B0aW9ucy51cmwsIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kLCBhcmdzID0gb3B0aW9ucy5hcmdzLCBzYXZlQXV0aG5TdGF0ZSA9IG9wdGlvbnMuc2F2ZUF1dGhuU3RhdGUsIGFjY2Vzc1Rva2VuID0gb3B0aW9ucy5hY2Nlc3NUb2tlbiwgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgIT09IGZhbHNlLCAvLyBkZWZhdWx0IHZhbHVlIGlzIHRydWVcbiAgICBzdG9yYWdlVXRpbCA9IHNkay5vcHRpb25zLnN0b3JhZ2VVdGlsLCBzdG9yYWdlID0gc3RvcmFnZVV0aWwuc3RvcmFnZSwgaHR0cENhY2hlID0gc3RvcmFnZVV0aWwuZ2V0SHR0cENhY2hlKHNkay5vcHRpb25zLmNvb2tpZXMpO1xuICAgIGlmIChvcHRpb25zLmNhY2hlUmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIGNhY2hlQ29udGVudHMgPSBodHRwQ2FjaGUuZ2V0U3RvcmFnZSgpO1xuICAgICAgICB2YXIgY2FjaGVkUmVzcG9uc2UgPSBjYWNoZUNvbnRlbnRzW3VybF07XG4gICAgICAgIGlmIChjYWNoZWRSZXNwb25zZSAmJiBEYXRlLm5vdygpIC8gMTAwMCA8IGNhY2hlZFJlc3BvbnNlLmV4cGlyZXNBdCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGhlYWRlcnMgPSB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdYLU9rdGEtVXNlci1BZ2VudC1FeHRlbmRlZCc6IHNkay51c2VyQWdlbnRcbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24oaGVhZGVycywgc2RrLm9wdGlvbnMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICBoZWFkZXJzID0gcmVtb3ZlTmlscyhoZWFkZXJzKTtcbiAgICBpZiAoYWNjZXNzVG9rZW4gJiYgaXNTdHJpbmcoYWNjZXNzVG9rZW4pKSB7XG4gICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgICB2YXIgYWpheE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGRhdGE6IGFyZ3MgfHwgdW5kZWZpbmVkLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFsc1xuICAgIH07XG4gICAgdmFyIGVyciwgcmVzO1xuICAgIHJldHVybiBzZGsub3B0aW9ucy5odHRwUmVxdWVzdENsaWVudChtZXRob2QsIHVybCwgYWpheE9wdGlvbnMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHJlcyA9IHJlc3AucmVzcG9uc2VUZXh0O1xuICAgICAgICBpZiAocmVzICYmIGlzU3RyaW5nKHJlcykpIHtcbiAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2F2ZUF1dGhuU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghcmVzLnN0YXRlVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmRlbGV0ZShTVEFURV9UT0tFTl9LRVlfTkFNRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcyAmJiByZXMuc3RhdGVUb2tlbiAmJiByZXMuZXhwaXJlc0F0KSB7XG4gICAgICAgICAgICBzdG9yYWdlLnNldChTVEFURV9UT0tFTl9LRVlfTkFNRSwgcmVzLnN0YXRlVG9rZW4sIHJlcy5leHBpcmVzQXQsIHNkay5vcHRpb25zLmNvb2tpZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMgJiYgb3B0aW9ucy5jYWNoZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICBodHRwQ2FjaGUudXBkYXRlU3RvcmFnZSh1cmwsIHtcbiAgICAgICAgICAgICAgICBleHBpcmVzQXQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApICsgREVGQVVMVF9DQUNIRV9EVVJBVElPTixcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICB2YXIgc2VydmVyRXJyID0gcmVzcC5yZXNwb25zZVRleHQgfHwge307XG4gICAgICAgIGlmIChpc1N0cmluZyhzZXJ2ZXJFcnIpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlcnZlckVyciA9IEpTT04ucGFyc2Uoc2VydmVyRXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2VydmVyRXJyID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclN1bW1hcnk6ICdVbmtub3duIGVycm9yJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgc2VydmVyRXJyLmVycm9yU3VtbWFyeSA9ICdVbmtub3duIGVycm9yJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2RrLm9wdGlvbnMudHJhbnNmb3JtRXJyb3JYSFIpIHtcbiAgICAgICAgICAgIHJlc3AgPSBzZGsub3B0aW9ucy50cmFuc2Zvcm1FcnJvclhIUihjbG9uZShyZXNwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZXJyID0gbmV3IEF1dGhBcGlFcnJvcihzZXJ2ZXJFcnIsIHJlc3ApO1xuICAgICAgICBpZiAoZXJyLmVycm9yQ29kZSA9PT0gJ0UwMDAwMDExJykge1xuICAgICAgICAgICAgc3RvcmFnZS5kZWxldGUoU1RBVEVfVE9LRU5fS0VZX05BTUUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldChzZGssIHVybCwgb3B0aW9ucykge1xuICAgIHVybCA9IGlzQWJzb2x1dGVVcmwodXJsKSA/IHVybCA6IHNkay5nZXRJc3N1ZXJPcmlnaW4oKSArIHVybDtcbiAgICB2YXIgZ2V0T3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9O1xuICAgIE9iamVjdC5hc3NpZ24oZ2V0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGh0dHBSZXF1ZXN0KHNkaywgZ2V0T3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwb3N0KHNkaywgdXJsLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgdXJsID0gaXNBYnNvbHV0ZVVybCh1cmwpID8gdXJsIDogc2RrLmdldElzc3Vlck9yaWdpbigpICsgdXJsO1xuICAgIHZhciBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICBzYXZlQXV0aG5TdGF0ZTogdHJ1ZVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihwb3N0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGh0dHBSZXF1ZXN0KHNkaywgcG9zdE9wdGlvbnMpO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldDogZ2V0LFxuICAgIHBvc3Q6IHBvc3QsXG4gICAgaHR0cFJlcXVlc3Q6IGh0dHBSZXF1ZXN0XG59O1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHksIG1heC1zdGF0ZW1lbnRzICovXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IHsgZ2VuUmFuZG9tU3RyaW5nLCBpc0lFMTFPckxlc3MsIGZpbmQsIHJlbW92ZVRyYWlsaW5nU2xhc2ggfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHN0b3JhZ2VVdGlsIGZyb20gJy4vYnJvd3Nlci9icm93c2VyU3RvcmFnZSc7XG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4vZXJyb3JzL0F1dGhTZGtFcnJvcic7XG5mdW5jdGlvbiBnZW5lcmF0ZVN0YXRlKCkge1xuICAgIHJldHVybiBnZW5SYW5kb21TdHJpbmcoNjQpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVOb25jZSgpIHtcbiAgICByZXR1cm4gZ2VuUmFuZG9tU3RyaW5nKDY0KTtcbn1cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBuYW1lLCBmbikge1xuICAgIGlmIChldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnRUYXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudFRhcmdldCwgbmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZEZyYW1lKHNyYykge1xuICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZnJhbWUuc3JjID0gc3JjO1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG59XG5mdW5jdGlvbiBsb2FkUG9wdXAoc3JjLCBvcHRpb25zKSB7XG4gICAgdmFyIHRpdGxlID0gb3B0aW9ucy5wb3B1cFRpdGxlIHx8ICdFeHRlcm5hbCBJZGVudGl0eSBQcm92aWRlciBVc2VyIEF1dGhlbnRpY2F0aW9uJztcbiAgICB2YXIgYXBwZWFyYW5jZSA9ICd0b29sYmFyPW5vLCBzY3JvbGxiYXJzPXllcywgcmVzaXphYmxlPXllcywgJyArXG4gICAgICAgICd0b3A9MTAwLCBsZWZ0PTUwMCwgd2lkdGg9NjAwLCBoZWlnaHQ9NjAwJztcbiAgICBpZiAoaXNJRTExT3JMZXNzKCkpIHtcbiAgICAgICAgLy8gSUU8PTExIGRvZXNuJ3QgZnVsbHkgc3VwcG9ydCBwb3N0TWVzc2FnZSBhdCB0aW1lIG9mIHdyaXR0aW5nLlxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIHNpbXBsZSBzb2x1dGlvbiBoYXBwZW5lZCB0byBzb2x2ZSB0aGUgaXNzdWVcbiAgICAgICAgLy8gd2l0aG91dCBhZGRpbmcgYW5vdGhlciBwcm94eSBsYXllciB3aGljaCBtYWtlcyBmbG93IG1vcmUgY29tcGxlY2F0ZWQuXG4gICAgICAgIHZhciB3aW5FbCA9IHdpbmRvdy5vcGVuKCcvJywgdGl0bGUsIGFwcGVhcmFuY2UpO1xuICAgICAgICB3aW5FbC5sb2NhdGlvbi5ocmVmID0gc3JjO1xuICAgICAgICByZXR1cm4gd2luRWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93Lm9wZW4oc3JjLCB0aXRsZSwgYXBwZWFyYW5jZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0V2VsbEtub3duKHNkaywgaXNzdWVyKSB7XG4gICAgdmFyIGF1dGhTZXJ2ZXJVcmkgPSAoaXNzdWVyIHx8IHNkay5vcHRpb25zLmlzc3Vlcik7XG4gICAgcmV0dXJuIGh0dHAuZ2V0KHNkaywgYXV0aFNlcnZlclVyaSArICcvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nLCB7XG4gICAgICAgIGNhY2hlUmVzcG9uc2U6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEtleShzZGssIGlzc3Vlciwga2lkKSB7XG4gICAgdmFyIGh0dHBDYWNoZSA9IHN0b3JhZ2VVdGlsLmdldEh0dHBDYWNoZShzZGsub3B0aW9ucy5jb29raWVzKTtcbiAgICByZXR1cm4gZ2V0V2VsbEtub3duKHNkaywgaXNzdWVyKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAod2VsbEtub3duKSB7XG4gICAgICAgIHZhciBqd2tzVXJpID0gd2VsbEtub3duWydqd2tzX3VyaSddO1xuICAgICAgICAvLyBDaGVjayBvdXIga2lkIGFnYWluc3QgdGhlIGNhY2hlZCB2ZXJzaW9uIChpZiBpdCBleGlzdHMgYW5kIGlzbid0IGV4cGlyZWQpXG4gICAgICAgIHZhciBjYWNoZUNvbnRlbnRzID0gaHR0cENhY2hlLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgdmFyIGNhY2hlZFJlc3BvbnNlID0gY2FjaGVDb250ZW50c1tqd2tzVXJpXTtcbiAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlICYmIERhdGUubm93KCkgLyAxMDAwIDwgY2FjaGVkUmVzcG9uc2UuZXhwaXJlc0F0KSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkS2V5ID0gZmluZChjYWNoZWRSZXNwb25zZS5yZXNwb25zZS5rZXlzLCB7XG4gICAgICAgICAgICAgICAga2lkOiBraWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNhY2hlZEtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWRLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGNhY2hlIGZvciB0aGUga2V5XG4gICAgICAgIGh0dHBDYWNoZS5jbGVhclN0b3JhZ2Uoandrc1VyaSk7XG4gICAgICAgIC8vIFB1bGwgdGhlIGxhdGVzdCBrZXlzIGlmIHRoZSBrZXkgd2Fzbid0IGluIHRoZSBjYWNoZVxuICAgICAgICByZXR1cm4gaHR0cC5nZXQoc2RrLCBqd2tzVXJpLCB7XG4gICAgICAgICAgICBjYWNoZVJlc3BvbnNlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZmluZChyZXMua2V5cywge1xuICAgICAgICAgICAgICAgIGtpZDoga2lkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhlIGtleSBpZCwgJyArIGtpZCArICcsIHdhcyBub3QgZm91bmQgaW4gdGhlIHNlcnZlclxcJ3Mga2V5cycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlQ2xhaW1zKHNkaywgY2xhaW1zLCB2YWxpZGF0aW9uUGFyYW1zKSB7XG4gICAgdmFyIGF1ZCA9IHZhbGlkYXRpb25QYXJhbXMuY2xpZW50SWQ7XG4gICAgdmFyIGlzcyA9IHZhbGlkYXRpb25QYXJhbXMuaXNzdWVyO1xuICAgIHZhciBub25jZSA9IHZhbGlkYXRpb25QYXJhbXMubm9uY2U7XG4gICAgaWYgKCFjbGFpbXMgfHwgIWlzcyB8fCAhYXVkKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSBqd3QsIGlzcywgYW5kIGF1ZCBhcmd1bWVudHMgYXJlIGFsbCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBpZiAobm9uY2UgJiYgY2xhaW1zLm5vbmNlICE9PSBub25jZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdPQXV0aCBmbG93IHJlc3BvbnNlIG5vbmNlIGRvZXNuXFwndCBtYXRjaCByZXF1ZXN0IG5vbmNlJyk7XG4gICAgfVxuICAgIHZhciBub3cgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICBpZiAoY2xhaW1zLmlzcyAhPT0gaXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSBpc3N1ZXIgWycgKyBjbGFpbXMuaXNzICsgJ10gJyArXG4gICAgICAgICAgICAnZG9lcyBub3QgbWF0Y2ggWycgKyBpc3MgKyAnXScpO1xuICAgIH1cbiAgICBpZiAoY2xhaW1zLmF1ZCAhPT0gYXVkKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSBhdWRpZW5jZSBbJyArIGNsYWltcy5hdWQgKyAnXSAnICtcbiAgICAgICAgICAgICdkb2VzIG5vdCBtYXRjaCBbJyArIGF1ZCArICddJyk7XG4gICAgfVxuICAgIGlmIChjbGFpbXMuaWF0ID4gY2xhaW1zLmV4cCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdUaGUgSldUIGV4cGlyZWQgYmVmb3JlIGl0IHdhcyBpc3N1ZWQnKTtcbiAgICB9XG4gICAgaWYgKChub3cgLSBzZGsub3B0aW9ucy5tYXhDbG9ja1NrZXcpID4gY2xhaW1zLmV4cCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdUaGUgSldUIGV4cGlyZWQgYW5kIGlzIG5vIGxvbmdlciB2YWxpZCcpO1xuICAgIH1cbiAgICBpZiAoY2xhaW1zLmlhdCA+IChub3cgKyBzZGsub3B0aW9ucy5tYXhDbG9ja1NrZXcpKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSBKV1Qgd2FzIGlzc3VlZCBpbiB0aGUgZnV0dXJlJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0T0F1dGhVcmxzKHNkaywgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdBcyBvZiB2ZXJzaW9uIDMuMCwgXCJnZXRPQXV0aFVybHNcIiB0YWtlcyBvbmx5IGEgc2luZ2xlIHNldCBvZiBvcHRpb25zJyk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIC8vIEdldCB1c2VyLXN1cHBsaWVkIGFyZ3VtZW50c1xuICAgIHZhciBhdXRob3JpemVVcmwgPSByZW1vdmVUcmFpbGluZ1NsYXNoKG9wdGlvbnMuYXV0aG9yaXplVXJsKSB8fCBzZGsub3B0aW9ucy5hdXRob3JpemVVcmw7XG4gICAgdmFyIGlzc3VlciA9IHJlbW92ZVRyYWlsaW5nU2xhc2gob3B0aW9ucy5pc3N1ZXIpIHx8IHNkay5vcHRpb25zLmlzc3VlcjtcbiAgICB2YXIgdXNlcmluZm9VcmwgPSByZW1vdmVUcmFpbGluZ1NsYXNoKG9wdGlvbnMudXNlcmluZm9VcmwpIHx8IHNkay5vcHRpb25zLnVzZXJpbmZvVXJsO1xuICAgIHZhciB0b2tlblVybCA9IHJlbW92ZVRyYWlsaW5nU2xhc2gob3B0aW9ucy50b2tlblVybCkgfHwgc2RrLm9wdGlvbnMudG9rZW5Vcmw7XG4gICAgdmFyIGxvZ291dFVybCA9IHJlbW92ZVRyYWlsaW5nU2xhc2gob3B0aW9ucy5sb2dvdXRVcmwpIHx8IHNkay5vcHRpb25zLmxvZ291dFVybDtcbiAgICB2YXIgcmV2b2tlVXJsID0gcmVtb3ZlVHJhaWxpbmdTbGFzaChvcHRpb25zLnJldm9rZVVybCkgfHwgc2RrLm9wdGlvbnMucmV2b2tlVXJsO1xuICAgIHZhciBiYXNlVXJsID0gaXNzdWVyLmluZGV4T2YoJy9vYXV0aDInKSA+IDAgPyBpc3N1ZXIgOiBpc3N1ZXIgKyAnL29hdXRoMic7XG4gICAgYXV0aG9yaXplVXJsID0gYXV0aG9yaXplVXJsIHx8IGJhc2VVcmwgKyAnL3YxL2F1dGhvcml6ZSc7XG4gICAgdXNlcmluZm9VcmwgPSB1c2VyaW5mb1VybCB8fCBiYXNlVXJsICsgJy92MS91c2VyaW5mbyc7XG4gICAgdG9rZW5VcmwgPSB0b2tlblVybCB8fCBiYXNlVXJsICsgJy92MS90b2tlbic7XG4gICAgcmV2b2tlVXJsID0gcmV2b2tlVXJsIHx8IGJhc2VVcmwgKyAnL3YxL3Jldm9rZSc7XG4gICAgbG9nb3V0VXJsID0gbG9nb3V0VXJsIHx8IGJhc2VVcmwgKyAnL3YxL2xvZ291dCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNzdWVyOiBpc3N1ZXIsXG4gICAgICAgIGF1dGhvcml6ZVVybDogYXV0aG9yaXplVXJsLFxuICAgICAgICB1c2VyaW5mb1VybDogdXNlcmluZm9VcmwsXG4gICAgICAgIHRva2VuVXJsOiB0b2tlblVybCxcbiAgICAgICAgcmV2b2tlVXJsOiByZXZva2VVcmwsXG4gICAgICAgIGxvZ291dFVybDogbG9nb3V0VXJsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHVybFBhcmFtc1RvT2JqZWN0KGhhc2hPclNlYXJjaCkge1xuICAgIC8vIFByZWRlZmluZSByZWdleHMgZm9yIHBhcnNpbmcgaGFzaFxuICAgIHZhciBwbHVzMnNwYWNlID0gL1xcKy9nO1xuICAgIHZhciBwYXJhbVNwbGl0ID0gLyhbXiY9XSspPT8oW14mXSopL2c7XG4gICAgdmFyIGZyYWdtZW50ID0gaGFzaE9yU2VhcmNoO1xuICAgIC8vIFNvbWUgaGFzaCBiYXNlZCByb3V0ZXJzIHdpbGwgYXV0b21hdGljYWxseSBhZGQgYSAvIGNoYXJhY3RlciBhZnRlciB0aGUgaGFzaFxuICAgIGlmIChmcmFnbWVudC5jaGFyQXQoMCkgPT09ICcjJyAmJiBmcmFnbWVudC5jaGFyQXQoMSkgPT09ICcvJykge1xuICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50LnN1YnN0cmluZygyKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBsZWFkaW5nICMgb3IgP1xuICAgIGlmIChmcmFnbWVudC5jaGFyQXQoMCkgPT09ICcjJyB8fCBmcmFnbWVudC5jaGFyQXQoMCkgPT09ICc/Jykge1xuICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50LnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIC8vIExvb3AgdW50aWwgd2UgaGF2ZSBubyBtb3JlIHBhcmFtc1xuICAgIHZhciBwYXJhbTtcbiAgICB3aGlsZSAodHJ1ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICBwYXJhbSA9IHBhcmFtU3BsaXQuZXhlYyhmcmFnbWVudCk7XG4gICAgICAgIGlmICghcGFyYW0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXkgPSBwYXJhbVsxXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1bMl07XG4gICAgICAgIC8vIGlkX3Rva2VuIHNob3VsZCByZW1haW4gYmFzZTY0dXJsIGVuY29kZWRcbiAgICAgICAgaWYgKGtleSA9PT0gJ2lkX3Rva2VuJyB8fCBrZXkgPT09ICdhY2Nlc3NfdG9rZW4nIHx8IGtleSA9PT0gJ2NvZGUnKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUucmVwbGFjZShwbHVzMnNwYWNlLCAnICcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gaGFzVG9rZW5zSW5IYXNoKGhhc2gpIHtcbiAgICByZXR1cm4gLygoaWR8YWNjZXNzKV90b2tlbj0pL2kudGVzdChoYXNoKTtcbn1cbmZ1bmN0aW9uIGhhc0NvZGVJblVybChoYXNoT3JTZWFyY2gpIHtcbiAgICByZXR1cm4gLyhjb2RlPSkvaS50ZXN0KGhhc2hPclNlYXJjaCk7XG59XG4vKipcbiAqIENoZWNrIGlmIHRva2VucyBvciBhIGNvZGUgaGF2ZSBiZWVuIHBhc3NlZCBiYWNrIGludG8gdGhlIHVybCwgd2hpY2ggaGFwcGVucyBpblxuICogdGhlIHNvY2lhbCBhdXRoIElEUCByZWRpcmVjdCBmbG93LlxuICovXG5mdW5jdGlvbiBpc0xvZ2luUmVkaXJlY3Qoc2RrKSB7XG4gICAgdmFyIGF1dGhQYXJhbXMgPSBzZGsub3B0aW9ucztcbiAgICBpZiAoYXV0aFBhcmFtcy5wa2NlIHx8IGF1dGhQYXJhbXMucmVzcG9uc2VUeXBlID09PSAnY29kZScgfHwgYXV0aFBhcmFtcy5yZXNwb25zZU1vZGUgPT09ICdxdWVyeScpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgY29kZVxuICAgICAgICByZXR1cm4gYXV0aFBhcmFtcy5yZXNwb25zZU1vZGUgPT09ICdmcmFnbWVudCcgP1xuICAgICAgICAgICAgaGFzQ29kZUluVXJsKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA6XG4gICAgICAgICAgICBoYXNDb2RlSW5Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgfVxuICAgIC8vIExvb2sgZm9yIHRva2VucyAoSW1wbGljaXQgT0lEQyBmbG93KVxuICAgIHJldHVybiBoYXNUb2tlbnNJbkhhc2god2luZG93LmxvY2F0aW9uLmhhc2gpO1xufVxuZXhwb3J0IHsgZ2VuZXJhdGVTdGF0ZSwgZ2VuZXJhdGVOb25jZSwgZ2V0V2VsbEtub3duLCBnZXRLZXksIHZhbGlkYXRlQ2xhaW1zLCBnZXRPQXV0aFVybHMsIGxvYWRGcmFtZSwgbG9hZFBvcHVwLCB1cmxQYXJhbXNUb09iamVjdCwgaXNMb2dpblJlZGlyZWN0LCBhZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXIgfTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE5LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cbi8qIGdsb2JhbCBjcnlwdG8gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHksIG1heC1zdGF0ZW1lbnRzICovXG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4vZXJyb3JzL0F1dGhTZGtFcnJvcic7XG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IHsgd2Fybiwgc3RyaW5nVG9CYXNlNjRVcmwsIHJlbW92ZU5pbHMsIHRvUXVlcnlTdHJpbmcgfSBmcm9tICcuL3V0aWwnO1xuLy8gQ29kZSB2ZXJpZmllcjogUmFuZG9tIFVSTC1zYWZlIHN0cmluZyB3aXRoIGEgbWluaW11bSBsZW5ndGggb2YgNDMgY2hhcmFjdGVycy5cbi8vIENvZGUgY2hhbGxlbmdlOiBCYXNlNjQgVVJMLWVuY29kZWQgU0hBLTI1NiBoYXNoIG9mIHRoZSBjb2RlIHZlcmlmaWVyLlxudmFyIE1JTl9WRVJJRklFUl9MRU5HVEggPSA0MztcbnZhciBNQVhfVkVSSUZJRVJfTEVOR1RIID0gMTI4O1xudmFyIERFRkFVTFRfQ09ERV9DSEFMTEVOR0VfTUVUSE9EID0gJ1MyNTYnO1xuZnVuY3Rpb24gZGVjMmhleChkZWMpIHtcbiAgICByZXR1cm4gKCcwJyArIGRlYy50b1N0cmluZygxNikpLnN1YnN0cigtMik7XG59XG5mdW5jdGlvbiBnZXRSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgdmFyIGEgPSBuZXcgVWludDhBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gMikpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYSk7XG4gICAgdmFyIHN0ciA9IEFycmF5LmZyb20oYSwgZGVjMmhleCkuam9pbignJyk7XG4gICAgcmV0dXJuIHN0ci5zbGljZSgwLCBsZW5ndGgpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVWZXJpZmllcihwcmVmaXgpIHtcbiAgICB2YXIgdmVyaWZpZXIgPSBwcmVmaXggfHwgJyc7XG4gICAgaWYgKHZlcmlmaWVyLmxlbmd0aCA8IE1JTl9WRVJJRklFUl9MRU5HVEgpIHtcbiAgICAgICAgdmVyaWZpZXIgPSB2ZXJpZmllciArIGdldFJhbmRvbVN0cmluZyhNSU5fVkVSSUZJRVJfTEVOR1RIIC0gdmVyaWZpZXIubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2ZXJpZmllcikuc2xpY2UoMCwgTUFYX1ZFUklGSUVSX0xFTkdUSCk7XG59XG5mdW5jdGlvbiBnZXRTdG9yYWdlKHNkaywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBzZGsub3B0aW9ucy5jb29raWVzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc2RrLm9wdGlvbnMuc3RvcmFnZVV0aWwuZ2V0UEtDRVN0b3JhZ2Uob3B0aW9ucyk7XG59XG5mdW5jdGlvbiBzYXZlTWV0YShzZGssIG1ldGEpIHtcbiAgICAvLyBUaGVyZSBtdXN0IGJlIG9ubHkgb25lIFBLQ0UgZmxvdyBleGVjdXRpbmcgYXQgYSB0aW1lLlxuICAgIC8vIEJlZm9yZSBzYXZpbmcgbWV0YSwgY2hlY2sgdG8gc2VlIGlmIGEgY29kZVZlcmZpZXIgaXMgYWxyZWFkeSBzdG9yZWQuXG4gICAgdmFyIHN0b3JhZ2UgPSBnZXRTdG9yYWdlKHNkaywgeyBwcmVmZXJMb2NhbFN0b3JhZ2U6IHRydWUgfSk7XG4gICAgdmFyIG9iaiA9IHN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgIGlmIChvYmouY29kZVZlcmlmaWVyKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHdhcm4oJ3NhdmVNZXRhOiBQS0NFIGNvZGVWZXJpZmllciBleGlzdHMgaW4gbG9jYWxTdG9yYWdlLiBUaGlzIG1heSBpbmRpY2F0ZSBhbiBhdXRoIGZsb3cgaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy4nKTtcbiAgICB9XG4gICAgc3RvcmFnZSA9IGdldFN0b3JhZ2Uoc2RrKTtcbiAgICBvYmogPSBzdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICBpZiAob2JqLmNvZGVWZXJpZmllcikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB3YXJuKCdzYXZlTWV0YTogUEtDRSBjb2RlVmVyaWZpZXIgZXhpc3RzIGluIHNlc3Npb25TdG9yYWdlLiBUaGlzIG1heSBpbmRpY2F0ZSBhbiBhdXRoIGZsb3cgaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy4nKTtcbiAgICB9XG4gICAgLy8gY2xlYXIgYWxsIFBLQ0UgbWV0YSBzdG9yYWdlIGJlZm9yZSBzYXZpbmcuXG4gICAgY2xlYXJNZXRhKHNkayk7XG4gICAgc3RvcmFnZS5zZXRTdG9yYWdlKG1ldGEpO1xufVxuZnVuY3Rpb24gbG9hZE1ldGEoc2RrKSB7XG4gICAgLy8gVHJ5IHJlYWRpbmcgZnJvbSBsb2NhbFN0b3JhZ2UgZmlyc3QuXG4gICAgLy8gVGhpcyBpcyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIHRoZSBzaWduaW4gd2lkZ2V0LiBPS1RBLTMwNDgwNlxuICAgIHZhciBzdG9yYWdlID0gZ2V0U3RvcmFnZShzZGssIHsgcHJlZmVyTG9jYWxTdG9yYWdlOiB0cnVlIH0pO1xuICAgIHZhciBvYmogPSBzdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICAvLyBWZXJpZnkgdGhlIE1ldGFcbiAgICBpZiAoIW9iai5jb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgLy8gSWYgbWV0YSBpcyBub3QgdmFsaWQsIHJlYWQgZnJvbSBzZXNzaW9uU3RvcmFnZS4gVGhpcyBpcyBleHBlY3RlZCBmb3IgY3VycmVudCB2ZXJzaW9ucyBvZiB0aGUgU0RLLlxuICAgICAgICBzdG9yYWdlID0gZ2V0U3RvcmFnZShzZGssIHsgcHJlZmVyTG9jYWxTdG9yYWdlOiBmYWxzZSB9KTtcbiAgICAgICAgb2JqID0gc3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgICAgIGlmICghb2JqLmNvZGVWZXJpZmllcikge1xuICAgICAgICAgICAgLy8gSWYgbWV0YSBpcyBub3QgdmFsaWQsIHRocm93IGFuIGV4Y2VwdGlvbiB0byBhdm9pZCBtaXNsZWFkaW5nIHNlcnZlci1zaWRlIGVycm9yXG4gICAgICAgICAgICAvLyBUaGUgbW9zdCBsaWtlbHkgY2F1c2Ugb2YgdGhpcyBlcnJvciBpcyB0cnlpbmcgdG8gaGFuZGxlIGEgY2FsbGJhY2sgdHdpY2VcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdDb3VsZCBub3QgbG9hZCBQS0NFIGNvZGVWZXJpZmllciBmcm9tIHN0b3JhZ2UuIFRoaXMgbWF5IGluZGljYXRlIHRoZSBhdXRoIGZsb3cgaGFzIGFscmVhZHkgY29tcGxldGVkIG9yIG11bHRpcGxlIGF1dGggZmxvd3MgYXJlIGV4ZWN1dGluZyBjb25jdXJyZW50bHkuJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGNsZWFyTWV0YShzZGspIHtcbiAgICAvLyBjbGVhciBzZXNzaW9uU3RvcmFnZSAoY3VycmVudCB2ZXJzaW9uKVxuICAgIHZhciBzdG9yYWdlID0gZ2V0U3RvcmFnZShzZGspO1xuICAgIHN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XG4gICAgLy8gY2xlYXIgbG9jYWxTdG9yYWdlIChwcmV2aW91cyB2ZXJzaW9ucywgc2lnbmluIHdpZGdldClcbiAgICBzdG9yYWdlID0gZ2V0U3RvcmFnZShzZGssIHsgcHJlZmVyTG9jYWxTdG9yYWdlOiB0cnVlIH0pO1xuICAgIHN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XG59XG5mdW5jdGlvbiBjb21wdXRlQ2hhbGxlbmdlKHN0cikge1xuICAgIHZhciBidWZmZXIgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyKTtcbiAgICByZXR1cm4gY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBidWZmZXIpLnRoZW4oZnVuY3Rpb24gKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBoYXNoID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgICAgICB2YXIgYjY0dSA9IHN0cmluZ1RvQmFzZTY0VXJsKGhhc2gpOyAvLyB1cmwtc2FmZSBiYXNlNjQgdmFyaWFudFxuICAgICAgICByZXR1cm4gYjY0dTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgLy8gUXVpY2sgdmFsaWRhdGlvblxuICAgIGlmICghb3B0aW9ucy5jbGllbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdBIGNsaWVudElkIG11c3QgYmUgc3BlY2lmaWVkIGluIHRoZSBPa3RhQXV0aCBjb25zdHJ1Y3RvciB0byBnZXQgYSB0b2tlbicpO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhlIHJlZGlyZWN0VXJpIHBhc3NlZCB0byAvYXV0aG9yaXplIG11c3QgYWxzbyBiZSBwYXNzZWQgdG8gL3Rva2VuJyk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5hdXRob3JpemF0aW9uQ29kZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdBbiBhdXRob3JpemF0aW9uIGNvZGUgKHJldHVybmVkIGZyb20gL2F1dGhvcml6ZSkgbXVzdCBiZSBwYXNzZWQgdG8gL3Rva2VuJyk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5jb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhlIFwiY29kZVZlcmlmaWVyXCIgKGdlbmVyYXRlZCBhbmQgc2F2ZWQgYnkgeW91ciBhcHApIG11c3QgYmUgcGFzc2VkIHRvIC90b2tlbicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFBvc3REYXRhKG9wdGlvbnMpIHtcbiAgICAvLyBDb252ZXJ0IG9wdGlvbnMgdG8gT0F1dGggcGFyYW1zXG4gICAgdmFyIHBhcmFtcyA9IHJlbW92ZU5pbHMoe1xuICAgICAgICAnY2xpZW50X2lkJzogb3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICAgJ3JlZGlyZWN0X3VyaSc6IG9wdGlvbnMucmVkaXJlY3RVcmksXG4gICAgICAgICdncmFudF90eXBlJzogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgICdjb2RlJzogb3B0aW9ucy5hdXRob3JpemF0aW9uQ29kZSxcbiAgICAgICAgJ2NvZGVfdmVyaWZpZXInOiBvcHRpb25zLmNvZGVWZXJpZmllclxuICAgIH0pO1xuICAgIC8vIEVuY29kZSBhcyBVUkwgc3RyaW5nXG4gICAgcmV0dXJuIHRvUXVlcnlTdHJpbmcocGFyYW1zKS5zbGljZSgxKTtcbn1cbi8vIGV4Y2hhbmdlIGF1dGhvcml6YXRpb24gY29kZSBmb3IgYW4gYWNjZXNzIHRva2VuXG5mdW5jdGlvbiBnZXRUb2tlbihzZGssIG9wdGlvbnMsIHVybHMpIHtcbiAgICB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIGRhdGEgPSBnZXRQb3N0RGF0YShvcHRpb25zKTtcbiAgICByZXR1cm4gaHR0cC5odHRwUmVxdWVzdChzZGssIHtcbiAgICAgICAgdXJsOiB1cmxzLnRva2VuVXJsLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYXJnczogZGF0YSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBERUZBVUxUX0NPREVfQ0hBTExFTkdFX01FVEhPRDogREVGQVVMVF9DT0RFX0NIQUxMRU5HRV9NRVRIT0QsXG4gICAgZ2VuZXJhdGVWZXJpZmllcjogZ2VuZXJhdGVWZXJpZmllcixcbiAgICBjbGVhck1ldGE6IGNsZWFyTWV0YSxcbiAgICBzYXZlTWV0YTogc2F2ZU1ldGEsXG4gICAgbG9hZE1ldGE6IGxvYWRNZXRhLFxuICAgIGNvbXB1dGVDaGFsbGVuZ2U6IGNvbXB1dGVDaGFsbGVuZ2UsXG4gICAgZ2V0VG9rZW46IGdldFRva2VuXG59O1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHsgb21pdCwgZ2V0TGluaywgdG9RdWVyeVN0cmluZyB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnO1xuZnVuY3Rpb24gc2Vzc2lvbkV4aXN0cyhzZGspIHtcbiAgICByZXR1cm4gc2RrLnNlc3Npb24uZ2V0KClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ0FDVElWRScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTZXNzaW9uKHNkaykge1xuICAgIHJldHVybiBodHRwLmdldChzZGssICcvYXBpL3YxL3Nlc3Npb25zL21lJylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgdmFyIHJlcyA9IG9taXQoc2Vzc2lvbiwgJ19saW5rcycpO1xuICAgICAgICByZXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwLnBvc3Qoc2RrLCBnZXRMaW5rKHNlc3Npb24sICdyZWZyZXNoJykuaHJlZik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcy51c2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHAuZ2V0KHNkaywgZ2V0TGluayhzZXNzaW9uLCAndXNlcicpLmhyZWYpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiBJTkFDVElWRSBzdGF0dXMgb24gZmFpbHVyZVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdJTkFDVElWRScgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNsb3NlU2Vzc2lvbihzZGspIHtcbiAgICByZXR1cm4gaHR0cC5odHRwUmVxdWVzdChzZGssIHtcbiAgICAgICAgdXJsOiBzZGsuZ2V0SXNzdWVyT3JpZ2luKCkgKyAnL2FwaS92MS9zZXNzaW9ucy9tZScsXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlZnJlc2hTZXNzaW9uKHNkaykge1xuICAgIHJldHVybiBodHRwLnBvc3Qoc2RrLCAnL2FwaS92MS9zZXNzaW9ucy9tZS9saWZlY3ljbGUvcmVmcmVzaCcpO1xufVxuZnVuY3Rpb24gc2V0Q29va2llQW5kUmVkaXJlY3Qoc2RrLCBzZXNzaW9uVG9rZW4sIHJlZGlyZWN0VXJsKSB7XG4gICAgcmVkaXJlY3RVcmwgPSByZWRpcmVjdFVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHNkay5nZXRJc3N1ZXJPcmlnaW4oKSArICcvbG9naW4vc2Vzc2lvbkNvb2tpZVJlZGlyZWN0JyArXG4gICAgICAgIHRvUXVlcnlTdHJpbmcoe1xuICAgICAgICAgICAgY2hlY2tBY2NvdW50U2V0dXBDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRva2VuOiBzZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICByZWRpcmVjdFVybDogcmVkaXJlY3RVcmxcbiAgICAgICAgfSkpO1xufVxuZXhwb3J0IHsgc2Vzc2lvbkV4aXN0cywgZ2V0U2Vzc2lvbiwgY2xvc2VTZXNzaW9uLCByZWZyZXNoU2Vzc2lvbiwgc2V0Q29va2llQW5kUmVkaXJlY3QgfTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cbmltcG9ydCBBdXRoU2RrRXJyb3IgZnJvbSAnLi9lcnJvcnMvQXV0aFNka0Vycm9yJztcbi8vIHN0b3JhZ2UgbXVzdCBoYXZlIGdldEl0ZW0gYW5kIHNldEl0ZW1cbmZ1bmN0aW9uIHN0b3JhZ2VCdWlsZGVyKHdlYnN0b3JhZ2UsIHN0b3JhZ2VOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBzdG9yYWdlTmFtZSAhPT0gJ3N0cmluZycgfHwgIXN0b3JhZ2VOYW1lLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdcInN0b3JhZ2VOYW1lXCIgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZSgpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VTdHJpbmcgPSB3ZWJzdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUpO1xuICAgICAgICBzdG9yYWdlU3RyaW5nID0gc3RvcmFnZVN0cmluZyB8fCAne30nO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBzdG9yYWdlIHN0cmluZzogJyArIHN0b3JhZ2VOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSk7XG4gICAgICAgICAgICB3ZWJzdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIHN0b3JhZ2VTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdVbmFibGUgdG8gc2V0IHN0b3JhZ2U6ICcgKyBzdG9yYWdlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2Uoe30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICAgICAgICBkZWxldGUgc3RvcmFnZVtrZXldO1xuICAgICAgICBzZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gICAgICAgIHN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgICAgICBzZXRTdG9yYWdlKHN0b3JhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcbiAgICAgICAgdXBkYXRlU3RvcmFnZTogdXBkYXRlU3RvcmFnZVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlQnVpbGRlcjtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGJ0b2EgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHksIG1heC1zdGF0ZW1lbnRzICovXG5pbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IHsgdG9RdWVyeVN0cmluZywgYmFzZTY0VXJsVG9TdHJpbmcsIGNsb25lLCBpc1N0cmluZywgcmVtb3ZlTmlscywgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBnZXRPQXV0aFVybHMsIHZhbGlkYXRlQ2xhaW1zLCBnZXRLZXksIGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciwgdXJsUGFyYW1zVG9PYmplY3QsIGdlbmVyYXRlU3RhdGUsIGdlbmVyYXRlTm9uY2UsIGxvYWRGcmFtZSwgbG9hZFBvcHVwLCBnZXRXZWxsS25vd24sIGlzTG9naW5SZWRpcmVjdCB9IGZyb20gJy4vb2F1dGhVdGlsJztcbmltcG9ydCAqIGFzIHNka0NyeXB0byBmcm9tICcuL2NyeXB0byc7XG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4vZXJyb3JzL0F1dGhTZGtFcnJvcic7XG5pbXBvcnQgT0F1dGhFcnJvciBmcm9tICcuL2Vycm9ycy9PQXV0aEVycm9yJztcbmltcG9ydCB7IEFDQ0VTU19UT0tFTl9TVE9SQUdFX0tFWSwgSURfVE9LRU5fU1RPUkFHRV9LRVksIFJFRElSRUNUX09BVVRIX1BBUkFNU19OQU1FLCBSRURJUkVDVF9OT05DRV9DT09LSUVfTkFNRSwgUkVESVJFQ1RfU1RBVEVfQ09PS0lFX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgYnJvd3NlclN0b3JhZ2UgZnJvbSAnLi9icm93c2VyL2Jyb3dzZXJTdG9yYWdlJztcbmltcG9ydCBQS0NFIGZyb20gJy4vcGtjZSc7XG5pbXBvcnQgeyBpc1Rva2VuLCBpc0FjY2Vzc1Rva2VuLCBpc0lEVG9rZW4gfSBmcm9tICcuL3R5cGVzJztcbmNvbnN0IGNvb2tpZXMgPSBicm93c2VyU3RvcmFnZS5zdG9yYWdlO1xuLy8gT25seSB0aGUgYWNjZXNzIHRva2VuIGNhbiBiZSByZXZva2VkIGluIFNQQSBhcHBsaWNhdGlvbnNcbmZ1bmN0aW9uIHJldm9rZVRva2VuKHNkaywgdG9rZW4pIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRva2VuIHx8ICF0b2tlbi5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignQSB2YWxpZCBhY2Nlc3MgdG9rZW4gb2JqZWN0IGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsaWVudElkID0gc2RrLm9wdGlvbnMuY2xpZW50SWQ7XG4gICAgICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ0EgY2xpZW50SWQgbXVzdCBiZSBzcGVjaWZpZWQgaW4gdGhlIE9rdGFBdXRoIGNvbnN0cnVjdG9yIHRvIHJldm9rZSBhIHRva2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldm9rZVVybCA9IGdldE9BdXRoVXJscyhzZGspLnJldm9rZVVybDtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICAgIHZhciBhcmdzID0gdG9RdWVyeVN0cmluZyh7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gICAgICAgICAgICB0b2tlbl90eXBlX2hpbnQ6ICdhY2Nlc3NfdG9rZW4nLFxuICAgICAgICAgICAgdG9rZW46IGFjY2Vzc1Rva2VuXG4gICAgICAgIH0pLnNsaWNlKDEpO1xuICAgICAgICB2YXIgY3JlZHMgPSBidG9hKGNsaWVudElkKTtcbiAgICAgICAgcmV0dXJuIGh0dHAucG9zdChzZGssIHJldm9rZVVybCwgYXJncywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgY3JlZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkZWNvZGVUb2tlbih0b2tlbikge1xuICAgIHZhciBqd3QgPSB0b2tlbi5zcGxpdCgnLicpO1xuICAgIHZhciBkZWNvZGVkVG9rZW47XG4gICAgdHJ5IHtcbiAgICAgICAgZGVjb2RlZFRva2VuID0ge1xuICAgICAgICAgICAgaGVhZGVyOiBKU09OLnBhcnNlKGJhc2U2NFVybFRvU3RyaW5nKGp3dFswXSkpLFxuICAgICAgICAgICAgcGF5bG9hZDogSlNPTi5wYXJzZShiYXNlNjRVcmxUb1N0cmluZyhqd3RbMV0pKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogand0WzJdXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ01hbGZvcm1lZCB0b2tlbicpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZFRva2VuO1xufVxuLy8gVmVyaWZ5IHRoZSBpZCB0b2tlblxuZnVuY3Rpb24gdmVyaWZ5VG9rZW4oc2RrLCB0b2tlbiwgdmFsaWRhdGlvblBhcmFtcykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdG9rZW4gfHwgIXRva2VuLmlkVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ09ubHkgaWRUb2tlbnMgbWF5IGJlIHZlcmlmaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGp3dCA9IGRlY29kZVRva2VuKHRva2VuLmlkVG9rZW4pO1xuICAgICAgICB2YXIgdmFsaWRhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjbGllbnRJZDogc2RrLm9wdGlvbnMuY2xpZW50SWQsXG4gICAgICAgICAgICBpc3N1ZXI6IHNkay5vcHRpb25zLmlzc3VlcixcbiAgICAgICAgICAgIGlnbm9yZVNpZ25hdHVyZTogc2RrLm9wdGlvbnMuaWdub3JlU2lnbmF0dXJlXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odmFsaWRhdGlvbk9wdGlvbnMsIHZhbGlkYXRpb25QYXJhbXMpO1xuICAgICAgICAvLyBTdGFuZGFyZCBjbGFpbSB2YWxpZGF0aW9uXG4gICAgICAgIHZhbGlkYXRlQ2xhaW1zKHNkaywgand0LnBheWxvYWQsIHZhbGlkYXRpb25PcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBjcnlwdG8gb3Igd2UgY2hvb3NlIG5vdFxuICAgICAgICAvLyB0byB2ZXJpZnkgdGhlIHNpZ25hdHVyZSwgYmFpbCBlYXJseVxuICAgICAgICBpZiAodmFsaWRhdGlvbk9wdGlvbnMuaWdub3JlU2lnbmF0dXJlID09IHRydWUgfHwgIXNkay5mZWF0dXJlcy5pc1Rva2VuVmVyaWZ5U3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0S2V5KHNkaywgdG9rZW4uaXNzdWVyLCBqd3QuaGVhZGVyLmtpZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZGtDcnlwdG8udmVyaWZ5VG9rZW4odG9rZW4uaWRUb2tlbiwga2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWxpZCkge1xuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSB0b2tlbiBzaWduYXR1cmUgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvblBhcmFtcyAmJiB2YWxpZGF0aW9uUGFyYW1zLmFjY2Vzc1Rva2VuICYmIHRva2VuLmNsYWltcy5hdF9oYXNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNka0NyeXB0by5nZXRPaWRjSGFzaCh2YWxpZGF0aW9uUGFyYW1zLmFjY2Vzc1Rva2VuKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihoYXNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2ggIT09IHRva2VuLmNsYWltcy5hdF9oYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdUb2tlbiBoYXNoIHZlcmlmaWNhdGlvbiBmYWlsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBvc3RNZXNzYWdlTGlzdGVuZXIoc2RrLCB0aW1lb3V0LCBzdGF0ZSkge1xuICAgIHZhciByZXNwb25zZUhhbmRsZXI7XG4gICAgdmFyIHRpbWVvdXRJZDtcbiAgICB2YXIgbXNnUmVjZWl2ZWRPclRpbWVvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc3BvbnNlSGFuZGxlciA9IGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoIWUuZGF0YSB8fCBlLmRhdGEuc3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gQSBtZXNzYWdlIG5vdCBtZWFudCBmb3IgdXNcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb25maWd1cmF0aW9uIG1pc21hdGNoIGJldHdlZW4gc2F2ZWQgdG9rZW4gYW5kIGN1cnJlbnQgYXBwIGluc3RhbmNlXG4gICAgICAgICAgICAvLyBUaGlzIG1heSBoYXBwZW4gaWYgYXBwcyB3aXRoIGRpZmZlcmVudCBpc3N1ZXJzIGFyZSBydW5uaW5nIG9uIHRoZSBzYW1lIGhvc3QgdXJsXG4gICAgICAgICAgICAvLyBJZiB0aGV5IHNoYXJlIHRoZSBzYW1lIHN0b3JhZ2Uga2V5LCB0aGV5IG1heSByZWFkIGFuZCB3cml0ZSB0b2tlbnMgaW4gdGhlIHNhbWUgbG9jYXRpb24uXG4gICAgICAgICAgICAvLyBDb21tb24gd2hlbiBkZXZlbG9waW5nIGFnYWluc3QgaHR0cDovL2xvY2FsaG9zdFxuICAgICAgICAgICAgaWYgKGUub3JpZ2luICE9PSBzZGsuZ2V0SXNzdWVyT3JpZ2luKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ1RoZSByZXF1ZXN0IGRvZXMgbm90IG1hdGNoIGNsaWVudCBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShlLmRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBhZGRMaXN0ZW5lcih3aW5kb3csICdtZXNzYWdlJywgcmVzcG9uc2VIYW5kbGVyKTtcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEF1dGhTZGtFcnJvcignT0F1dGggZmxvdyB0aW1lZCBvdXQnKSk7XG4gICAgICAgIH0sIHRpbWVvdXQgfHwgMTIwMDAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbXNnUmVjZWl2ZWRPclRpbWVvdXRcbiAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIod2luZG93LCAnbWVzc2FnZScsIHJlc3BvbnNlSGFuZGxlcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleGNoYW5nZUNvZGVGb3JUb2tlbihzZGssIG9hdXRoUGFyYW1zLCBhdXRob3JpemF0aW9uQ29kZSwgdXJscykge1xuICAgIC8vIFBLQ0UgYXV0aG9yaXphdGlvbl9jb2RlIGZsb3dcbiAgICAvLyBSZXRyaWV2ZSBzYXZlZCB2YWx1ZXMgYW5kIGJ1aWxkIG9hdXRoUGFyYW1zIGZvciBjYWxsIHRvIC90b2tlblxuICAgIHZhciBtZXRhID0gUEtDRS5sb2FkTWV0YShzZGspO1xuICAgIHZhciBnZXRUb2tlblBhcmFtcyA9IHtcbiAgICAgICAgY2xpZW50SWQ6IG9hdXRoUGFyYW1zLmNsaWVudElkLFxuICAgICAgICBhdXRob3JpemF0aW9uQ29kZTogYXV0aG9yaXphdGlvbkNvZGUsXG4gICAgICAgIGNvZGVWZXJpZmllcjogbWV0YS5jb2RlVmVyaWZpZXIsXG4gICAgICAgIHJlZGlyZWN0VXJpOiBtZXRhLnJlZGlyZWN0VXJpXG4gICAgfTtcbiAgICByZXR1cm4gUEtDRS5nZXRUb2tlbihzZGssIGdldFRva2VuUGFyYW1zLCB1cmxzKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhbGlkYXRlUmVzcG9uc2UocmVzLCBnZXRUb2tlblBhcmFtcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSlcbiAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICBQS0NFLmNsZWFyTWV0YShzZGspO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXMsIG9hdXRoUGFyYW1zKSB7XG4gICAgaWYgKHJlc1snZXJyb3InXSB8fCByZXNbJ2Vycm9yX2Rlc2NyaXB0aW9uJ10pIHtcbiAgICAgICAgdGhyb3cgbmV3IE9BdXRoRXJyb3IocmVzWydlcnJvciddLCByZXNbJ2Vycm9yX2Rlc2NyaXB0aW9uJ10pO1xuICAgIH1cbiAgICBpZiAocmVzLnN0YXRlICE9PSBvYXV0aFBhcmFtcy5zdGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdPQXV0aCBmbG93IHJlc3BvbnNlIHN0YXRlIGRvZXNuXFwndCBtYXRjaCByZXF1ZXN0IHN0YXRlJyk7XG4gICAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbmZ1bmN0aW9uIGhhbmRsZU9BdXRoUmVzcG9uc2Uoc2RrLCB0b2tlblBhcmFtcywgcmVzLCB1cmxzKSB7XG4gICAgdXJscyA9IHVybHMgfHwge307XG4gICAgdmFyIHJlc3BvbnNlVHlwZSA9IHRva2VuUGFyYW1zLnJlc3BvbnNlVHlwZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2VUeXBlKSkge1xuICAgICAgICByZXNwb25zZVR5cGUgPSBbcmVzcG9uc2VUeXBlXTtcbiAgICB9XG4gICAgdmFyIHNjb3BlcyA9IGNsb25lKHRva2VuUGFyYW1zLnNjb3Blcyk7XG4gICAgdmFyIGNsaWVudElkID0gdG9rZW5QYXJhbXMuY2xpZW50SWQgfHwgc2RrLm9wdGlvbnMuY2xpZW50SWQ7XG4gICAgdmFyIHBrY2UgPSBzZGsub3B0aW9ucy5wa2NlICE9PSBmYWxzZTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWxpZGF0ZVJlc3BvbnNlKHJlcywgdG9rZW5QYXJhbXMpO1xuICAgICAgICAvLyBQS0NFIGZsb3dcbiAgICAgICAgLy8gV2UgZG8gbm90IHN1cHBvcnQgXCJoeWJyaWRcIiBzY2VuYXJpb3Mgd2hlcmUgdGhlIHJlc3BvbnNlIGluY2x1ZGVzIGJvdGggYSBjb2RlIGFuZCBhIHRva2VuLlxuICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2UgY29udGFpbnMgYSBjb2RlIGl0IGlzIHVzZWQgaW1tZWRpYXRlbHkgdG8gb2J0YWluIG5ldyB0b2tlbnMuXG4gICAgICAgIGlmIChyZXMuY29kZSAmJiBwa2NlKSB7XG4gICAgICAgICAgICAvLyByZXNwb25zZVR5cGUgaXMgbm90IHNlbnQgdG8gdGhlIHRva2VuIGVuZHBvaW50LlxuICAgICAgICAgICAgLy8gV2UgcG9wdWxhdGUgdGhpcyBhcnJheSB0byB2YWxpZGF0ZSB0aGUgcmVzcG9uc2UgYmVsb3dcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IFsndG9rZW4nXTsgLy8gYW4gYWNjZXNzVG9rZW4gd2lsbCBhbHdheXMgYmUgcmV0dXJuZWRcbiAgICAgICAgICAgIGlmIChzY29wZXMuaW5kZXhPZignb3BlbmlkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlLnB1c2goJ2lkX3Rva2VuJyk7IC8vIGFuIGlkVG9rZW4gd2lsbCBiZSByZXR1cm5lZCBpZiBcIm9wZW5pZFwiIGlzIGluIHRoZSBzY29wZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBleGNoYW5nZUNvZGVGb3JUb2tlbihzZGssIHRva2VuUGFyYW1zLCByZXMuY29kZSwgdXJscyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRva2VuRGljdCA9IHt9O1xuICAgICAgICB2YXIgZXhwaXJlc0luID0gcmVzLmV4cGlyZXNfaW47XG4gICAgICAgIHZhciB0b2tlblR5cGUgPSByZXMudG9rZW5fdHlwZTtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gcmVzLmFjY2Vzc190b2tlbjtcbiAgICAgICAgdmFyIGlkVG9rZW4gPSByZXMuaWRfdG9rZW47XG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgdG9rZW5EaWN0LmFjY2Vzc1Rva2VuID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgZXhwaXJlc0F0OiBOdW1iZXIoZXhwaXJlc0luKSArIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICAgICAgICAgIHRva2VuVHlwZTogdG9rZW5UeXBlLFxuICAgICAgICAgICAgICAgIHNjb3Blczogc2NvcGVzLFxuICAgICAgICAgICAgICAgIGF1dGhvcml6ZVVybDogdXJscy5hdXRob3JpemVVcmwsXG4gICAgICAgICAgICAgICAgdXNlcmluZm9Vcmw6IHVybHMudXNlcmluZm9VcmxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkVG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBqd3QgPSBzZGsudG9rZW4uZGVjb2RlKGlkVG9rZW4pO1xuICAgICAgICAgICAgdmFyIGlkVG9rZW5PYmogPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICBjbGFpbXM6IGp3dC5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGV4cGlyZXNBdDogand0LnBheWxvYWQuZXhwLFxuICAgICAgICAgICAgICAgIHNjb3Blczogc2NvcGVzLFxuICAgICAgICAgICAgICAgIGF1dGhvcml6ZVVybDogdXJscy5hdXRob3JpemVVcmwsXG4gICAgICAgICAgICAgICAgaXNzdWVyOiB1cmxzLmlzc3VlcixcbiAgICAgICAgICAgICAgICBjbGllbnRJZDogY2xpZW50SWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvblBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjbGllbnRJZDogY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgaXNzdWVyOiB1cmxzLmlzc3VlcixcbiAgICAgICAgICAgICAgICBub25jZTogdG9rZW5QYXJhbXMubm9uY2UsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRva2VuUGFyYW1zLmlnbm9yZVNpZ25hdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhcmFtcy5pZ25vcmVTaWduYXR1cmUgPSB0b2tlblBhcmFtcy5pZ25vcmVTaWduYXR1cmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmVyaWZ5VG9rZW4oc2RrLCBpZFRva2VuT2JqLCB2YWxpZGF0aW9uUGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2tlbkRpY3QuaWRUb2tlbiA9IGlkVG9rZW5PYmo7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuRGljdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbkRpY3Q7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRva2VuRGljdCkge1xuICAgICAgICAvLyBWYWxpZGF0ZSByZWNlaXZlZCB0b2tlbnMgYWdhaW5zdCByZXF1ZXN0ZWQgcmVzcG9uc2UgdHlwZXMgXG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUuaW5kZXhPZigndG9rZW4nKSAhPT0gLTEgJiYgIXRva2VuRGljdC5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBPQXV0aCBmbG93IHJlc3BvbnNlOiByZXNwb25zZSB0eXBlIFwidG9rZW5cIiB3YXMgcmVxdWVzdGVkIGJ1dCBcImFjY2Vzc190b2tlblwiIHdhcyBub3QgcmV0dXJuZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlVHlwZS5pbmRleE9mKCdpZF90b2tlbicpICE9PSAtMSAmJiAhdG9rZW5EaWN0LmlkVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdVbmFibGUgdG8gcGFyc2UgT0F1dGggZmxvdyByZXNwb25zZTogcmVzcG9uc2UgdHlwZSBcImlkX3Rva2VuXCIgd2FzIHJlcXVlc3RlZCBidXQgXCJpZF90b2tlblwiIHdhcyBub3QgcmV0dXJuZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuczogdG9rZW5EaWN0LFxuICAgICAgICAgICAgc3RhdGU6IHJlcy5zdGF0ZSxcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREZWZhdWx0VG9rZW5QYXJhbXMoc2RrKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGtjZTogc2RrLm9wdGlvbnMucGtjZSxcbiAgICAgICAgY2xpZW50SWQ6IHNkay5vcHRpb25zLmNsaWVudElkLFxuICAgICAgICByZWRpcmVjdFVyaTogc2RrLm9wdGlvbnMucmVkaXJlY3RVcmkgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogWyd0b2tlbicsICdpZF90b2tlbiddLFxuICAgICAgICByZXNwb25zZU1vZGU6IHNkay5vcHRpb25zLnJlc3BvbnNlTW9kZSxcbiAgICAgICAgc3RhdGU6IGdlbmVyYXRlU3RhdGUoKSxcbiAgICAgICAgbm9uY2U6IGdlbmVyYXRlTm9uY2UoKSxcbiAgICAgICAgc2NvcGVzOiBbJ29wZW5pZCcsICdlbWFpbCddLFxuICAgICAgICBpZ25vcmVTaWduYXR1cmU6IHNkay5vcHRpb25zLmlnbm9yZVNpZ25hdHVyZVxuICAgIH07XG59XG5mdW5jdGlvbiBjb252ZXJ0VG9rZW5QYXJhbXNUb09BdXRoUGFyYW1zKHRva2VuUGFyYW1zKSB7XG4gICAgLy8gUXVpY2sgdmFsaWRhdGlvblxuICAgIGlmICghdG9rZW5QYXJhbXMuY2xpZW50SWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignQSBjbGllbnRJZCBtdXN0IGJlIHNwZWNpZmllZCBpbiB0aGUgT2t0YUF1dGggY29uc3RydWN0b3IgdG8gZ2V0IGEgdG9rZW4nKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKHRva2VuUGFyYW1zLnJlc3BvbnNlVHlwZSkgJiYgdG9rZW5QYXJhbXMucmVzcG9uc2VUeXBlLmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignTXVsdGlwbGUgT0F1dGggcmVzcG9uc2VUeXBlcyBtdXN0IGJlIGRlZmluZWQgYXMgYW4gYXJyYXknKTtcbiAgICB9XG4gICAgLy8gQ29udmVydCBvdXIgcGFyYW1zIHRvIHRoZWlyIGFjdHVhbCBPQXV0aCBlcXVpdmFsZW50c1xuICAgIHZhciBvYXV0aFBhcmFtcyA9IHtcbiAgICAgICAgJ2NsaWVudF9pZCc6IHRva2VuUGFyYW1zLmNsaWVudElkLFxuICAgICAgICAnY29kZV9jaGFsbGVuZ2UnOiB0b2tlblBhcmFtcy5jb2RlQ2hhbGxlbmdlLFxuICAgICAgICAnY29kZV9jaGFsbGVuZ2VfbWV0aG9kJzogdG9rZW5QYXJhbXMuY29kZUNoYWxsZW5nZU1ldGhvZCxcbiAgICAgICAgJ2Rpc3BsYXknOiB0b2tlblBhcmFtcy5kaXNwbGF5LFxuICAgICAgICAnaWRwJzogdG9rZW5QYXJhbXMuaWRwLFxuICAgICAgICAnaWRwX3Njb3BlJzogdG9rZW5QYXJhbXMuaWRwU2NvcGUsXG4gICAgICAgICdsb2dpbl9oaW50JzogdG9rZW5QYXJhbXMubG9naW5IaW50LFxuICAgICAgICAnbWF4X2FnZSc6IHRva2VuUGFyYW1zLm1heEFnZSxcbiAgICAgICAgJ25vbmNlJzogdG9rZW5QYXJhbXMubm9uY2UsXG4gICAgICAgICdwcm9tcHQnOiB0b2tlblBhcmFtcy5wcm9tcHQsXG4gICAgICAgICdyZWRpcmVjdF91cmknOiB0b2tlblBhcmFtcy5yZWRpcmVjdFVyaSxcbiAgICAgICAgJ3Jlc3BvbnNlX21vZGUnOiB0b2tlblBhcmFtcy5yZXNwb25zZU1vZGUsXG4gICAgICAgICdyZXNwb25zZV90eXBlJzogdG9rZW5QYXJhbXMucmVzcG9uc2VUeXBlLFxuICAgICAgICAnc2Vzc2lvblRva2VuJzogdG9rZW5QYXJhbXMuc2Vzc2lvblRva2VuLFxuICAgICAgICAnc3RhdGUnOiB0b2tlblBhcmFtcy5zdGF0ZSxcbiAgICB9O1xuICAgIG9hdXRoUGFyYW1zID0gcmVtb3ZlTmlscyhvYXV0aFBhcmFtcyk7XG4gICAgWydpZHBfc2NvcGUnLCAncmVzcG9uc2VfdHlwZSddLmZvckVhY2goZnVuY3Rpb24gKG1heUJlQXJyYXkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2F1dGhQYXJhbXNbbWF5QmVBcnJheV0pKSB7XG4gICAgICAgICAgICBvYXV0aFBhcmFtc1ttYXlCZUFycmF5XSA9IG9hdXRoUGFyYW1zW21heUJlQXJyYXldLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0b2tlblBhcmFtcy5yZXNwb25zZVR5cGUuaW5kZXhPZignaWRfdG9rZW4nKSAhPT0gLTEgJiZcbiAgICAgICAgdG9rZW5QYXJhbXMuc2NvcGVzLmluZGV4T2YoJ29wZW5pZCcpID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdvcGVuaWQgc2NvcGUgbXVzdCBiZSBzcGVjaWZpZWQgaW4gdGhlIHNjb3BlcyBhcmd1bWVudCB3aGVuIHJlcXVlc3RpbmcgYW4gaWRfdG9rZW4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9hdXRoUGFyYW1zLnNjb3BlID0gdG9rZW5QYXJhbXMuc2NvcGVzLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG9hdXRoUGFyYW1zO1xufVxuZnVuY3Rpb24gYnVpbGRBdXRob3JpemVQYXJhbXModG9rZW5QYXJhbXMpIHtcbiAgICB2YXIgb2F1dGhRdWVyeVBhcmFtcyA9IGNvbnZlcnRUb2tlblBhcmFtc1RvT0F1dGhQYXJhbXModG9rZW5QYXJhbXMpO1xuICAgIHJldHVybiB0b1F1ZXJ5U3RyaW5nKG9hdXRoUXVlcnlQYXJhbXMpO1xufVxuLypcbiAqIFJldHJpZXZlIGFuIGlkVG9rZW4gZnJvbSBhbiBPa3RhIG9yIGEgdGhpcmQgcGFydHkgaWRwXG4gKlxuICogVHdvIG1haW4gZmxvd3M6XG4gKlxuICogIDEpIEV4Y2hhbmdlIGEgc2Vzc2lvblRva2VuIGZvciBhIHRva2VuXG4gKlxuICogICAgUmVxdWlyZWQ6XG4gKiAgICAgIGNsaWVudElkOiBwYXNzZWQgdmlhIHRoZSBPa3RhQXV0aCBjb25zdHJ1Y3RvciBvciBpbnRvIGdldFRva2VuXG4gKiAgICAgIHNlc3Npb25Ub2tlbjogJ3lvdXJ0b2tlbidcbiAqXG4gKiAgICBPcHRpb25hbDpcbiAqICAgICAgcmVkaXJlY3RVcmk6IGRlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gKiAgICAgIHNjb3BlczogZGVmYXVsdHMgdG8gWydvcGVuaWQnLCAnZW1haWwnXVxuICpcbiAqICAgIEZvcmNlZDpcbiAqICAgICAgcHJvbXB0OiAnbm9uZSdcbiAqICAgICAgcmVzcG9uc2VNb2RlOiAnb2t0YV9wb3N0X21lc3NhZ2UnXG4gKiAgICAgIGRpc3BsYXk6IHVuZGVmaW5lZFxuICpcbiAqICAyKSBHZXQgYSB0b2tlbiBmcm9tIGFuIGlkcFxuICpcbiAqICAgIFJlcXVpcmVkOlxuICogICAgICBjbGllbnRJZDogcGFzc2VkIHZpYSB0aGUgT2t0YUF1dGggY29uc3RydWN0b3Igb3IgaW50byBnZXRUb2tlblxuICpcbiAqICAgIE9wdGlvbmFsOlxuICogICAgICByZWRpcmVjdFVyaTogZGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAqICAgICAgc2NvcGVzOiBkZWZhdWx0cyB0byBbJ29wZW5pZCcsICdlbWFpbCddXG4gKiAgICAgIGlkcDogZGVmYXVsdHMgdG8gT2t0YSBhcyBhbiBpZHBcbiAqICAgICAgcHJvbXB0OiBubyBkZWZhdWx0LiBQYXNzICdub25lJyB0byB0aHJvdyBhbiBlcnJvciBpZiB1c2VyIGlzIG5vdCBzaWduZWQgaW5cbiAqXG4gKiAgICBGb3JjZWQ6XG4gKiAgICAgIGRpc3BsYXk6ICdwb3B1cCdcbiAqXG4gKiAgT25seSBjb21tb24gb3B0aW9uYWwgcGFyYW1zIHNob3duLiBBbnkgT0F1dGggcGFyYW1ldGVycyBub3QgZXhwbGljaXRseSBmb3JjZWQgYXJlIGF2YWlsYWJsZSB0byBvdmVycmlkZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYXV0aE9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2F1dGhPcHRpb25zLmNsaWVudElkXSBJRCBvZiB0aGlzIGNsaWVudFxuICogQHBhcmFtIHtTdHJpbmd9IFtvYXV0aE9wdGlvbnMucmVkaXJlY3RVcmldIFVSSSB0aGF0IHRoZSBpZnJhbWUgb3IgcG9wdXAgd2lsbCBnbyB0byBvbmNlIGF1dGhlbnRpY2F0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvYXV0aE9wdGlvbnMuc2NvcGVzXSBPQXV0aCAyLjAgc2NvcGVzIHRvIHJlcXVlc3QgKG9wZW5pZCBtdXN0IGJlIHNwZWNpZmllZClcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2F1dGhPcHRpb25zLmlkcF0gSUQgb2YgYW4gZXh0ZXJuYWwgSWRQIHRvIHVzZSBmb3IgdXNlciBhdXRoZW50aWNhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvYXV0aE9wdGlvbnMuc2Vzc2lvblRva2VuXSBCb290c3RyYXAgU2Vzc2lvbiBUb2tlbiByZXR1cm5lZCBieSB0aGUgT2t0YSBBdXRoZW50aWNhdGlvbiBBUElcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2F1dGhPcHRpb25zLnByb21wdF0gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBPa3RhIGxvZ2luIHdpbGwgYmUgZGlzcGxheWVkIG9uIGZhaWx1cmUuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZSAnbm9uZScgdG8gcHJldmVudCB0aGlzIGJlaGF2aW9yXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gW29wdGlvbnMudGltZW91dF0gVGltZSBpbiBtcyBiZWZvcmUgdGhlIGZsb3cgaXMgYXV0b21hdGljYWxseSB0ZXJtaW5hdGVkLiBEZWZhdWx0cyB0byAxMjAwMDBcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3B1cFRpdGxlXSBUaXRsZSBkaXNwYXllZCBpbiB0aGUgcG9wdXAuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdHMgdG8gJ0V4dGVybmFsIElkZW50aXR5IFByb3ZpZGVyIFVzZXIgQXV0aGVudGljYXRpb24nXG4gKi9cbmZ1bmN0aW9uIGdldFRva2VuKHNkaywgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignQXMgb2YgdmVyc2lvbiAzLjAsIFwiZ2V0VG9rZW5cIiB0YWtlcyBvbmx5IGEgc2luZ2xlIHNldCBvZiBvcHRpb25zJykpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICByZXR1cm4gcHJlcGFyZVRva2VuUGFyYW1zKHNkaywgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRva2VuUGFyYW1zKSB7XG4gICAgICAgIC8vIFN0YXJ0IG92ZXJyaWRpbmcgYW55IG9wdGlvbnMgdGhhdCBkb24ndCBtYWtlIHNlbnNlXG4gICAgICAgIHZhciBzZXNzaW9uVG9rZW5PdmVycmlkZXMgPSB7XG4gICAgICAgICAgICBwcm9tcHQ6ICdub25lJyxcbiAgICAgICAgICAgIHJlc3BvbnNlTW9kZTogJ29rdGFfcG9zdF9tZXNzYWdlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGlkcE92ZXJyaWRlcyA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdwb3B1cCdcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRva2VuUGFyYW1zLCBzZXNzaW9uVG9rZW5PdmVycmlkZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuaWRwKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRva2VuUGFyYW1zLCBpZHBPdmVycmlkZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZSB0aGUgcXVlcnkgcGFyYW1zIHRvIGJ1aWxkIHRoZSBhdXRob3JpemUgdXJsXG4gICAgICAgIHZhciByZXF1ZXN0VXJsLCBlbmRwb2ludCwgdXJscztcbiAgICAgICAgLy8gR2V0IGF1dGhvcml6ZVVybCBhbmQgaXNzdWVyXG4gICAgICAgIHVybHMgPSBnZXRPQXV0aFVybHMoc2RrLCB0b2tlblBhcmFtcyk7XG4gICAgICAgIGVuZHBvaW50ID0gb3B0aW9ucy5jb2RlVmVyaWZpZXIgPyB1cmxzLnRva2VuVXJsIDogdXJscy5hdXRob3JpemVVcmw7XG4gICAgICAgIHJlcXVlc3RVcmwgPSBlbmRwb2ludCArIGJ1aWxkQXV0aG9yaXplUGFyYW1zKHRva2VuUGFyYW1zKTtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBmbG93IHR5cGVcbiAgICAgICAgdmFyIGZsb3dUeXBlO1xuICAgICAgICBpZiAodG9rZW5QYXJhbXMuc2Vzc2lvblRva2VuIHx8IHRva2VuUGFyYW1zLmRpc3BsYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGZsb3dUeXBlID0gJ0lGUkFNRSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW5QYXJhbXMuZGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgICAgICAgZmxvd1R5cGUgPSAnUE9QVVAnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmxvd1R5cGUgPSAnSU1QTElDSVQnO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGZsb3cgdHlwZVxuICAgICAgICBzd2l0Y2ggKGZsb3dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVQcm9taXNlID0gYWRkUG9zdE1lc3NhZ2VMaXN0ZW5lcihzZGssIG9wdGlvbnMudGltZW91dCwgdG9rZW5QYXJhbXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVFbCA9IGxvYWRGcmFtZShyZXF1ZXN0VXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lUHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVPQXV0aFJlc3BvbnNlKHNkaywgdG9rZW5QYXJhbXMsIHJlcywgdXJscyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhpZnJhbWVFbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaWZyYW1lRWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlICdQT1BVUCc6XG4gICAgICAgICAgICAgICAgdmFyIG9hdXRoUHJvbWlzZTsgLy8gcmVzb2x2ZXMgd2l0aCBPQXV0aCByZXNwb25zZVxuICAgICAgICAgICAgICAgIC8vIEFkZCBsaXN0ZW5lciBvbiBwb3N0TWVzc2FnZSBiZWZvcmUgd2luZG93IGNyZWF0aW9uLCBzb1xuICAgICAgICAgICAgICAgIC8vIHBvc3RNZXNzYWdlIGlzbid0IHRyaWdnZXJlZCBiZWZvcmUgd2UncmUgbGlzdGVuaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuUGFyYW1zLnJlc3BvbnNlTW9kZSA9PT0gJ29rdGFfcG9zdF9tZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNkay5mZWF0dXJlcy5pc1BvcHVwUG9zdE1lc3NhZ2VTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhpcyBicm93c2VyIGRvZXNuXFwndCBoYXZlIGZ1bGwgcG9zdE1lc3NhZ2Ugc3VwcG9ydCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9hdXRoUHJvbWlzZSA9IGFkZFBvc3RNZXNzYWdlTGlzdGVuZXIoc2RrLCBvcHRpb25zLnRpbWVvdXQsIHRva2VuUGFyYW1zLnN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSB3aW5kb3dcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBUaXRsZTogb3B0aW9ucy5wb3B1cFRpdGxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93RWwgPSBsb2FkUG9wdXAocmVxdWVzdFVybCwgd2luZG93T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHBvcHVwIG1heSBiZSBjbG9zZWQgd2l0aG91dCByZWNlaXZpbmcgYW4gT0F1dGggcmVzcG9uc2UuIFNldHVwIGEgcG9sbGVyIHRvIG1vbml0b3IgdGhlIHdpbmRvdy5cbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VQb2xsZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd0VsIHx8IHdpbmRvd0VsLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2xvc2VQb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdVbmFibGUgdG8gcGFyc2UgT0F1dGggZmxvdyByZXNwb25zZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJveHkgdGhlIE9BdXRoIHByb21pc2UgcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICBvYXV0aFByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2xvc2VQb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2xvc2VQb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3B1cFByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlT0F1dGhSZXNwb25zZShzZGssIHRva2VuUGFyYW1zLCByZXMsIHVybHMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd0VsICYmICF3aW5kb3dFbC5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0VsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhTZGtFcnJvcignVGhlIGZ1bGwgcGFnZSByZWRpcmVjdCBmbG93IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgaWYgKHNkay5vcHRpb25zLnBrY2UpIHtcbiAgICAgICAgICAgIFBLQ0UuY2xlYXJNZXRhKHNkayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFdpdGhvdXRQcm9tcHQoc2RrLCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdBcyBvZiB2ZXJzaW9uIDMuMCwgXCJnZXRXaXRob3V0UHJvbXB0XCIgdGFrZXMgb25seSBhIHNpbmdsZSBzZXQgb2Ygb3B0aW9ucycpKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IGNsb25lKG9wdGlvbnMpIHx8IHt9O1xuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBwcm9tcHQ6ICdub25lJyxcbiAgICAgICAgcmVzcG9uc2VNb2RlOiAnb2t0YV9wb3N0X21lc3NhZ2UnLFxuICAgICAgICBkaXNwbGF5OiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIGdldFRva2VuKHNkaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRXaXRoUG9wdXAoc2RrLCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdBcyBvZiB2ZXJzaW9uIDMuMCwgXCJnZXRXaXRoUG9wdXBcIiB0YWtlcyBvbmx5IGEgc2luZ2xlIHNldCBvZiBvcHRpb25zJykpO1xuICAgIH1cbiAgICBvcHRpb25zID0gY2xvbmUob3B0aW9ucykgfHwge307XG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIGRpc3BsYXk6ICdwb3B1cCcsXG4gICAgICAgIHJlc3BvbnNlTW9kZTogJ29rdGFfcG9zdF9tZXNzYWdlJ1xuICAgIH0pO1xuICAgIHJldHVybiBnZXRUb2tlbihzZGssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJlcGFyZVRva2VuUGFyYW1zKHNkaywgb3B0aW9ucykge1xuICAgIGlmIChpc0xvZ2luUmVkaXJlY3Qoc2RrKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignVGhlIGFwcCBzaG91bGQgbm90IGF0dGVtcHQgdG8gY2FsbCBnZXRUb2tlbiBvbiBjYWxsYmFjay4gJyArXG4gICAgICAgICAgICAnQXV0aG9yaXplIGZsb3cgaXMgYWxyZWFkeSBpbiBwcm9jZXNzLiBVc2UgcGFyc2VGcm9tVXJsKCkgdG8gcmVjZWl2ZSB0b2tlbnMuJykpO1xuICAgIH1cbiAgICAvLyBjbG9uZSBhbmQgcHJlcGFyZSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IGNsb25lKG9wdGlvbnMpIHx8IHt9O1xuICAgIC8vIGJ1aWxkIHBhcmFtcyB1c2luZyBkZWZhdWx0cyArIG9wdGlvbnNcbiAgICB2YXIgdG9rZW5QYXJhbXMgPSBnZXREZWZhdWx0VG9rZW5QYXJhbXMoc2RrKTtcbiAgICBPYmplY3QuYXNzaWduKHRva2VuUGFyYW1zLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW5QYXJhbXMucGtjZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0b2tlblBhcmFtcyk7XG4gICAgfVxuICAgIC8vIFBLQ0UgZmxvd1xuICAgIGlmICghc2RrLmZlYXR1cmVzLmlzUEtDRVN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnUEtDRSByZXF1aXJlcyBhIG1vZGVybiBicm93c2VyIHdpdGggZW5jcnlwdGlvbiBzdXBwb3J0IHJ1bm5pbmcgaW4gYSBzZWN1cmUgY29udGV4dC4nO1xuICAgICAgICBpZiAoIXNkay5mZWF0dXJlcy5pc0hUVFBTKCkpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1xcblRoZSBjdXJyZW50IHBhZ2UgaXMgbm90IGJlaW5nIHNlcnZlZCB3aXRoIEhUVFBTIHByb3RvY29sLiBQS0NFIHJlcXVpcmVzIHNlY3VyZSBIVFRQUyBwcm90b2NvbC4nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2RrLmZlYXR1cmVzLmhhc1RleHRFbmNvZGVyKCkpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1xcblwiVGV4dEVuY29kZXJcIiBpcyBub3QgZGVmaW5lZC4gVG8gdXNlIFBLQ0UsIHlvdSBtYXkgbmVlZCB0byBpbmNsdWRlIGEgcG9seWZpbGwvc2hpbSBmb3IgdGhpcyBicm93c2VyLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoZXJyb3JNZXNzYWdlKSk7XG4gICAgfVxuICAgIC8vIHNldCBkZWZhdWx0IGNvZGUgY2hhbGxlbmdlIG1ldGhvZCwgaWYgbm9uZSBwcm92aWRlZFxuICAgIGlmICghdG9rZW5QYXJhbXMuY29kZUNoYWxsZW5nZU1ldGhvZCkge1xuICAgICAgICB0b2tlblBhcmFtcy5jb2RlQ2hhbGxlbmdlTWV0aG9kID0gUEtDRS5ERUZBVUxUX0NPREVfQ0hBTExFTkdFX01FVEhPRDtcbiAgICB9XG4gICAgLy8gcmVzcG9uc2VUeXBlIGlzIGZvcmNlZFxuICAgIHRva2VuUGFyYW1zLnJlc3BvbnNlVHlwZSA9ICdjb2RlJztcbiAgICByZXR1cm4gZ2V0V2VsbEtub3duKHNkaywgbnVsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbWV0aG9kcyA9IHJlc1snY29kZV9jaGFsbGVuZ2VfbWV0aG9kc19zdXBwb3J0ZWQnXSB8fCBbXTtcbiAgICAgICAgaWYgKG1ldGhvZHMuaW5kZXhPZih0b2tlblBhcmFtcy5jb2RlQ2hhbGxlbmdlTWV0aG9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ0ludmFsaWQgY29kZV9jaGFsbGVuZ2VfbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBLQ0UgYXV0aG9yaXphdGlvbl9jb2RlIGZsb3dcbiAgICAgICAgdmFyIGNvZGVWZXJpZmllciA9IFBLQ0UuZ2VuZXJhdGVWZXJpZmllcih0b2tlblBhcmFtcy5jb2RlVmVyaWZpZXIpO1xuICAgICAgICAvLyBXZSB3aWxsIG5lZWQgdGhlc2UgdmFsdWVzIGFmdGVyIHJlZGlyZWN0IHdoZW4gd2UgY2FsbCAvdG9rZW5cbiAgICAgICAgdmFyIG1ldGEgPSB7XG4gICAgICAgICAgICBjb2RlVmVyaWZpZXI6IGNvZGVWZXJpZmllcixcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpOiB0b2tlblBhcmFtcy5yZWRpcmVjdFVyaVxuICAgICAgICB9O1xuICAgICAgICBQS0NFLnNhdmVNZXRhKHNkaywgbWV0YSk7XG4gICAgICAgIHJldHVybiBQS0NFLmNvbXB1dGVDaGFsbGVuZ2UoY29kZVZlcmlmaWVyKTtcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoY29kZUNoYWxsZW5nZSkge1xuICAgICAgICAvLyBDbG9uZS9jb3B5IHRoZSBwYXJhbXMuIFNldCBjb2RlQ2hhbGxlbmdlXG4gICAgICAgIHZhciBjbG9uZWRQYXJhbXMgPSBjbG9uZSh0b2tlblBhcmFtcykgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oY2xvbmVkUGFyYW1zLCB0b2tlblBhcmFtcywge1xuICAgICAgICAgICAgY29kZUNoYWxsZW5nZTogY29kZUNoYWxsZW5nZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9uZWRQYXJhbXM7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRPQXV0aFBhcmFtc1RvU3RvcmFnZShzZGssIHRva2VuUGFyYW1zLCB1cmxzKSB7XG4gICAgY29uc3QgeyByZXNwb25zZVR5cGUsIHN0YXRlLCBub25jZSwgc2NvcGVzLCBjbGllbnRJZCwgaWdub3JlU2lnbmF0dXJlIH0gPSB0b2tlblBhcmFtcztcbiAgICBjb25zdCB0b2tlblBhcmFtc1N0ciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgbm9uY2UsXG4gICAgICAgIHNjb3BlcyxcbiAgICAgICAgY2xpZW50SWQsXG4gICAgICAgIHVybHMsXG4gICAgICAgIGlnbm9yZVNpZ25hdHVyZVxuICAgIH0pO1xuICAgIGlmIChicm93c2VyU3RvcmFnZS5icm93c2VySGFzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICBicm93c2VyU3RvcmFnZS5nZXRTZXNzaW9uU3RvcmFnZSgpLnNldEl0ZW0oUkVESVJFQ1RfT0FVVEhfUEFSQU1TX05BTUUsIHRva2VuUGFyYW1zU3RyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvb2tpZXMuc2V0KFJFRElSRUNUX09BVVRIX1BBUkFNU19OQU1FLCB0b2tlblBhcmFtc1N0ciwgbnVsbCwgc2RrLm9wdGlvbnMuY29va2llcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0V2l0aFJlZGlyZWN0KHNkaywgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignQXMgb2YgdmVyc2lvbiAzLjAsIFwiZ2V0V2l0aFJlZGlyZWN0XCIgdGFrZXMgb25seSBhIHNpbmdsZSBzZXQgb2Ygb3B0aW9ucycpKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IGNsb25lKG9wdGlvbnMpIHx8IHt9O1xuICAgIHJldHVybiBwcmVwYXJlVG9rZW5QYXJhbXMoc2RrLCBvcHRpb25zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAodG9rZW5QYXJhbXMpIHtcbiAgICAgICAgdmFyIHVybHMgPSBnZXRPQXV0aFVybHMoc2RrLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIHJlcXVlc3RVcmwgPSB1cmxzLmF1dGhvcml6ZVVybCArIGJ1aWxkQXV0aG9yaXplUGFyYW1zKHRva2VuUGFyYW1zKTtcbiAgICAgICAgYWRkT0F1dGhQYXJhbXNUb1N0b3JhZ2Uoc2RrLCB0b2tlblBhcmFtcywgdXJscyk7XG4gICAgICAgIC8vIFNldCBub25jZSBjb29raWUgZm9yIHNlcnZlcnMgdG8gdmFsaWRhdGUgbm9uY2UgaW4gaWRfdG9rZW5cbiAgICAgICAgY29va2llcy5zZXQoUkVESVJFQ1RfTk9OQ0VfQ09PS0lFX05BTUUsIHRva2VuUGFyYW1zLm5vbmNlLCBudWxsLCBzZGsub3B0aW9ucy5jb29raWVzKTtcbiAgICAgICAgLy8gU2V0IHN0YXRlIGNvb2tpZSBmb3Igc2VydmVycyB0byB2YWxpZGF0ZSBzdGF0ZVxuICAgICAgICBjb29raWVzLnNldChSRURJUkVDVF9TVEFURV9DT09LSUVfTkFNRSwgdG9rZW5QYXJhbXMuc3RhdGUsIG51bGwsIHNkay5vcHRpb25zLmNvb2tpZXMpO1xuICAgICAgICBzZGsudG9rZW4uZ2V0V2l0aFJlZGlyZWN0Ll9zZXRMb2NhdGlvbihyZXF1ZXN0VXJsKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmV3VG9rZW4oc2RrLCB0b2tlbikge1xuICAgIGlmICghaXNUb2tlbih0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ1JlbmV3IG11c3QgYmUgcGFzc2VkIGEgdG9rZW4gd2l0aCAnICtcbiAgICAgICAgICAgICdhbiBhcnJheSBvZiBzY29wZXMgYW5kIGFuIGFjY2Vzc1Rva2VuIG9yIGlkVG9rZW4nKSk7XG4gICAgfVxuICAgIHZhciByZXNwb25zZVR5cGU7XG4gICAgaWYgKHNkay5vcHRpb25zLnBrY2UpIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlID0gJ2NvZGUnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FjY2Vzc1Rva2VuKHRva2VuKSkge1xuICAgICAgICByZXNwb25zZVR5cGUgPSAndG9rZW4nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlID0gJ2lkX3Rva2VuJztcbiAgICB9XG4gICAgY29uc3QgeyBzY29wZXMsIGF1dGhvcml6ZVVybCwgdXNlcmluZm9VcmwsIGlzc3VlciB9ID0gdG9rZW47XG4gICAgcmV0dXJuIGdldFdpdGhvdXRQcm9tcHQoc2RrLCB7XG4gICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgc2NvcGVzLFxuICAgICAgICBhdXRob3JpemVVcmwsXG4gICAgICAgIHVzZXJpbmZvVXJsLFxuICAgICAgICBpc3N1ZXJcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIE11bHRpcGxlIHRva2VucyBtYXkgaGF2ZSBjb21lIGJhY2suIFJldHVybiBvbmx5IHRoZSB0b2tlbiB3aGljaCB3YXMgcmVxdWVzdGVkLlxuICAgICAgICB2YXIgdG9rZW5zID0gcmVzLnRva2VucztcbiAgICAgICAgcmV0dXJuIGlzSURUb2tlbih0b2tlbikgPyB0b2tlbnMuaWRUb2tlbiA6IHRva2Vucy5hY2Nlc3NUb2tlbjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUhhc2goc2RrKSB7XG4gICAgdmFyIG5hdGl2ZUhpc3RvcnkgPSBzZGsudG9rZW4ucGFyc2VGcm9tVXJsLl9nZXRIaXN0b3J5KCk7XG4gICAgdmFyIG5hdGl2ZURvYyA9IHNkay50b2tlbi5wYXJzZUZyb21VcmwuX2dldERvY3VtZW50KCk7XG4gICAgdmFyIG5hdGl2ZUxvYyA9IHNkay50b2tlbi5wYXJzZUZyb21VcmwuX2dldExvY2F0aW9uKCk7XG4gICAgaWYgKG5hdGl2ZUhpc3RvcnkgJiYgbmF0aXZlSGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgbmF0aXZlSGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbmF0aXZlRG9jLnRpdGxlLCBuYXRpdmVMb2MucGF0aG5hbWUgKyBuYXRpdmVMb2Muc2VhcmNoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5hdGl2ZUxvYy5oYXNoID0gJyc7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlU2VhcmNoKHNkaykge1xuICAgIHZhciBuYXRpdmVIaXN0b3J5ID0gc2RrLnRva2VuLnBhcnNlRnJvbVVybC5fZ2V0SGlzdG9yeSgpO1xuICAgIHZhciBuYXRpdmVEb2MgPSBzZGsudG9rZW4ucGFyc2VGcm9tVXJsLl9nZXREb2N1bWVudCgpO1xuICAgIHZhciBuYXRpdmVMb2MgPSBzZGsudG9rZW4ucGFyc2VGcm9tVXJsLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmIChuYXRpdmVIaXN0b3J5ICYmIG5hdGl2ZUhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIG5hdGl2ZUhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG5hdGl2ZURvYy50aXRsZSwgbmF0aXZlTG9jLnBhdGhuYW1lICsgbmF0aXZlTG9jLmhhc2gpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmF0aXZlTG9jLnNlYXJjaCA9ICcnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE9BdXRoUGFyYW1zU3RyRnJvbVN0b3JhZ2UoKSB7XG4gICAgbGV0IG9hdXRoUGFyYW1zU3RyO1xuICAgIGlmIChicm93c2VyU3RvcmFnZS5icm93c2VySGFzU2Vzc2lvblN0b3JhZ2UoKSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYnJvd3NlclN0b3JhZ2UuZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcbiAgICAgICAgb2F1dGhQYXJhbXNTdHIgPSBzdG9yYWdlLmdldEl0ZW0oUkVESVJFQ1RfT0FVVEhfUEFSQU1TX05BTUUpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oUkVESVJFQ1RfT0FVVEhfUEFSQU1TX05BTUUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb2F1dGhQYXJhbXNTdHIgPSBjb29raWVzLmdldChSRURJUkVDVF9PQVVUSF9QQVJBTVNfTkFNRSk7XG4gICAgICAgIGNvb2tpZXMuZGVsZXRlKFJFRElSRUNUX09BVVRIX1BBUkFNU19OQU1FKTtcbiAgICB9XG4gICAgcmV0dXJuIG9hdXRoUGFyYW1zU3RyO1xufVxuZnVuY3Rpb24gcGFyc2VGcm9tVXJsKHNkaywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmIChpc1N0cmluZyhvcHRpb25zKSkge1xuICAgICAgICBvcHRpb25zID0geyB1cmw6IG9wdGlvbnMgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNBdXRoZW50aWNhdGlvblxuICAgIHZhciBkZWZhdWx0UmVzcG9uc2VNb2RlID0gc2RrLm9wdGlvbnMucGtjZSA/ICdxdWVyeScgOiAnZnJhZ21lbnQnO1xuICAgIHZhciB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB2YXIgcmVzcG9uc2VNb2RlID0gb3B0aW9ucy5yZXNwb25zZU1vZGUgfHwgc2RrLm9wdGlvbnMucmVzcG9uc2VNb2RlIHx8IGRlZmF1bHRSZXNwb25zZU1vZGU7XG4gICAgdmFyIG5hdGl2ZUxvYyA9IHNkay50b2tlbi5wYXJzZUZyb21VcmwuX2dldExvY2F0aW9uKCk7XG4gICAgdmFyIHBhcmFtU3RyO1xuICAgIGlmIChyZXNwb25zZU1vZGUgPT09ICdxdWVyeScpIHtcbiAgICAgICAgcGFyYW1TdHIgPSB1cmwgPyB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKCc/JykpIDogbmF0aXZlTG9jLnNlYXJjaDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmFtU3RyID0gdXJsID8gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZignIycpKSA6IG5hdGl2ZUxvYy5oYXNoO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtU3RyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdVbmFibGUgdG8gcGFyc2UgYSB0b2tlbiBmcm9tIHRoZSB1cmwnKSk7XG4gICAgfVxuICAgIGNvbnN0IG9hdXRoUGFyYW1zU3RyID0gZ2V0T0F1dGhQYXJhbXNTdHJGcm9tU3RvcmFnZSgpO1xuICAgIGlmICghb2F1dGhQYXJhbXNTdHIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ1VuYWJsZSB0byByZXRyaWV2ZSBPQXV0aCByZWRpcmVjdCBwYXJhbXMgZnJvbSBzdG9yYWdlJykpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgb2F1dGhQYXJhbXMgPSBKU09OLnBhcnNlKG9hdXRoUGFyYW1zU3RyKTtcbiAgICAgICAgdmFyIHVybHMgPSBvYXV0aFBhcmFtcy51cmxzO1xuICAgICAgICBkZWxldGUgb2F1dGhQYXJhbXMudXJscztcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSB0aGUgJyArXG4gICAgICAgICAgICBSRURJUkVDVF9PQVVUSF9QQVJBTVNfTkFNRSArICcgdmFsdWUgZnJvbSBzdG9yYWdlOiAnICsgZS5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsUGFyYW1zVG9PYmplY3QocGFyYW1TdHIpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAvLyBDbGVhbiBoYXNoIG9yIHNlYXJjaCBmcm9tIHRoZSB1cmxcbiAgICAgICAgICAgIHJlc3BvbnNlTW9kZSA9PT0gJ3F1ZXJ5JyA/IHJlbW92ZVNlYXJjaChzZGspIDogcmVtb3ZlSGFzaChzZGspO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVPQXV0aFJlc3BvbnNlKHNkaywgb2F1dGhQYXJhbXMsIHJlcywgdXJscyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRVc2VySW5mbyhzZGssIGFjY2Vzc1Rva2VuT2JqZWN0LCBpZFRva2VuT2JqZWN0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gSWYgdG9rZW4gb2JqZWN0cyB3ZXJlIG5vdCBwYXNzZWQsIGF0dGVtcHQgdG8gcmVhZCBmcm9tIHRoZSBUb2tlbk1hbmFnZXJcbiAgICAgICAgaWYgKCFhY2Nlc3NUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5PYmplY3QgPSB5aWVsZCBzZGsudG9rZW5NYW5hZ2VyLmdldChBQ0NFU1NfVE9LRU5fU1RPUkFHRV9LRVkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaWRUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgaWRUb2tlbk9iamVjdCA9IHlpZWxkIHNkay50b2tlbk1hbmFnZXIuZ2V0KElEX1RPS0VOX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuT2JqZWN0IHx8XG4gICAgICAgICAgICAoIWlzVG9rZW4oYWNjZXNzVG9rZW5PYmplY3QpICYmICFhY2Nlc3NUb2tlbk9iamVjdC5hY2Nlc3NUb2tlbiAmJiAhYWNjZXNzVG9rZW5PYmplY3QudXNlcmluZm9VcmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignZ2V0VXNlckluZm8gcmVxdWlyZXMgYW4gYWNjZXNzIHRva2VuIG9iamVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlkVG9rZW5PYmplY3QgfHxcbiAgICAgICAgICAgICghaXNUb2tlbihpZFRva2VuT2JqZWN0KSAmJiAhaWRUb2tlbk9iamVjdC5pZFRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ2dldFVzZXJJbmZvIHJlcXVpcmVzIGFuIElEIHRva2VuIG9iamVjdCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHR0cC5odHRwUmVxdWVzdChzZGssIHtcbiAgICAgICAgICAgIHVybDogYWNjZXNzVG9rZW5PYmplY3QudXNlcmluZm9VcmwsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuT2JqZWN0LmFjY2Vzc1Rva2VuXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih1c2VySW5mbyA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IHJldHVybiB0aGUgdXNlcmluZm8gcmVzcG9uc2UgaWYgc3ViamVjdHMgbWF0Y2ggdG8gbWl0aWdhdGUgdG9rZW4gc3Vic3RpdHV0aW9uIGF0dGFja3NcbiAgICAgICAgICAgIGlmICh1c2VySW5mby5zdWIgPT09IGlkVG9rZW5PYmplY3QuY2xhaW1zLnN1Yikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VySW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdnZXRVc2VySW5mbyByZXF1ZXN0IHdhcyByZWplY3RlZCBkdWUgdG8gdG9rZW4gbWlzbWF0Y2gnKSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci54aHIgJiYgKGVyci54aHIuc3RhdHVzID09PSA0MDEgfHwgZXJyLnhoci5zdGF0dXMgPT09IDQwMykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aGVudGljYXRlSGVhZGVyO1xuICAgICAgICAgICAgICAgIGlmIChlcnIueGhyLmhlYWRlcnMgJiYgaXNGdW5jdGlvbihlcnIueGhyLmhlYWRlcnMuZ2V0KSAmJiBlcnIueGhyLmhlYWRlcnMuZ2V0KCdXV1ctQXV0aGVudGljYXRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlSGVhZGVyID0gZXJyLnhoci5oZWFkZXJzLmdldCgnV1dXLUF1dGhlbnRpY2F0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVyci54aHIuZ2V0UmVzcG9uc2VIZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZUhlYWRlciA9IGVyci54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1dXVy1BdXRoZW50aWNhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZUhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JNYXRjaGVzID0gYXV0aGVudGljYXRlSGVhZGVyLm1hdGNoKC9lcnJvcj1cIiguKj8pXCIvKSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yRGVzY3JpcHRpb25NYXRjaGVzID0gYXV0aGVudGljYXRlSGVhZGVyLm1hdGNoKC9lcnJvcl9kZXNjcmlwdGlvbj1cIiguKj8pXCIvKSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gZXJyb3JNYXRjaGVzWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JEZXNjcmlwdGlvbiA9IGVycm9yRGVzY3JpcHRpb25NYXRjaGVzWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3JEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IE9BdXRoRXJyb3IoZXJyb3IsIGVycm9yRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJldm9rZVRva2VuLCBnZXRUb2tlbiwgZ2V0V2l0aG91dFByb21wdCwgZ2V0V2l0aFBvcHVwLCBnZXRXaXRoUmVkaXJlY3QsIHBhcnNlRnJvbVVybCwgZGVjb2RlVG9rZW4sIHJlbmV3VG9rZW4sIGdldFVzZXJJbmZvLCB2ZXJpZnlUb2tlbiwgaGFuZGxlT0F1dGhSZXNwb25zZSwgcHJlcGFyZVRva2VuUGFyYW1zIH07XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5pbXBvcnQgaHR0cCBmcm9tICcuLi9odHRwJztcbmltcG9ydCB7IGZpbmQsIG9taXQsIHRvUXVlcnlTdHJpbmcsIGNsb25lLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IEF1dGhTZGtFcnJvciBmcm9tICcuLi9lcnJvcnMvQXV0aFNka0Vycm9yJztcbmltcG9ydCB7IGFkZFN0YXRlVG9rZW4gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZ2V0UG9sbEZuIH0gZnJvbSAnLi9wb2xsJztcbmltcG9ydCB7IHBvc3RUb1RyYW5zYWN0aW9uIH0gZnJvbSAnLi9hcGknO1xuZXhwb3J0IGNsYXNzIEF1dGhUcmFuc2FjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc2RrLCByZXMgPSBudWxsKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZmxhdHRlbkVtYmVkZGVkKHNkaywgcmVzLCByZXMsIHt9KSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZVRva2VuO1xuICAgICAgICAgICAgLy8gUkVDT1ZFUllfQ0hBTExFTkdFIGhhcyBzb21lIHJlc3BvbnNlcyB3aXRob3V0IF9saW5rcy5cbiAgICAgICAgICAgIC8vIFdpdGhvdXQgX2xpbmtzLCB3ZSBlbXVsYXRlIGNhbmNlbCB0byBtYWtlIGl0IGludHVpdGl2ZVxuICAgICAgICAgICAgLy8gdG8gcmV0dXJuIHRvIHRoZSBzdGFydGluZyBzdGF0ZS4gV2UgbWF5IHJlbW92ZSB0aGlzXG4gICAgICAgICAgICAvLyB3aGVuIE9LVEEtNzU0MzQgaXMgcmVzb2x2ZWRcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnUkVDT1ZFUllfQ0hBTExFTkdFJyAmJiAhcmVzLl9saW5rcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBBdXRoVHJhbnNhY3Rpb24oc2RrKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGxpbmsyZm4oc2RrLCByZXMsIG9iaiwgbGluaywgcmVmKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGluaykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXV0aFNka0Vycm9yKCdNdXN0IHByb3ZpZGUgYSBsaW5rIG5hbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsayA9IGZpbmQobGluaywgeyBuYW1lOiBuYW1lIH0pO1xuICAgICAgICAgICAgaWYgKCFsaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBdXRoU2RrRXJyb3IoJ05vIGxpbmsgZm91bmQgZm9yIHRoYXQgbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpbmsyZm4oc2RrLCByZXMsIG9iaiwgbGssIHJlZikob3B0cyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGxpbmsuaGludHMgJiZcbiAgICAgICAgbGluay5oaW50cy5hbGxvdyAmJlxuICAgICAgICBsaW5rLmhpbnRzLmFsbG93Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgbWV0aG9kID0gbGluay5oaW50cy5hbGxvd1swXTtcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0dHAuZ2V0KHNkaywgbGluay5ocmVmKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzLGNvbXBsZXhpdHlcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiByZWYuaXNQb2xsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuaXNQb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhZGRTdGF0ZVRva2VuKHJlcywgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnTUZBX0VOUk9MTCcgfHwgcmVzLnN0YXR1cyA9PT0gJ0ZBQ1RPUl9FTlJPTEwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZmFjdG9yVHlwZSBhbmQgcHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvclR5cGU6IG9iai5mYWN0b3JUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBvYmoucHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1dG9QdXNoID0gZGF0YS5hdXRvUHVzaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9QdXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXV0b1B1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXV0b1B1c2ggPSAhIWF1dG9QdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdBdXRvUHVzaCByZXN1bHRlZCBpbiBhbiBlcnJvci4nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXV0b1B1c2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXV0b1B1c2ggPSAhIWF1dG9QdXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG9taXQoZGF0YSwgJ2F1dG9QdXNoJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWVtYmVyRGV2aWNlID0gZGF0YS5yZW1lbWJlckRldmljZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWVtYmVyRGV2aWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVtZW1iZXJEZXZpY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucmVtZW1iZXJEZXZpY2UgPSAhIXJlbWVtYmVyRGV2aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFNka0Vycm9yKCdSZW1lbWJlckRldmljZSByZXN1bHRlZCBpbiBhbiBlcnJvci4nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVtZW1iZXJEZXZpY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucmVtZW1iZXJEZXZpY2UgPSAhIXJlbWVtYmVyRGV2aWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG9taXQoZGF0YSwgJ3JlbWVtYmVyRGV2aWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5wcm9maWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2ZpbGUudXBkYXRlUGhvbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZmlsZS51cGRhdGVQaG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy51cGRhdGVQaG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2ZpbGUgPSBvbWl0KGRhdGEucHJvZmlsZSwgJ3VwZGF0ZVBob25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSBsaW5rLmhyZWYgKyB0b1F1ZXJ5U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0VG9UcmFuc2FjdGlvbihzZGssIGhyZWYsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBsaW5rczJmbnMoc2RrLCByZXMsIG9iaiwgcmVmKSB7XG4gICAgdmFyIGZucyA9IHt9O1xuICAgIGZvciAodmFyIGxpbmtOYW1lIGluIG9iai5fbGlua3MpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLl9saW5rcywgbGlua05hbWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGluayA9IG9iai5fbGlua3NbbGlua05hbWVdO1xuICAgICAgICBpZiAobGlua05hbWUgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgbGlua05hbWUgPSBsaW5rLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmsudHlwZSkge1xuICAgICAgICAgICAgZm5zW2xpbmtOYW1lXSA9IGxpbms7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGxpbmtOYW1lKSB7XG4gICAgICAgICAgICAvLyBwb2xsIGlzIG9ubHkgZm91bmQgYXQgdGhlIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAvLyBsZXZlbCwgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIHRoZSBsaW5rXG4gICAgICAgICAgICBjYXNlICdwb2xsJzpcbiAgICAgICAgICAgICAgICBmbnMucG9sbCA9IGdldFBvbGxGbihzZGssIHJlcywgcmVmKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gbGluazJmbihzZGssIHJlcywgb2JqLCBsaW5rLCByZWYpO1xuICAgICAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgICAgICBmbnNbbGlua05hbWVdID0gZm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbnM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gZmxhdHRlbkVtYmVkZGVkKHNkaywgcmVzLCBvYmosIHJlZikge1xuICAgIG9iaiA9IG9iaiB8fCByZXM7XG4gICAgb2JqID0gY2xvbmUob2JqKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBvYmpBcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbyA9IDAsIG9sID0gb2JqLmxlbmd0aDsgbyA8IG9sOyBvKyspIHtcbiAgICAgICAgICAgIG9iakFyci5wdXNoKGZsYXR0ZW5FbWJlZGRlZChzZGssIHJlcywgb2JqW29dLCByZWYpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqQXJyO1xuICAgIH1cbiAgICB2YXIgZW1iZWRkZWQgPSBvYmouX2VtYmVkZGVkIHx8IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBlbWJlZGRlZCkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbWJlZGRlZCwga2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmxhdHRlbiBhbnkgbmVzdGVkIF9lbWJlZGRlZCBvYmplY3RzXG4gICAgICAgIGlmIChpc09iamVjdChlbWJlZGRlZFtrZXldKSB8fCBBcnJheS5pc0FycmF5KGVtYmVkZGVkW2tleV0pKSB7XG4gICAgICAgICAgICBlbWJlZGRlZFtrZXldID0gZmxhdHRlbkVtYmVkZGVkKHNkaywgcmVzLCBlbWJlZGRlZFtrZXldLCByZWYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvbnZlcnQgYW55IGxpbmtzIG9uIHRoZSBlbWJlZGRlZCBvYmplY3RcbiAgICB2YXIgZm5zID0gbGlua3MyZm5zKHNkaywgcmVzLCBvYmosIHJlZik7XG4gICAgT2JqZWN0LmFzc2lnbihlbWJlZGRlZCwgZm5zKTtcbiAgICBvYmogPSBvbWl0KG9iaiwgJ19lbWJlZGRlZCcsICdfbGlua3MnKTtcbiAgICBPYmplY3QuYXNzaWduKG9iaiwgZW1iZWRkZWQpO1xuICAgIHJldHVybiBvYmo7XG59XG4iLCJleHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TdGF0ZSB7XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5LCBtYXgtc3RhdGVtZW50cyAqL1xuaW1wb3J0IGh0dHAgZnJvbSAnLi4vaHR0cCc7XG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4uL2Vycm9ycy9BdXRoU2RrRXJyb3InO1xuaW1wb3J0IHsgU1RBVEVfVE9LRU5fS0VZX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRkU3RhdGVUb2tlbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBBdXRoVHJhbnNhY3Rpb24gfSBmcm9tICcuL0F1dGhUcmFuc2FjdGlvbic7XG5mdW5jdGlvbiB0cmFuc2FjdGlvblN0YXR1cyhzZGssIGFyZ3MpIHtcbiAgICBhcmdzID0gYWRkU3RhdGVUb2tlbihzZGssIGFyZ3MpO1xuICAgIHJldHVybiBodHRwLnBvc3Qoc2RrLCBzZGsuZ2V0SXNzdWVyT3JpZ2luKCkgKyAnL2FwaS92MS9hdXRobicsIGFyZ3MpO1xufVxuZnVuY3Rpb24gcmVzdW1lVHJhbnNhY3Rpb24oc2RrLCBhcmdzKSB7XG4gICAgaWYgKCFhcmdzIHx8ICFhcmdzLnN0YXRlVG9rZW4pIHtcbiAgICAgICAgdmFyIHN0YXRlVG9rZW4gPSBzZGsudHguZXhpc3RzLl9nZXQoU1RBVEVfVE9LRU5fS0VZX05BTUUpO1xuICAgICAgICBpZiAoc3RhdGVUb2tlbikge1xuICAgICAgICAgICAgYXJncyA9IHtcbiAgICAgICAgICAgICAgICBzdGF0ZVRva2VuOiBzdGF0ZVRva2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ05vIHRyYW5zYWN0aW9uIHRvIHJlc3VtZScpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2RrLnR4LnN0YXR1cyhhcmdzKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aFRyYW5zYWN0aW9uKHNkaywgcmVzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludHJvc3BlY3Qoc2RrLCBhcmdzKSB7XG4gICAgaWYgKCFhcmdzIHx8ICFhcmdzLnN0YXRlVG9rZW4pIHtcbiAgICAgICAgdmFyIHN0YXRlVG9rZW4gPSBzZGsudHguZXhpc3RzLl9nZXQoU1RBVEVfVE9LRU5fS0VZX05BTUUpO1xuICAgICAgICBpZiAoc3RhdGVUb2tlbikge1xuICAgICAgICAgICAgYXJncyA9IHtcbiAgICAgICAgICAgICAgICBzdGF0ZVRva2VuOiBzdGF0ZVRva2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoU2RrRXJyb3IoJ05vIHRyYW5zYWN0aW9uIHRvIGV2YWx1YXRlJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2FjdGlvblN0ZXAoc2RrLCBhcmdzKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aFRyYW5zYWN0aW9uKHNkaywgcmVzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uU3RlcChzZGssIGFyZ3MpIHtcbiAgICBhcmdzID0gYWRkU3RhdGVUb2tlbihzZGssIGFyZ3MpO1xuICAgIC8vIHYxIHBpcGVsaW5lIGludHJvc3BlY3QgQVBJXG4gICAgcmV0dXJuIGh0dHAucG9zdChzZGssIHNkay5nZXRJc3N1ZXJPcmlnaW4oKSArICcvYXBpL3YxL2F1dGhuL2ludHJvc3BlY3QnLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uRXhpc3RzKHNkaykge1xuICAgIC8vIFdlIGhhdmUgYSBjb29raWUgc3RhdGUgdG9rZW5cbiAgICByZXR1cm4gISFzZGsudHguZXhpc3RzLl9nZXQoU1RBVEVfVE9LRU5fS0VZX05BTUUpO1xufVxuZnVuY3Rpb24gcG9zdFRvVHJhbnNhY3Rpb24oc2RrLCB1cmwsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaHR0cC5wb3N0KHNkaywgdXJsLCBhcmdzLCBvcHRpb25zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aFRyYW5zYWN0aW9uKHNkaywgcmVzKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHRyYW5zYWN0aW9uU3RhdHVzLCByZXN1bWVUcmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25FeGlzdHMsIHBvc3RUb1RyYW5zYWN0aW9uLCBpbnRyb3NwZWN0LCB9O1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9BdXRoVHJhbnNhY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xsJztcbmV4cG9ydCAqIGZyb20gJy4vVHJhbnNhY3Rpb25TdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWwnO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuaW1wb3J0IGh0dHAgZnJvbSAnLi4vaHR0cCc7XG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QsIGdldExpbmssIHRvUXVlcnlTdHJpbmcsIGRlbGF5IGFzIGRlbGF5Rm4gfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IERFRkFVTFRfUE9MTElOR19ERUxBWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQXV0aFNka0Vycm9yIGZyb20gJy4uL2Vycm9ycy9BdXRoU2RrRXJyb3InO1xuaW1wb3J0IEF1dGhQb2xsU3RvcEVycm9yIGZyb20gJy4uL2Vycm9ycy9BdXRoUG9sbFN0b3BFcnJvcic7XG5pbXBvcnQgeyBBdXRoVHJhbnNhY3Rpb24gfSBmcm9tICcuL0F1dGhUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBnZXRTdGF0ZVRva2VuIH0gZnJvbSAnLi91dGlsJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2xsRm4oc2RrLCByZXMsIHJlZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVsYXk7XG4gICAgICAgIHZhciByZW1lbWJlckRldmljZTtcbiAgICAgICAgdmFyIGF1dG9QdXNoO1xuICAgICAgICB2YXIgdHJhbnNhY3Rpb25DYWxsQmFjaztcbiAgICAgICAgaWYgKGlzTnVtYmVyKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBkZWxheSA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgZGVsYXkgPSBvcHRpb25zLmRlbGF5O1xuICAgICAgICAgICAgcmVtZW1iZXJEZXZpY2UgPSBvcHRpb25zLnJlbWVtYmVyRGV2aWNlO1xuICAgICAgICAgICAgYXV0b1B1c2ggPSBvcHRpb25zLmF1dG9QdXNoO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25DYWxsQmFjayA9IG9wdGlvbnMudHJhbnNhY3Rpb25DYWxsQmFjaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5ICYmIGRlbGF5ICE9PSAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IERFRkFVTFRfUE9MTElOR19ERUxBWTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHBvbGwgZnVuY3Rpb25cbiAgICAgICAgdmFyIHBvbGxMaW5rID0gZ2V0TGluayhyZXMsICduZXh0JywgJ3BvbGwnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICAgICAgZnVuY3Rpb24gcG9sbEZuKCkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXV0b1B1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmF1dG9QdXNoID0gISFhdXRvUHVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignQXV0b1B1c2ggcmVzdWx0ZWQgaW4gYW4gZXJyb3IuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF1dG9QdXNoICE9PSB1bmRlZmluZWQgJiYgYXV0b1B1c2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmF1dG9QdXNoID0gISFhdXRvUHVzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVtZW1iZXJEZXZpY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLnJlbWVtYmVyRGV2aWNlID0gISFyZW1lbWJlckRldmljZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhTZGtFcnJvcignUmVtZW1iZXJEZXZpY2UgcmVzdWx0ZWQgaW4gYW4gZXJyb3IuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlbWVtYmVyRGV2aWNlICE9PSB1bmRlZmluZWQgJiYgcmVtZW1iZXJEZXZpY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvcHRzLnJlbWVtYmVyRGV2aWNlID0gISFyZW1lbWJlckRldmljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBocmVmID0gcG9sbExpbmsuaHJlZiArIHRvUXVlcnlTdHJpbmcob3B0cyk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cC5wb3N0KHNkaywgaHJlZiwgZ2V0U3RhdGVUb2tlbihyZXMpLCB7XG4gICAgICAgICAgICAgICAgc2F2ZUF1dGhuU3RhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZWYuaXNQb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJldHJ5Q291bnQgPSAwO1xuICAgICAgICB2YXIgcmVjdXJzaXZlUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBwb2xsIHdhcyBtYW51YWxseSBzdG9wcGVkIGR1cmluZyB0aGUgZGVsYXlcbiAgICAgICAgICAgIGlmICghcmVmLmlzUG9sbGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFBvbGxTdG9wRXJyb3IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9sbEZuKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocG9sbFJlcykge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG91ciByZXRyeSBjb3VudGVyIG9uIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICByZXRyeUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBzdGlsbCB3YWl0aW5nXG4gICAgICAgICAgICAgICAgaWYgKHBvbGxSZXMuZmFjdG9yUmVzdWx0ICYmIHBvbGxSZXMuZmFjdG9yUmVzdWx0ID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHBvbGwgd2FzIG1hbnVhbGx5IHN0b3BwZWQgd2hpbGUgdGhlIHBvbGxGbiB3YXMgY2FsbGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVmLmlzUG9sbGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhQb2xsU3RvcEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2FjdGlvbkNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkNhbGxCYWNrKHBvbGxSZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHBvbGxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5Rm4oZGVsYXkpLnRoZW4ocmVjdXJzaXZlUG9sbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbnkgbm9uLXdhaXRpbmcgcmVzdWx0LCBldmVuIGlmIHBvbGxpbmcgd2FzIHN0b3BwZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVyaW5nIGEgcmVxdWVzdCwgd2lsbCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcmVmLmlzUG9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dGhUcmFuc2FjdGlvbihzZGssIHBvbGxSZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmLCB1cCB0byAxNiBzZWNvbmRzXG4gICAgICAgICAgICAgICAgaWYgKGVyci54aHIgJiZcbiAgICAgICAgICAgICAgICAgICAgKGVyci54aHIuc3RhdHVzID09PSAwIHx8IGVyci54aHIuc3RhdHVzID09PSA0MjkpICYmXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5Q291bnQgPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsYXlMZW5ndGggPSBNYXRoLnBvdygyLCByZXRyeUNvdW50KSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5Rm4oZGVsYXlMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZWN1cnNpdmVQb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZWN1cnNpdmVQb2xsKClcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZWYuaXNQb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkU3RhdGVUb2tlbihyZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYnVpbHRBcmdzID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihidWlsdEFyZ3MsIG9wdGlvbnMpO1xuICAgIC8vIEFkZCB0aGUgc3RhdGVUb2tlbiBpZiBvbmUgaXNuJ3QgcGFzc2VkIGFuZCB3ZSBoYXZlIG9uZVxuICAgIGlmICghYnVpbHRBcmdzLnN0YXRlVG9rZW4gJiYgcmVzLnN0YXRlVG9rZW4pIHtcbiAgICAgICAgYnVpbHRBcmdzLnN0YXRlVG9rZW4gPSByZXMuc3RhdGVUb2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWx0QXJncztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZVRva2VuKHJlcykge1xuICAgIHJldHVybiBhZGRTdGF0ZVRva2VuKHJlcyk7XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4vKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyB0eXBlIFN0b3JhZ2VCdWlsZGVyID0gKHN0b3JhZ2U6IFN0b3JhZ2UgfCBTaW1wbGVTdG9yYWdlLCBuYW1lOiBzdHJpbmcpID0+IFN0b3JhZ2VQcm92aWRlcjtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9rZW4ob2JqKSB7XG4gICAgaWYgKG9iaiAmJlxuICAgICAgICAob2JqLmFjY2Vzc1Rva2VuIHx8IG9iai5pZFRva2VuKSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KG9iai5zY29wZXMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBY2Nlc3NUb2tlbihvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5hY2Nlc3NUb2tlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lEVG9rZW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouaWRUb2tlbjtcbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIE9rdGEsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhlIE9rdGEgc29mdHdhcmUgYWNjb21wYW5pZWQgYnkgdGhpcyBub3RpY2UgaXMgcHJvdmlkZWQgcHVyc3VhbnQgdG8gdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZS5cIilcbiAqXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBPa3RhLCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoZSBPa3RhIHNvZnR3YXJlIGFjY29tcGFuaWVkIGJ5IHRoaXMgbm90aWNlIGlzIHByb3ZpZGVkIHB1cnN1YW50IHRvIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2UuXCIpXG4gKlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICpcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vQ29va2llcyc7XG5leHBvcnQgKiBmcm9tICcuL2h0dHAnO1xuZXhwb3J0ICogZnJvbSAnLi9KV1QnO1xuZXhwb3J0ICogZnJvbSAnLi9PQXV0aCc7XG5leHBvcnQgKiBmcm9tICcuL09rdGFBdXRoT3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL1N0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9Ub2tlbic7XG5leHBvcnQgKiBmcm9tICcuL1VzZXJDbGFpbXMnO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgT2t0YSwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGUgT2t0YSBzb2Z0d2FyZSBhY2NvbXBhbmllZCBieSB0aGlzIG5vdGljZSBpcyBwcm92aWRlZCBwdXJzdWFudCB0byB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlLlwiKVxuICpcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAuXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVRcbiAqIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgYnRvYSwgYXRvYiAqL1xuLy8gY29udmVydHMgYSBzdHJpbmcgdG8gYmFzZTY0ICh1cmwvZmlsZW5hbWUgc2FmZSB2YXJpYW50KVxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvQmFzZTY0VXJsKHN0cikge1xuICAgIHZhciBiNjQgPSBidG9hKHN0cik7XG4gICAgcmV0dXJuIGJhc2U2NFRvQmFzZTY0VXJsKGI2NCk7XG59XG4vLyBjb252ZXJ0cyBhIHN0YW5kYXJkIGJhc2U2NC1lbmNvZGVkIHN0cmluZyB0byBhIFwidXJsL2ZpbGVuYW1lIHNhZmVcIiB2YXJpYW50XG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9CYXNlNjRVcmwoYjY0KSB7XG4gICAgcmV0dXJuIGI2NC5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKS5yZXBsYWNlKC89KyQvLCAnJyk7XG59XG4vLyBjb252ZXJ0cyBhIFwidXJsL2ZpbGVuYW1lIHNhZmVcIiBiYXNlNjQgc3RyaW5nIHRvIGEgXCJzdGFuZGFyZFwiIGJhc2U2NCBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxUb0Jhc2U2NChiNjR1KSB7XG4gICAgcmV0dXJuIGI2NHUucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxUb1N0cmluZyhiNjR1KSB7XG4gICAgdmFyIGI2NCA9IGJhc2U2NFVybFRvQmFzZTY0KGI2NHUpO1xuICAgIHN3aXRjaCAoYjY0Lmxlbmd0aCAlIDQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGI2NCArPSAnPT0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGI2NCArPSAnPSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93ICdOb3QgYSB2YWxpZCBCYXNlNjRVcmwnO1xuICAgIH1cbiAgICB2YXIgdXRmOCA9IGF0b2IoYjY0KTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh1dGY4KSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB1dGY4O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0J1ZmZlcihzdHIpIHtcbiAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoc3RyLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnVmZmVyW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VXJsRGVjb2RlKHN0cikge1xuICAgIHJldHVybiBhdG9iKGJhc2U2NFVybFRvQmFzZTY0KHN0cikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQoZm4sIGN0eCkge1xuICAgIHZhciBhZGRpdGlvbmFsQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBhcmdzID0gYWRkaXRpb25hbEFyZ3MuY29uY2F0KGFyZ3MpO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY3R4LCBhcmdzKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVcmwodXJsKSB7XG4gICAgcmV0dXJuIC9eKD86W2Etel0rOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzb1RvVVRDU3RyaW5nKHN0cikge1xuICAgIHZhciBwYXJ0cyA9IHN0ci5tYXRjaCgvXFxkKy9nKSwgaXNvVGltZSA9IERhdGUuVVRDKHBhcnRzWzBdLCBwYXJ0c1sxXSAtIDEsIHBhcnRzWzJdLCBwYXJ0c1szXSwgcGFydHNbNF0sIHBhcnRzWzVdKSwgaXNvRGF0ZSA9IG5ldyBEYXRlKGlzb1RpbWUpO1xuICAgIHJldHVybiBpc29EYXRlLnRvVVRDU3RyaW5nKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhvYmopIHtcbiAgICB2YXIgc3RyID0gW107XG4gICAgaWYgKG9iaiAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJlxuICAgICAgICAgICAgICAgIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0ci5wdXNoKGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdHIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnPycgKyBzdHIuam9pbignJicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5SYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgdmFyIHJhbmRvbUNoYXJzZXQgPSAnYWJjZGVmZ2hpamtsbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OSc7XG4gICAgdmFyIHJhbmRvbSA9ICcnO1xuICAgIGZvciAodmFyIGMgPSAwLCBjbCA9IHJhbmRvbUNoYXJzZXQubGVuZ3RoOyBjIDwgbGVuZ3RoOyArK2MpIHtcbiAgICAgICAgcmFuZG9tICs9IHJhbmRvbUNoYXJzZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2wpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmRvbTtcbn1cbi8vIFRPRE86IHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgd2l0aCBgT2JqZWN0LmFzc2lnbmAgdGhlbiByZW1vdmUgdGhpcyBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICAvLyBGaXJzdCBvYmplY3Qgd2lsbCBiZSBtb2RpZmllZCFcbiAgICB2YXIgb2JqMSA9IGFyZ3VtZW50c1swXTtcbiAgICAvLyBQcm9wZXJ0aWVzIGZyb20gb3RoZXIgb2JqZWN0cyB3aWxsIGJlIGNvcGllZCBvdmVyXG4gICAgdmFyIG9iakFycmF5ID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIG9iakFycmF5LmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgLy8gY29weSBvdmVyIGFsbCBwcm9wZXJ0aWVzIHdpdGggZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSAmJiBvYmpbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9iajFbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqMTsgLy8gcmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOaWxzKG9iaikge1xuICAgIHZhciBjbGVhbmVkID0ge307XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvYmpbcHJvcF07XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNsZWFuZWRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xlYW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICAgIHZhciBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vLyBBbmFsb2dvdXMgdG8gXy5vbWl0XG5leHBvcnQgZnVuY3Rpb24gb21pdChvYmosIC4uLnByb3BzKSB7XG4gICAgLy8gdmFyIHByb3BzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgbmV3b2JqID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHApICYmIHByb3BzLmluZGV4T2YocCkgPT0gLTEpIHtcbiAgICAgICAgICAgIG5ld29ialtwXSA9IG9ialtwXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmUobmV3b2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGNvbGxlY3Rpb24sIHNlYXJjaFBhcmFtcykge1xuICAgIHZhciBjID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgd2hpbGUgKGMtLSkge1xuICAgICAgICB2YXIgaXRlbSA9IGNvbGxlY3Rpb25bY107XG4gICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWFyY2hQYXJhbXMsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbVtwcm9wXSAhPT0gc2VhcmNoUGFyYW1zW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmsob2JqLCBsaW5rTmFtZSwgYWx0TmFtZSkge1xuICAgIGlmICghb2JqIHx8ICFvYmouX2xpbmtzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxpbmsgPSBjbG9uZShvYmouX2xpbmtzW2xpbmtOYW1lXSk7XG4gICAgLy8gSWYgYSBsaW5rIGhhcyBhIG5hbWUgYW5kIHdlIGhhdmUgYW4gYWx0TmFtZSwgcmV0dXJuIGlmIHRoZXkgbWF0Y2hcbiAgICBpZiAobGluayAmJiBsaW5rLm5hbWUgJiYgYWx0TmFtZSkge1xuICAgICAgICBpZiAobGluay5uYW1lID09PSBhbHROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbGluaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUNvbnNvbGUoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuY29uc29sZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uc29sZSgpIHtcbiAgICB2YXIgbmF0aXZlQ29uc29sZSA9IGdldE5hdGl2ZUNvbnNvbGUoKTtcbiAgICBpZiAobmF0aXZlQ29uc29sZSAmJiBuYXRpdmVDb25zb2xlLmxvZykge1xuICAgICAgICByZXR1cm4gbmF0aXZlQ29uc29sZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9nOiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm4odGV4dCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBnZXRDb25zb2xlKCkubG9nKCdbb2t0YS1hdXRoLXNka10gV0FSTjogJyArIHRleHQpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUodGV4dCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBnZXRDb25zb2xlKCkubG9nKCdbb2t0YS1hdXRoLXNka10gREVQUkVDQVRJT046ICcgKyB0ZXh0KTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlV3JhcCh0ZXh0LCBmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlcHJlY2F0ZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHN0cmluZ1xuICAgIHZhciB0cmltbWVkID0gcGF0aC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwgJycpO1xuICAgIC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaChlcylcbiAgICB0cmltbWVkID0gdHJpbW1lZC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICByZXR1cm4gdHJpbW1lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lFMTFPckxlc3MoKSB7XG4gICAgcmV0dXJuICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8PSAxMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuICEhZm4gJiYge30udG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLmZpbmFsbHkgJiYgKHR5cGVvZiBvYmouZmluYWxseSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVGdW5jdGlvbjsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlRnVuY3Rpb25cIik7XG5cbnZhciBjb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwidmFyIF9fc2VsZl9fID0gKGZ1bmN0aW9uIChyb290KSB7XG5mdW5jdGlvbiBGKCkge1xudGhpcy5mZXRjaCA9IGZhbHNlO1xudGhpcy5ET01FeGNlcHRpb24gPSByb290LkRPTUV4Y2VwdGlvblxufVxuRi5wcm90b3R5cGUgPSByb290O1xucmV0dXJuIG5ldyBGKCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG4oZnVuY3Rpb24oc2VsZikge1xuXG52YXIgaXJyZWxldmFudCA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjpcbiAgICAgICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmXG4gICAgICAnQmxvYicgaW4gc2VsZiAmJlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge307XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdO1xuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ107XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWw7XG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdDtcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsO1xuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsO1xuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KTtcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICAgIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpO1xuICAgIHByZVByb2Nlc3NlZEhlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSyc7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KTtcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpO1xuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH07XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJztcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfTtcblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfTtcblxuICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IHNlbGYuRE9NRXhjZXB0aW9uO1xuICB0cnkge1xuICAgIG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSk7XG4gICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgfTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gZXhwb3J0cy5ET01FeGNlcHRpb247XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcblxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KTtcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xuXG4gIGlmICghc2VsZi5mZXRjaCkge1xuICAgIHNlbGYuZmV0Y2ggPSBmZXRjaDtcbiAgICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzO1xuICAgIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gICAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICB9XG5cbiAgZXhwb3J0cy5IZWFkZXJzID0gSGVhZGVycztcbiAgZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgZXhwb3J0cy5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICBleHBvcnRzLmZldGNoID0gZmV0Y2g7XG5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oe30pKTtcbn0pKF9fc2VsZl9fKTtcbmRlbGV0ZSBfX3NlbGZfXy5mZXRjaC5wb2x5ZmlsbFxuZXhwb3J0cyA9IF9fc2VsZl9fLmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5kZWZhdWx0ID0gX19zZWxmX18uZmV0Y2ggLy8gRm9yIFR5cGVTY3JpcHQgY29uc3VtZXJzIHdpdGhvdXQgZXNNb2R1bGVJbnRlcm9wLlxuZXhwb3J0cy5mZXRjaCA9IF9fc2VsZl9fLmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IHtmZXRjaH0gZnJvbSAnY3Jvc3MtZmV0Y2gnXG5leHBvcnRzLkhlYWRlcnMgPSBfX3NlbGZfXy5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBfX3NlbGZfXy5SZXF1ZXN0XG5leHBvcnRzLlJlc3BvbnNlID0gX19zZWxmX18uUmVzcG9uc2Vcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1xuIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZFxuXG5cdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRyZXN1bHQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG5cdFx0XHQvLyBjYWxsaW5nIFwiZ2V0KClcIlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5qc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iXSwic291cmNlUm9vdCI6IiJ9