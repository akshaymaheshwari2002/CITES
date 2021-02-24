import {createSlice} from '@reduxjs/toolkit';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  activeInspection: {
    id: null,
    activeStepOneId: null,
    activeFormOneId: null,
  },
};

const persistedSlice = createSlice({
  name: 'persistedSlice',
  initialState: INITIAL_PERSISTED_STATE,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
    setActiveInspection: (state, action) => {
      state.activeInspection = {
        ...state.activeInspection,
        ...action.payload,
      };
    },
  },
});

export const {setLocale, setActiveInspection} = persistedSlice.actions;
export default persistedSlice.reducer;
