webpackHotUpdate("main",{

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'samu.localtunnel.me/api/projects';\n\nvar FundPage = function (_Component) {\n  _inherits(FundPage, _Component);\n\n  function FundPage(props) {\n    _classCallCheck(this, FundPage);\n\n    var _this = _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).call(this, props));\n\n    _this.state = {\n      projects: [],\n      isLoading: false,\n      error: null\n    };\n    return _this;\n  }\n\n  _createClass(FundPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.setState({ isLoading: true });\n\n      _axios2.default.get(API).then(function (result) {\n        return _this2.setState({\n          projects: result.data.projects,\n          isLoading: false\n        });\n      }).catch(function (error) {\n        return _this2.setState({\n          error: error,\n          isLoading: false\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          projects = _state.projects,\n          isLoading = _state.isLoading,\n          error = _state.error;\n\n\n      if (error) {\n        return _react2.default.createElement(\n          'p',\n          null,\n          error.message\n        );\n      }\n\n      if (isLoading) {\n        return _react2.default.createElement(\n          'p',\n          null,\n          'Loading ...'\n        );\n      }\n\n      return _react2.default.createElement(\n        'ul',\n        null,\n        hits.map(function (projects) {\n          return _react2.default.createElement(\n            'li',\n            { key: projects.title },\n            _react2.default.createElement(\n              'a',\n              { href: projects.title },\n              projects.title\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBUEkgPSAnc2FtdS5sb2NhbHR1bm5lbC5tZS9hcGkvcHJvamVjdHMnO1xyXG5cclxuY2xhc3MgRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgcHJvamVjdHM6IFtdLFxyXG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgICAgIGF4aW9zLmdldChBUEkpXHJcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByb2plY3RzOiByZXN1bHQuZGF0YS5wcm9qZWN0cyxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHByb2plY3RzLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nIC4uLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtoaXRzLm1hcChwcm9qZWN0cyA9PlxyXG4gICAgICAgICAgPGxpIGtleT17cHJvamVjdHMudGl0bGV9PlxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0cy50aXRsZX0+e3Byb2plY3RzLnRpdGxlfTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQVFBOzs7O0FBN0NBO0FBQ0E7QUE4Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})