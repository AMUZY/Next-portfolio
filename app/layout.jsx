'use client';

import '@styles/globals.scss'

import {v4 as uuidv4} from 'uuid'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import links from "../links.json"

import fb from "@public/static/assets/icons/fb_black.svg"
import wh from "@public/static/assets/icons/whatsapp_black.svg"
import tw from "@public/static/assets/icons/twitter_black.svg"
import ig from "@public/static/assets/icons/ig_black.svg"
import mail from "@public/static/assets/icons/mail_black.svg"
import lkdn from "@public/static/assets/icons/linkedin_black.svg"
import github from "@public/static/assets/icons/github_black.svg"
import menu_icon from "@public/static/assets/icons/menu_icon.svg"
// WHITE ICONS
import fb_wh from "@public/static/assets/icons/fb_white.svg"
import wh_wh from "@public/static/assets/icons/whatsapp_white.svg"
import tw_wh from "@public/static/assets/icons/twitter_white.svg"
import ig_wh from "@public/static/assets/icons/ig_white.svg"
import mail_wh from "@public/static/assets/icons/mail_white.svg"
import lkdn_wh from "@public/static/assets/icons/linkedin_white.svg"
import github_wh from "@public/static/assets/icons/github_white.svg"


export const metadata = {
  title: 'Christian',
  description: 'Hi, I\'m Christian',
}

// const links = JSON.parse(links)

export default function RootLayout({ children }) {
//   const router = useRouter();
    const path = usePathname();

  let iconstyle = "m-1 0.02rem"
  let mob_iconstyle = "my-3 0.02rem"

  const [blur,setBlur] = useState("hidden");
  const [slide,setSlide] = useState("top-0 bottom-0 right-[-50%]");
  const [count,setCount] = useState(true);
  const [menu,setMenu] = useState("menu")

  const nav = [
      {name : "About", path : "/about"},
      {name : "Tech Skills", path : "/tech"},
      {name : "Other Skills", path : "/other"},
      {name : "Hobbies", path : "/hobbies"}
  ]

  function Show_or_hide(){
      if(count === true){
          setBlur("block");
          setSlide("top-0 bottom-0 right-[0]")
          setMenu(" menu rotate-[135deg]")
          setCount(false);
      }
      else {
          setBlur("hidden");
          setSlide("top-0 bottom-0 right-[-50%]")
          setMenu(" menu rotate-[0deg]")
          setCount(true);
      }
  }
  return (
    <html lang="en">
      <body>
        <div className="relative overflow-hidden w-full h-full flex flex-col lg:flex-row">
            <div className="order-1 navbar h-auto lg:h-full lg:w-[12%]">
                <div className="lg:pt-20 lg:pb-8 lg:pl-2 lg:pl-5 h-full flex flex-col justify-between">
                    {/* MOBILE NAVBAR */}
                    <div className="px-5 z-[3] py-2 w-full flex flex-row items-center justify-end lg:hidden">
                        {/* CHRISTIAN */}
                        {/* <h1 className="white name_title"> Christian </h1> */}
                        {/* MENU ICON */}
                        <button onClick={()=>{
                            Show_or_hide();
                        }}>
                            <Image style={{width: 'auto' , height: 'auto'}} width = {32} height = {32} src = {menu_icon} className={iconstyle + menu + " animenu"} alt = "menu icon" />
                        </button>
                    </div>
                    {/* TABLET/DESKTOP */}
                    {/* NAME TITLE AND NAV */}
                    <div className = "hidden flex flex-col justify-between lg:flex">
                        {/* NAME */}
                        <div className="flex flex-col mb-5 pr-1">
                            <h1 className="name_title">
                                Amu
                            </h1>
                            <h1 className="name_title">
                                Christian
                            </h1>
                            <h1 className="name_title">
                                Nnamdi
                            </h1>
                        </div>
                        {/* NAVLINKS */}
                        <div className="flex flex-col">
                            {
                                nav.map((item)=>{
                                    return (
                                        <Link key = {uuidv4()} 
                                        className= {
                                            (item.path === path) ?
                                                "px-5 py-2 my-2 theme_col white text_semibold rounded-l-full"
                                            :
                                                "px-5 py-2 my-2 white_col black text rounded-l-full hover:bg-gray-400"
                                        }
                                        href = {item.path}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* LINKS */}
                    <div className = "hidden linkbox flex-row flex-wrap justify-center pr-[20px] lg:flex">
                        <a target="_blank" rel="noreferrer" href={links.fb}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {fb} className={iconstyle} alt = "facebook icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.wh}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {wh} className={iconstyle} alt = "whatsapp icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.tw}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {tw} className={iconstyle} alt = "twitter icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.ig}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {ig} className={iconstyle} alt = "instagram icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.lkdn}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {lkdn} className={iconstyle} alt = "linkedin icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.mail}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {mail} className={iconstyle} alt = "gmail icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.github}><Image style={{ width: 'auto', height: 'auto' }} width = {32} height = {32} src = {github} className={iconstyle} alt = "github icon"/></a>
                    </div>

                    {/* BLUR BOX */}
                    <button onClick={()=>{
                        Show_or_hide();
                    }}
                    className={"absolute z-[2] top-0 left-0 right-0 bottom-0 theme_col opacity-80 " + blur}> </button>

                    {/* MOBILE SLIDING NAV */}
                    <div className={"hidden slider " + slide}>
                        {/* NAVLINKS */}
                        <div className="flex pt-6 px-4 flex-col">
                            {
                                nav.map((item)=>{
                                    return (
                                        <Link key = {uuidv4()}
                                        onClick={()=>{
                                            Show_or_hide();
                                        }} 
                                        className= {
                                            (item.path === path) ?
                                                "px-5 py-2 my-2 white_col black text_semibold text-center rounded-tl-full rounded-br-full"
                                            :
                                                "px-5 py-2 my-2 white text text-center rounded-tl-full rounded-br-full hover:bg-gray-400"
                                            
                                        }
                                        href = {item.path}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        {/* LINKS */}
                        <div className = "py-2 flex flex-col flex-wrap justify-evenly items-center">
                        <a target="_blank" rel="noreferrer" href={links.fb}><Image width = {32} height = {32} src = {fb_wh} className={mob_iconstyle} alt = "facebook icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.wh}><Image width = {32} height = {32} src = {wh_wh} className={mob_iconstyle} alt = "whatsapp icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.tw}><Image width = {32} height = {32} src = {tw_wh} className={mob_iconstyle} alt = "twitter icon" /></a>
                        <a target="_blank" rel="noreferrer" href={links.ig}><Image width = {32} height = {32} src = {ig_wh} className={mob_iconstyle} alt = "instagram icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.lkdn}><Image width = {32} height = {32} src = {lkdn_wh} className={mob_iconstyle} alt = "linkedin icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.mail}><Image width = {32} height = {32} src = {mail_wh} className={mob_iconstyle} alt = "gmail icon"/></a>
                        <a target="_blank" rel="noreferrer" href={links.github}><Image width = {32} height = {32} src = {github_wh} className={mob_iconstyle} alt = "github icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-2 overflow-y-scroll main_content theme_col flex-grow lg:h-full lg:w-[88%]">
                {children}
            </div>
        </div>
      </body>
    </html>
  )
}
