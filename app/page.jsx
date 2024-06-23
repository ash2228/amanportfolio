"use client";
import { useEffect, useState, useRef } from "react";
import { Roboto, Inter_Tight } from "next/font/google";
import Navbar from "./components/navbar";
import Recentwork from "./components/recentwork";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const roboto_bold = Inter_Tight({ weight: "500", subsets: ["latin"] });

export default function Home() {
  const [nav, setNav] = useState(false);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true); // true for down, false for up
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection(true);
        setPosition((prev) => Math.min(prev + 1, 100));
      } else {
        setScrollDirection(false);
        setPosition((prev) => Math.max(prev - 1, -100));
      }

      prevScrollY.current = currentScrollY;
      setNav(currentScrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newPos = prev + (scrollDirection ? 0.1 : -0.1);
        if (newPos > 100) newPos = -99;
        if (newPos < -100) newPos = 100;
        return newPos;
      });
    }, 1);

    return () => clearInterval(interval);
  }, [scrollDirection]);

  const hoverHandler = () => {
    setHover((prev) => !prev);
  };

  return (
    <>
      {nav && <Navbar />}
      <div className="h-[100vh] bg-[#999D9E] pt-2">
        <span className={`ml-5 text-white ${roboto.className}`}>© Code By Ash</span>
        <div
          className={`absolute w-[100vw] text-white bottom-24 text-9xl`}
          id="scrollDiv"
          style={{ transform: `translate(${position}%, 0)` }}
        >
          Aman Kumar - SherGill
        </div>
      </div>
      <div className="px-8 pt-8 xl:p-44">
        <div
          className={`${roboto.className} text-3xl xl:w-[60%] leading-relaxed helping inline-block xl:ml-24 overflow-hidden`}
        >
          Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always
          on the cutting edge.
        </div>
        <div className="float-right xl:w-[20%] xl:inline help xl:mt-auto mt-12 xl:mr-24 overflow-hidden">
          The combination of my passion for design, editing & interaction positions me in a unique place in the editing
          world.
        </div>
        <button
          className="overflow-hidden absolute z-[100] bg-black text-white h-[180px] w-[180px] rounded-full xl:inline hidden mt-24 ml-20 aboutBtn"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <h1 className="absolute z-50 top-[75px] left-[50px]">About Me</h1>
          <div className={`${hover ? "hovered" : "notHovered"} h-[100%] w-[100%] rounded-full`}></div>
        </button>
      </div>
      <button
        className="overflow-hidden right-10 z-[100] mt-24 absolute bg-black text-white h-[180px] w-[180px] rounded-full xl:hidden aboutBtn"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <h1 className="absolute z-50 top-[75px] left-[50px]">About Me</h1>
        <div className={`${hover ? "hovered" : "notHovered"} h-[100%] w-[100%] rounded-full`}></div>
      </button>
      <Recentwork />
    </>
  );
}
