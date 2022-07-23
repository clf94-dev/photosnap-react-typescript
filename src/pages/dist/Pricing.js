"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Cta_1 = require("../components/Cta");
var IntroFeatPric_1 = require("../components/IntroFeatPric");
var Prices_1 = require("../components/Prices");
function Pricing() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(IntroFeatPric_1["default"], { index: '1' }),
        react_1["default"].createElement(Prices_1["default"], null),
        react_1["default"].createElement(Cta_1["default"], null)));
}
exports["default"] = Pricing;
