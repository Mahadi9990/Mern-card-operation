import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    isAuthenticated:false,
    isloading:true,
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
export const checkAuth = createAsyncThunk("/auth/checkauth",
    async()=>{
        const response =await axios.get("http://localhost:3000/api/auth/checkauth",{
            withCredentials:true,
            headers:{
                "Cache-Control":"no-store ,no-cache,must-revalidate,porxy-revalidate"
            },
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
            state.user = action.payload.success ? action.payload.user: null,
            state.isAuthenticated = action.payload.success? true : false
        }).addCase(loginUser.rejected,(state)=>{
            state.isloading = false,
            state.user = null,
            state.isAuthenticated = false
        }).addCase(checkAuth.pending ,(state)=>{
            state.isloading = true
        }).addCase(checkAuth.fulfilled,(state,action)=>{
            state.isloading = false,
            state.user = action.payload.success ? action.payload.user: null,
            state.isAuthenticated = action.payload.success? true : false
        }).addCase(checkAuth.rejected,(state,action)=>{
            state.isAuthenticated = false,
            state.user = null,
            state.isloading = false
        })
        
    }

})

export const { setUser } =authSlice.actions
export default authSlice.reducer

