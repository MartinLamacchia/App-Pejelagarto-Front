import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register`,
        // "http://localhost:3001/user/register",
        userData,
      );
      return data; // esto termina en action.payload del "fulfilled"
    } catch (error) {
      // Cuando axios detecta un status de error (400, 409, 500...), guarda la respuesta en error.response
      const code = error.response?.data?.code || "network_error";
      return rejectWithValue(code);
    }
  },
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  successCode: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.success = false;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.successCode = action.payload.code;
        state.user = action.payload.newUser;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
