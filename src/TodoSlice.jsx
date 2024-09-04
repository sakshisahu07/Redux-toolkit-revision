

import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        },
        delTask:(state,actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload)
        },
        taskComplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].complete=true;
                }
            }
        },
        taskUncomp:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].complete=false;
                }
            }
        },
        editSave:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.work;
                }
            }
        }
    }
})
export default todoSlice.reducer;
export const {addTask,delTask,taskComplete,taskUncomp,editSave}=todoSlice.actions;
