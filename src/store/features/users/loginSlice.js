import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async (cedential, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
              // `${import.meta.env.VITE_API_URL}/user/login`,
              "http://localhost:3001/user/register",
              cedential
            )
            return data
        } catch (error) {
            const code = error.response?.data?.code || "network_error"
            return rejectWithValue(code)
        }
    }
)

// Funcion Leer LocalStorage
const loadUserFromStorage = () => {
  try {
    const storeUser = localStorage.getItem("user")
    return storeUser ? JSON.parse(storeUser) : null
  } catch (error) {
    return null
  }
}

const initialState = {
  user: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  loading: false,
  error: null,
  successCode: null
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      state.successCode = null
      localStorage.removeItem('user')
    },
    resetLoginState: (state) => {
      state.error = null
      state.successCode = null
    } 
  },
  extraReducers: (builder) {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.successCode = action.payload.code
      state.user = action.payload.findUser
      localStorage.setItem("user", JSON.stringify(action.payload.findUser))
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.error = action.payload
    })
  }
})

export const { logout, resetLoginState } = loginSlice.actions
export default loginSlice.reducer