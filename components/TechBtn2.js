// import "../font.scss"
// import "../theme.scss"
import Image from "next/image";

let iconstyle = "m-1 0.02rem";

export default function TechBtn2(props){
    return (
        <>
            {/* BUTTON */}
            <a href = {props.link} target="_blank" rel="noreferrer" className = "white_col flex flex-row items-center justify-center rounded-md w-max my-2 lg:my-4 px-3 py-1">
                <Image src = {props.icon} className={"mx-1 " + iconstyle} alt  = {props.alt} />
                <h3 className="text"> {props.text} </h3>
                <Image src = {props.icon2} className={"mx-1 " + iconstyle} alt  = {props.alt2} />
            </a>
        </>
    )
}