import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        // n : () => { return 0},
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(apiSlice.middleware)),
    
})
setupListeners(store.dispatch)
//auth slice and product slice file