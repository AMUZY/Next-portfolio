'use client'
import React from 'react'
import {v4 as uuidv4} from "uuid";

// ALL LINKS IMPORT
import links from '../../links.json'
import Image from 'next/image';
import { useEffect } from 'react';

import Aos from 'aos';
import '../../node_modules/aos/dist/aos.css'; // You can also use <link> for styles

// IMPORTED IMAGES
import blank from "../../public/static/assets/images/blank.jpg"
import engineeringtests from "../../public/static/assets/images/engineeringtests.jpg" 
import cookieapp from "../../public/static/assets/images/cookie_ui.jpg"
import amunation from "../../public/static/assets/images/amunation_ui.jpg"
import portfolio_ui from "../../public/static/assets/images/portfolio_ui.jpg"
import favour from "../../public/static/assets/images/favour.jpg"
import bakery from "../../public/static/assets/images/bakery.jpg"
import val from "../../public/static/assets/images/valentine.jpg"
import mailergpt from "../../public/static/assets/images/mailergpt.jpg"
import ebook from "../../public/static/assets/images/ebook.jpg"
import cookiemenu from "../../public/static/assets/images/MENU- COOKIES 2.jpg"
import ecommerce from "../../public/static/assets/images/amunation.jpg"
import portfolio from "../../public/static/assets/images/portfolio.jpg"
import download from "../../public/static/assets/icons/download.svg"
import arrow from "../../public/static/assets/icons/angle_arrow.svg"
import ig from "../../public/static/assets/icons/ig_black.svg"

// IMPORTED IMAGES AND SVGS
import check from "../../public/static/assets/icons/check.svg"
import dot from "../../public/static/assets/icons/white_dot.svg"

// IMPORTED COMPONENTS
import UICard from "../../components/UICard";
import WEBCard from "../../components/WEBCard";
import Detail from "../../components/Detail";
import TechBtn from "../../components/TechBtn";
import TechBtn2 from "../../components/TechBtn2";

import { aos_style } from '@app/page';
import { aos_once } from "@app/page";
import { aos_dur } from "@app/page";

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


  let titlestyle = "white name_title mt-10 mb-2";
  let skillstyle = "text leading-relaxed white mx-3";
  let anchorstyle = "flex flex-row text hover:underline card_col px-2 py-1 rounded-full leading-relaxed white my-2 mr-3";
  let iconstyle = "0.02rem my-2 mr-3"
  let skilldiv = "flex my-1 w-32 md:w-48 lg:w-64 flex-row justify-start items-center"

