webpackHotUpdate("main",{

/***/ "./react-client/src/Components/RaiseFundPage.jsx":
/*!*******************************************************!*\
  !*** ./react-client/src/Components/RaiseFundPage.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/';\n\nvar RaiseFundPage = function (_Component) {\n    _inherits(RaiseFundPage, _Component);\n\n    function RaiseFundPage() {\n        _classCallCheck(this, RaiseFundPage);\n\n        var _this = _possibleConstructorReturn(this, (RaiseFundPage.__proto__ || Object.getPrototypeOf(RaiseFundPage)).call(this));\n\n        _this.state = {\n            title: '',\n            description: '',\n            amount_goal: '',\n            date_goal: '',\n            creator_address: '',\n            category: 1\n        };\n        return _this;\n    }\n\n    _createClass(RaiseFundPage, [{\n        key: 'onSubmit',\n        value: function onSubmit(e) {\n            e.preventDefault();\n            // // get our form data out of state\n            // const { title, description, amount_goal, date_goal, creator_address } = this.state;\n\n            // axios.post(API, { title, description, amount_goal, date_goal, creator_address })\n            //   .then((result) => {\n            //     console.log(result);\n            //   });\n            var title = document.getElementById('title').value;\n            var description = document.getElementById('description').value;\n            var amount_goal = document.getElementById('amount_goal').value;\n            var date_goal = document.getElementById('date_goal').value;\n            var creator_address = document.getElementById('creator_address').value;\n\n            fetch(API, {\n                method: 'POST',\n                headers: {\n                    'Access-Control-Allow-Origin': '*',\n                    'Content-Type': 'application/json',\n                    'Accept': 'application/json'\n                },\n                body: _defineProperty({ title: title, description: description, amount_goal: amount_goal, date_goal: date_goal, creator_address: creator_address }, 'creator_address', creator_address)\n            }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                return console.log(data);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state = this.state,\n                title = _state.title,\n                description = _state.description,\n                amount_goal = _state.amount_goal,\n                date_goal = _state.date_goal,\n                creator_address = _state.creator_address;\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'title:',\n                            _react2.default.createElement('input', { type: 'text', name: 'title', id: 'title' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'description:',\n                            _react2.default.createElement('textarea', { name: 'description', id: 'description' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'goal amount:',\n                            _react2.default.createElement('input', { type: 'text', name: 'amount_goal', id: 'amount_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'date_goal:',\n                            _react2.default.createElement('input', { type: 'text', name: 'date_goal', id: 'date_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'wallet address:',\n                            _react2.default.createElement('input', { type: 'text', name: 'creator_address', id: 'creator_address' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RaiseFundPage;\n}(_react.Component);\n\nexports.default = RaiseFundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvUmFpc2VGdW5kUGFnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL1JhaXNlRnVuZFBhZ2UuanN4PzhmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEFQSSA9ICdodHRwOi8vc2FtdS5sb2NhbHR1bm5lbC5tZS9hcGkvcHJvamVjdHMvJztcclxuXHJcbmNsYXNzIFJhaXNlRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBhbW91bnRfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGRhdGVfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0b3JfYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gLy8gZ2V0IG91ciBmb3JtIGRhdGEgb3V0IG9mIHN0YXRlXHJcbiAgICAgICAgLy8gY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsLCBkYXRlX2dvYWwsIGNyZWF0b3JfYWRkcmVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBheGlvcy5wb3N0KEFQSSwgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsLCBkYXRlX2dvYWwsIGNyZWF0b3JfYWRkcmVzcyB9KVxyXG4gICAgICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudF9nb2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudF9nb2FsJykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkYXRlX2dvYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZV9nb2FsJykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdG9yX2FkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRvcl9hZGRyZXNzJykudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChBUEksIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5Ont0aXRsZTp0aXRsZSwgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsOmFtb3VudF9nb2FsLCBkYXRlX2dvYWw6ZGF0ZV9nb2FsLCBjcmVhdG9yX2FkZHJlc3MsIGNyZWF0b3JfYWRkcmVzc31cclxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gIGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBhbW91bnRfZ29hbCwgZGF0ZV9nb2FsLCBjcmVhdG9yX2FkZHJlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1lbGVtZW50cyB0b3AtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWwgYW1vdW50OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRfZ29hbFwiIGlkPVwiYW1vdW50X2dvYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVfZ29hbDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGF0ZV9nb2FsXCIgaWQ9XCJkYXRlX2dvYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldCBhZGRyZXNzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWF0b3JfYWRkcmVzc1wiIGlkPVwiY3JlYXRvcl9hZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSYWlzZUZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9CQTtBQURBO0FBb0NBOzs7O0FBakZBO0FBQ0E7QUFrRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/RaiseFundPage.jsx\n");

/***/ })

})