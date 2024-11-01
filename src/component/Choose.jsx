import React from 'react'
import eye from '../icons/eye.svg'
import cc from '../icons/cc.svg'
import phone from '../icons/phone.svg'
export const Choose = () => {
  return (
    <div className='choose-container'>
      <div className='choose-wrap'>
        <div className='choose-header'>
          <div className='choose-main'>Why Choose Us</div>
          <div className='choose-desc'>We are dedicated to providing</div>
        </div>
        <div className='choose-c-wrap'>
          <div className='choose-c-1'>
            <div className='choose-c-icon'><img src={eye} alt="" /></div>
            <div className='choose-c-header'>Robust Security</div>
            <div className='choose-c-desc'>Our platform employs industry-leading security measures to ensure that your transactions remain safeguarded at all times.</div>
          </div>
          <div className='choose-c-2'>

            <div className='choose-c-icon'><img src={phone} alt="" /></div>
            <div className='choose-c-header'>Reliable Support</div>
            <div className='choose-c-desc'>Committed to providing you with unmatched support, ensuring that your experience with our platform remains smooth and hassle-free</div>
          </div>
          <div className='choose-c-3'>
            <div className='choose-c-icon'><img src={cc} alt="" /></div>
            <div className='choose-c-header'>Transparent Pricing</div>
            <div className='choose-c-desc'>Say goodbye to hidden fees and billing structures. With our clear pricing models, you can manage your virtual card solutions well.</div>
          </div>
        </div>
      </div>


    </div>
  )
}
