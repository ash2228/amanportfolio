"use client";
import { useEffect, useState, useRef } from "react";
import { Roboto, Inter_Tight } from "next/font/google";
import Navbar from "./components/navbar";
import Recentwork from "./components/recentwork";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const roboto_bold = Inter_Tight({ weight: "500", subsets: ["latin"] });

export default function Home() {
  const [nav,setNav] = useState(false);
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll",()=>{
      setNav(window.scrollY>200);
    })
    // Code that depends on `window` or browser APIs
  }
  
  const [hover,setHover] = useState(false);
  const hoverHandler = ()=>{
    setHover(!hover);
  }
  const [direction,setDirection] = useState(true);
  let [prev,setPrev] = useState(0);
  const ref = useRef();
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll",()=>{
      if(prev>window.scrollY){
        setDirection(false);
      }
      if(prev<window.scrollY){
        setDirection(true);
      }
      prev = window.scrollY
      })
      // Code that depends on `window` or browser APIs
    }
    
  },[])
  return(<>
  {nav&&(<Navbar/>)}  
  <div className="h-[100vh] bg-[#999D9E] pt-2">
    <span className={`ml-5 text-white ${roboto.className}`}>© Code By Ash</span>
    <div className={`absolute w-[100vw] text-white bottom-24`}>
      <Marquee direction="right" play={!direction} speed={400} className="overflow-hidden" ref={ref}>
      <Marquee speed={200} direction="left" className={`overflow-hidden text-9xl ${roboto_bold.className}`}>Aman Kumar - SherGill</Marquee>
      </Marquee>
    </div>
  </div>
  <div className="px-8 pt-8 xl:p-44">
    <div className={`${roboto.className} text-3xl xl:w-[60%] leading-relaxed helping inline-block xl:ml-24 overflow-hidden`}>
    Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
    </div>
    <div className="float-right xl:w-[20%] xl:inline help xl:mt-auto mt-12 xl:mr-24 overflow-hidden">
    The combination of my passion for design, editing & interaction positions me in a unique place in the editing world.
    </div>
    <button className="overflow-hidden absolute z-[100]  bg-black text-white h-[180px] w-[180px] rounded-full xl:inline hidden mt-24 ml-20 aboutBtn" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h1 className="absolute z-50 top-[75px] left-[50px]">About Me</h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
  </div>
    <button className="overflow-hidden right-10 z-[100] mt-24 absolute bg-black text-white h-[180px] w-[180px] rounded-full xl:hidden aboutBtn" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h1 className="absolute z-50 top-[75px] left-[50px]">About Me</h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
      <Recentwork />
      <div className="bg-[#1C1D20] pt-[30vh] xl:px-72 pb-20 xl:pb-60 px-10">
        <h1 className={`${roboto.className} text-white xl:text-8xl text-5xl whitespace-pre-wrap inline-block xl:w-[80%]`}>Let's work together</h1>
        <button className="bg-[#455CE9] h-[200px] w-[200px] rounded-full text-white xl:mt-0 mt-16 xl:float-right hover:bg-blue-700 transition-colors">
          Get In Touch
        </button>
      </div>
    </>
  );
}
