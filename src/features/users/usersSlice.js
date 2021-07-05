import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath:'usersApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://reqres.in/api/users'}),
    endpoints: (builder)=>({
        getUsersByPage: builder.query({
            query: (pageNo) => `?page=${pageNo}`
        })
    })
})

export const {useGetUsersByPageQuery} = usersApi