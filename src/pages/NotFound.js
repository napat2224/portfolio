import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import style from "./styles/NotFound.module.css";
export default function NotFound() {
    return (_jsx("div", { className: style.root, children: _jsxs("div", { className: style.container, children: [_jsx("div", { className: style.text, children: "Page not found" }), _jsx("div", { className: style.links, children: _jsx(Link, { to: "/intro", className: style.link, children: "Back to Home Page" }) })] }) }));
}
