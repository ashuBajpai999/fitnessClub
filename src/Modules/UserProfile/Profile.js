import { Avatar, Grid, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
  debugger;
  const location = useLocation();
  return (
    <Fragment>
      <Grid container columnSpacing={3} padding={10} rowSpacing={2}>
        <Grid item md={5} marginTop={4}>
          <Avatar
            sx={{ width: 400, height: 400, fontSize: "300px" }}
            alt={props.name}
            srcSet={location.state.image}
          ></Avatar>
        </Grid>
        <Grid item md={7} marginTop={4}>
          <TextField
            // label="Name"
            variant="filled"
            fullWidth
            value={location.state.name}
            sx={{ paddingBottom: 2 }}
          />
          <TextField
            // label="Email"
            type="email"
            variant="filled"
            fullWidth
            value={location.state.email}
            sx={{ paddingBottom: 2 }}
          />
          <TextField
            type="date"
            variant="filled"
            fullWidth
            value={location.state.dob}
            sx={{ paddingBottom: 2 }}
          />
          <TextField
            type="number"
            label="Mobile no."
            variant="filled"
            fullWidth
            value={location.state.mobile}
            sx={{ paddingBottom: 2 }}
          />
          <TextField
            label="Weight"
            variant="filled"
            fullWidth
            value={location.state.name}
            sx={{ paddingBottom: 2 }}
          />
          <TextField
            // label="Name"
            variant="filled"
            fullWidth
            value={location.state.name}
            sx={{ paddingBottom: 2 }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Profile;
