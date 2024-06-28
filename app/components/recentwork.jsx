"use client"
import {Roboto} from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee"
import { useState,useEffect, useRef } from "react";
import Navbar from "./navbar";
import { Work } from "../context";
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
  const ref = useRef();
    return(
    <>
    <div className="xl:mt-20 mt-52">
        <span className="xl:ml-[20%] text-[#aeaeae] text-xs ml-10">RECENT WORK</span>
        <div className="xl:hidden flex flex-col gap-10 mt-24 px-5">
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
            <button className="z-[100] text-black hover:text-white h-[70px] border-2 w-[170px] rounded-full xl:hidden mx-auto aboutBtn overflow-hidden" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} onClick={()=>{window.open("https://drive.google.com/drive/folders/13fu7rRuqOe8i1dDoOCC_qb9CPh-Yyxgu?usp=sharing","_blank")}}>
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
        <button className="z-[100] text-black hover:text-white h-[70px] border-2 w-[170px] rounded-full xl:inline hidden mt-24 aboutBtn overflow-hidden" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} onClick={()=>{window.open("https://drive.google.com/drive/folders/13fu7rRuqOe8i1dDoOCC_qb9CPh-Yyxgu?usp=sharing","_blank")}}>
      <h1 className="absolute z-50 top-[23px] left-[40px]">More work<sup>4</sup></h1>
      <div className={`${hover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
        </div>
        <div style={{ position: 'fixed', left: x, top: y }} className={`hidden border ${HoverOnWork&&"xl:block scaleDiv"} content-center`} id="slider">
            <div className="h-[280px] overflow-scroll flex flex-col">
            <Image src="/thumb2.png" alt="" width={400} height={400} ref={first} className="py-10 px-5 bg-[#EFEFEF]" />
            <Image src="/football.png" alt="" width={400} height={400} ref={second} className="py-10 px-5 bg-[#EFEFEF]" />
            <Image src="/thumb3.png" alt="" width={400} height={400} ref={three} className="py-10 px-5 bg-[#EFEFEF]" />
            <Image src="/thumb5.png" alt="" width={400} height={400} ref={four} className="py-10 px-5 bg-[#EFEFEF]" />
            </div>
        </div>
        <Marquee>
        <div className="hidden xl:flex gap-10 mt-40 justify-center ml-10" id="scroller">
        <div className="bg-[#EFEFEF] px-5 py-10 flex-grow-0">
          <Image src={"/gify1.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#D7E4EC] px-5 py-10">
          <Image src={"/gif3.gif"} width={300} height={300}></Image>
        </div>
        <div className="bg-[#D7D4CF] px-5 py-10">
          <Image src={"/gif2.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#22242B] px-5 py-10">
          <Image src={"/gif4.gif"} width={250} height={250}></Image>
        </div>
        <div className="bg-[#D7E4EC] px-5 py-10">
          <Image src={"/gif.gif"} width={250} height={250}></Image>
        </div>
        <div className="bg-[#22242B] px-5 py-10">
          <Image src={"/gif5.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#EFEFEF] px-5 py-10">
          <Image src={"/gif6.gif"} width={300} height={300}></Image>
        </div>
        <div className="bg-[#E8E3E5] px-5 py-10">
          <Image src={"/gif7.gif"} width={400} height={400}></Image>
        </div>
      </div>
      </Marquee>
        <Marquee direction="right">
        <div className="hidden xl:flex gap-10 mt-10 justify-center ml-10" id="scroller">
        <div className="bg-[#EFEFEF] px-5 py-10 flex-grow-0">
          <Image src={"/gify1.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#D7E4EC] px-5 py-10">
          <Image src={"/gif3.gif"} width={300} height={300}></Image>
        </div>
        <div className="bg-[#D7D4CF] px-5 py-10">
          <Image src={"/gif2.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#22242B] px-5 py-10">
          <Image src={"/gif4.gif"} width={250} height={250}></Image>
        </div>
        <div className="bg-[#D7E4EC] px-5 py-10">
          <Image src={"/gif.gif"} width={250} height={250}></Image>
        </div>
        <div className="bg-[#22242B] px-5 py-10">
          <Image src={"/gif5.gif"} width={450} height={450}></Image>
        </div>
        <div className="bg-[#EFEFEF] px-5 py-10">
          <Image src={"/gif6.gif"} width={300} height={300}></Image>
        </div>
        <div className="bg-[#E8E3E5] px-5 py-10">
          <Image src={"/gif7.gif"} width={400} height={400}></Image>
        </div>
      </div>
      </Marquee>
      <div className="bg-white h-[10vh] w-[100%] scrollup absolute rounded-b-full"></div>
      </div>
      </>
      )
}