import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated'),
    username: localStorage.getItem('username')
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        authenticate(state, action) {
            state.isAuthenticated = true
            state.username = action.payload.username
            localStorage.setItem('isAuthenticated', true)
            localStorage.setItem('username', action.payload.username)
        },
        logout(state) {
            state.isAuthenticated = false
            state.username = ''
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
        }
    }
})

export const {authenticate, logout} = loginSlice.actions;
export default loginSlice.reducer;