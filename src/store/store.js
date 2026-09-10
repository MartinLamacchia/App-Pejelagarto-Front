import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/users/registerSlice'

const store = configureStore({
  reducer: {
    register: registerReducer
  },
});

export default store;
