import React, { useEffect,useRef } from 'react'
import'./intro.scss'
import {init}from 'ityped'
function Intro() {
const textRef= useRef()
    useEffect(()=>{
init(textRef.current,{

backDelay:1800,
backSpeed:100,
showCursor:true,
strings:["Developer","Designer","MERN"]
})
    },[])
    return (
        <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/profile.jpg" alt="prof" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I`m</h2>
                <h1>Dzenan Velic</h1>
                <h3>Full stack <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
        </div>
    )
}

export default Intro
