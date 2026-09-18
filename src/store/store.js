import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './features/users/registerSlice'
import loginReducer from './features/users/loginSlice'
import getUserByIdReducer from './features/users/getUserByIdSlice'
import getAllFishForUserReducer from "./features/catchFish/getAllFishForUser";
import getAllUsersReducer from './features/users/getAllUsersSlice'
import registerCatchReducer from './features/catchFish/registerCatchSlice'

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    getUserById: getUserByIdReducer,
    getAllFishForUser: getAllFishForUserReducer,
    getAllUsers: getAllUsersReducer,
    registerCatch: registerCatchReducer    
  },
});

export default store;
