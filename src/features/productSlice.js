import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product : []
} 

const productSlice = createSlice({
    name : "product",
    initialState , 
    reducers :{
        add :(state , action)=>{
            return{
                ...state,
                product : [...state.product , action.payload]
            }
        }

    },
    extraReducers : (builder) =>{

    }
})

export const {add} = productSlice.actions
export default productSlice.reducer