
import { createSlice } from "@reduxjs/toolkit";
const CounterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        myinc:(state)=>{
            state.cnt=state.cnt+10;
        },
        mydec:(state)=>{
            state.cnt=state.cnt-10;
        }
    }
})
export default CounterSlice.reducer;
export const {myinc,mydec}=CounterSlice.actions;
