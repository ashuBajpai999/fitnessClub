import { Box, Button, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ProductCardDemo from "../../Components/Core/Card/ProductCardDemo";
import VideoCardDemo from "../../Components/Core/Card/VideoCardDemo";
import Carousel from "../../Components/Core/Carousel/Carousel";
import Product from "../../images/AboutImg.jpg";
import AboutUs from "../About/AboutUs";

const Home = () => {
  const navigate = useNavigate();
  const openPage = (e) => {
    switch (e.target.id) {
      case "Products":
        navigate("/AllProducts");
        break;
      case "Excercises":
        navigate("/Excercises");
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item md={12} xs={12} sm={12}>
          <Grid container>
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              sx={{ mt: { md: 8.6, xs: 6.1 } }}
            >
              <Carousel />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Grid container marginTop={2}>
            <Grid item md={7} xs={12} sm={12} paddingLeft={5} paddingRight={5}>
              <AboutUs />
            </Grid>
            <Grid item md={5} xs={12} sm={12}>
              <Box
                component="img"
                src={Product}
                sx={{
                  maxWidth: { md: 505, xs: 550 },
                  maxHeight: { md: 400, xs: 400 },
                  ml: { xs: 3 },
                  mt: { xs: 2 },
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Grid container>
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              sx={{ backgroundColor: "lightGrey" }}
              marginTop={1}
            >
              <Grid container direction="row">
                <Grid item md={10.8} xs={9.7}>
                  <Typography
                    textAlign="center"
                    sx={{ ml: { md: 18, xs: 15 } }}
                    color="blue"
                    fontSize={30}
                  >
                    OUR PRODUCTS
                  </Typography>
                </Grid>
                <Grid item md={1.2} xs={2.3} marginTop={0.5}>
                  <Button
                    id="Products"
                    variant="filled"
                    onClick={(e) => {
                      openPage(e);
                    }}
                    sx={{ color: "blue", fontWeight: 550 }}
                  >
                    See all &gt;{">"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} xs={12} sm={12} marginLeft={5} marginRight={5}>
              <ProductCardDemo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Grid container>
            <Grid
              item
              md={12}
              xs={12}
              sm={12}
              sx={{ backgroundColor: "lightGrey" }}
              marginTop={1}
            >
              <Grid container direction="row">
                <Grid item md={10.8} xs={9.7}>
                  <Typography
                    textAlign="center"
                    sx={{ ml: { md: 18 } }}
                    color="blue"
                    fontSize={30}
                  >
                    FITNESS EXCERCISES CLIPS
                  </Typography>
                </Grid>
                <Grid item md={1.2} xs={2.3} marginTop={0.5}>
                  <Button
                    id="Excercises"
                    variant="filled"
                    onClick={(e) => {
                      openPage(e);
                    }}
                    sx={{ color: "blue", fontWeight: 550 }}
                  >
                    See all &gt;{">"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} xs={12} sm={12} marginLeft={5} marginRight={5}>
              <VideoCardDemo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
