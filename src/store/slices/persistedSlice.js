import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  userData: {},
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
});

export const {} = persistedSlice.actions;
export default persistedSlice.reducer;
