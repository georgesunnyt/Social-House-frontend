import { configureStore} from '@reduxjs/toolkit'
import  postsReducer from './features/posts/postsSlice'
import { usersApi } from './features/users/usersSlice'
import loginReducer from './features/login/loginSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    [usersApi.reducerPath] : usersApi.reducer,
    login: loginReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(usersApi.middleware)
})
