import React from 'react'
import Capture from "../assets/Capture.JPG"
import leftArrow from "../assets/LeftArrow.png"
import rightArrow from "../assets/rightArrow.png"
import arrowLine from "../assets/arrowLine.png"
import down from "../assets/down.png"
import download from "../assets/download.png"
import repeat from "../assets/repeat.png"
import screenshot from "../assets/screenshot.png"
import share from "../assets/share.png"


export default function ToolBar() {
    return (
        <div style={{height : 30, marginTop: 10}}>
            <div style={{padding:5, display: 'flex', justifyContent:'space-between'}}>
            <button><img style={{height:20}} src={Capture} alt=""/></button>
            <div >
            <button><img className = "Icon" src={leftArrow} alt="" /></button>
            <button><img className = "Icon" src={rightArrow} alt="" /></button>
            <button><img className = "Icon" src={down} alt="" /></button>
            <button><img className = "Icon" src={arrowLine} alt="" /></button>
            <button><img className = "Icon" src={share} alt="" /></button>
            <button><img className = "Icon" src={download} alt="" /></button>
            <button><img className = "Icon" src={screenshot} alt="" /></button>
            <button><img className = "Icon" src={repeat} alt="" /></button>
            </div>
            </div>
        </div>
    )
}
