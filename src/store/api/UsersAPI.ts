import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:3000/initData.json'}
    ),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: `http://localhost:3000/initData.json`,
                // This is the same as passing 'text'
                // responseHandler: (response) => response.json(),
            }),
            // query: () => 'users',
        })
    })
})

export const {useGetAllUsersQuery} = usersApi;
export default usersApi;