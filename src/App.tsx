import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { RecorderProvider } from "@/features/recorder/Provider";

const App = () => {
  return (
    <RecorderProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        {useRoutes(routes)}
      </React.Suspense>
    </RecorderProvider>
  );
};

export default App;
