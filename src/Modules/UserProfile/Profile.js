import { Avatar, Grid, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
  const location = useLocation();
  return (
    <Fragment>
      <Grid container columnSpacing={3} padding={10} rowSpacing={2}>
        <Grid item md={5} xs={12} sm={12} marginTop={4}>
          <Avatar
            sx={{
              width: { md: 400, xs: 350 },
              height: { md: 400, xs: 350 },
              fontSize: "300px",
              ml: { xs: 6 },
            }}
            alt={props.name}
            srcSet={location.state.image}
          ></Avatar>
        </Grid>
        <Grid item md={7} xs={12} sm={12} marginTop={4}>
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Name</Typography>
          <TextField
            // label="Name"
            variant="filled"
            fullWidth
            value={location.state.name}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>E-Mail</Typography>
          <TextField
            // label="Email"
            type="email"
            variant="filled"
            fullWidth
            value={location.state.email}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>
            Date of Birth
          </Typography>
          <TextField
            type="date"
            variant="filled"
            fullWidth
            value={location.state.dob}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Mobile no.</Typography>
          <TextField
            type="number"
            // label="Mobile no."
            variant="filled"
            fullWidth
            value={location.state.mobile}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Weight</Typography>
          <TextField
            // label="Weight"
            variant="filled"
            fullWidth
            value={location.state.name}
            sx={{ paddingBottom: 2 }}
          />
          <Typography sx={{ ml: 1, fontSize: "0.85em" }}>Height</Typography>
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
