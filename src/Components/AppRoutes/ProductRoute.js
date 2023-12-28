import React from "react";
import { Route } from "react-router-dom";
import RenderSuspenseRoute from "./RenderSuspenseRoute";
import ProductCard from "../Core/Card/ProductCard";

const ProductRoute = () => {
  return (
    <Route>
      {RenderSuspenseRoute({
        path: "AllProducts",
        component: <ProductCard />,
      })}
    </Route>
  );
};

export default ProductRoute;
