"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var logo_copy_svg_1 = require("./../images/shared/desktop/logo copy.svg");
var Button_1 = require("./Button");
require("./styles/button.css");
var arrow_copy_svg_1 = require("./../images/shared/desktop/arrow copy.svg");
function Footer() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', className: 'footer-cont' },
            react_1["default"].createElement(material_1.Grid, { item: true, direction: 'column', md: 3, xs: 12 },
                react_1["default"].createElement("img", { loading: "lazy", src: logo_copy_svg_1["default"], alt: "logo" }),
                react_1["default"].createElement(material_1.Grid, { direction: 'row', className: 'social-row' },
                    react_1["default"].createElement("i", { className: 'fab fa-facebook faceb fa-gradient' }),
                    react_1["default"].createElement("i", { className: 'fab fa-youtube yout' }),
                    react_1["default"].createElement("i", { className: 'fab fa-twitter twitt' }),
                    react_1["default"].createElement("i", { className: 'fab fa-pinterest pint' }),
                    react_1["default"].createElement("i", { className: 'fab fa-instagram instag' }))),
            react_1["default"].createElement(material_1.Grid, { item: true, direction: 'column', md: 3, xs: 12, className: 'footer-links' },
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/', className: 'single-link' },
                    react_1["default"].createElement("p", null, "Home")),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/stories', className: 'single-link' },
                    react_1["default"].createElement("p", null, "Stories")),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/features', className: 'single-link' },
                    react_1["default"].createElement("p", null, "Features")),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/pricing', className: 'single-link' },
                    react_1["default"].createElement("p", null, "Pricing"))),
            react_1["default"].createElement(material_1.Grid, { item: true, direction: 'column', md: 3, xs: 12 }),
            react_1["default"].createElement(material_1.Grid, { item: true, direction: 'column', md: 3, xs: 12, className: 'copy-col' },
                react_1["default"].createElement(Button_1.Button, { buttonSize: 'btn--wide', buttonStyle: 'btn--read', link: '', type: 'button' },
                    react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 8 }, "GET AN INVITE"),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("img", { loading: "lazy", src: arrow_copy_svg_1["default"], alt: "arrow" })))),
                react_1["default"].createElement("p", null, "Copyright 2019. All Rights Reserved")))));
}
exports["default"] = Footer;
