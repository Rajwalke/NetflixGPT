import { createSlice } from "@reduxjs/toolkit";

const moviewSlice=createSlice({
    name:"movie",
    initialState:{
        movieList:null,
    },
    reducers:{
        addMovie:(state,action)=>{
            state.movieList=action.payload;
        }
    }

})

export default moviewSlice.reducer;
export const {addMovie} = moviewSlice.actions;