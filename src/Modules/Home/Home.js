import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ProductCardDemo from "../../Components/Core/Card/ProductCardDemo";
import VideoCardDemo from "../../Components/Core/Card/VideoCardDemo";
import Carousel from "../../Components/Core/Carousel/Carousel";
import Product from "../../images/AboutImg.webp";
import AboutUs from "../About/AboutUs";
import { setSnackbar } from "../../Store/Reducers/Snackbar";
import { useDispatch } from "react-redux";

const Home = () => {
  const storedUserData = sessionStorage.getItem("userData");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openPage = (e) => {
    switch (e.target.id) {
      case "Products":
        navigate("/AllProducts");
        break;
      case "Excercises":
        if (storedUserData) {
          navigate("/Excercises?E=Back");
        } else {
          dispatch(
            setSnackbar(true, "info", "You are not Logged In. First LogIn!!!")
          );
          navigate("/SignIn");
        }
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
            <Grid
              item
              md={7}
              xs={12}
              sm={12}
              sx={{ pl: { md: 5, xs: 5, sm: 5 }, pr: { md: 5, xs: 5, sm: 5 } }}
            >
              <AboutUs />
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
              sm={12}
              sx={{
                pl: { md: 0, xs: 5, sm: 5 },
                pr: { md: 5, xs: 5, sm: 5 },
                pt: { xs: 2, sm: 2, md: 0 },
              }}
            >
              <Card>
                <CardMedia
                  sx={{ height: { md: 300, xs: 330 } }}
                  image={Product}
                />
              </Card>
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
                <Grid item md={10.8} xs={8}>
                  <Typography
                    textAlign="center"
                    sx={{
                      ml: { md: 18, xs: 6 },
                      pt: { md: 0, xs: 0.8 },
                      pl: { xs: 5 },
                      fontSize: { md: 30, xs: 17 },
                    }}
                    color="blue"
                  >
                    OUR PRODUCTS
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={1.2}
                  xs={4}
                  textAlign="end"
                  sx={{ mt: { md: 0.5, xs: 0, sm: 0 } }}
                >
                  <Button
                    id="Products"
                    variant="filled"
                    onClick={(e) => {
                      openPage(e);
                    }}
                    sx={{ color: "blue", fontWeight: 550}}
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
                <Grid item md={10.8} xs={8}>
                  <Typography
                    textAlign="center"
                    sx={{
                      ml: { md: 18, xs: 8 },
                      pt: { md: 0, xs: 0.8 },
                      pl: { xs: 5 },
                      fontSize: { md: 30, xs: 17 },
                    }}
                    color="blue"
                  >
                    EXCERCISES
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={1.2}
                  xs={4}
                  sx={{ mt: { md: 0.5, xs: 0, sm: 0 } }}
                >
                  <Button
                    id="Excercises"
                    variant="filled"
                    onClick={(e) => {
                      openPage(e);
                    }}
                    sx={{
                      color: "blue",
                      fontWeight: 550,
                      textAlign: { xs: "right" },
                    }}
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
