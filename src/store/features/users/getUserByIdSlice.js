import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserById = createAsyncThunk(
  "getUserById/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        // "http://localhost:3001/user/getUserById",
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
  user: null,
  loading: false,
  error: null,
  successCode: null,
};

const getUserByIdSlice = createSlice({
  name: "getUserById",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.user = null;
      state.error = null;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.successCode = action.payload.code;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {resetUserState} = getUserByIdSlice.actions;
export default getUserByIdSlice.reducer;
