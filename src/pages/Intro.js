import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import style from "./styles/Intro.module.css";
export default function Intro() {
    return (_jsxs("div", { className: style.root, children: [_jsx("h1", { children: "HI i'm Napat" }), _jsx("p", { children: "you are in my portfolio website" }), _jsx("p", { children: "I made this website to learn how to build a website useing react and typescript" }), _jsx("h1", { children: "** this website is under develop **" }), _jsxs("div", { className: style.btn_container, children: [_jsx("a", { className: style.btn, href: "https://github.com/napat2224", target: "_blank", rel: "noopener noreferrer", children: "github" }), _jsx(Link, { to: "/project", className: style.btn, children: "Previous Projects" })] })] }));
}
