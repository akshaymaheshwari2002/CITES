import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_SESSION_STATE = {
  helpText: null,
  tooltipProps: null,
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
  },
});

export const {setHelpText, setTooltipProps} = sessionSlice.actions;
export default sessionSlice.reducer;
