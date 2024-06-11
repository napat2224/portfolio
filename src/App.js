import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import cardsData from "./components/cardsData";
function App() {
    const getCardsRoute = () => {
        return cardsData.map((_, index) => (_jsx(Route, { path: `/card${index}`, element: _jsx(LazyCardLoader, { index: index }) })));
    };
    function LazyCardLoader({ index }) {
        const CardComponent = React.lazy(() => import(`./pages/Cards/Card${index}`).catch(() => {
            return { default: NotFound };
        }));
        return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(CardComponent, {}) }));
    }
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Intro, {}) }), _jsx(Route, { path: "/intro", element: _jsx(Intro, {}) }), _jsx(Route, { path: "/project", element: _jsx(Project, {}) }), getCardsRoute(), _jsx(Route, { path: "/*", element: _jsx(NotFound, {}) })] }) }));
}
export default App;
