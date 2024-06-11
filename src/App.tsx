import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";

import cardsData from "./components/cardsData";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        {/* {getCardsRoute()} */}
        <Route path="/*" element={<NotFound />} />

        <Route path="Card0" element={<Card0 />} />
        <Route path="Card1" element={<Card1 />} />
        <Route path="Card2" element={<Card2 />} />
        <Route path="Card3" element={<Card3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
