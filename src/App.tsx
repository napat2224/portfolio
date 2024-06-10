import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";

import cardsData from "./components/cardsData";

function App() {
  const getCardsRoute = () => {
    return cardsData.map((_, index) => (
      <Route
        path={`/card${index}`}
        element={<LazyCardLoader index={index} />}
      />
    ));
  };

  function LazyCardLoader({ index }: { index: number }) {
    const CardComponent = React.lazy(() =>
      import(`./pages/Cards/Card${index}`).catch(() => {
        return { default: NotFound };
      })
    );
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CardComponent />
      </Suspense>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        {getCardsRoute()}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
