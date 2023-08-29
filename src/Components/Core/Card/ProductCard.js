import React, { useState } from "react";
import Card from "@mui/material/Card";
import treadmill from "../../../images/product_1.jpg";
import cablerop from "../../../images/product_2.jpg";
import wheyProtein from "../../../images/product_3.jpg";
import mbWhey from "../../../images/product_4.jpg";
import ladduDumble from "../../../images/ladduDumble.jpg";
import optionMachine from "../../../images/optionMachine.jpg";
import dumble from "../../../images/dumble.jpg";
import skipingRope from "../../../images/skippingRope.jpg";
import rodWithPlate from "../../../images/rodWithPlate.jpg";
import yogaPad from "../../../images/yogaPads.jpg";
import plate from "../../../images/plates.jpg";
import chinupsCircle from "../../../images/chinupsCircle.jpg";
import boxingBag from "../../../images/boxingBag.jpg";
import laduuAndAll from "../../../images/product_5.jpg";
import gloves from "../../../images/gloves.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ProductCard = () => {
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
    {
      name: "Small Dumble",
      id: "ladduDumble",
      path: ladduDumble,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Chin Ups Circle",
      id: "chinupsCircle",
      path: chinupsCircle,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Dumble",
      id: "dumble",
      path: dumble,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Yoga Pad",
      id: "yogaPad",
      path: yogaPad,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Rod With Plates",
      id: "rodWithPlate",
      path: rodWithPlate,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Combo",
      id: "laduuAndAll",
      path: laduuAndAll,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
    {
      name: "Boxing Bag",
      id: "boxingBag",
      path: boxingBag,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
    },
  ];
  return (
    <Grid
      container
      columnSpacing={3}
      paddingTop={10}
      paddingBottom={10}
      paddingLeft={5}
      paddingRight={5}
      rowSpacing={2}
    >
      {imageList.map((data, index) => {
        return (
          <Grid item md={3} xs={12} sm={6}>
            <Card sx={{ maxWidth: { md: 330, xs: 330, sm: 330 } }}>
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
                  <ShoppingBagIcon sx={{ marginLeft: 0.5 }} fontSize="small" />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductCard;
