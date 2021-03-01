import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  activeInspectionId: null,
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setActiveInspectionId: (state, action) => {
      state.activeInspectionId = action.payload;
    },
  },
});

export const {setLocale, setActiveInspectionId} = persistedSlice.actions;
export default persistedSlice.reducer;
