"use client"
import {Roboto} from "next/font/google";
import Image from "next/image";
import { useState,useEffect } from "react";
const roboto = Roboto({weight:"400",subsets:["latin"]});
export default function Recentwork(){
  const [hover,setHover] = useState(false);
  const [HoverOnWork,setWorkHover] = useState(false);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [first,setFirst] = useState(false);
  const [second,setSecond] = useState(false);
  const [three,setThree] = useState(false);
  const [four,setFour] = useState(false);
  const hoverHandler = ()=>{
    setHover(!hover);
  }
  const workHover = (e)=>{
    setX(e.clientX-500);
    setY(e.clientY-200);
    setWorkHover(true);
    if(first){
        let a = document.getElementById("first");
        a.scrollIntoView({behavior:"smooth"})
    }
    if(second){
        let a = document.getElementById("second");
        a.scrollIntoView({behavior:"smooth"})
    }
    if(three){
        let a = document.getElementById("three");
        a.scrollIntoView({behavior:"smooth"})
    }
    if(four){
        let a = document.getElementById("four");
        a.scrollIntoView({behavior:"smooth"})
    }
  }

    return(<div className="h-[400vh] xl:mt-20 px-8 mt-52">
        <span className="xl:ml-[20%] text-[#aeaeae] text-xs">RECENT WORK</span>
        <div className="flex-col content-center justify-between mt-10 hidden xl:flex" onMouseMove={workHover} onMouseLeave={()=>{setWorkHover(false)}}>
        <div className="flex-col content-center justify-between hidden xl:flex" onMouseEnter={()=>{setFirst(true)}} onMouseLeave={()=>{setFirst(false)}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>Ashlee</span>
                <span className={`${roboto.className} float-right mt-12`}>Grading & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex" onMouseEnter={()=>{setSecond(true)}} onMouseLeave={()=>{setSecond(false)}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>The Case</span>
                <span className={`${roboto.className} float-right mt-12`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex" onMouseEnter={()=>{setThree(true)}} onMouseLeave={()=>{setThree(false)}}>
            <hr className="border w-[80%] m-auto" />
            <div className="py-16 px-60">
                <span className={`font-bold ${roboto.className} text-8xl`}>Brand™</span>
                <span className={`${roboto.className} float-right mt-12`}>Transitions & Editing</span>
            </div>
            </div>
        <div className="flex-col content-center justify-between hidden xl:flex" onMouseEnter={()=>{setFour(true)}} onMouseLeave={()=>{setFour(false)}}>
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
        <div style={{ position: 'fixed', left: x, top: y }} className={`hidden border ${HoverOnWork&&"xl:block scaleDiv"} bg-[#EFEFEF] content-center p-10`} id="slider">
            <div className="h-[200px] overflow-scroll flex flex-col gap-40">
            <Image src="/thumb2.png" alt="" width={400} height={400} id="first" />
            <Image src="/football.png" alt="" width={400} height={400} id="second"  />
            <Image src="/thumb3.png" alt="" width={400} height={400} id="three"  />
            <Image src="/thumb5.png" alt="" width={400} height={400} id="four"  />
            </div>
        </div>
      </div>)
}