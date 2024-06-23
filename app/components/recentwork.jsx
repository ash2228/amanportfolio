"use client"
import {Roboto} from "next/font/google";
import { useState } from "react";
const roboto = Roboto({weight:"400",subsets:["latin"]});
export default function Recentwork(){
  const [hover,setHover] = useState(false);
  const hoverHandler = ()=>{
    setHover(!hover);
  }
    return(<div className="h-[400vh] xl:mt-20 px-8 mt-52">
        <span className="xl:ml-[20%] text-[#aeaeae] text-xs">RECENT WORK</span>
        <div className="flex-col content-center justify-between mt-10 hidden xl:flex">
        <div className="flex-col content-center justify-between hidden xl:flex">
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>Ashlee</span>
                <span className={`${roboto.className} float-right mt-12`}>Grading & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex">
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>The Case</span>
                <span className={`${roboto.className} float-right mt-12`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex">
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>Brand™</span>
                <span className={`${roboto.className} float-right mt-12`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex">
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>Jennifer</span>
                <span className={`${roboto.className} float-right mt-12`}>Transitions & Storyboarding</span>
            </div>
            <hr className="border w-[80%] m-auto" />
            </div>
        </div>
        <div className="flex content-center justify-center">
        <button className="z-[100] text-black hover:text-white h-[70px] border-2 w-[170px] rounded-full xl:inline hidden mt-24 ml-20 aboutBtn overflow-hidden" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h1 className="absolute z-50 top-[23px] left-[40px]">More work<sup>4</sup></h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
        </div>
      </div>)
}