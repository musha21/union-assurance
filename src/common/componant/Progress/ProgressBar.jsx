import * as React from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function ProgressBar() {
  // 1. Get current step data from your Redux store
  const { currentStep, totalSteps } = useSelector((state) => state.steps);

  // 2. Convert step (1, 2, or 3) to percentage (33, 66, or 100)
  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* Background Track Circle */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={80}
        thickness={5}
        sx={{ color: '#f0f4ff' }} // Light blue/grey track
      />
      
      {/* Actual Progress Circle */}
      <CircularProgress
        variant="determinate"
        value={progressValue}
        size={80}
        thickness={5}
        sx={{
          color: '#ff5500', // Your orange color
          position: 'absolute',
          left: 0,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'butt', // Sharp edges like the image
            transition: 'stroke-dashoffset 0.4s ease-in-out', // Smooth movement
          },
        }}
      />

      {/* Center Text */}
      <Box
        sx={{
          top: 0, left: 0, bottom: 0, right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1 }}>
          Step
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          {currentStep} of {totalSteps}
        </Typography>
      </Box>
    </Box>
  );
}