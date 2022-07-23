"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var bg_beta_jpg_1 = require("./../images/shared/desktop/bg-beta.jpg");
var bg_beta_jpg_2 = require("./../images/shared/mobile/bg-beta.jpg");
var bg_beta_jpg_3 = require("./../images/shared/tablet/bg-beta.jpg");
/* import ArrowD from './../images/shared/desktop/arrow.svg' */
var arrow_copy_svg_1 = require("./../images/shared/desktop/arrow copy.svg");
var Button_1 = require("./Button");
require("./styles/button.css");
/* import zIndex from '@mui/material/styles/zIndex' */
function Cta() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, className: 'cta-cont' },
            react_1["default"].createElement("div", { className: 'imgCta' },
                react_1["default"].createElement("img", { loading: "lazy", src: bg_beta_jpg_1["default"], srcSet: bg_beta_jpg_2["default"] + " 756w, " + bg_beta_jpg_1["default"] + " 1500w, " + bg_beta_jpg_3["default"] + " 1280w", alt: "beta bag" })),
            react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', className: 'cta-content' },
                react_1["default"].createElement(material_1.Grid, { item: true, md: 6, xs: 12 },
                    react_1["default"].createElement("h2", null, "We're in Beta. Get your invite today!")),
                react_1["default"].createElement(material_1.Grid, { item: true, md: 6, xs: 12 },
                    react_1["default"].createElement(Button_1.Button, { buttonSize: 'btn--wide', buttonStyle: 'btn--read', type: 'button', link: '' },
                        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 8 }, "GET AN INVITE"),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                                react_1["default"].createElement("img", { loading: "lazy", src: arrow_copy_svg_1["default"], alt: "arrow" })))))))));
}
exports["default"] = Cta;
