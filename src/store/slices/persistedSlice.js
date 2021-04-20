import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  feedbackId: null,
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setFeedbackId: (state, action) => {
      state.feedbackId = action.payload;
    },
  },
});

export const {setLocale, setFeedbackId} = persistedSlice.actions;
export default persistedSlice.reducer;
