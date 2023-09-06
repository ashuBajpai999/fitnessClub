import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const TreadmillDescription = (props) => {
  debugger;
  const location = useLocation();
  const url = new URLSearchParams(window.location.search);
  const index = url.get("index");
  return (
    <Fragment>
      <Grid container padding={15}>
        <Grid item md={12}>
          <Grid container justifyContent="center" spacing={8}>
            <Grid item md={5} sx={{ wordWrap: "break-word" }}>
              <Box>
                <Typography variant="h3" sx={{ color: "orange" }}>
                  {location.state[index].name}
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {location.state[index].fullDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  sx={{ height: 400 }}
                  // image={require("C:/Ashutosh/testingproject/src/images/product_1.jpg")}
                  image={location.state[index].path}
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
