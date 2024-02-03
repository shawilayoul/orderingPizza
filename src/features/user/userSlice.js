import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    username:""
}

const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:({
        updateUser:(state,action)=>{
          state.username = action.payload
        }
    })
})
export const {updateUser} = userSlice.actions
export default  userSlice.reducer