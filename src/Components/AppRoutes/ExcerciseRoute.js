import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import VideoCard from "../Core/Card/VideoCard";

const ExcerciseRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "Excercises",
        component: <VideoCard />,
      })}
    </Route>
  );
};

export default ExcerciseRoute;
