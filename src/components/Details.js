import React from 'react'
import star from "../assets/star.png"
import view from "../assets/view.png"

export default function Details(props) {
    return (
        <>
        <div style={{marginTop:20, marginLeft:40}}>
        <h1 style={{fontSize: 20, color:"#4F4F4F"}}> <b>Details</b> </h1>
        <hr/>
        <div className = "Icon2" style={{display:"flex"}}>
            <img src={star} alt="" />{props.star}
            <img src={view} alt="" />{props.view}
        </div>
        <h1 style={{marginTop:20, color:"#4F4F4F", fontSize:20}}>HotelDash</h1>
        <div style={{display:'flex', marginTop: 20}}>
        <h2 style={{fontSize: 20, color:"#4F4F4F"}}> <b>Published: </b>{props.published} </h2>
        <h2 style={{fontSize: 20, color:"#4F4F4F", paddingLeft:20}}> <b>Updated: </b>{props.Updated} </h2>
        </div>
        </div>
        </>
    )
}
