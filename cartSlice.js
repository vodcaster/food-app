import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items.length = 0;
        },
        deleteItem: (state,action)=>{
            state.items.splice(action.payload , 1)
        }
    }
})
export const {addItem , clearCart ,deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
