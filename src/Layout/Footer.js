import { Mail, WhatsApp } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, Grid, Link } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import ModelPopup from "./ModelPopup";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const width = window.innerWidth;
  const isMdScreen = width < 1400 && width >= 900;

  const email = "ashutoshbajpai512@gmail.com";
  const subject = "Recruitment Process";
  const body = "Your message here";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const mailtoUrl = isMobile
    ? `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <Grid container className="footer">
      <Grid item xs={12} md={2.5} sm={5}>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} color="aqua" className="address">
            <p
              style={{
                color: "goldenrod",
                fontStyle: "oblique",
              }}
            >
              ADDRESS
            </p>
            <p>Azad Nagar, Shuklaganj,</p>
            <p> Unnao 209861</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="verticalDivider">
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={12} md={4} sm={5}>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p
              className="contactMe"
              style={{
                color: "goldenrod",
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              CONTACT ME
            </p>
            <p className="txtCenter">
              <Link
                color="aqua"
                href={mailtoUrl}
                target="_blank"
                underline="none"
                className="mailLink"
                aria-label="Send an email to ashutoshbajpai512@gmail.com"
              >
                <Mail
                  sx={{
                    color: "aqua",
                  }}
                  viewBox="2 0 22 18"
                />
                ashutoshbajpai512@gmail.com
              </Link>
            </p>
            <p className="txtCenter">
              <Link
                color="aqua"
                sx={{cursor:"pointer"}}
                // target="_blank"
                onClick={handleClickOpen}
                underline="none"
                className="mailLink"
              >
                <WhatsApp
                  sx={{
                    color: "aqua",
                  }}
                  viewBox="2 0 22 22"
                />
                <span className="footerSpan">+91 8299582099</span>
                {open && <ModelPopup open={open} onClose={handleClose} />}
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={isMdScreen ? "verticalDivider" : "horizontalDivider"}
      >
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={12} md={2} sm={12}>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p
              className="socialAddress"
              style={{
                color: "goldenrod",
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              SOCIAL ADDRESS
            </p>
            <p style={{ textAlign: "center" }}>
              <Link
                href="https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" className="icon" />
              </Link>
              <Link href="https://github.com/ashuBajpai999/" target="_blank">
                <GitHubIcon fontSize="large" className="icon" />
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={0.02}
        className={isMdScreen ? "verticalDivider" : "horizontalDivider"}
      >
        <Divider
          orientation={isMdScreen ? "vertical" : ""}
          variant={isMdScreen ? "fullWidth" : "middle"}
        />
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sx={{ textAlign: "center" }}
            className="footerText"
          >
            <p className="text">Copyright © 2025 reserved Designed By</p>
            <span className="name"> Ashutosh Bajpai ❤</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
