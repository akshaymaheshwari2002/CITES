import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import {getMasterDatasConfig} from '@services';
import Config from '@config';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  feedbackId: null,
  masterData: [],
};

export const masterDataMessagesSelector = createSelector(
  [
    (state) => state.persistedReducer.masterData,
    (state) => state.persistedReducer.locale,
  ],
  (masterDataArray, locale) =>
    masterDataArray.find(
      (data) => data.locale === (locale || Config.DEFAULT_LOCALE),
    )?.translations ?? {},
);

export const fetchMasterData = createAsyncThunk('fetchMasterData', async () => {
  const {data} = await axios(getMasterDatasConfig());

  return data?.results ?? [];
});

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
  extraReducers: {
    [fetchMasterData.fulfilled]: (state, action) => {
      state.masterData = action.payload;
    },
  },
});

export const {setLocale, setFeedbackId} = persistedSlice.actions;
export default persistedSlice.reducer;
