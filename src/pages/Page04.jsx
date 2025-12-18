import React from "react";
import Navbar02 from "../common/componant/Navbar02/Navbar02";
import { Box, Button, TextField, ToggleButton, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Person4Icon from "@mui/icons-material/Person4";

export default function Page04() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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
        <Typography sx={{ fontSize: 25 }}>my name is musha</Typography>
        <br />
        <Typography sx={{ fontSize: 25 }}>
          And I am male of 35 yerars old.{" "}
        </Typography>
        <Typography sx={{ fontSize: 40, fontWeight: 700, marginTop: 10 }}>
          are you married ?{" "}
        </Typography>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{
            bgcolor: "#f4f6fb",
            borderRadius: "30px",
            p: 0.5,
            gap: 1,
            "& .MuiToggleButton-root": {
              border: "none",
              borderRadius: "24px",
              px: 3,
              py: 1.2,
              fontSize: 14,
              fontWeight: 600,
              textTransform: "capitalize",
              color: "#000",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "all 0.3s ease",
            },
            "& .MuiToggleButton-root:hover": {
              bgcolor: "#eaefff",
            },
            "& .Mui-selected": {
              bgcolor: "#ff6a00 !important",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(255,106,0,0.35)",
            },
          }}
        >
          <ToggleButton value="single">
            <Person4Icon /> Single
          </ToggleButton>
          <ToggleButton value="married">
            <PeopleAltIcon /> Married
          </ToggleButton>
        </ToggleButtonGroup>
        <br />
        <TextField
          sx={{ marginTop: 5 }}
          required
          id="outlined-required"
          label="wife Name"
        />
      </Box>
      <Button
        component={Link}
        to="/page05"
        sx={{
          mt: 4,
          bgcolor: "#ff6a00",
          color: "#fff",
          py: 1.4,
          borderRadius: 8,
          fontWeight: 600,
          marginTop: 5,
          width: 100,

          marginLeft: 120,
          "&:hover": { bgcolor: "#e55d00" },
        }}
      >
        Next →
      </Button>
    </>
  );
}
