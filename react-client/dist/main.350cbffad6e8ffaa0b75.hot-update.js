webpackHotUpdate("main",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'samu.localtunnel.me/api/projects';\n\nvar FundPage = function (_Component) {\n  _inherits(FundPage, _Component);\n\n  function FundPage(props) {\n    _classCallCheck(this, FundPage);\n\n    var _this = _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).call(this, props));\n\n    _this.state = {\n      error: null,\n      isLoaded: false,\n      items: []\n    };\n    return _this;\n  }\n\n  _createClass(FundPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"https://api.example.com/items\").then(function (res) {\n        return res.json();\n      }).then(function (result) {\n        _this2.setState({\n          isLoaded: true,\n          items: result.items\n        });\n      },\n      // Note: it's important to handle errors here\n      // instead of a catch() block so that we don't swallow\n      // exceptions from actual bugs in components.\n      function (error) {\n        _this2.setState({\n          isLoaded: true,\n          error: error\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          error = _state.error,\n          isLoaded = _state.isLoaded,\n          items = _state.items;\n\n      if (error) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          'Error: ',\n          error.message\n        );\n      } else if (!isLoaded) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          'Loading...'\n        );\n      } else {\n        return _react2.default.createElement(\n          'ul',\n          null,\n          items.map(function (item) {\n            return _react2.default.createElement(\n              'li',\n              { key: item.name },\n              item.name,\n              ' ',\n              item.price\n            );\n          })\n        );\n      }\n    }\n  }]);\n\n  return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jb25zdCBBUEkgPSAnc2FtdS5sb2NhbHR1bm5lbC5tZS9hcGkvcHJvamVjdHMnO1xyXG5cclxuY2xhc3MgRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vaXRlbXNcIilcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlc3VsdC5pdGVtc1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0ge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGdW5kUGFnZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTs7OztBQWpEQTtBQUNBO0FBa0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})