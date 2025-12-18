import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../redux/stepSlice";
import Navbar02 from "../common/componant/Navbar02/Navbar02";
import { 
  Typography, Box, TextField, Button, 
  MenuItem, IconButton, Stack, InputAdornment 
} from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProgressBar from "../common/componant/Progress/ProgressBar";
import { Link } from "react-router-dom";

export default function Page03() {
  const dispatch = useDispatch();

  const handleNext = () => {
    // 2. This increases the global Redux state
    dispatch(nextStep());
    // Add your navigation logic here, e.g., navigate('/page04')
  };

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

          <TextField 
            fullWidth 
            placeholder="Last name"
            InputProps={{ startAdornment: <PersonOutlineIcon sx={{ mr: 1, color: "#999" }} /> }}
          />

          <TextField fullWidth type="date" />
        </Stack>

        <Button
        component={Link}
        to="/page04"
          fullWidth
          onClick={handleNext} // 4. Attach the click handler
          sx={{
            mt: 4,
            bgcolor: "#ff6a00",
            color: "#fff",
            py: 1.4,
            borderRadius: 8,
            fontWeight: 600,
            "&:hover": { bgcolor: "#e55d00" },
          }}
        >
          Next →
        </Button>
      </Box>

      {/* Footer Icons */}
      <Box sx={{ display: "flex", gap: 1, position: "absolute", top: "90%", left: "5%" }}>
        <IconButton><FacebookIcon /></IconButton>
        <IconButton><InstagramIcon /></IconButton>
        <IconButton><WaterDamageIcon /></IconButton>
        <IconButton><TvRoundedIcon /></IconButton>
      </Box>
    </>
  );
}