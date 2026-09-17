import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/users/registerSlice'
import loginReducer from './features/users/loginSlice'
import getUserByIdReducer from './features/users/getUserByIdSlice'
import getAllFishForUserReducer from "./features/catchFish/getAllFishForUser";
import getAllUsersReducer from './features/users/getAllUsersSlice'

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    getUserById: getUserByIdReducer,
    getAllFishForUser: getAllFishForUserReducer,
    getAllUsers: getAllUsersReducer    
  },
});

export default store;
