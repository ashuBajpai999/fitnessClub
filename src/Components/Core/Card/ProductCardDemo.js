import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import treadmill from "../../../images/product_1.jpg";
import cablerop from "../../../images/product_2.jpg";
import wheyProtein from "../../../images/product_3.jpg";
import mbWhey from "../../../images/product_4.jpg";
import gloves from "../../../images/gloves.jpg";
import optionMachine from "../../../images/optionMachine.jpg";
import plate from "../../../images/plates.jpg";
import skipingRope from "../../../images/skippingRope.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ProductCardDemo = () => {
  const imageList = [
    {
      name: "Treadmill",
      id: "treadmill",
      path: treadmill,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Cable Rope",
      id: "cableRope",
      path: cablerop,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Whey Protein",
      id: "whyeProtein",
      path: wheyProtein,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "MB Whey",
      id: "mbWhey",
      path: mbWhey,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Skiping Rope",
      id: "skipingRope",
      path: skipingRope,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Gloves",
      id: "gloves",
      path: gloves,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Plates",
      id: "plate",
      path: plate,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Multipurpose Machine",
      id: "optionMachine",
      path: optionMachine,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
  ];
  return (
    <Grid container rowSpacing={1} marginTop={1}>
      <Grid item md={12}>
        <Grid
          container
          direction="row"
          columnSpacing={2}
          justifyContent="space-around"
          alignItems="center"
        >
          {imageList.map((data, index) => {
            return (
              <Grid item md={3}>
                <Card sx={{ maxWidth: 330 }}>
                  <CardMedia
                    sx={{ height: 230 }}
                    image={data.path}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                      <Link underline="none" href={data.href}>
                        more
                      </Link>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      Add To Cart{" "}
                      <AddShoppingCartIcon
                        sx={{ marginLeft: 0.5 }}
                        fontSize="small"
                      />
                    </Button>
                    <Button size="small">
                      Buy Now{" "}
                      <ShoppingBagIcon
                        sx={{ marginLeft: 0.5 }}
                        fontSize="small"
                      />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCardDemo;
