import CommonFrom from "@/components/common/form";
import { loginConfig } from "@/config/index.js";
import { loginUser } from "@/store/auth-slice/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";
const initailState={
    email:"",
    password:""
}
function AuthLogin() {
    
    const [formData, setformData] = useState(initailState);
    const dispatch =useDispatch()
    function onSubmit (event){
        event.preventDefault()
        dispatch(loginUser(formData)).then((data)=>{
            if(data?.payload?.success){
                toast(data?.payload?.message)
            }else{
                toast(data?.payload?.message)
            }
        }  )
    }
    return ( <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
                <CommonFrom
                 fromContorls={loginConfig}
                 formData={formData}
                 setFormData={setformData}
                 buttonText={"Login"}
                 onSubmit={onSubmit}
                />
            <p className="mt-2">Don't have an account 
                <Link className="pl-3 text-bold hover:underline text-blue-500" to="/auth/register">Go Register Page</Link></p>
        </div>
    </div> );
}

export default AuthLogin;