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

function Navbar() {
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
            display: "flex",
            justifyContent: "space-between",
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
              width: 200,
              height: 60,
              border: "2px solid red",
              borderRadius: "30px",
              backgroundColor: "transparent",

              display: "flex",
              alignItems: "center", // vertical center
              justifyContent: "center", // horizontal center
            }}
          >
            <Typography sx={{ color: "red" }}>
              Already have a account
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
