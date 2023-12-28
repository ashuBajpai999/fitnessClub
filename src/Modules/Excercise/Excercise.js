import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const Excercise = () => {
  const location = useLocation();
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.split("?")[1]);
  const index = urlParams.get("index");
  return (
    <Fragment>
      <Grid
        container
        sx={{
          pt: { md: 15, xs: 10, sm: 13 },
          pl: { md: 15, xs: 5 },
          pr: { md: 15, xs: 5 },
          pb: { md: 15, xs: 5 },
        }}
      >
        <Grid item md={12} xs={12} sm={12}>
          <Grid container justifyContent="center">
            <Grid item md={12} xs={12} sm={12}>
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
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              sx={{ wordWrap: "break-word", mt: { md: 3, xs: 3, sm: 3 } }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: "orange",
                    fontSize: { xs: "2rem", md: "3rem", sm: "2rem" },
                  }}
                >
                  {location.state[index].name}
                </Typography>
                <Typography
                  sx={{ textAlign: "justify", fontStyle: "italic", mt: 1.5 }}
                >
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
