import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoute from "./routes/auth/auth.route.js"
 

mongoose.connect("mongodb+srv://admahadi1234:admahadi1234@cluster0.1y7wcib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Mongoose is Connected")).catch((error)=>console.log(error))
const app =express()
const PORT =process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','DELET','PUT'],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true

}))
app.use("/api/auth",authRoute)



app.listen(PORT,()=>(console.log(`Server is running on ${PORT}`)))

