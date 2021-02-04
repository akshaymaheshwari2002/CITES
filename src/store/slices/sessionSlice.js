import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_SESSION_STATE = {};

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: INITIAL_SESSION_STATE,
});

export const {} = sessionSlice.actions;
export default sessionSlice.reducer;
