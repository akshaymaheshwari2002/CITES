import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import {getMasterDatasConfig} from '@services';
import Config from '@config';

export const INITIAL_PERSISTED_STATE = {
  locale: null,
  feedbackId: null,
  masterData: {},
  loadingMasterData: false,
};

export const masterDataMessagesSelector = createSelector(
  [
    (state) => state.persistedReducer.masterData,
    (state) => state.persistedReducer.locale,
  ],
  (masterData, locale) => masterData[locale || Config.DEFAULT_LOCALE] ?? {},
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
    [fetchMasterData.pending]: (state) => {
      state.loadingMasterData = true;
    },
    [fetchMasterData.fulfilled]: (state, action) => {
      state.masterData = action.payload.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.locale]: {...acc[curr.locale], [curr.key]: curr.value},
        }),
        {},
      );
      state.loadingMasterData = false;
    },
    [fetchMasterData.rejected]: (state) => {
      state.loadingMasterData = false;
    },
  },
});

export const {setLocale, setFeedbackId} = persistedSlice.actions;
export default persistedSlice.reducer;
