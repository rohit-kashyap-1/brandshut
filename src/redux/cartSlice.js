import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    value:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.value.push(action.payload); //[].push({})
        }
        //filter
    }
})

export const {addToCart} =  cartSlice.actions //{addToCart,}
export default cartSlice.reducer