"use client"
import {Roboto} from "next/font/google";
import Image from "next/image";
import { useState,useEffect, useRef } from "react";
const roboto = Roboto({weight:"400",subsets:["latin"]});
export default function Recentwork(){
  const [hover,setHover] = useState(false);
  const [HoverOnWork,setWorkHover] = useState(false);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const first = useRef();
  const second = useRef();
  const three = useRef();
  const four = useRef();
  const hoverHandler = ()=>{
    setHover(!hover);
  }
  const workHover = (e)=>{
    setX(e.clientX+20);
    setY(e.clientY-200);
    setWorkHover(true);
  }

    return(<div className="h-[400vh] xl:mt-20 px-8 mt-52">
        <span className="xl:ml-[20%] text-[#aeaeae] text-xs">RECENT WORK</span>
        <div className="xl:hidden flex flex-col gap-10 mt-24">
            <div className="flex flex-col gap-5">
            <div className="bg-[#EFEFEF] py-10 px-5">
            <Image src="/thumb2.png" alt="" width={400} height={400} id="first" />
            </div>
            <span className={`font-bold ${roboto.className} text-3xl`}>Ashlee</span>
            <hr />
            <div>
                <span>Grading And Editing</span>
                <span className="float-right">2024</span>
            </div>
            </div>
            <div className="flex flex-col gap-5">
            <div className="bg-[#EFEFEF] py-10 px-5">
            <Image src="/football.png" alt="" width={400} height={400} id="second"  />
            </div>
            <span className={`font-bold ${roboto.className} text-3xl`}>The Case</span>
            <hr />
            <div>
                <span>Transition And Editing</span>
                <span className="float-right">2024</span>
            </div>
            </div>
            <button className="z-[100] text-black hover:text-white h-[70px] border-2 w-[170px] rounded-full xl:hidden mx-auto aboutBtn overflow-hidden" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h1 className="absolute z-50 top-[23px] left-[40px]">More work<sup>6</sup></h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
        </div>
        <div className="flex-col content-center justify-between mt-10 hidden xl:flex" onMouseMove={workHover} onMouseLeave={()=>{setWorkHover(false)}}>
        <div className="flex-col content-center justify-between hidden xl:flex group" onMouseEnter={()=>{first.current.scrollIntoView({behavior: 'smooth'})}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60 hover:px-56 transition-all">
                <span className={`font-bold ${roboto.className} text-8xl group-hover:opacity-25 transition`}>Ashlee</span>
                <span className={`${roboto.className} float-right mt-12 group-hover:opacity-25 transition`}>Grading & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex group" onMouseEnter={()=>{second.current.scrollIntoView({behavior: 'smooth'})}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60 hover:px-56 transition-all">
                <span className={`font-bold ${roboto.className} text-8xl group-hover:opacity-25 transition`}>The Case</span>
                <span className={`${roboto.className} float-right mt-12 group-hover:opacity-25 transition`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex group" onMouseEnter={()=>{three.current.scrollIntoView({behavior: 'smooth'})}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60 hover:px-56 transition-all">
                <span className={`font-bold ${roboto.className} text-8xl group-hover:opacity-25 transition`}>Brand™</span>
                <span className={`${roboto.className} float-right mt-12 group-hover:opacity-25 transition`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex group" onMouseEnter={()=>{four.current.scrollIntoView({behavior: 'smooth'})}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60 hover:px-56 transition-all">
                <span className={`font-bold ${roboto.className} text-8xl group-hover:opacity-25 transition`}>Jennifer</span>
                <span className={`${roboto.className} float-right mt-12 group-hover:opacity-25 transition`}>Transitions & Storyboarding</span>
            </div>
            <hr className="border w-[80%] m-auto" />
            </div>
        </div>
        <div className="flex content-center justify-center">
        <button className="z-[100] text-black hover:text-white h-[70px] border-2 w-[170px] rounded-full xl:inline hidden mt-24 aboutBtn overflow-hidden" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h1 className="absolute z-50 top-[23px] left-[40px]">More work<sup>4</sup></h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
        </div>
        <div style={{ position: 'fixed', left: x, top: y }} className={`hidden border ${HoverOnWork&&"xl:block scaleDiv"} content-center`} id="slider">
            <div className="h-[280px] overflow-scroll flex flex-col">
            <Image src="/thumb2.png" alt="" width={400} height={400} ref={first} className="py-10 px-5 bg-[#EFEFEF]" />
            <Image src="/football.png" alt="" width={400} height={400} ref={second} className="py-10 px-5 bg-blue-500" />
            <Image src="/thumb3.png" alt="" width={400} height={400} ref={three} className="py-10 px-5 bg-yellow-200" />
            <Image src="/thumb5.png" alt="" width={400} height={400} ref={four} className="py-10 px-5 bg-green-500" />
            </div>
        </div>
      </div>)
}