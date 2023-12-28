import React, { Suspense } from "react";
import { Route } from "react-router-dom";
// import Loader from "../Components/Core/Loaders/Loader";fallback={<Loader />}

const RenderSuspenseRoute = (props) => {
  const { path, component } = props;
  const getRoute = (path, component) => {
    return {
      path: path,
      element: <Suspense>{component}</Suspense>,
    };
  };
  return <Route {...getRoute(path, component)} />;
};

export default RenderSuspenseRoute;
