"use client"

import axios from "axios";
import { useRef } from "react";

const SignUp=()=>{
    const nameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    return <div className="h-screen w-full bg-green-900 flex justify-center items-center">
         
         <div>
            <div>
            <input ref={nameRef} type="text" placeholder="Enter name" />
            </div>
            <div>
            <input ref={passwordRef} type="text" placeholder="Enter password" />
            </div>
            <button onClick={()=>{
           axios.post("http://localhost:3000/api/user/signin",{
            name:nameRef.current?.value,
            password:passwordRef.current?.value

           })
            }}>SignIn</button>
         </div>
    </div>
}

export default SignUp;