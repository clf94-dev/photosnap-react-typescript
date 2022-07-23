"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var IntroData_1 = require("./IntroData");
var hero_jpg_1 = require("./../images/features/desktop/hero.jpg");
var hero_jpg_2 = require("./../images/pricing/desktop/hero.jpg");
var hero_jpg_3 = require("./../images/features/mobile/hero.jpg");
var hero_jpg_4 = require("./../images/pricing/mobile/hero.jpg");
var hero_jpg_5 = require("./../images/features/tablet/hero.jpg");
var hero_jpg_6 = require("./../images/pricing/tablet/hero.jpg");
require("./styles/App.css");
function IntroFeatPric(props) {
    var IntroImgD = [hero_jpg_1["default"], hero_jpg_2["default"]];
    var IntroImgT = [hero_jpg_5["default"], hero_jpg_6["default"]];
    var IntroImgM = [hero_jpg_3["default"], hero_jpg_4["default"]];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', className: 'feat-pric-intro' },
            react_1["default"].createElement(material_1.Grid, { item: true, lg: 5, sm: 7, xs: 12, className: 'text-col' },
                react_1["default"].createElement("h2", null, IntroData_1.IntroData[props.index].title),
                react_1["default"].createElement("p", null, IntroData_1.IntroData[props.index].text)),
            react_1["default"].createElement(material_1.Grid, { item: true, lg: 7, sm: 5, xs: 12, className: 'img-col' },
                react_1["default"].createElement("img", { loading: "lazy", src: IntroImgD[props.index], srcSet: IntroImgM[props.index] + " 756w, " + IntroImgD[props.index] + " 1500w, " + IntroImgT[props.index] + " 1280w", alt: "" })))));
}
exports["default"] = IntroFeatPric;
