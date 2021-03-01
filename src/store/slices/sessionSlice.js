import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_SESSION_STATE = {
  helpText: null,
  tooltipProps: null,
  activeInspection: {},
};

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: INITIAL_SESSION_STATE,
  reducers: {
    setHelpText: (state, action) => {
      state.helpText = action.payload;
    },
    setTooltipProps: (state, action) => {
      state.tooltipProps = action.payload;
    },
    setActiveInspection: (state, action) => {
      state.activeInspection = action.payload;
    },
  },
});

export const {
  setHelpText,
  setTooltipProps,
  setActiveInspection,
} = sessionSlice.actions;
export default sessionSlice.reducer;