const tech = () => {
    useEffect(()=>{
      Aos.init();

      Aos.init({
          // Global settings:
          disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
          initClassName: 'aos-init', // class applied after initialization
          animatedClassName: 'aos-animate', // class applied on animation
          useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
          disableMutationObserver: false, // disables automatic mutations' detections (advanced)
          debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
          
        
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 120, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 400, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });
  },[])

  const uiux = [
    {image : cookieapp, title : "Cookie web design", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders" , uilink : links.cookiefigma , alt : "cookie app ui"},
    {image : amunation, title : "e-commerce web design", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme" , uilink : links.ecommercefigma , alt : "ecommerce app ui"},
    {image : portfolio_ui, title : "portfolio ui design", desc : "This is the simple UI design of my portfolio" , uilink : links.portfoliofigma , alt : "portfolio ui"},
]

const webdev = [
    {image : engineeringtests, title : "EngineeringTests", desc : "Made for all Materials Engineers and everyone on a research in the Engineering field, to store mechanical test results for easy access. (Flexural, Tensile, Impact and Hardness). View my Resume form more information" , github : links.engineeringtestsgithub, weblink : links.engineeringtests, alt : "ecommerce website"},
    {image : cookiemenu, title : "Cookie website", desc : "Inspired by a friend of mine who started cookie baking and selling as a business. The cookie app was created to ease customer’s orders. View my Resume form more information" , github : links.cookiegithub, weblink : links.cookieweb, alt : "cookie website"},
    {image : ecommerce, title : "e-commerce website", desc : "This website was created to be an affiliate website to market and sell best rated products of different online vendors. It also features a dark theme. View my Resume form more information" , github : links.ecommercegithub, weblink : links.ecommerceweb, alt : "ecommerce website"},
    {image : portfolio, title : "portfolio (created in ReactJS and NextJS)", desc : "This is my portfolio you’re viewing right now. Built in both React and Next JS. Made to be as simple as possible. View my Resume form more information" , github : links.portfoliogithub, weblink : links.portfolioweb, alt : "portfolio website"},
]

const ui_detail = [
    {title : "From", answer : "20/01/2023"},
    {title : "Softwares", answer : "Figma"},
    {title : "Projects" , answer : "Cookie web design, e-commerce web design"}
]

const graphics_detail = [
    {title : "From", answer : "10/08/2022"},
    {title : "Softwares" , answer : "Figma, Blender"},
    {title : "Projects", answer : "voice over flyer, bakery flyer,valentine promo sales, kitchen services, youtube thumbnails, e.t.c."}
]

const threedgraphics_detail = [
    {title : "Brand name", answer : "chris_amunation"},
    {title : "From", answer : "08/01/2020"},
    {title : "Softwares" , answer : "Blender"},
    {title : "Projects", answer : "flyers, MockUps, 3d character design"}
]

const animation_detail = [
    {title : "Brand name", answer : "chris_amunation"},
    {title : "From", answer : "15/02/2020"},
    {title : "Softwares" , answer : "Blender"},
    {title : "Projects", answer : "business ads, NFT animations for whitelist, product animations"}
]

const webdev_detail = [
    {title : "From", answer : "22/10/2022"},
    {title : "Softwares" , answer : "Chrome, Microsoft Edge, visual studio code, React js, Next js"},
    {title : "Projects", answer : "Cookie web design, e-commerce, portfolio"}
]

function ScrollToTitle(href){
    document.querySelector("#" + href).scrollIntoView({
        behavior : "smooth"
    })
}

return (
    <div className="pr-3 pl-3 pb-3 lg:p-5">
        <div className="py-0 px-2 overflow-hidden">
            <h1 id = "skillset" className="white name_title mb-3"> My Skillset </h1>
            {/* ALL SKILLSET */}
            <div className="flex flex-row flex-wrap items-center justify-between md:justify-start mt-3 mb-2 lg:my-4">
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="10" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="50" data-aos-once= {aos_once} className={skillstyle}>HTML</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="100" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="150" data-aos-once= {aos_once} className={skillstyle}>C++</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="200" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="250" data-aos-once= {aos_once} className={skillstyle}>FIGMA</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="300" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="350" data-aos-once= {aos_once} className={skillstyle}>3D ANIMATION</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="400" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="450" data-aos-once= {aos_once} className={skillstyle}>REACT JS</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="500" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="550" data-aos-once= {aos_once} className={skillstyle}>CSS</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="600" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="650" data-aos-once= {aos_once} className={skillstyle}>JAVASCRIPT</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="700" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="750" data-aos-once= {aos_once} className={skillstyle}>GRAPHICS DESIGN</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="800" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="850" data-aos-once= {aos_once} className={skillstyle}>GIT</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="900" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="950" data-aos-once= {aos_once} className={skillstyle}>TAILWIND CSS</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1000" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1050" data-aos-once= {aos_once} className={skillstyle}>SASS/SCSS</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1100" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1150" data-aos-once= {aos_once} className={skillstyle}>GITHUB</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1200" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1250" data-aos-once= {aos_once} className={skillstyle}>3D GRAPHICS DESIGN</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1300" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1350" data-aos-once= {aos_once} className={skillstyle}>NEXT JS</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1400" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1400" data-aos-once= {aos_once} className={skillstyle}>OPEN SOURCE SOFTWARES</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1500" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1450" data-aos-once= {aos_once} className={skillstyle}>REACT TESTING LIBRARY</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1600" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1500" data-aos-once= {aos_once} className={skillstyle}>JEST TESTING FRAMEWORK</h3>
                </div>
                <div className={skilldiv}>
                    <Image data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1700" className  = {iconstyle} src={check} alt = "check"/>
                    <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="1550" data-aos-once= {aos_once} className={skillstyle}>REG EXP</h3>
                </div>
            </div>
            {/* MY CORE TECH STACK */}
            <h1 className={titlestyle}> My core tech stack </h1>
            {/* TECH STACK */}
            <div className="w-full flex flex-col justify-center my-1 lg:py-4">
                
                <div className="w-full flex flex-row">
                    <Image className  = {iconstyle} src={dot} alt = "dot"/>
                    <button onClick={()=>{
                        ScrollToTitle("webdev")
                    }} className={anchorstyle}>{`front end web development(main)`}</button>
                </div>

                <div className="w-full flex flex-row">
                    <Image  className  = {iconstyle} src={dot} alt = "dot"/>
                    <button onClick={()=>{
                    ScrollToTitle("uiux")
                    }}  className={anchorstyle}>ui/ux design</button>
                </div>
                    
                <div className="w-full flex flex-row">
                    <Image className  = {iconstyle} src={dot} alt = "dot"/>
                    <button onClick={()=>{
                        ScrollToTitle("graphics")
                    }}  className={anchorstyle}>graphics design</button>
                </div>

                <div className="w-full flex flex-row">
                    <Image  className  = {iconstyle} src={dot} alt = "dot"/>
                    <button onClick={()=>{
                        ScrollToTitle("dgraphics")
                    }} className={anchorstyle}>3d graphics design</button>
                </div>
                
                <div className="w-full flex flex-row">
                    <Image className  = {iconstyle} src={dot} alt = "dot"/>
                    <button onClick={()=>{
                        ScrollToTitle("animation")
                    }} className={anchorstyle}>3d animation</button>
                </div>
               
            </div>
            
            {/* WEB DEVELOPMENT */}
            <h1 id = "webdev" className={titlestyle}> FRONT END WEB DEVELOPMENT </h1>
            {/* UWEB DEVELOPMENT */}
            <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                {/* DETAILS DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        webdev_detail.map((item)=>{
                            return(
                                <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                            )
                        })
                    }
                </div>
                {/* WEB DEV CARD DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        webdev.map((item)=>{
                            return (
                                <WEBCard key = {uuidv4()} image = {item.image} title = {item.title} desc = {item.desc} github = {item.github} icon = {item.icon} weblink = {item.weblink} alt = {item.alt} />
                            )
                        })
                    }
                </div>
            </div>

            {/* UI/UX DESIGN */}
            <h1 id = "uiux" className={titlestyle}> UI/UX DESIGN </h1>
            {/* UI/UX DETAILS */}
            <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                {/* DETAILS DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        ui_detail.map((item)=>{
                            return(
                                <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                            )
                        })
                    }
                </div>
                {/* UI CARD DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        uiux.map((item)=>{
                            return (
                                <UICard key = {uuidv4()} image = {item.image} title = {item.title} desc = {item.desc} uilink = {item.uilink} alt = {item.alt} />
                            )
                        })
                    }
                </div>
            </div>

            {/* GO BACK TO TOP */}
            <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><Image className="mx-2" src = {dot} alt = "white dot"/> go back to top <Image className="mx-2" src = {dot} alt = "white dot"/></button>

            {/* GRAPHICS DESIGN */}
            <h1 id = "graphics" className={titlestyle}> GRAPHICS DESIGN </h1>
            {/* GRAPHICS DESIGN DETAILS */}
            <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                {/* DETAILS DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        graphics_detail.map((item)=>{
                            return(
                                <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                            )
                        })
                    }
                </div>
                {/* GRAPHICS DESIGN PICTURES DIV */}
                <div className="graphics">
                    <picture id = "pic-1">
                        <Image src = {favour} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {favour} effect= "blur" alt = "voice over graphics design"/>
                    </picture>
                    <picture id = "pic-2">
                        <Image src = {bakery} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {bakery} effect= "blur" alt = "bakery graphics design"/>
                    </picture>
                    <picture id = "pic-3">
                        <Image src = {val} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {val} effect= "blur" alt = "valentines package graphics design"/>
                    </picture>
                    <picture id = "pic-4">
                        <Image src = {mailergpt} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {mailergpt} effect= "blur" alt = "mailergpt thumbnail design"/>
                    </picture>
                    <picture id = "pic-5">
                        <Image src = {ebook} className="mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {ebook} effect= "blur" alt = "ebook studio thumbnail design"/>
                    </picture>
                </div>
            </div>

            {/* GO BACK TO TOP */}
            <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><Image className="mx-2" src = {dot} alt = "white dot"/> go back to top <Image className="mx-2" src = {dot} alt = "white dot"/></button>

            {/* 3D GRAPHICS DESIGN */}
            <h1 id = "dgraphics" className={titlestyle}> 3D GRAPHICS DESIGN </h1>
            {/* 3D GRAPHICS DESIGN DETAILS */}
            <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                {/* DETAILS DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        threedgraphics_detail.map((item)=>{
                            return(
                                <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                            )
                        })
                    }
                </div>
                {/* BUTTON */}
                <TechBtn link = {links["3dportfolio"]}  icon = {download} text = "Download 3D portfolio" alt = "download icon"/>
            </div>

            {/* 3D ANIMATION */}
            <h1 id = "animation" className={titlestyle}> 3D ANIMATION </h1>
            {/* 3D ANIMATION DETAILS */}
            <div className="card_col rounded-xl xl:rounded-3xl my-4 py-4 px-2 flex flex-col">
                {/* DETAILS DIV */}
                <div className="flex flex-row flex-wrap justify-between">
                    {
                        animation_detail.map((item)=>{
                            return(
                                <Detail key = {uuidv4()} title = {item.title} answer = {item.answer} />
                            )
                        })
                    }
                </div>
                {/* BUTTON */}
                <TechBtn2 link = {links.ig} icon = {ig} icon2 = {arrow} text = "View on IG" alt = "download icon" alt2 = "download icon"/>
            </div>

            {/* GO BACK TO TOP */}
            <button onClick = {()=>{ ScrollToTitle("skillset")}} className="flex hover:underline flex-row text white items-center my-1 lg:my-4"><Image className="mx-2" src = {dot} alt = "white dot"/> go back to top <Image className="mx-2" src = {dot} alt = "white dot"/></button>
        </div>
    </div>
)
}

export default tech