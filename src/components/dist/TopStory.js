"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
require("./styles/App.css");
var moon_of_appalacia_jpg_1 = require("./../images/stories/desktop/moon-of-appalacia.jpg");
var moon_of_appalacia_jpg_2 = require("./../images/stories/tablet/moon-of-appalacia.jpg");
var moon_of_appalacia_jpg_3 = require("./../images/stories/mobile/moon-of-appalacia.jpg");
var arrow_copy_svg_1 = require("./../images/shared/desktop/arrow copy.svg");
var Button_1 = require("./Button");
require("./styles/button.css");
function TopStory() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', className: 'topStory-cont' },
            react_1["default"].createElement(material_1.Grid, { item: true, sm: 6, xs: 12, className: 'text-col' },
                react_1["default"].createElement("h3", { className: 'intro-p' }, "Last month's featured story"),
                react_1["default"].createElement("h2", null, "Hazy full moon of Appalachia"),
                react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                    react_1["default"].createElement("p", null, "March 2nd 2020"),
                    react_1["default"].createElement("p", { className: 'author-p' }, "by John Appleseed")),
                react_1["default"].createElement("p", null, "The dissected plateau area, while not actually made up of geological mountains, is popularly called \"mountains,\" especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."),
                react_1["default"].createElement(Button_1.Button, { buttonSize: 'btn--wide', buttonStyle: 'btn--read', type: 'button', link: '' },
                    react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 8 }, "READ THE STORY"),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("img", { loading: "lazy", src: arrow_copy_svg_1["default"], alt: "arrow" }))))),
            react_1["default"].createElement(material_1.Grid, { item: true, md: 6, xs: 12, className: 'img-col' },
                react_1["default"].createElement("img", { loading: "lazy", src: moon_of_appalacia_jpg_1["default"], srcSet: moon_of_appalacia_jpg_3["default"] + " 756w, " + moon_of_appalacia_jpg_1["default"] + " 1500w, " + moon_of_appalacia_jpg_2["default"] + " 1280w", alt: "moon of appalacia" })))));
}
exports["default"] = TopStory;
