import React from 'react'
import Navbar from '../common/componant/Navbar/Navbar'
import Navbar02 from '../common/componant/Navbar02/Navbar02'
import { Typography } from '@mui/material'

export default function Page03() {
  return (
    <>
     <Navbar02/>
<Typography
        sx={{
          fontSize: 50,
          fontWeight: 700,
          fontFamily: "inter",
          position: "absolute",
          top: "30%",
          left: "5%",
          textAlign:'center'
          
        }}
      >
         Let’s get started by telling a 
         <br />little bit about yourself
      </Typography>
     <Typography >
      
     </Typography>
    </>
   
    
  )
}
