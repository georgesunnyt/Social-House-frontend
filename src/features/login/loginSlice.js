import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated'),
    username: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        authenticate(state, action) {
            state.isAuthenticated = true
            sessionStorage.setItem('isAuthenticated', true)
            state.username = action.payload.username
        },
        logout(state) {
            state.isAuthenticated = false
            state.username = ''
            sessionStorage.setItem('isAuthenticated', false)
        }
    }
})

export const {authenticate, logout} = loginSlice.actions;
export default loginSlice.reducer;