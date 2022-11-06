import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userName: "Tser",
    email : "user40@gmail.com",
    country: "Paraguay"
}
export const authSlice = createSlice({
    name: "auth",
    initialState ,
    reducers: {
        addWord(state){
            state.name+= "word"
        }
    }
})
export const {addWord} = authSlice.actions;
export default authSlice.reducer;