import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFishById = createAsyncThunk(
  "getFishById/getFishById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/catchFish/getFishById`,
        // "http://localhost:3001/catchFish/getFishById",
        {id},
      );
      return data;
    } catch (error) {
      const code = error.response?.data?.code || "network_error";
      return rejectWithValue(code);
    }
  },
);

const initialState = {
  fish: null,
  loading: false,
  error: null,
  successCode: null,
};

const getFishByIdSlice = createSlice({
  name: "getFishById",
  initialState,
  reducers: {
    resetFishState: (state) => {
      state.fish = null;
      state.error = null;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFishById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFishById.fulfilled, (state, action) => {
        state.loading = false;
        state.successCode = action.payload.code;
        state.fish = action.payload;
      })
      .addCase(getFishById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {resetFishState} = getFishByIdSlice.actions;
export default getFishByIdSlice.reducer;
