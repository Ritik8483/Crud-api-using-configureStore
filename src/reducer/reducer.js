import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit"

export const getThunk=createAsyncThunk('userSlice/getThunk',async () =>{
        return fetch('http://localhost:3000/userInfo')
        .then((resp)=>resp.json())
    }
);

export const getDelete=createAsyncThunk('userSlice/getDelete',async (id) =>{
    return fetch(`http://localhost:3000/userInfo/${id}`,{ method: 'DELETE'})
    .then((resp)=>{return {id:id}} )
}
);


const initialValues={
    userValue:[],
    loading:false
}
const userReducer=createSlice({
    name:'userSlice',
    initialState:initialValues,
    extraReducers:{
        [getThunk.pending]:(state)=>{
            state.loading=true;
        },
        [getThunk.fulfilled]:(state,action)=>{
            state.loading=false;
            state.userValue=action.payload
        },

        [getDelete.pending]:(state)=>{
            state.loading=true;
        },
        [getDelete.fulfilled]:(state,action)=>{
            console.log('State ',current(state));
            state.loading=false;
            state.userValue=state.userValue.filter((item)=>item.id !== action.payload.id);
        },
    }
});

// export const { getUsers,} = crudReducer.actions
export default userReducer.reducer