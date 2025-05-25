"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const CreatureDisplayComponent_1 = __importDefault(require("./components/CreatureDisplayComponent"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CreatureDisplayComponent_1.default, null)));
}
exports.default = App;
