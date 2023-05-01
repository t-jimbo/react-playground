import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {useRoutes(routes)}
    </React.Suspense>
  );
};

export default App;
