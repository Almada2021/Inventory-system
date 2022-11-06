import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: builder => ({
        getUserProducts: builder.query({
          query: (id) => `/getproducts/${id}`,
        }),
    }),
})
export const { useGetUserProductsQuery  } = apiSlice