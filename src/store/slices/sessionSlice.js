import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import merge from 'deepmerge';

import {upsert, addOrUpdateSpecies} from '@utils/RealmHelper';
import {Inspection, Species} from '@models';

export const INITIAL_SESSION_STATE = {
  helpText: null,
  tooltipProps: null,
  activeInspection: {},
};

export const saveInspection = createAsyncThunk(
  'saveInspection',
  async (payload, {getState}) => {
    let activeInspection = getState().sessionReducer.activeInspection;
    activeInspection = merge(activeInspection, payload, {
      arrayMerge: (_, sourceArray) => sourceArray,
    });

    const upsertedData = await upsert(
      'Inspection',
      new Inspection(activeInspection),
    );

    return upsertedData;
  },
);

export const saveRegisteredSpecies = createAsyncThunk(
  'saveRegisteredSpecies',
  async (payload, {getState}) => {
    const activeInspectionId = getState().sessionReducer.activeInspection._id;
    const speciesPayload = Array.isArray(payload)
      ? payload.map((species) => new Species(species))
      : new Species(payload);
    const upsertedData = await addOrUpdateSpecies(
      speciesPayload,
      activeInspectionId,
    );

    return upsertedData;
  },
);

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: INITIAL_SESSION_STATE,
  reducers: {
    setHelpText: (state, action) => {
      state.helpText = action.payload;
    },
    setTooltipProps: (state, action) => {
      state.tooltipProps = action.payload;
    },
    setActiveInspection: (state, action) => {
      state.activeInspection = action.payload;
    },
  },
  extraReducers: {
    [saveInspection.fulfilled]: (state, action) => {
      state.activeInspection = action.payload;
    },
    [saveRegisteredSpecies.fulfilled]: (state, action) => {
      state.activeInspection.registeredSpecies = action.payload;
    },
  },
});

export const {
  setHelpText,
  setTooltipProps,
  setActiveInspection,
} = sessionSlice.actions;
export default sessionSlice.reducer;
