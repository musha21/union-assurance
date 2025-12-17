import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Ua from "../../../assets/Ua.png";
import ProgressBar from "../Progress/ProgressBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Navbar02() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
         gap:50,
            alignItems: "center",
          }}
        >
          <img
            src={Ua}
            alt="Logo"
            style={{
              float: "right",
              width: "200px",
              height: "auto",
            }}
          />

          <Box
            sx={{
              width: 400,
              height: 60,
            
              borderRadius: "30px",
              backgroundColor: "transparent",

              display: "flex",
              gap:9,
              alignItems: "center", 
              justifyContent: "center",
               boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            
            <ArrowBackIcon sx={{color:"black"}}></ArrowBackIcon>
            <Typography sx={{color:"black",fontFamily:'inter',fontWeight:'900'}}>
              My details
            </Typography>
       <ProgressBar/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar02;
