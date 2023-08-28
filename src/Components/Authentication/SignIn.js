import React, { Fragment } from "react";
import "../../App.css";
import { Grid, Link } from "@mui/material";

const SignIn = () => {
  const handleClick = async () => {};
  return (
    <Grid container className="signInContainer">
      <Grid item md={3}>
        <Grid container class="signInBox">
          <Grid item md={12}>
            <Grid container component="form" class="signInForm">
              <Grid item md={12}>
                <h2>Sign In</h2>
              </Grid>
              <Grid item md={12} className="signInInputBox">
                <input type="text" required="required" />
                <span>Email</span>
                <i></i>
              </Grid>
              <Grid
                item
                md={12}
                className="signInInputBox"
                sx={{ marginTop: 2 }}
              >
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
              </Grid>
              <Grid item md={12} className="signInLinks">
                <Link underline="none" color="#8f8f8f" fontSize="0.75em">
                  Forgot Password
                </Link>
                <Link underline="none" fontSize="0.75em" href="SignUp">
                  SignUp
                </Link>
              </Grid>
              <Grid item md={12}>
                <input type="submit" value="Login" onClick={handleClick} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
