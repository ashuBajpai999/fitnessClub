import React from "react";
import SignIn from "../Authentication/SignIn";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import { Route } from "react-router-dom";

const SignInRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "SignIn",
        component: <SignIn />,
      })}
    </Route>
  );
};

export default SignInRoute;
