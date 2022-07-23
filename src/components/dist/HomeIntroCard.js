"use strict";
exports.__esModule = true;
var react_1 = require("react");
var create_and_share_jpg_1 = require("./../images/home/desktop/create-and-share.jpg");
var beautiful_stories_jpg_1 = require("./../images/home/desktop/beautiful-stories.jpg");
var designed_for_everyone_jpg_1 = require("./../images/home/desktop/designed-for-everyone.jpg");
var create_and_share_jpg_2 = require("./../images/home/tablet/create-and-share.jpg");
var beautiful_stories_jpg_2 = require("./../images/home/tablet/beautiful-stories.jpg");
var designed_for_everyone_jpg_2 = require("./../images/home/tablet/designed-for-everyone.jpg");
var create_and_share_jpg_3 = require("./../images/home/mobile/create-and-share.jpg");
var beautiful_stories_jpg_3 = require("./../images/home/mobile/beautiful-stories.jpg");
var designed_for_everyone_jpg_3 = require("./../images/home/mobile/designed-for-everyone.jpg");
var material_1 = require("@mui/material");
var Button_1 = require("./Button");
require("./styles/button.css");
var arrow_svg_1 = require("./../images/shared/desktop/arrow.svg");
var arrow_copy_svg_1 = require("./../images/shared/desktop/arrow copy.svg");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function HomeIntroCard(props) {
    var IntroIMGD = [create_and_share_jpg_1["default"], beautiful_stories_jpg_1["default"], designed_for_everyone_jpg_1["default"]];
    var IntroIMGT = [create_and_share_jpg_2["default"], beautiful_stories_jpg_2["default"], designed_for_everyone_jpg_2["default"]];
    var IntroIMGM = [create_and_share_jpg_3["default"], beautiful_stories_jpg_3["default"], designed_for_everyone_jpg_3["default"]];
    var Arrows = [arrow_copy_svg_1["default"], arrow_svg_1["default"]];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', className: props.classes, "data-aos": 'fade-up', "data-aos-duration": '1500' },
            react_1["default"].createElement(material_1.Grid, { item: true, lg: 7, sm: 5, xs: 12, className: 'img-col' },
                react_1["default"].createElement("img", { loading: "lazy", src: IntroIMGD[props.index], srcSet: IntroIMGM[props.index] + " 756w, " + IntroIMGD[props.index] + " 1500w, " + IntroIMGT[props.index] + " 1280w", alt: "" })),
            react_1["default"].createElement(material_1.Grid, { item: true, lg: 5, sm: 7, xs: 12, className: 'text-col' },
                react_1["default"].createElement("h2", null, props.title),
                react_1["default"].createElement("p", null, props.text),
                react_1["default"].createElement(Button_1.Button, { buttonSize: 'btn--wide', buttonStyle: props.btnStyle, link: props.link, type: 'button' },
                    react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 8 }, props.btn),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("img", { loading: "lazy", src: Arrows[props.arrow], alt: "arrow" }))))))));
}
exports["default"] = HomeIntroCard;
