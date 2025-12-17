import { Box } from "@mui/material";
import React from "react";
import Page01 from "../pages/Page01";
import { Route, Routes } from "react-router-dom";
import Page02 from "../pages/Page02";
import Page03 from "../pages/Page03";
import Page04 from "../pages/Page04";

export default function App() {
  return (
    <>
      

      <Routes >
         <Route path="/" element={<Page01 />} />       
  <Route path="/page01" element={<Page01 />} />
  <Route path="/page02" element={<Page02 />} />
   <Route path="/page03" element={<Page03 />} />
   <Route path="/page04" element={<Page04 />} />

      </Routes>
    </>
  );
}
