import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item>
          <Typography sx={{ textAlign: "justify", fontFamily: "Century" }}>
            Welcome to <span>Fitness Club</span> Gym! Our mission is to provide
            a safe and supportive environment where people of all fitness levels
            can achieve their health and wellness goals. We believe that fitness
            should be accessible to everyone, which is why we offer a wide range
            of classes and services to meet the needs of our diverse community.
            Our team of experienced trainers is dedicated to helping you reach
            your full potential. Whether you're looking to lose weight, build
            muscle, or simply improve your overall health, we're here to help.
            We offer personalized training programs tailored to your individual
            needs and goals. At <span>Fitness Club</span> Gym, we're more than
            just a gym - we're a community. We believe that fitness is about
            more than just working out; it's about building relationships and
            supporting each other on our fitness journeys. That's why we offer a
            variety of social events and activities throughout the year. Thank
            you for considering <span>Fitness Club</span> Gym for your fitness
            needs. We look forward to helping you achieve your goals!
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutUs;
