import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import Profile from "../../Modules/UserProfile/Profile";

const UserProfileRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "UserProfile",
        component: <Profile />,
      })}
    </Route>
  );
};

export default UserProfileRoute;
