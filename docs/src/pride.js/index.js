/* eslint-disable */
import styled from 'styled-components';
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

var HelloText = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rainbow {\n    0% {\n      color: red;\n    }\n    33% {\n      color: green;\n    }\n    66% {\n      color: blue;\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n"], ["\n  @keyframes rainbow {\n    0% {\n      color: red;\n    }\n    33% {\n      color: green;\n    }\n    66% {\n      color: blue;\n    }\n  }\n\n  animation: rainbow 3s ease-in-out infinite;\n"])));
var templateObject_1;

var Hello = function (_a) {
    var name = _a.name;
    return (createElement("div", null,
        createElement(HelloText, null,
            "hello, ",
            name)));
};

export { Hello };
