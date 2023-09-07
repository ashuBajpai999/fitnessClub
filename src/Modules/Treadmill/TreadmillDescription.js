import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const TreadmillDescription = (props) => {
  const location = useLocation();
  const url = new URLSearchParams(window.location.search);
  const index = url.get("index");
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
            <Grid
              item
              md={5}
              xs={12}
              sx={{ wordWrap: "break-word", pb: { xs: 4 } }}
            >
              <Box>
                <Typography variant="h3" sx={{ color: "orange" }}>
                  {location.state[index].name}
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  {location.state[index].fullDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7} xs={12} sx={{ pl: { md: 8 } }}>
              <Card sx={{ maxWidth: { md: 600 } }}>
                <CardMedia
                  sx={{ height: { md: 400, xs: 240 } }}
                  image={location.state[index].path}
                  title="green iguana"
                />
              </Card>
              <Grid container sx={{ mt: { xs: 2 } }}>
                <Grid item md={6} xs={6.7} sm={3}>
                  <Button variant="contained" size="small">
                    Add To Cart
                    <AddShoppingCartIcon sx={{ marginLeft: { md: 0.5 } }} />
                  </Button>
                </Grid>
                <Grid item md={6} xs={5.3} sm={3}>
                  <Button variant="contained" size="small">
                    Buy Now <ShoppingBagIcon sx={{ marginLeft: { md: 0.5 } }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TreadmillDescription;
