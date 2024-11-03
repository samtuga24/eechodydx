import React, { useEffect } from 'react'
import yt from '../icons/ytube.svg'
import x from '../icons/x.svg'
import google from '../icons/google.svg'
import fb from '../icons/fb.svg'
import msg from '../icons/messenger.svg'
import telegram from '../icons/telegram.svg'
import tik from '../icons/tik.svg'
import snap from '../icons/snap.svg'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export const Bills = () => {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
      useGSAP(()=>{
      gsap.timeline({
            scrollTrigger:{
          trigger: ".bills-wrap",
          toggleActions: "restart none none none",
      }
      }) .fromTo('.n-1, .n-2',{y: '100vw'},{ y: '0vw', ease: "power4.inOut",stagger:0.2,duration: 2.2 })
         .fromTo('.bills-header',{x: '-100vw'},{ x: '0vw', ease: "power4.inOut",stagger:0.2,duration: 1 },'<')
    })


    return (
        <div className='bills-container'>
            <div className="bills-wrap">
                <div className="bills-header">Best for all your social media payments</div>
                <div className="native-wrap">
                    <div className="n-1">
                        <div className="n-1-head">Native or social ads?</div>
                        <div className="n-1-icon-wrap">
                            <div className="nf-icon"><img src={fb} alt="" /></div>
                            <div className="ng-icon"><img src={google} alt="" /></div>
                            <div className="nt-icon"><img src={tik} alt="" /></div>
                            <div className="ns-icon"><img src={snap} alt="" /></div>
                        </div>
                        <div className="n-icon-wrap-2">
                            <div className="ny-icon"><img src={yt} alt="" /></div>
                            <div className="nm-icon"><img src={msg} alt="" /></div>
                            <div className="nx-icon"><img src={x} alt="" /></div>
                            <div className="ngram-icon"><img src={telegram} alt="" /></div>
                        </div>
                    </div>
                    <div className="n-2">
                        <div className="n-2-head">100% support for all social media payments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
