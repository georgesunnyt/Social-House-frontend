import { configureStore} from '@reduxjs/toolkit'
import  postsReducer from './features/posts/postsSlice'
import { usersApi } from './features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    [usersApi.reducerPath] : usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(usersApi.middleware)
})
