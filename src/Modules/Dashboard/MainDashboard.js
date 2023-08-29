import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "../../Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Layout/Footer";

const MainDashboard = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item md={12} xs={12} sm={12}>
          <Header />
        </Grid>
      </Grid>

      <Outlet />
      <Grid container className="footer">
        <Grid item md={12} xs={12} sm={12} marginLeft={5}>
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MainDashboard;
