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
        postUserProduct: builder.mutation({
          query: (value) => ({
              url: '/add',
              method: 'POST',
              body: value
          }),
          invalidatesTags: ['product'],
        })
        ,
        deleteUserProduct: builder.mutation({
          query: (id) => ({
            url: `/delete/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags:['product']
        }),
        //providers
        getUserProviders: builder.query({
          query: (id) => `/get/providers/${id}`,
          providesTags: ['providers']          
        }),
        postUserProvider: builder.mutation({
          query: (value) => ({
            url: '/add/providers',
            method: 'POST',
            body: value,
          }),
          invalidatesTags: ['providers']
        }),
    }),
})
export const { 
  useGetUserProductsQuery, 
  useDeleteUserProductMutation,
  useGetUserProvidersQuery,
  usePostUserProductMutation,
  usePostUserProviderMutation,
} = apiSlice