import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import "../../App.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const TreadmillDescription = (props) => {
  return (
    <Fragment>
      <Grid container padding={15}>
        <Grid item md={12}>
          <Grid container justifyContent="center" spacing={8}>
            <Grid item md={5} sx={{ wordWrap: "break-word" }}>
              <Box>
                <Typography variant="h3" sx={{ color: "orange" }}>
                  Automatic Treadmill
                </Typography>
                <Typography>
                  A treadmill is a stationary exercise machine that features a
                  walking or running belt designed for indoor cardio
                  exercise.Outdoor running is high impact, which can lead to
                  back, knee, and ankle problems over time. Treadmills prevent
                  this by offering cushioned running surfaces for shock
                  absorption.Aerobic exercises, like running or walking on a
                  treadmill, may make you feel better—whether that’s by making
                  your heart stronger, helping with weight loss, or lowering
                  blood pressure.Exercising on a treadmill builds leg muscles
                  and improves core strength. It also strengthens your heart and
                  helps prevent osteoporosis by allowing your body to build
                  strong bones through low impact exercise.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  sx={{ height: 400 }}
                  image={require("C:/Ashutosh/testingproject/src/images/product_1.jpg")}
                  title="green iguana"
                />
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={1.8}>
              <Button variant="contained">
                Add To Cart <AddShoppingCartIcon sx={{ marginLeft: 0.5 }} />
              </Button>
            </Grid>
            <Grid item md={1.5}>
              <Button variant="contained">
                Buy Now <ShoppingBagIcon sx={{ marginLeft: 0.5 }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TreadmillDescription;
