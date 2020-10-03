/* eslint-disable */
import { createElement } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import _ from 'lodash';
import chroma from 'chroma-js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

var css_248z = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&display=swap&subset=latin-ext');\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n";
styleInject(css_248z);

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
    var theme$1 = __assign({ bg: mode === 'light' ? 'white' : theme.colors.black, fg: mode !== 'light' ? 'white' : theme.colors.black, mode: mode }, theme);
    return (createElement(ThemeProvider, { theme: theme$1 },
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

var PrideH1 = styled.h1(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var PrideH2 = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var PrideH3 = styled.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var PrideH4 = styled.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var PrideH5 = styled.h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var PrideH6 = styled.h6(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ",
    ";\n"])), function (props) {
    return props.color
        ? getColor(props.theme, props.color)
        : props.theme.fg;
});
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Heading = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    switch (props.size) {
        case 2:
            return createElement(PrideH2, null, children);
        case 3:
            return createElement(PrideH3, null, children);
        case 4:
            return createElement(PrideH4, null, children);
        case 5:
            return createElement(PrideH5, null, children);
        case 6:
            return createElement(PrideH6, null, children);
        default:
            return createElement(PrideH1, null, children);
    }
};

export { Button, Heading, Hello, PrideProvider, theme };
