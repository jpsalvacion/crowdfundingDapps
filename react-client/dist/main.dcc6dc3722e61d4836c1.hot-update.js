webpackHotUpdate("main",{

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/';\n\nvar FundPage = function (_Component) {\n  _inherits(FundPage, _Component);\n\n  function FundPage(props) {\n    _classCallCheck(this, FundPage);\n\n    var _this = _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).call(this, props));\n\n    _this.state = {\n      error: null,\n      isLoaded: false,\n      items: []\n    };\n    return _this;\n  }\n\n  _createClass(FundPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(API).then(function (res) {\n        return res.json();\n      }).then(function (result) {\n        console.log(result);\n        _this2.setState({\n          isLoaded: true,\n          items: result\n        });\n      },\n      // Note: it's important to handle errors here\n      // instead of a catch() block so that we don't swallow\n      // exceptions from actual bugs in components.\n      function (error) {\n        _this2.setState({\n          isLoaded: true,\n          error: error\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          error = _state.error,\n          isLoaded = _state.isLoaded,\n          items = _state.items;\n\n      if (error) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          'Error: ',\n          error.message\n        );\n      } else if (!isLoaded) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          'Loading...'\n        );\n      } else {\n        return _react2.default.createElement(\n          'ul',\n          null,\n          items.map(function (item) {\n            return _react2.default.createElement(\n              'li',\n              { key: item.title },\n              _react2.default.createElement(\n                'a',\n                null,\n                _react2.default.createElement(\n                  'h2',\n                  null,\n                  item.title\n                )\n              ),\n              item.status == 1 && _react2.default.createElement(\n                'p',\n                { className: 'project-status' },\n                'On going | date created: ',\n                item.date_created,\n                ', goal date: ',\n                item.date_goal\n              ),\n              item.description\n            );\n          })\n        );\n      }\n    }\n  }]);\n\n  return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQVBJID0gJ2h0dHA6Ly9zYW11LmxvY2FsdHVubmVsLm1lL2FwaS9wcm9qZWN0cy8nO1xyXG5cclxuY2xhc3MgRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGZldGNoKEFQSSlcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAgICAgICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvciwgaXNMb2FkZWQsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGE+PGgyPntpdGVtLnRpdGxlfTwvaDI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdGF0dXMgPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3Qtc3RhdHVzXCI+T24gZ29pbmcgfCBkYXRlIGNyZWF0ZWQ6IHtpdGVtLmRhdGVfY3JlYXRlZH0sIGdvYWwgZGF0ZToge2l0ZW0uZGF0ZV9nb2FsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFMQTtBQURBO0FBREE7QUFZQTtBQUNBOzs7O0FBeERBO0FBQ0E7QUF5REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})