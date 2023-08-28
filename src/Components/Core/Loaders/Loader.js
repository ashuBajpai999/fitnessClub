import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "20%" }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loader;
