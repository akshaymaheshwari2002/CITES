import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  activeFormOneId: null,
  activeStepOneId: null,
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setActiveFormOneId: (state, action) => {
      state.activeFormOneId = action.payload;
    },
    setActiveStepOneId: (state, action) => {
      state.activeStepOneId = action.payload;
    },
  },
});

export const {
  setLocale,
  setActiveFormOneId,
  setActiveStepOneId,
} = persistedSlice.actions;
export default persistedSlice.reducer;
