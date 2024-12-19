/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        // when evere the logout then remove the user info 
        removeUser:(state,action)=>{
            return null;
        }
    }
});
export default userSlice.reducer;
export const{addUser,removeUser}=userSlice.actions;