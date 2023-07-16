'use client'
import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import '@node_modules/aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Image from 'next/image'
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import 'react-lazy-load-image-component/src/effects/blur.css';

// IMPORT LINKS
import links from "@links.json"

// IMAGES IMPORT
import christian from "@public/static/assets/images/christian.jpg"
import dot from "@public/static/assets/icons/white_dot.svg"
import download from "@public/static/assets/icons/download.svg"

export var aos_style = "fade-left"
export var aos_dur = "1200"
export var aos_once = "false"

export default function Home() {
  useEffect(()=>{
    Aos.init();
    // You can also pass an optional settings object
    // below listed default settings
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

let skillstyle = "text underline leading-relaxed white mx-3";
let iconstyle = "0.02rem"

const [myname,setMyname] = useState('Amu');
useEffect(()=>{
    setTimeout(() => {
        if(myname === 'Amu'){
            setMyname('Christian')
        }else if(myname === 'Christian'){
            setMyname('Nnamdi')
        }else if(myname === 'Nnamdi'){
            setMyname('Amu')
        }
    }, 4000);
}, [myname])


return (
  <div className="overflow-hidden w-full h-full flex flex-col md:flex-row pr-3 pl-3 pb-3 lg:p-5">
          {/* CHRISTIAN PICTURE */}
          <div className="w-full chrispic h-1/2 md:h-auto overflow-hidden rounded-xl flex justify-center items-center md:items-flex lg:w-1/2 xl:rounded-3xl">
              <Image src = {christian} style={{ width: 'auto', height: 'auto' }} className="mx-auto rounded-xl xl:rounded-3xl" alt = "christian"/>
          </div>
          {/* MAIN INFORMATION */}
          <div className="card_col flex-grow mt-3 w-full min-h-1/2 md:h-auto flex justify-start items-center rounded-xl md:mt-0 lg:w-1/2 md:ml-[20px] xl:rounded-3xl">
              {/* INFORMATION */}
              <div className="flex m-4 flex-col items-start">
                  {/* HI I'M CHRISTIAN */}
                  <div data-aos-duration={aos_dur} data-aos={aos_style} data-aos-once= {aos_once} className = "mx-2 my-1 lg:my-4 name_title white">
                      <h1 className='inline name_title'>Hi, I'm </h1>
                      <div className='typedcont inline-flex'>
                        <h1 className='inline name_title'>{`${myname}.`}</h1>
                        <span></span>
                        </div>
                  </div>
                  {/* TECH SKILLS */}
                  <div className="flex flex-row flex-wrap items-center my-1 lg:my-4">
                      <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="50" data-aos-once= {aos_once} className={skillstyle}>ui/ux designer</h3>
                      <Image style={{ width: 'auto', height: 'auto' }} data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="100" data-aos-once= {aos_once} className  = {iconstyle} src={dot} alt = "dot"/>
                      <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="150" data-aos-once= {aos_once} className={skillstyle}>graphics designer</h3>
                      <Image style={{ width: 'auto', height: 'auto' }} data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="200" data-aos-once= {aos_once} className  = {iconstyle} src={dot} alt = "dot"/>
                      <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="250" data-aos-once= {aos_once} className={skillstyle}>3d animator</h3>
                      <Image style={{ width: 'auto', height: 'auto' }} data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="300" data-aos-once= {aos_once} className  = {iconstyle} src={dot} alt = "dot"/>
                      <h3 data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="350" data-aos-once= {aos_once} className={skillstyle}>frontend software engineer</h3>
                      <Image style={{ width: 'auto', height: 'auto' }} data-aos-duration={aos_dur} data-aos={aos_style} data-aos-delay="400" data-aos-once= {aos_once} className  = {iconstyle + " hidden sm:inline-block"} src={dot} alt = "dot"/>
                  </div>
                  {/* OBJECTIVE */}
                  <h3 data-aos="fade-up" data-aos-duration={aos_dur} data-aos-delay="450" data-aos-once= {aos_once} className="white text_ita mx-3 my-4">
                  I'm Christian, a front-end software engineer with 6 months of experience. I specialize in front end web development, UI/UX design, and graphics design. With proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I create visually captivating interfaces that prioritize user experience. Check out my portfolio for examples of my work. Let's discuss how I can contribute to your team or project.
                  </h3>
                  {/* GET IN TOUCH BUTTON */}
                  <a href = {links.cv} target="_blank" rel="noreferrer" data-aos="fade-left" data-aos-duration={aos_dur} data-aos-offset= "50" data-aos-once= "true" data-aos-delay="700" className = "white_col flex flex-row items-center rounded-md mx-3 my-2 lg:my-4 px-3 py-2">
                      {/* MAIN ICON */}
                      <Image style={{ width: 'auto', height: 'auto' }} className = {"mx-1 " + iconstyle} src = {download} alt = "gmail icon"/>
                      <h3 className="text_ita black mx-1" > Download CV </h3>
                  </a>
              </div>
          </div>
      </div>
  )
}
