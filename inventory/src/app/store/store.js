import {configureStore} from "@reduxjs/toolkit";
import auth from "../auth/authSlice";
import products from "../products/productSlice";
function neon (){

}
const store = configureStore({
    reducer:  {
        auth,
        products,
    }
})
export default store