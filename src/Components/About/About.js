import React from 'react'
import "./About.css"
import Navbar from "../Navbar/Navbar"
import img1 from "../../Images/img1.jpg"



const About = () => {
  return (
    <>
    <Navbar />
    {/* <h1>
      This Page is belongs to About Page
    </h1> */}
    <div>
    
      <img id="imageconstruction" src={img1} alt='uday' />
    </div>
    <div>
    <marquee id="marqueetag" style={{ color: 'red', fontSize: '1em' }}>This Page is Temperoly Out Of Service's Please Contact Uday Ram - udayramakoteswarao.2002@gmail.com</marquee>
  </div>
  
    </>
    
    
  )
}



export default  About;
