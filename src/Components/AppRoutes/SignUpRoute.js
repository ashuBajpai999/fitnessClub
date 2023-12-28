import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import SignUp from "../Authentication/SignUp";

const SignUpRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "SignUp",
        component: <SignUp />,
      })}
    </Route>
  );
};

export default SignUpRoute;
