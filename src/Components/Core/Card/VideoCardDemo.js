import { Grid, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backExcercise } from "../../ExcerciseList/ExcerciseList";

const VideoCardDemo = () => {
  const [excercise] = useState(backExcercise);
  const excercisesList = excercise.slice(0, 8);
  const newList = excercisesList.map((obj) => ({
    ...obj,
    href: `EXCERCISES/Excercise?index=${obj.index}`,
  }));

  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      columnSpacing={2}
      justifyContent="space-around"
      alignItems="center"
      marginTop={2}
      spacing={2}
    >
      {newList.map((data, index) => {
        return (
          <Grid key={index} item md={3} xs={12} sm={6}>
            <Card sx={{ maxWidth: { md: 300 }, maxHeight: { md: 450 } }}>
              <CardMedia
                component="video"
                controls
                muted
                loop
                sx={{ height: { md: 170 } }}
                image={data.path}
                title={data.title}
              />
              <CardContent>
                <Typography
                  sx={{ minHeight: { md: 70, xs: 70, sm: 70 } }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.title}
                  <Link
                    underline="none"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/${data.href}`, {
                        state: { ...newList },
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

export default VideoCardDemo;
