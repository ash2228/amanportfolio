"use client";
import { useRouter } from "next/navigation";
import { useState,useEffect} from "react";


export default function Navbar() {
  let [nav,setNav] = useState(false);
  let [i,setI] = useState(0);
  let [hover,setHover] = useState(false);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);
  const [fourth,setFourth] = useState(false);
  useEffect(()=>{
    let a = document.getElementsByTagName("body")[0];
    a.style.overflowY = nav?"hidden":"scroll";
  },[nav])
  useEffect(()=>{
    if(window.innerWidth>1300 && typeof window !== 'undefined'){
      function gimble(elementID){
      let but = document.getElementById(elementID);
    let boundingRect = but.getBoundingClientRect();
    const magnetStrength = 20;
    but.addEventListener("mousemove",(e)=>{
      const {clientX,clientY} = e;
      const {left,top,width,height} = boundingRect;
      const centerX = left+width/2;
      const centerY = top+height/2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX**2+deltaY**2);
      const translateX = (deltaX/distance) * magnetStrength;
      const translateY = (deltaY/distance) * magnetStrength;
      but.style.transform = `translate(${translateX}px,${translateY}px)`;
      but.addEventListener("mouseleave",()=>{
        but.style.transform = "translate(0,0)"
      })
    })
    }
    gimble("navBtn");
    }
  },[])
  const navHandler = ()=>{
    setNav(!nav);
    setI(i+1);
  }
  const hoverTrue = (e)=>{
    setHover(true);
    if(e.target.id=="work"){
        setSecond(true)
    }
    if(e.target.id=="about"){
        setThird(true);
    }
    if(e.target.id=="contact"){
        setFourth(true)
    }
}
const hoverFalse = (e)=>{
      if(e.target.id=="work"){
          setSecond(false);
      }
      if(e.target.id=="about"){
          setThird(false);
      }
      if(e.target.id=="contact"){
          setFourth(false);
      }
    setHover(false);
    
  }
  let [btnHover,setbtnHover] = useState(false)
  return (
    <>
    <div onClick={navHandler} className={`${nav?"bg-[#455CE9]":"bg-black"} z-[150] transition-colors duration-500 rounded-full h-[100px] w-[100px] top-5 right-5 float-right fixed text-white overflow-hidden`} id="navBtn" onMouseEnter={()=>setbtnHover(!btnHover)} onMouseLeave={()=>setbtnHover(!btnHover)}>
    <div className={`flex top-[45px] left-[35px] absolute gap-2 flex-col z-50 ${nav&&"rotate-45 gap-[10px]  -mt-[1.5px]"}`}>
            <hr className={`w-[30px] ${nav&&"translate-y-[6px]"} transition`} />
            <hr className={`w-[30px] ${nav&&"-translate-y-[5px] rotate-90"} transition`} />
    </div>
    <div className={`${btnHover?"hovered":"notHovered"} h-[100%] w-[100%] rounded-full`}></div>
  </div>
      <div className={`fixed lg:w-[100vw] lg:h-[100vh] h-[100%] w-[100%] ${nav?"block":"hid-nav"} z-[120] overflow-hidden ${nav&&"backdrop-blur-sm"}`}>
        <div className={`lg:w-[37vw] lg:h-[100vh] bg-[#1C1D20] float-right h-[100%] w-[100%] ${nav?"nav":i>1?"nav-hid":"hidden"} content-center pl-10 overflow-hidden`}>

            <div className="flex flex-row text-white text-6xl list-none">
               <div className="flex flex-col -mt-5">
               <li className={`${hover?"invisible":"block"} transition font-extrabold mr-5`}>.</li> 
               <li className={`${second?"block":"invisible"} transition font-extrabold mr-5`}>.</li> 
               <li className={`${third?"block":"invisible"} transition font-extrabold mr-5`}>.</li>
               <li className={`${fourth?"block":"invisible"} transition font-extrabold mr-5`}>.</li>
                </div> 
               <div className="flex flex-col">
               <li className={`cursor-pointer`} id={nav?"home":"home-leave"}>Home</li> 
               <li className={`cursor-pointer`} onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} id={nav?"work":"work-leave"}>Work</li> 
               <li className={`cursor-pointer`} onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} id={nav?"about":"about-leave"}>About</li>
               <li className={`cursor-pointer`} onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} id={nav?"contact":"contact-leave"}>Contact</li>
                </div> 
            </div>
        </div>
      </div>
    </>
  );
}
