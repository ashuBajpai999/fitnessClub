import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import "../App.css";

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
            <Grid item xs={3} sm={0.6} md={0.4}>
              <Link
                target="_blank"
                href="https://m.facebook.com/profile.php/?id=100004580445865&name=xhp_nt__fb__action__open_user"
              >
                <FacebookIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={3} sm={0.6} md={0.4}>
              <Link href="https://instagram.com/surya9870/" target="_blank">
                <InstagramIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={3} sm={0.6} md={0.4}>
              <Link
                href="https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
            <Grid item xs={3} sm={0.6} md={0.4}>
              <Link href="https://github.com/ashuBajpai999/" target="_blank">
                <GitHubIcon fontSize="large" className="icon" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
