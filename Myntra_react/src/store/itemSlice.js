import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:'items',
    initialState:[],
    reducers:{
     addInitialItems:(store,action)=>{
       //console.log("reducer",store,action);

        return action.payload;
     }
    }
});

export const itemsActions=itemSlice.actions;

export default itemSlice;
