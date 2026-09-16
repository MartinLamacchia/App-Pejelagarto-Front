import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFishForUser = createAsyncThunk(
  "getAllFishForUser/getAllFishForUser",
  async (idUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        // `${import.meta.env.VITE_API_URL}/user/login`,
        "http://localhost:3001/catchFish/getAllFishForUser",
        {idUser},
      );
      return data;
    } catch (error) {
      const code = error.response?.data?.code || "network_error";
      return rejectWithValue(code);
    }
  },
);

const initialState = {
  allFish: null,
  loading: false,
  error: null,
  successCode: null,
};

const getAllFishForUserSlice = createSlice({
  name: "getAllFishForUser",
  initialState,
  reducers: {
    resetFishState: (state) => {
      state.allFish = null;
      state.error = null;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFishForUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFishForUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successCode = action.payload.code;
        state.allFish = action.payload;
      })
      .addCase(getAllFishForUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {resetFishState} = getAllFishForUserSlice.actions;
export default getAllFishForUserSlice.reducer;
