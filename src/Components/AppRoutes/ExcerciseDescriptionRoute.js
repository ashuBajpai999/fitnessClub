import React from "react";
import Excercise from "../../Modules/Excercise/Excercise";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";

const ExcerciseDescriptionRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "EXCERCISES/Excercise",
        component: <Excercise />,
      })}
    </Route>
  );
};

export default ExcerciseDescriptionRoute;
