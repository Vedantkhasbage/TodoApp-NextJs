"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SignUp=()=>{
    const nameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const router=useRouter()
    return <div className="h-screen w-full bg-green-900 flex justify-center items-center">
         
         <div>
            <div>
            <input ref={nameRef} type="text" placeholder="Enter name" />
            </div>
            <div>
            <input ref={passwordRef} type="text" placeholder="Enter password" />
            </div>
            <button onClick={async()=>{
         await  axios.post("http://localhost:3000/api/v1/signup",{
            name:nameRef.current?.value,
            password:passwordRef.current?.value
           })
           router.push("/signIn")
            }}>SignUp</button>

        
         </div>
    </div>
}

export default SignUp;