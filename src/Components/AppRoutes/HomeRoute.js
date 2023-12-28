import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import Home from "../../Modules/Home/Home";

const HomeRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "fitnessClub",
        component: <Home />,
      })}
    </Route>
  );
};

export default HomeRoute;
