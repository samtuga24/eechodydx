import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import one from '../icons/1.svg'
import two from '../icons/2.svg'
import three from '../icons/3.svg'
import arrow from '../icons/arrow.png'
import cc from '../images/cc.png'
import white from '../images/white.png'
import purple from '../images/purple.png'
import green from '../images/1.png'
import main from '../images/main.png'
export const Home = () => {
  // const tl = gsap.timeline()
  // useEffect(() => {
  //   tl.fromTo('.m-header, .m-desc',{x: '-100vw'},{ x: '0vw', ease: "power4.inOut",stagger:0.2,duration: 2.2 })
  
  // }, [])
  return (
    <div className='home-container'>
      <div className='home-wrap'>
        <div className='m-container'>
          <div className='m-wrap'>
            <div className='m-header'>Cards Designed For Marketing Campaigns And Everyday Purchases.</div>
            <div className='m-desc'>Your Trusted Partner in Prepaid Cards for all your online payment.</div>
          </div>
        </div>
        <div className='user-container'>
          <div className="badge-wrap">
            <div className='badge'>
              <div className="badge-icons">
                <div className="bicon-1"><img src={one} alt="" /></div>
                <div className="bicon-2"><img src={two} alt="" /></div>
                <div className="bicon-3"><img src={three} alt="" /></div>
                <div className="bicon-4"><img src={two} alt="" /></div>
                <div className="bicon-5"><img src={one} alt="" /></div>
              </div>
              <div className="badge-numb">+12</div>
            </div>
            <div className="badge-text-wrap">
              <div className="bt-1">Trusted By</div>
              <div className="bt-2">250k+ people</div>
            </div>
          </div>

          <div className="sales-btn-wrap">
            <div className='c-s'>Contact sales</div>
            <div className='sales'><img src={arrow} alt="" /></div>
          </div>
        </div>
        <div className="home-cards-wrap">
          <div className="main"><img src={main} alt="" /></div>
          <div className="white"><img src={white} alt="" /></div>
          <div className="green"><img src={green} alt="" /></div>
          <div className="purple"><img src={purple} alt="" /></div>
          <div className="cc"><img src={cc} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
