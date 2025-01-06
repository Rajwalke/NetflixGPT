import { createSlice } from "@reduxjs/toolkit";

const moviewSlice=createSlice({
    name:"movie",
    initialState:{
        movieList:null,
        trailor:null
    },
    reducers:{
        addMovie:(state,action)=>{
            state.movieList=action.payload;
        },
        addTailor:(state,action)=>{
            state.trailor=action.payload;
        }
    }

})

export default moviewSlice.reducer;
export const {addMovie,addTailor} = moviewSlice.actions;