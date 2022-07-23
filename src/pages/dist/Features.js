"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Cta_1 = require("../components/Cta");
var FullFeatures_1 = require("./../components/FullFeatures");
var IntroFeatPric_1 = require("./../components/IntroFeatPric");
function Features() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(IntroFeatPric_1["default"], { index: '0' }),
        react_1["default"].createElement(FullFeatures_1["default"], null),
        react_1["default"].createElement(Cta_1["default"], null)));
}
exports["default"] = Features;
