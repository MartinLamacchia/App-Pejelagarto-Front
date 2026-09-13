import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/users/registerSlice'
import loginReducer from './features/users/loginSlice'

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer
  },
});

export default store;
