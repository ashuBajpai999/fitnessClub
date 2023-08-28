import { Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import ABS1 from "../../../Excercises/ABS_1.mp4";
import ABS2 from "../../../Excercises/ABS_2.mp4";
import ABS3 from "../../../Excercises/ABS_3.mp4";
import Back1 from "../../../Excercises/back_1.mp4";
import Back2 from "../../../Excercises/back_2.mp4";
import CabelBicep from "../../../Excercises/cabel_bicep.mp4";
import Chinups1 from "../../../Excercises/chinUps_1.mp4";
import CrazyChinups from "../../../Excercises/crazy_chinups.mp4";

const VideoCardDemo = () => {
  const ExcerciseList = [
    {
      name: "Alternating Oblique Sit Ups",
      id: "ABS1",
      path: ABS1,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Assisted Sit Ups",
      id: "ABS2",
      path: ABS2,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Lying Leg Lift Abdominals",
      id: "whyeProtein",
      path: ABS3,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Dumbbell-Reverse Fly",
      id: "mbWhey",
      path: Back1,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Dumbbell Bent Over Face Pull",
      id: "skipingRope",
      path: Back2,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Cable Triceps Push Down Straight Bar",
      id: "dumble",
      path: CabelBicep,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Pull Ups",
      id: "yogaPad",
      path: Chinups1,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
    },
    {
      name: "Archer Pull",
      id: "rodWithPlate",
      path: CrazyChinups,
      description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
      href: "TreadmillDescription",
      title: "",
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
          {ExcerciseList.map((data, index) => {
            return (
              <Grid item md={3}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="video"
                    autoPlay
                    muted
                    loop
                    sx={{ height: 170 }}
                    image={data.path}
                    title={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                      <span>more</span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
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

export default VideoCardDemo;
