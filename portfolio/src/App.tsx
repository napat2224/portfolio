import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import cardsData from "./components/cardsData";

function App() {
  const getCardsRoute = () => {
    return cardsData.map((card, index) => (
      <Route
        path={`/card${index}`}
        element={<LazyCardLoader index={index} />}
      />
    ));
  };

  function LazyCardLoader({ index }: { index: number }) {
    const CardComponent = React.lazy(
      () => import(`./pages/Cards/Card${index}`)
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
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {getCardsRoute()}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
