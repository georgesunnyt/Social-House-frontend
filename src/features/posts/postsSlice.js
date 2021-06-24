import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id:1, title: 'First Post', content: 'This is the sample first post'},
    {id:2, title: 'Second Post', content: 'Hello, how do you do'}
]

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;