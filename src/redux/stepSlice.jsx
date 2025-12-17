import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'steps',
  initialState: {
    currentStep: 1,
    totalSteps: 3,
  },
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
  },
});

// These are NAMED exports (for your components to use)
export const { nextStep, prevStep } = stepSlice.actions;

// This is the DEFAULT export (for your store to use)
// This is likely what is missing!
export default stepSlice.reducer;