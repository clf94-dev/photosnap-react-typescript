"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var responsive_svg_1 = require("./../images/features/desktop/responsive.svg");
var no_limit_svg_1 = require("./../images/features/desktop/no-limit.svg");
var embed_svg_1 = require("./../images/features/desktop/embed.svg");
var custom_domain_svg_1 = require("./../images/features/desktop/custom-domain.svg");
var boost_exposure_svg_1 = require("./../images/features/desktop/boost-exposure.svg");
var drag_drop_svg_1 = require("./../images/features/desktop/drag-drop.svg");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function FeatureCard(props) {
    var featIMGD = [responsive_svg_1["default"], no_limit_svg_1["default"], embed_svg_1["default"], custom_domain_svg_1["default"], boost_exposure_svg_1["default"], drag_drop_svg_1["default"]];
    return (react_1["default"].createElement(material_1.Grid, { item: true, lg: 4, md: props.home ? 4 : 6, sm: props.home ? 6 : 12, xs: 12, className: 'feat-card', "data-aos": 'fade-up', "data-aos-duration": '1500' },
        react_1["default"].createElement("img", { loading: "lazy", src: featIMGD[props.index], alt: "" }),
        react_1["default"].createElement("h3", null, props.title),
        react_1["default"].createElement("p", null, props.text)));
}
exports["default"] = FeatureCard;
