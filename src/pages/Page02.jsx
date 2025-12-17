import React from "react";
import Landing from "../assets/landing.png";
import { Box, IconButton, StepIcon, Typography } from "@mui/material";
import Navbar from "../common/componant/Navbar/Navbar";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import { Link } from "react-router-dom";
import Image02 from "../assets/Image02.png";
export default function Page02() {
  return (
    <>
      <Navbar />
      <Box
        component="img"
        src={Image02}
        alt="Landing"
        sx={{
          maxWidth: "90%",
          height: "90%",
          position: "absolute",
          right: 0,
          bottom: 0,

          width: {
            xs: "100%",
            sm: "80%",
            md: "60%",
            lg: "50%",
          },
        }}
      />
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 700,
          fontFamily: "inter",
          position: "absolute",
          top: "30%",
          left: "5%",
        }}
      >
        Life Insurance <br />
        Made Simple
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "inter",
          position: "absolute",
          top: "55%",
          left: "5%",
        }}
      >
        Find your goals and plan your future
      </Typography>

      <Button
        component={Link}
        to="/page03"
        variant="contained"
        sx={{
          fontSize: 15,
          fontFamily: "inter",
          position: "absolute",
          top: "65%",
          left: "5%",
          backgroundColor: "#FE5000",
          borderRadius: 10,
        }}
      >
        Get Started{" "}
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          position: "absolute",
          top: "90%",
          left: "5%",
        }}
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <WaterDamageIcon />
        </IconButton>
        <IconButton>
          <TvRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
}
