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
*/ 
 
import { MJMLElement } from "mjml-core"; 
import React, { Component } from "react"; 
import Column from "mjml-column"; 
import Section from "mjml-section"; 
import Text from "mjml-text"; 
import wichevr from "wichevr"; 
 
const tagName = "mj-focus-detail"; 
 
const parentTag = ["mj-container"]; 
 
const endingTag = false; 
 
const defaultMJMLDefinition = { 
  "content": "", 
  "attributes": { 
    "title": "Title", 
    "label": "Label", 
    "value": "Value", 
    "label-color": "gray", 
    "value-color": "white" 
  }, 
}; 
 
@MJMLElement 
class FocusDetail extends Component { 
  render() { 
    const { mjAttribute } = this.props; 
 
    return ( <Section { ...this.props } 
      padding="0px 0px 0px 0px" 
      background-color={mjAttribute("value-color")}> 
      <Column width="30%" 
        background-color={mjAttribute("label-color")}> 
        <Text 
          font-size="11px" 
          font-weight="500" 
          letter-spacing="0.3px"> 
          {wichevr(mjAttribute("title"), mjAttribute("label"))} 
        </Text> 
      </Column> 
      <Column 
        width="70%" 
        background-color={mjAttribute("value-color")}> 
        <Text 
          font-size="15px" 
          text-transform="uppercase" 
          letter-spacing="1px"> 
          {mjAttribute("value")} 
        </Text> 
      </Column> 
    </Section>); 
  } 
} 
 
FocusDetail.tagName = tagName; 
FocusDetail.parentTag = parentTag; 
FocusDetail.endingTag = endingTag; 
FocusDetail.defaultMJMLDefinition = defaultMJMLDefinition; 
 
export default FocusDetail; 