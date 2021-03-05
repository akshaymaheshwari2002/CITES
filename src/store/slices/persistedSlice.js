import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const {setLocale} = persistedSlice.actions;
export default persistedSlice.reducer;
