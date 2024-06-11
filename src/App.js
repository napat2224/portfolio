import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import Card0 from "./pages/Cards/Card0";
import Card1 from "./pages/Cards/Card1";
import Card2 from "./pages/Cards/Card2";
import Card3 from "./pages/Cards/Card3";
function App() {
    // const getCardsRoute = () => {
    //   return cardsData.map((_, index) => (
    //     <Route
    //       key={index}
    //       path={`/Card${index}`}
    //       element={<LazyCardLoader index={index} />}
    //     />
    //   ));
    // };
    // function LazyCardLoader({ index }: { index: number }) {
    //   const CardComponent = lazy(() =>
    //     import(`./pages/Cards/Card${index}`).catch((error) => {
    //       console.error(`Error loading Card${index}`, error);
    //       return { default: NotFound };
    //     })
    //   );
    //   return (
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <CardComponent />
    //     </Suspense>
    //   );
    // }
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Intro, {}) }), _jsx(Route, { path: "/intro", element: _jsx(Intro, {}) }), _jsx(Route, { path: "/project", element: _jsx(Project, {}) }), _jsx(Route, { path: "/*", element: _jsx(NotFound, {}) }), _jsx(Route, { path: "Card0", element: _jsx(Card0, {}) }), _jsx(Route, { path: "Card1", element: _jsx(Card1, {}) }), _jsx(Route, { path: "Card2", element: _jsx(Card2, {}) }), _jsx(Route, { path: "Card3", element: _jsx(Card3, {}) })] }) }));
}
export default App;
