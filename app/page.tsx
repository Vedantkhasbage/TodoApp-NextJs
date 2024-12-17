import Link from "next/link";

export default function Home() {
  
  return <div className="h-screen w-full bg-black flex justify-center items-center">
    <div>
      <h1>Todo Application</h1>  

        <Link href="/signIn">Sign In</Link> 
        <br/>
        <Link href="/signUp">Sign Up</Link> 
       </div>

  </div>
}
