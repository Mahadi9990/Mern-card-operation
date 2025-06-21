import bcrypejs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../../models/user.js"



// register
export const  registerUser = async(req,res)=>{
 const {userName,email,password} = req.body
 try {
    if(userName === "" || email === "" || password === "")
    {return res.json({
        message:"please fill up all required fields"
    })}
    const cheackUser = await User.findOne({email})
    if(cheackUser){
        return res.json({
            success:false,
            message:"User already exited"
        })
    }

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
const cheackUser = await User.findOne({email})
    if(!cheackUser){
        return res.json({
            success:false,
            message:"Email is not found pleace go to register"
        })
    }
const cheackPassword = await bcrypejs.compare(password,cheackUser.password)
    if(!cheackPassword)
        return res.json({
            success:false,
            message:"Invalide Password"
        })
    const token = jwt.sign({
        id:cheackUser._id ,role:cheackUser.role,email:cheackUser.email
    },'CLIENT_SECTECT_KEY',{expiresIn:'60m'})

    res.cookie("access_token",token,{httpOnly:true,success:true})
    .json({
        success:true,
        message:"Login successfully",
        user:{
            email:cheackUser.email,
            role:cheackUser.role,
            id:cheackUser._id
        }
    })
    
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

