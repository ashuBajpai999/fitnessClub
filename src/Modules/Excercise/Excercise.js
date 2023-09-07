import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const Excercise = () => {
  const location = useLocation();
  const url = new URLSearchParams(window.location.search);
  const index = url.get("index");
  return (
    <Fragment>
      <Grid container padding={15}>
        <Grid item md={12}>
          <Grid container justifyContent="center" spacing={8}>
            <Grid item md={12}>
              <Card sx={{ maxWidth: 1350 }}>
                <CardMedia
                  sx={{ height: "max-content" }}
                  component="video"
                  autoPlay
                  muted
                  loop
                  src={location.state[index].path}
                />
              </Card>
            </Grid>
            <Grid item md={12} sx={{ wordWrap: "break-word" }}>
              <Box>
                <Typography variant="h3" sx={{ color: "orange" }}>
                  {location.state[index].name}
                </Typography>
                <Typography sx={{ textAlign: "justify", fontStyle: "italic" }}>
                  {location.state[index].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Excercise;
