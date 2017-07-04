"use strict";function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}Object.defineProperty(exports, "__esModule", { value: !0 });var _extends2 = require("babel-runtime/helpers/extends"),_extends3 = _interopRequireDefault(_extends2),_getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf),_classCallCheck2 = require("babel-runtime/helpers/classCallCheck"),_classCallCheck3 = _interopRequireDefault(_classCallCheck2),_createClass2 = require("babel-runtime/helpers/createClass"),_createClass3 = _interopRequireDefault(_createClass2),_possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2),_inherits2 = require("babel-runtime/helpers/inherits"),_inherits3 = _interopRequireDefault(_inherits2),_class,_mjmlCore = require("mjml-core"),_react = require("react"),_react2 = _interopRequireDefault(_react),_mjmlColumn = require("mjml-column"),_mjmlColumn2 = _interopRequireDefault(_mjmlColumn),_mjmlSection = require("mjml-section"),_mjmlSection2 = _interopRequireDefault(_mjmlSection),_mjmlText = require("mjml-text"),_mjmlText2 = _interopRequireDefault(_mjmlText),_wichevr = require("wichevr"),_wichevr2 = _interopRequireDefault(_wichevr),tagName = "mj-focus-detail",parentTag = ["mj-container"],endingTag = !1,defaultMJMLDefinition = { content: "", attributes: { title: "Title", label: "Label", value: "Value", "label-color": "#dd5454", "value-color": "#f95f5d" } },FocusDetail = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {function FocusDetail() {return (0, _classCallCheck3.default)(this, FocusDetail), (0, _possibleConstructorReturn3.default)(this, (FocusDetail.__proto__ || (0, _getPrototypeOf2.default)(FocusDetail)).apply(this, arguments));}return (0, _inherits3.default)(FocusDetail, _Component), (0, _createClass3.default)(FocusDetail, [{ key: "render", value: function render() {var mjAttribute = this.props.mjAttribute;return _react2.default.createElement(_mjmlSection2.default, (0, _extends3.default)({}, this.props, { padding: "0px 0px 0px 0px", "background-color": mjAttribute("value-color") }), _react2.default.createElement(_mjmlColumn2.default, { width: "30%", "background-color": mjAttribute("label-color") }, _react2.default.createElement(_mjmlText2.default, { "font-size": "11px", "font-weight": "500", "letter-spacing": "0.3px" }, (0, _wichevr2.default)(mjAttribute("title"), mjAttribute("label")))), _react2.default.createElement(_mjmlColumn2.default, { width: "70%", "background-color": mjAttribute("value-color") }, _react2.default.createElement(_mjmlText2.default, { "font-size": "15px", "text-transform": "uppercase", "letter-spacing": "1px" }, mjAttribute("value"))));} }]), FocusDetail;}(_react.Component)) || _class;FocusDetail.tagName = tagName, FocusDetail.parentTag = parentTag, FocusDetail.endingTag = endingTag, FocusDetail.defaultMJMLDefinition = defaultMJMLDefinition, exports.default = FocusDetail;
//# sourceMappingURL=focus-detail.js.map

//# sourceMappingURL=focus-detail.support.js.map