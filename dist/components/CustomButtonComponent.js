"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ border, color, children, height, onClick, radius, width }) => {
    return (react_1.default.createElement("button", { onClick: onClick, style: {
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width
        } }, children));
};
exports.default = Button;
