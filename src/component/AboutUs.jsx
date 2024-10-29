import React from 'react'
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(useGSAP,ScrollTrigger);
export const AboutUs = () => {
    // useGSAP(()=>{
    //     gsap.to(".about",{
    //         scrollTrigger: {
    //             trigger: ".about-conatiner",
    //             toggleActions: "restart none none none",
    //         },
    //         rotate: 360,
    //         duration:3
    //     })
    // })
  return (
    <div className='about-container'>
        <div className='about'>About US</div>
    </div>
  )
}
