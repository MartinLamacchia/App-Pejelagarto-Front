import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});


export const { loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;

export const fetchUserLogin = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/user/login",
        form
      );
      dispatch(loginSuccess({ user: data.findUser, isAuthenticated: data.access }));
      return data.access;
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
    }
  };
};

export const fetchUserLogout = () => {
  return async (dispatch) => {
    try {
      dispatch(loginSuccess({ user: null, access: false, message: "" }));
      return false;
    } catch (error) {
      console.log({Error: error});
    }
  };
};
