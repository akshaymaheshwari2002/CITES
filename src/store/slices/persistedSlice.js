import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  feedback: {},
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export const {setLocale} = persistedSlice.actions;
export const {setFeedback} = persistedSlice.actions;
export default persistedSlice.reducer;
