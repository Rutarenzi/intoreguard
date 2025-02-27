


const NavBar=()=>{
   return(
    <div className="flex justify-center items-center relative top-3 mb-5">
      <nav className="flex gap-1 p-0.5 border-gray rounded-full bg-white/10 backdrop-blur">
         <a href="/" className="nav-item bg-white text-gray-900">Report</a>
        <a href="/Track" className="nav-item">Track</a>
        <a href="/About" className="nav-item">About</a>
      </nav>
    </div>
   )
}

export default NavBar;