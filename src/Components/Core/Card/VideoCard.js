import { Grid, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import excerciseList from "../../ExcerciseList/ExcerciseList";

const VideoCard = () => {
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
      {excerciseList.map((data, index) => {
        return (
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: "max-content" }}>
              <CardMedia
                component="video"
                autoPlay
                muted
                loop
                src={data.path}
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
                  {data.description}
                  <Link underline="none" href={data.href}>
                    more
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">See Full Description </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default VideoCard;
