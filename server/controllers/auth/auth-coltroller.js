import bcrypejs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../../models/user.js"



// register
export const  registerUser = async(req,res)=>{
 const {userName,email,password} = req.body
 try {
    const hashPassword = await bcrypejs.hash(password,12)

    const newUser = new User({
        userName,email,password:hashPassword
    })
    await newUser.save()
    res.status(200).json({
        success:true,
        message:"User has been created"
    })
 } catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message: "Some error is occurred"
    })
 }
}

// login
export const loginUser = async(req,res)=>{
 const {email,password} = req.body
 try {
    
 } catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message: "Some error is occurred"
    })
 }
}

// logout


// auth middleware

