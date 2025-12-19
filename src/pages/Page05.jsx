import React from "react";
import Navbar02 from "../common/componant/Navbar02/Navbar02";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import Slider from '@mui/material/Slider';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { red } from "@mui/material/colors";

function valuetext(value) {
  return `${value}°C`;
}
export default function Page05() {
  return (
    <>
      <Navbar02 />
      <Box
        sx={{
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          marginTop: 5,

         
        }}
      >
        <Typography sx={{ fontSize: 25 }}>my name is musha </Typography><br />
        
        <Typography sx={{ fontSize: 25 }}>
          And I am male of 35 yerars old.{" "}
        </Typography><br />
        <Typography sx={{ fontSize: 25 }}>I am married to Dilu.</Typography>
        <Typography sx={{ fontSize: 40, fontWeight: 700, marginTop: 5 }}>
          I have (kids){" "}
        </Typography>

        <Box sx={{ width: 300 , alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          marginTop: 5,
          marginLeft:80}}>
      <Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={0}
        max={10}
        sx={{
        
        }}
      />
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <TextField select size="medium" defaultValue="Mr." sx={{ width: 100 }}>
                    <MenuItem value="Mr.">Mr.</MenuItem>
                    <MenuItem value="Mrs.">Mrs.</MenuItem>
                  </TextField>
      
                  <TextField 
                    fullWidth 
                    placeholder="First Name" 
                    InputProps={{ startAdornment: <PersonOutlineIcon sx={{ mr: 1, color: "#999" }} /> }}
                  />
                </Box>
     
    </Box>
      </Box>
    </>
  );
}
