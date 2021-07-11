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
            state.username = action.payload.username
        }
    }
})

export const {authenticate} = loginSlice.actions;
export default loginSlice.reducer;