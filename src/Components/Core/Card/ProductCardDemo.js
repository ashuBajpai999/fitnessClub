import { Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageList from "../../ProductList/ProductList";

const ProductCardDemo = () => {
  const [product] = useState(imageList);
  const productList = product.slice(0, 8);
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      marginTop={2}
      columnSpacing={2}
      spacing={2}
      justifyContent="space-around"
      alignItems="center"
    >
      {productList.map((data, index) => {
        return (
          <Grid item md={3} xs={12} sm={6}>
            <Card sx={{ maxWidth: { md: 330, xs: 530, sm: 530 } }}>
              <CardMedia
                sx={{ height: { md: 230, xs: 330, sm: 270 } }}
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
                      navigate(`/${data.href}`, {
                        state: { ...product },
                      });
                    }}
                  >
                    more
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductCardDemo;
