// import "../font.scss"
// import "../theme.scss"
// import "../allcards.scss"


import figma from "../public/static/assets/icons/figma.png"
import redirect from "../public/static/assets/icons/angle_arrow.svg"
import Image from "next/image";


let iconstyle = "m-1 0.02rem";



export default function UICard (props){
    return (
        <div className="flex flex-grow xl:w-[48%] xl:flex-grow-0 flex-col items-start pt-3 pb-3 my-2 mx-2 md:m-3">
            {/* IMAGE */}
            <div id='light' className="piccont w-full rounded-xl xl:rounded-3xl flex justify-center items-center overflow-hidden mb-2">
                <Image src = {props.image} className="pic mx-auto rounded-xl xl:rounded-3xl" placeholderSrc = {props.image} effect= "blur" alt = {props.alt}/>
            </div>
            {/* TITLE */}
            <h1 className="white project_title my-2"> {props.title} </h1>
            {/* DESCRIPTION */}
            <h3 className="white text_ita my-2"> {props.desc} </h3>
            {/* BUTTON */}
            <a href = {props.uilink} target="_blank" rel="noreferrer" className = "white_col flex flex-row items-center justify-center rounded-md w-max my-2 lg:my-4 px-3 py-1">
                <Image src = {figma} className={"mx-1 " + iconstyle} alt  = "figma icon" />
                <h3 className="text"> View figma </h3>
                <Image src = {redirect} className={"mx-1 " + iconstyle} alt = "redirect icon" />
            </a>
        </div>
    )
}