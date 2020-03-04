/* eslint-disable */
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var HelloText = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rainbow {\n    0% {\n      color: red;\n    }\n    33% {\n      color: green;\n    }\n    66% {\n      color: blue;\n    }\n    100% {\n      color: red;\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n  font-weight: bold;\n  font-size: 3em;\n  color: red;\n"], ["\n  @keyframes rainbow {\n    0% {\n      color: red;\n    }\n    33% {\n      color: green;\n    }\n    66% {\n      color: blue;\n    }\n    100% {\n      color: red;\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n  font-weight: bold;\n  font-size: 3em;\n  color: red;\n"])));
var templateObject_1;
//# sourceMappingURL=Hello.styles.js.map

var Hello = function (_a) {
    var name = _a.name;
    return createElement(HelloText, null,
        "hello, ",
        name);
};
//# sourceMappingURL=Hello.js.map

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&display=swap&subset=latin-ext');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n";
styleInject(css);

var GlobalStyles = createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  body {\n    font-family: 'Roboto', sans-serif;\n    background-color: ", ";\n    color: ", "\n  }\n"], ["\n  body {\n    font-family: 'Roboto', sans-serif;\n    background-color: ", ";\n    color: ", "\n  }\n"])), function (props) { return props.theme.bg; }, function (props) { return props.theme.fg; });
var templateObject_1$1;
//# sourceMappingURL=GlobalStyles.js.map

var PrideProvider = function (_a) {
    var children = _a.children, _b = _a.theme, mode = _b === void 0 ? 'light' : _b;
    var theme = {
        bg: mode === 'light' ? 'white' : 'black',
        fg: mode === 'light' ? 'white' : 'black',
        mq: {
            mobile: '@media (max-width: 575.98px)',
            small: '@media (max-width: 767.98px)',
            medium: '@media (max-width: 991.98px)',
            large: '@media (max-width: 1199.98px)',
        },
    };
    return (createElement(ThemeProvider, { theme: theme },
        createElement(GlobalStyles, null),
        children));
};
//# sourceMappingURL=PrideProvider.js.map

//# sourceMappingURL=index.js.map

export { Hello, PrideProvider };
