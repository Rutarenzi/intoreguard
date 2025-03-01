"use client"

import { usePathname } from 'next/navigation'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";


const NavBar=()=>{
const currentPath = usePathname();
const { data: session } = useSession();

   return(
    <div className="flex justify-center items-center relative top-3 mb-5">
      <nav className="flex gap-1 p-0.5 border-gray rounded-full bg-white/10 backdrop-blur">
         <a href="/" className={`nav-item ${currentPath == "/"?"bg-white text-gray-900":""}`}>Report</a>
        <a href="/Track" className={`nav-item ${currentPath== "/Track"?"bg-white text-gray-900":""}`}>Track</a>
        {!session && <a href="/auth/login" className={`nav-item ${currentPath =="/auth/login"?"bg-white text-gray-900":""}`}>Login</a>}
        {session && <a  onClick={() => signOut({ callbackUrl: "/" })} href="" className={`nav-item ${currentPath =="/auth/login"?"bg-white text-gray-900":""}`}>Logout</a>}
        {session &&  <a href="/dashboard" className={`nav-item ${currentPath == "/dashboard"?"bg-white text-gray-900":""}`}>Dashboard</a>}
      </nav>
    </div>
   )
}

export default NavBar;