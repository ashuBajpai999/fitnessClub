import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import TreadmillDescription from "../../Modules/Treadmill/TreadmillDescription";

const ProductDescriptionRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "AllProducts/TreadmillDescription",
        component: <TreadmillDescription />,
      })}
    </Route>
  );
};

export default ProductDescriptionRoute;
