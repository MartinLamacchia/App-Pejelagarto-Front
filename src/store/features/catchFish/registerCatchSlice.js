import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerCatch = createAsyncThunk(
  "register/registerCatch",
  async ( fishData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/catchFish/registerFish`,
        // "http://localhost:3001/catchFish/registerFish",
        fishData,
      );

      console.log(data);
      
      return data; // esto termina en action.payload del "fulfilled"
    } catch (error) {
      // Cuando axios detecta un status de error (400, 409, 500...), guarda la respuesta en error.response
      const code = error.response?.data?.code || "network_error";
      return rejectWithValue(code);
    }
  },
);

const initialState = {
  fish: null,
  loading: false,
  error: null,
  success: false,
  successCode: null,
};

const registerCatchSlice = createSlice({
  name: "registerCatch",
  initialState,
  reducers: {
    resetRegisterCatchState: (state) => {
      state.fish = null;
      state.loading = false;
      state.error = null;
      state.success = false;
      state.successCode = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCatch.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerCatch.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.successCode = action.payload.code;
        state.fish = action.payload.newCatch;
      })
      .addCase(registerCatch.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetRegisterCatchState } = registerCatchSlice.actions;
export default registerCatchSlice.reducer;
