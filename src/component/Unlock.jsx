import React, { useEffect } from 'react'
import unlock from '../images/unlock.png'
import appstore from '../icons/appstore.svg'
import icon from '../icons/icon.svg'
import net from '../icons/net.svg'
import ps from '../icons/ps.svg'
import xbox from '../icons/xbox.svg'
import ub from '../icons/ub.svg'
import { gsap } from 'gsap'
export const Unlock = () => {
  const tl = gsap.timeline()
  useEffect(() => {
    tl.fromTo('.lock-1',{y: '-100vw'},{ y: '0vw', ease: "power4.inOut",duration: 2.2 })
    .fromTo('.lock-2',{y: '100vw'},{ y: '0vw', ease: "power4.inOut",duration: 2.2},'<')
  
  }, [])
  return (
    <div className='unlock-container'>
      <div className='unlock-wrap'>
        <div className='lock-1'>
          <div className='unlock-head'>Unlock any service for work</div>
          <div className='unlock-image-wrap'>
            <div className='u-image'><img src={unlock} alt="" /></div>
          </div>
        </div>
        <div className='lock-2'>
          <div className='unlock-2-head'>Pay any service instantly for your personal use</div>
          <div className='unlock-2-wrap'>
              <div className='u-btn-1'><img src={appstore} alt="" /></div>
              <div className='u-btn-2'><img src={icon} alt="" /></div>
              <div className='u-btn-3'><img src={ps} alt="" /></div>
              <div className='u-btn-4'><img src={net} alt="" /></div>
              <div className='u-btn-5'><img src={ub} alt="" /></div>
              <div className='u-btn-6'><img src={xbox} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
  )
}
