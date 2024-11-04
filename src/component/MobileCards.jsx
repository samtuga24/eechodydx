import React from 'react'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
export const MobileCards = () => {
  return (
    <div className='mobile-cards'>
        <div className="mobile-cards-wrap">
            <div className="m1"><img src={m1} alt="" /></div>
            <div className="m1"><img src={m2} alt="" /></div>
            <div className="m1"><img src={m3} alt="" /></div>
        </div>
    </div>
  )
}
