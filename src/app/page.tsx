"use client"
import NavBar from "@/components/Mine/Navbar";
import ReportForm from "@/components/Mine/Report/ReportForm";
import Image from "next/image";


export default function Home(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>

) {
 const handleStepComplete =()=>{

 }
  return (
    <div className="w-[80%] mx-auto">
     <div className="flex text-white">

       <div className="hidden md:flex w-full h-screen basis-[1/2] ">
         <div className="mt-20">
           <h6 className="text-[60px] lg:text-[120px] leading-none font-serif tracking-wide mt-4">INTORE GUARD</h6>
          <p className="text-xl">Report instantly, stay safe.</p>
         </div>
       </div>

       <div className="w-full h-full basis-full md:basis-[1/2] grow-0">
           <div className="mt-10 md:hidden text-center font-serif">
             <h6>INTORE GUARD</h6>
             <p>Report instantly, stay safe.</p>
           </div>
           <div className="mt-3 md:mt-20">
              <ReportForm onComplete={handleStepComplete}/>
           </div>
       </div>
     </div>
    </div>
  );
}
