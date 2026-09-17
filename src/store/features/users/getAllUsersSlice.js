import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "getAllUsers/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/getAllUsers`
        // "http://localhost:3001/user/getAllUsers"
      );

      console.log(data);
      
      return data;
    } catch (error) {
      const code = error.response?.data?.code || "network_error";
      return rejectWithValue(code);
    }
  },
);

const initialState = {
  users: null,
  loading: false,
  error: null,
};

const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.users = null;
      state.error = null;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {resetUserState} = getAllUsersSlice.actions;
export default getAllUsersSlice.reducer;
