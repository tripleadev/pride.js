/* eslint-disable */
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createElement } from 'react';
import _ from 'lodash';
import chroma from 'chroma-js';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var HelloText = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rainbow {\n    0% {\n      color: ", ";\n    }\n    33% {\n      color: ", ";\n    }\n    66% {\n      color: ", ";\n    }\n    100% {\n      color: ", ";\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n  font-weight: bold;\n  font-size: 3em;\n  color: ", ";\n"], ["\n  @keyframes rainbow {\n    0% {\n      color: ", ";\n    }\n    33% {\n      color: ", ";\n    }\n    66% {\n      color: ", ";\n    }\n    100% {\n      color: ", ";\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n  font-weight: bold;\n  font-size: 3em;\n  color: ", ";\n"])), function (props) { return props.theme.colors.red; }, function (props) { return props.theme.colors.blue; }, function (props) { return props.theme.colors.green; }, function (props) { return props.theme.colors.red; }, function (props) { return props.theme.colors.red; });
var templateObject_1;

var Hello = function (_a) {
    var children = _a.children;
    if (typeof children !== 'string') {
        throw new Error("You can only pass a string as Hello's children");
    }
    return createElement(HelloText, null,
        "hello, ",
        children);
};

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

var css = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&display=swap&subset=latin-ext');\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n";
styleInject(css);

var GlobalStyles = createGlobalStyle(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n  }\n"])), function (props) { return props.theme.bg; }, function (props) { return props.theme.fg; });
var templateObject_1$1;

var theme = {
    colors: {
        gray: { 1: '#333333', 2: '#4f4f4f', 3: '#828282', 4: '#bdbdbd', 5: '#e0e0e0', 6: '#f2f2f2' },
        red: '#eb5757',
        orange: '#f2994a',
        yellow: '#f2c94c',
        darkGreen: '#219653',
        green: '#27ae60',
        lightGreen: '#6fcf97',
        darkBlue: '#2f80ed',
        blue: '#2d9cdb',
        lightBlue: '#56ccf2',
        purpule: '#9b51e0',
        lightPurpule: '#bb6bd9',
        black: '#050505',
    },
    mq: {
        mobile: '@media (max-width: 575.98px)',
        small: '@media (max-width: 767.98px)',
        medium: '@media (max-width: 991.98px)',
        large: '@media (max-width: 1199.98px)',
    },
};

var PrideProvider = function (_a) {
    var children = _a.children, _b = _a.theme, mode = _b === void 0 ? 'light' : _b;
    var theme$$1 = __assign({ bg: mode === 'light' ? 'white' : theme.colors.black, fg: mode !== 'light' ? 'white' : theme.colors.black, mode: mode }, theme);
    return (createElement(ThemeProvider, { theme: theme$$1 },
        createElement(GlobalStyles, null),
        children));
};

function getColor(theme, color) {
    if (color && !_.has(theme.colors, color)) {
        throw new Error("Given color is not valid. Give name of one of predefined pride.js colors");
    }
    return color ? _.get(theme.colors, color, theme.colors.gray['1']) : theme.colors.red;
}

function modifyColor(action, color, amount) {
    // @ts-ignore
    return new chroma(color)[action](amount).hex();
}

var PrideButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: inline-block;\n  outline: none;\n  padding: 10px 15px;\n  background-color: ", ";\n  border: 2px solid ", ";\n  color: ", ";\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 5px;\n  transition: background-color 0.3s, border 0.3s, color 0.3s;\n\n  :hover {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"], ["\n  display: inline-block;\n  outline: none;\n  padding: 10px 15px;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  color: ",
    ";\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 5px;\n  transition: background-color 0.3s, border 0.3s, color 0.3s;\n\n  :hover {\n    background-color: ",
    ";\n    border-color: ",
    ";\n  }\n"])), function (props) {
    return props.mode === 'contained'
        ? getColor(props.theme, props.color)
        : props.theme.bg;
}, function (props) { return getColor(props.theme, props.color); }, function (props) {
    return props.mode === 'contained'
        ? 'white'
        : modifyColor('darken', getColor(props.theme, props.color), 0.5);
}, function (props) {
    return props.mode === 'contained'
        ? modifyColor('darken', getColor(props.theme, props.color), 0.5)
        : modifyColor('alpha', getColor(props.theme, props.color), 0.15);
}, function (props) {
    return props.mode === 'contained' && modifyColor('darken', getColor(props.theme, props.color), 0.5);
});
var templateObject_1$2;

var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (createElement(PrideButton, __assign({}, props), children));
};

// Components

export { Hello, PrideProvider, Button, theme };
