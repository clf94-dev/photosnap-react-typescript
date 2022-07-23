"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var logo_svg_1 = require("./../images/shared/desktop/logo.svg");
require("./styles/App.css");
function Navbar(_a) {
    var active = _a.active;
    var _b = react_1.useState(false), click = _b[0], setClick = _b[1];
    var handleClick = function () { return setClick(!click); };
    var closeMobileMenu = function () { return setClick(false); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("nav", { className: "navbar" },
            react_1["default"].createElement("div", { className: "navbar-container" },
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/", className: 'navbar-logo', onClick: closeMobileMenu },
                    react_1["default"].createElement("img", { loading: "lazy", src: logo_svg_1["default"], alt: "logo" })),
                react_1["default"].createElement("div", { className: "menu-icon", onClick: handleClick },
                    react_1["default"].createElement("i", { className: click
                            ? 'fas fa-times'
                            : 'fas fa-bars' })),
                react_1["default"].createElement("ul", { className: click
                        ? 'nav-menu active'
                        : 'nav-menu' },
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/stories', className: 'nav-links', onClick: closeMobileMenu, style: { color: active === "stories" ? '#5fb4a2' : '#203A4C' } }, "Stories")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/features', className: 'nav-links', onClick: closeMobileMenu, style: { color: active === "features" ? '#5fb4a2' : '#203A4C' } }, "Features")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/pricing', className: 'nav-links', onClick: closeMobileMenu, style: { color: active === "pricing" ? '#5fb4a2' : '#203A4C' } }, "Pricing")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("button", { className: 'mobile-btn' }, "Get an Invite"))),
                react_1["default"].createElement("button", { className: 'desktop-btn' }, "Get an Invite"))),
        react_1["default"].createElement(react_router_dom_1.Outlet, null)));
}
exports["default"] = Navbar;
