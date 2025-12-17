import React from "react";
import Navbar from "../common/componant/Navbar/Navbar";
import Navbar02 from "../common/componant/Navbar02/Navbar02";
import { Typography } from "@mui/material";

import {
  Box,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Page03() {
  return (
    <>
      <Navbar02 />
      <Typography
        sx={{
          fontSize: 35,
          fontWeight: 700,
          fontFamily: "inter",
          position: "absolute",
          top: "20%",
          left: "40%",
          textAlign: "center",
        }}
      >
        Let’s get started by <br />
        telling a little bit about <br />
        yourself
      </Typography>
      <Box
        sx={{
          width: 420,
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "40%",
        }}
      >
        
         <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap:3,
            
          }}
        >
          <TextField select fullWidth size="medium" value="Mr." sx={{width:100}}>
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
          </TextField>

          <TextField sx={{borderRadius:30}} fullWidth placeholder="First Name" >
            <PersonOutlineIcon sx={{ gap: 2, mr: 1, color: "#999" }} />
          </TextField>
        </Box>

       
           
          <TextField fullWidth placeholder="Last name">
            <PersonOutlineIcon sx={{ gap: 2, mr: 1, color: "#999" }} />
          </TextField>

          <TextField fullWidth  placeholder="Last name"type="date" />
        </Stack>

        {/* Button */}
        <Button
          fullWidth
          sx={{
            mt: 4,
            bgcolor: "#ff6a00",
            color: "#fff",
            py: 1.4,
            borderRadius: 8,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#e55d00",
            },
          }}
        >
          Next →
        </Button>
      </Box>
    </>
  );
}
