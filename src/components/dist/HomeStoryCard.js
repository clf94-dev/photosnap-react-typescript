"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StoriesImg_1 = require("./StoriesImg");
var StoriesImgMob_1 = require("./StoriesImgMob");
var arrow_svg_1 = require("./../images/shared/desktop/arrow.svg");
var arrow_copy_svg_1 = require("./../images/shared/desktop/arrow copy.svg");
var material_1 = require("@mui/material/");
var Button_1 = require("./Button");
require("./styles/button.css");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function HomeStoryCard(props) {
    var HomeStoriesIMGD = [
        StoriesImg_1.Mountains,
        StoriesImg_1.Sunset,
        StoriesImg_1.Voyage,
        StoriesImg_1.Architec,
        StoriesImg_1.World,
        StoriesImg_1.Corners,
        StoriesImg_1.King,
        StoriesImg_1.Nowhere,
        StoriesImg_1.Rage,
        StoriesImg_1.Free,
        StoriesImg_1.Waves,
        StoriesImg_1.Waters,
        StoriesImg_1.Milky,
        StoriesImg_1.Forest,
        StoriesImg_1.Beauty,
        StoriesImg_1.Dreams
    ];
    var HomeStoriesIMGM = [
        StoriesImgMob_1.MountainsM,
        StoriesImgMob_1.SunsetM,
        StoriesImgMob_1.VoyageM,
        StoriesImgMob_1.ArchitecM,
        StoriesImgMob_1.WorldM,
        StoriesImgMob_1.CornersM,
        StoriesImgMob_1.KingM,
        StoriesImgMob_1.NowhereM,
        StoriesImgMob_1.RageM,
        StoriesImgMob_1.FreeM,
        StoriesImgMob_1.WavesM,
        StoriesImgMob_1.WatersM,
        StoriesImgMob_1.MilkyM,
        StoriesImgMob_1.ForestM,
        StoriesImgMob_1.BeautyM,
        StoriesImgMob_1.DreamsM
    ];
    var Arrows = [arrow_copy_svg_1["default"], arrow_svg_1["default"]];
    return (react_1["default"].createElement(material_1.Grid, { item: true, lg: 3, md: 3, sm: 6, xs: 12, className: 'story-cont' },
        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
            react_1["default"].createElement("div", { className: 'storyCol' },
                react_1["default"].createElement("img", { loading: "lazy", src: HomeStoriesIMGD[props.index], srcSet: HomeStoriesIMGM[props.index] + " 756w, " + HomeStoriesIMGD[props.index] + " 1500w, " + HomeStoriesIMGD[props.index] + " 1280w", alt: props.alt }),
                react_1["default"].createElement("div", { className: 'text-col' },
                    react_1["default"].createElement("h4", null, props.date),
                    react_1["default"].createElement("h3", null, props.title),
                    react_1["default"].createElement("h4", null, props.author),
                    react_1["default"].createElement("hr", null),
                    react_1["default"].createElement(Button_1.Button, { buttonSize: 'btn--wide', buttonStyle: props.btnStyle, link: props.link, type: 'submit' },
                        react_1["default"].createElement(material_1.Grid, { container: true, direction: 'row' },
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 9 }, "READ STORY"),
                            react_1["default"].createElement(material_1.Grid, { item: true, xs: 3 },
                                react_1["default"].createElement("img", { loading: "lazy", src: Arrows[props.arrow], alt: "arrow" })))))))));
}
exports["default"] = HomeStoryCard;
