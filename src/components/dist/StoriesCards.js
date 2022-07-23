"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HomeStoryCard_1 = require("./HomeStoryCard");
var material_1 = require("@mui/material");
require("./styles/App.css");
var FullStoriesData_1 = require("./FullStoriesData");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function StoriesCards() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row', "data-aos": 'fade-up', "data-aos-duration": '1500' }, FullStoriesData_1.FullStoriesData.map(function (item) {
            return (react_1["default"].createElement(HomeStoryCard_1["default"], { key: item.index, date: "" + item.date, index: item.index, title: item.title, author: item.author, alt: item.imgALT, btnStyle: item.btnStyle, arrow: item.arrow, link: item.link }));
        }))));
}
exports["default"] = StoriesCards;
