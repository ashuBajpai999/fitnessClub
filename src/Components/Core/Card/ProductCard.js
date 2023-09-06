import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Grid, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageList from "../../../Components/ProductList/ProductList";

const ProductCard = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(imageList);
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
      {productData?.map((data, index) => {
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
                  <Link
                    underline="none"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(data.href, { state: { ...productData } });
                    }}
                  >
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
