"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var Stories_1 = require("./pages/Stories");
var Features_1 = require("./pages/Features");
var Pricing_1 = require("./pages/Pricing");
var Navbar_1 = require("./components/Navbar");
var Footer_1 = require("./components/Footer");
var react_router_dom_2 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_router_dom_2.BrowserRouter, null,
    react_1["default"].createElement(Navbar_1["default"], { active: 'home' }),
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/stories", element: react_1["default"].createElement(Stories_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/features", element: react_1["default"].createElement(Features_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/pricing", element: react_1["default"].createElement(Pricing_1["default"], null) })),
    react_1["default"].createElement(Footer_1["default"], null)));
