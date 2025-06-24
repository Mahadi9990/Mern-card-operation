import CommonFrom from "@/components/common/form";
import { registerConfig } from "@/config/index.js";
import { registerUser } from "@/store/auth-slice/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner"

import { Link, useNavigate } from "react-router-dom";
const initailState={
    userName:"",
    email:"",
    password:""
}
function AuthRegister() {
    
    const [formData, setFormData] = useState(initailState);
    const dispatch = useDispatch()
    const navigate =useNavigate()
    function onSubmit (event){
        event.preventDefault()

        dispatch(registerUser(formData)).then((data)=>{
            if(data?.payload?.success){
                navigate('/auth/login')
                toast(data?.payload?.message)
            }else{
                toast(data?.payload?.message)
            }
        }  )

    }
    return ( 
    <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
                <CommonFrom
                 fromContorls={registerConfig}
                 formData={formData}
                 setFormData={setFormData}
                 buttonText={"Sing up"}
                 onSubmit={onSubmit}
                />
            <p className="mt-2">Already have account 
                <Link className="pl-3 text-bold hover:underline text-blue-500" to="/auth/login">Go Login Page</Link></p>
        </div>
    </div>
     );
}

export default AuthRegister;