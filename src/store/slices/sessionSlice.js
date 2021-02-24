import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_SESSION_STATE = {
  helpText: null,
};

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: INITIAL_SESSION_STATE,
  reducers: {
    setHelpText: (state, action) => {
      state.helpText = action.payload;
    },
  },
});

export const {setHelpText} = sessionSlice.actions;
export default sessionSlice.reducer;
