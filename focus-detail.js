"use strict";

/*;
  @module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
  @end-module-license

  @module-configuration:
	{
	  "package": "focus-detail",
	  "path": "focus-detail/focus-detail.jsx",
	  "file": "focus-detail.jsx",
	  "module": "focus-detail",
	  "author": "Biyaheroes Developers",
	  "contributors": [
		"Robot Biyaheroes <robot@biyaheroes.com>",
		"Vinse Vinalon <vinsevinalon@gmail.com>"
	  ],
	  "eMail": "developers@biyaheroes.com",
	  "repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
	  "global": true
	}
  @end-module-configuration

  @module-documentation:
	Biyaheroes MJML Focus Detail Component
  @end-module-documentation

  @include:
	{
	  "MJMLElement": "mjml-core",
	  "React": "react",
	  "Component": "react.Component",
	  "Column": "mjml-column",
	  "Table": "mjml-table",
	  "wichevr": "wichevr"
	}
  @end-include
*/Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require("babel-runtime/helpers/extends");var _extends3=_interopRequireDefault(_extends2);var _jsx2=require("babel-runtime/helpers/jsx");var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _class;

var _mjmlCore=require("mjml-core");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _mjmlColumn=require("mjml-column");var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlSection=require("mjml-section");var _mjmlSection2=_interopRequireDefault(_mjmlSection);
var _mjmlText=require("mjml-text");var _mjmlText2=_interopRequireDefault(_mjmlText);
var _wichevr=require("wichevr");var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-focus-detail";

var parentTag=["mj-container"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"title":"Title",
"label":"Label",
"value":"Value",
"label-color":"#dd5454",
"value-color":"#f95f5d"}};var




FocusDetail=(0,_mjmlCore.MJMLElement)(_class=function(_Component){(0,_inherits3.default)(FocusDetail,_Component);function FocusDetail(){(0,_classCallCheck3.default)(this,FocusDetail);return(0,_possibleConstructorReturn3.default)(this,(FocusDetail.__proto__||(0,_getPrototypeOf2.default)(FocusDetail)).apply(this,arguments));}(0,_createClass3.default)(FocusDetail,[{key:"render",value:function render()
{var
mjAttribute=this.props.mjAttribute;

return(
_react2.default.createElement(_mjmlSection2.default,(0,_extends3.default)({},
this.props,{
padding:"0px 0px 0px 0px",
"background-color":mjAttribute("value-color")}),(0,_jsx3.default)(_mjmlColumn2.default,{width:

"30%","background-color":
mjAttribute("label-color")},void 0,(0,_jsx3.default)(_mjmlText2.default,{"font-size":


"11px","font-weight":
"500","letter-spacing":
"0.3px"},void 0,
(0,_wichevr2.default)(mjAttribute("title"),mjAttribute("label")))),(0,_jsx3.default)(_mjmlColumn2.default,{width:



"70%","background-color":
mjAttribute("value-color")},void 0,(0,_jsx3.default)(_mjmlText2.default,{"font-size":


"15px","text-transform":
"uppercase","letter-spacing":
"1px"},void 0,
mjAttribute("value")))));



}}]);return FocusDetail;}(_react.Component))||_class;


FocusDetail.tagName=tagName;
FocusDetail.parentTag=parentTag;
FocusDetail.endingTag=endingTag;
FocusDetail.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

FocusDetail;

//# sourceMappingURL=focus-detail.js.map