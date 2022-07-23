"use strict";
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
require("./styles/button.css");
var react_router_dom_1 = require("react-router-dom");
var STYLES = ['btn--primary', 'btn--outline', 'btn--read', 'btn--read--light'];
var SIZES = ['btn--medium', 'btn-large', 'btn--wide'];
exports.Button = function (_a) {
    var children = _a.children, type = _a.type, onClick = _a.onClick, buttonStyle = _a.buttonStyle, buttonSize = _a.buttonSize, link = _a.link;
    var checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    var checkButtonSize = SIZES.includes(buttonSize
        ? buttonSize
        : SIZES[0]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, link ?
        react_1["default"].createElement(react_router_dom_1.NavLink, { to: link },
            react_1["default"].createElement("button", { className: "btn " + checkButtonStyle + " " + checkButtonSize, onClick: onClick, type: type }, children)) :
        react_1["default"].createElement("button", { className: "btn " + checkButtonStyle + " " + checkButtonSize, onClick: onClick, type: type }, children)));
};
