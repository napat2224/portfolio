import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import style from "./styles/Intro.module.css";
export default function Intro() {
    return (_jsxs("div", { className: style.root, children: [_jsx("h1", { children: "HI i'm Napat" }), _jsx("p", { children: "You are in my portfolio website" }), _jsx("p", { children: "I made this website to learn how to build a website using React and TypeScript. This website may have out of theme design to let me try new things." }), _jsx("h1", { children: "** This website is under development **" }), _jsx("p", { children: "Use a desktop device to get the full experience." }), _jsxs("div", { className: style.btn_container, children: [_jsx("a", { className: style.btn, href: "https://github.com/napat2224", target: "_blank", rel: "noopener noreferrer", children: "github" }), _jsx(Link, { to: "/project", className: style.btn, children: "Previous Projects" }), _jsx(Link, { to: "/profile", className: style.btn, children: "Profile" })] })] }));
}
