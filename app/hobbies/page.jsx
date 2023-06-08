'use client'
import React from 'react'
import { useState } from "react";
import Image from 'next/image';
import football from "../../public/static/assets/images/football.jpg"
import gaming from "../../public/static/assets/images/gaming.jpg"
import research from "../../public/static/assets/images/research.jpg"
import run from "../../public/static/assets/images/running.jpg"

let imgstyle = "imghobbie rounded-xl xl:rounded-3xl";

const hobbies = () => {
  let slideUp = "scale-[1] translate-y-[50%] bottom-[50%]";
  let slideDown = "scale-[.5] -bottom-[20%]";

  const [slide, setSlide] = useState(slideDown);
  const [slide2, setSlide2] = useState(slideDown);
  const [slide3, setSlide3] = useState(slideDown);
  const [slide4, setSlide4] = useState(slideDown);

  return (
    <div className="imgconthobbies pr-3 pl-3 pb-3 lg:p-5">
    <div onMouseEnter={()=>{
            setSlide(slideUp)
        }}
        onMouseLeave={()=>{
            setSlide(slideDown)
        }}
        className="relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
        
        <div className="newdiv rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden">
            <div ></div>
            <Image src = {football} className={imgstyle} placeholderSrc = {football} effect= "blur" alt = "football"/>
        </div>
      
        <h1 className={"card_title text-center white slide_txt " + slide}>FOOTBALL</h1>
    </div>
    <div onMouseEnter={()=>{
            setSlide2(slideUp)
        }}
        onMouseLeave={()=>{
            setSlide2(slideDown)
        }}
        className="divnest1 relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
       <div className="newdiv rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden">
            <div ></div>
            <Image src = {gaming} className={imgstyle} placeholderSrc = {gaming} effect= "blur" alt = "gaming"/>
        </div>
        <h1 className={"card_title text-center white slide_txt " + slide2}>GAMING</h1>
    </div>
    <div onMouseEnter={()=>{
            setSlide3(slideUp)
        }}
        onMouseLeave={()=>{
            setSlide3(slideDown)
        }}
        className="divnest1 relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
       <div className="newdiv rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden">
            <div ></div>
            <Image src = {run} className={imgstyle} placeholderSrc = {run} effect= "blur" alt = "running"/>
        </div>
        <h1 className={"card_title text-center white slide_txt " + slide3}>RUNNING</h1>
    </div>
    <div onMouseEnter={()=>{
            setSlide4(slideUp)
        }}
        onMouseLeave={()=>{
            setSlide4(slideDown)
        }}
        className="divnest1 relative flex justify-center rounded-xl xl:rounded-3xl items-center overflow-hidden w-full h-auto">
        <div className="newdiv rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden">
            <div ></div>
            <Image src = {research} className={imgstyle} placeholderSrc = {research} effect= "blur" alt = "research"/>
        </div>
        <h1 className={"card_title text-center white slide_txt " + slide4}>RESEARCH</h1>
    </div>
</div>
  )
}

export default hobbies