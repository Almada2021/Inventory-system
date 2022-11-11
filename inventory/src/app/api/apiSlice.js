import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
	reducerPath: 'api',
  tagTypes: ['product', 'providers'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: builder => ({
        getUserProducts: builder.query({
          query: (id) => `/getproducts/${id}`,
          providesTags: ['product']
        }),
     
        deleteUserProduct: builder.mutation({
          query: (id) => ({
            url: `/delete/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags:['product']
        }),
        //providers
        getUserProviders: builder.query({
          query: (id) => `get/providers/${id}`,
          providesTags: ['providers']          

        })
    }),
})
export const { useGetUserProductsQuery, useDeleteUserProductMutation, useGetUserProvidersQuery} = apiSlice