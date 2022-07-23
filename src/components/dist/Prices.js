"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material/");
require("./styles/buttonPrices.css");
/* import {useLovelySwitchStyles} from '@mui-treasury/styles/switch/lovely'; */
require("./styles/App.css");
var ButtonPrices_1 = require("./ButtonPrices");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function Prices() {
    var _a = react_1.useState(false), checked = _a[0], setCheck = _a[1];
    /* const lovelyStyles = useLovelySwitchStyles(); */
    var handleClick = function () {
        console.log(checked);
        setCheck(!checked);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "pricing-section" },
            react_1["default"].createElement("div", { className: "pricing-wrapper" },
                react_1["default"].createElement(material_1.Grid, { className: 'switch', component: "label", container: true, alignItems: "center", spacing: 1 },
                    react_1["default"].createElement(material_1.Grid, { item: true, className: 'options' }, "Monthly"),
                    react_1["default"].createElement(material_1.Grid, { item: true },
                        react_1["default"].createElement(material_1.Switch
                        /* classes={ lovelyStyles }*/
                        , { 
                            /* classes={ lovelyStyles }*/
                            checked: checked, onClick: handleClick, name: "checked" })),
                    react_1["default"].createElement(material_1.Grid, { item: true, className: 'options' }, "Yearly")),
                react_1["default"].createElement("div", { className: "pricing-container", style: {
                        display: !checked
                            ? 'flex'
                            : 'flex'
                    } },
                    react_1["default"].createElement("div", { className: "pricing-container-card", "data-aos": 'fade-up', "data-aos-duration": '1500' },
                        react_1["default"].createElement("div", { className: "pricing-container-cardInfo" },
                            react_1["default"].createElement("h3", { className: 'light' }, "Basic"),
                            react_1["default"].createElement("p", { className: 'text' }, "Includes basic usage of our platform. Recommended for new and aspiring photographers."),
                            react_1["default"].createElement("h2", { className: 'light' }, checked
                                ? '$190.00'
                                : '$19.99'),
                            react_1["default"].createElement("p", null,
                                "per ",
                                checked ? 'year' : 'month'),
                            react_1["default"].createElement(ButtonPrices_1.ButtonPrices, { buttonSize: 'btnP--wide', buttonStyle: 'btnP--primary', type: 'button', link: '' }, "PICK PLAN"))),
                    react_1["default"].createElement("div", { className: "pricing-container-card", "data-aos": 'fade-up', "data-aos-duration": '1500' },
                        react_1["default"].createElement("div", { className: "pricing-container-cardInfo" },
                            react_1["default"].createElement("h3", null, "Pro"),
                            react_1["default"].createElement("p", { className: 'text' }, "More advanced features available. Recommended for photography veterans and professionals."),
                            react_1["default"].createElement("h2", null, checked ? '$390.00' : '$39.99'),
                            react_1["default"].createElement("p", null,
                                "per ",
                                checked ? 'year' : 'month'),
                            react_1["default"].createElement(ButtonPrices_1.ButtonPrices, { buttonSize: 'btnP--wide', buttonStyle: 'btnP--outline', type: 'button', link: '' }, "PICK PLAN"))),
                    react_1["default"].createElement("div", { className: "pricing-container-card", "data-aos": 'fade-up', "data-aos-duration": '1500' },
                        react_1["default"].createElement("div", { className: "pricing-container-cardInfo" },
                            react_1["default"].createElement("h3", { className: 'light' }, "Business"),
                            react_1["default"].createElement("p", { className: 'text' }, "Additional features available such as more detailed metrics. Recommended for business owners."),
                            react_1["default"].createElement("h2", { className: 'light' }, checked ? '$990.00' : '$99.99'),
                            react_1["default"].createElement("p", null,
                                "per ",
                                checked ? 'year' : 'month'),
                            react_1["default"].createElement(ButtonPrices_1.ButtonPrices, { buttonSize: 'btnP--wide', buttonStyle: 'btnP--primary', type: 'button', link: '' }, "PICK PLAN"))))))));
}
exports["default"] = Prices;
