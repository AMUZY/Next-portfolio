// import "../font.scss"
// import "../theme.scss"
// import "../allcards.scss"

import github from "../public/static/assets/icons/github_black.svg"
import eye from "../public/static/assets/icons/eye.svg"
import redirect from "../public/static/assets/icons/angle_arrow.svg"
import Image from "next/image";


let iconstyle = "m-1 0.02rem";



export default function WEBCard (props){
    return (
        <div className="flex flex-grow xl:w-[48%] md:flex-grow-0 flex-col items-start pt-3 pb-3 my-2 mx-2 md:m-3">
            {/* IMAGE */}
            <div id='light' className="piccont rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden mb-2">
                <Image src = {props.image} className="pic mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {props.image} effect= "blur" alt = {props.alt}/>
            </div>
            {/* TITLE */}
            <h1 className="white project_title my-2"> {props.title} </h1>
            {/* DESCRIPTION */}
            <h3 className="white text_ita my-2"> {props.desc} </h3>
            {/* BUTTONS */}
            <div className="my-2 flex flex-row">
                {/* GITHUB BUTTON */}
                <a href = {props.github} target="_blank" rel="noreferrer" className = "white_col flex flex-row items-center rounded-md my-2 lg:my-4 px-3 py-1">
                    <Image src = {github} className={"mx-1 " + iconstyle} alt  = {props.alt} />
                    <h3 className="text"> View Github </h3>
                    <Image src = {redirect} className={"mx-1 " + iconstyle} alt = "redirect icon" />
                </a>
                {/* VIEW WEBSITE BUTTON */}
                <a href = {props.weblink} target="_blank" rel="noreferrer" className = "white_col flex flex-row items-center rounded-md my-2 mx-2 lg:my-4 px-2 py-1">
                    <Image src = {eye} className={"mx-1 " + iconstyle} alt  = "link icon" />
                </a>
            </div>
        </div>
    )
}