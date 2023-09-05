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
      <Grid item md={12} xs={12} sm={12}>
        <Grid container>
          <Grid item md={12} xs={12} sm={12}>
            <Typography sx={{ pr: { xs: 4 }, textAlign: { xs: "justify" } }}>
              <span className="footerText">
                Copyright © 2023 reserved Designed By
              </span>
              &nbsp; Ashutosh Bajpai ❤
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={1.3} sm={0.6} md={0.4}>
              <Link href="https://facebook.com">
                <FacebookIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={1.3} sm={0.6} md={0.4}>
              <Link href="https://instagram.com">
                <InstagramIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={1.3} sm={0.6} md={0.4}>
              <Link href="https://twitter.com">
                <TwitterIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={1.3} sm={0.6} md={0.4}>
              <Link href="https://youtube.com">
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
