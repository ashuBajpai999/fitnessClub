import { Backdrop, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = (props) => {
  return (
    <Grid item md={12} xs={12} sm={12}>
      <Backdrop
        open={props}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
};

export default Loader;
