import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
  const location = useLocation();
  const readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target?.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };
  let data = false;
  let url = "";
  const onFileSelected = async (e) => {
    data = true;
    const file = e.target.files[0];
    url = await readURL(file);
    // name = e.target.name;
    // props.setUser();
  };
  return (
    <Fragment>
      <Grid container columnSpacing={3} padding={10} rowSpacing={2}>
        <Grid item md={5} xs={12} sm={12} marginTop="auto" marginBottom="auto">
          <Avatar
            sx={{
              width: { md: 400, xs: 200 },
              height: { md: 400, xs: 200 },
              fontSize: "300px",
              m: { xs: "auto" },
            }}
            alt={props.name}
            srcSet={data ? url : location.state.image}
          ></Avatar>
          <TextField
            type="file"
            onChange={(e) => onFileSelected(e)}
            variant="filled"
            fullWidth
            sx={{ pt: { md: 2 } }}
          />
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
          <Button variant="contained">Update</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Profile;
