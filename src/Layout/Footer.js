import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Grid container direction="row">
      <Grid item md={12}>
        <Grid container>
          <Grid item md={12}>
            <Typography>
              Copyright © 2023 reserved 2023{" "}
              <span className="footerText"> Designed By </span> Ashutosh Bajpai
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Link href="https://facebook.com">
                <FacebookIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://instagram.com" sx={{ marginLeft: 0.5 }}>
                <InstagramIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://twitter.com" sx={{ marginLeft: 0.5 }}>
                <TwitterIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://youtube.com" sx={{ marginLeft: 0.5 }}>
                <YouTubeIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
