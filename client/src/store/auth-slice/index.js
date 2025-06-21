import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    isAuthenticated:false,
    isloading:false,
    user:null
}

export const registerUser =createAsyncThunk("/auth/register",
    async(formData)=>{
        const response = await axios.post("http://localhost:3000/api/auth/register",formData,{
            withCredentials:true
        })
        return response.data
    }
)
export const loginUser =createAsyncThunk("/auth/loign",
    async(formData)=>{
        const response = await axios.post("http://localhost:3000/api/auth/login",formData,{
            withCredentials:true
        })
        return response.data
    }
)

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{}
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending ,(state)=>{
            state.isloading = true
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isAuthenticated = false,
            state.isloading = false,
            state.user = null
        }).addCase(registerUser.rejected,(state)=>{
            state.isAuthenticated = false,
            state.isloading = false,
            state.user = null
        }).addCase(loginUser.pending ,(state)=>{
            state.isloading = true
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isloading = false,
            state.isAuthenticated = !action.payload.success? false : true,
            state.user = !action.payload.success? null : action.payload.user
        }).addCase(loginUser.rejected,(state)=>{
            state.isAuthenticated = false,
            state.isloading = false,
            state.user = null
        })
    }

})

export const { setUser } =authSlice.actions
export default authSlice.reducer

