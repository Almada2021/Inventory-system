import { createSelector, createEntityAdapter,createSlice } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";
/*
const fetchProducts =async () => {
    try {
      const fetche = await axios.get(`http://localhost:8000/getproducts/2`)
      if (!products || JSON.stringify(products) !== JSON.stringify(fetche.data) && fetche.data.length !== 0){
        setProducts([...fetche.data])
      }else{
        if(products === undefined || products.length === 0){
          setProducts([])
        }
        
      }
    } catch (error) { 
      return error.message
    }
}
*/
const postsAdapter = createEntityAdapter({
    selectId: (product) => product.id,
	sortComparer: (a, b) => b.price > a.price ? b : a,
	
})
const initialState = postsAdapter.getInitialState()
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoint : builder  => ({
        getProducts: builder.query({
            query: (id) => `/products/${id}`,
            tranformResponse:  responseData => {
                console.log(responseData)
                return responseData
            },
        })
    })
})


export const {useGetProducts} = extendedApiSlice

/*
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
    },
});
export default productSlice.reducer;
*/
