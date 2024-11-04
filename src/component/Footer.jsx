import React from 'react'
import logo from '../icons/logo.svg'
import facebook from '../icons/facebook.svg'
import instagram from '../icons/instagram.svg'
import linkedin from '../icons/linkedin.svg'
import { faC } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='foot-wrap'>
        <div className='echodydx'>
          <div className='echo-header'>
            <div className='foot-logo'><img src={logo} alt="" /></div>
            <div className='echo-desc'>Echodydx</div>
          </div>
        </div>
        <div className='foot-desc'>
          <div className='desc-1'><div className='desc-wrap'>At Echodydx we offer you a robust virtual card issuing solution to meet your all your online payment needs.</div></div>
          <div className='social-icons'>
            <div className='social'><img src={facebook} alt="" /></div>
            <div className='social'><img src={instagram} alt="" /></div>
            <div className='social'><img src={linkedin} alt="" /></div>
          </div>
        </div>
        <div className='foot-service'>
          <div className='service-desc'>
            <div className='service-header'>Services</div>
            <div className='service-desc'>
              <div className='service-1'>Virtual Cards</div>
              <div className='service-1'>Physical Cards</div>
            </div>
          </div>

          <div className='service-desc'>
            <div className='service-header'>COMPANY</div>
            <div className='service-desc'>
              <div className='service-1'>About Us</div>
            </div>
          </div>

          <div className='service-desc'>
            <div className='service-header'>RESOURCES</div>
            <div className='service-desc'>
              <div className='service-1'>Privacy Policy</div>
              <div className='service-1'>Terms Of Use</div>
            </div>
          </div>

          <div className='service-desc'>
            <div className='service-header'>Contact Us</div>
            <div className='service-desc'>
              <div className='service-1'>Info@echodydx.com</div>
              <div className='service-1'>wyoming, USA</div>
            </div>
          </div>
        </div>
        {/* mobile view */}
        <div className='mobile-foot-service'>
          <div className="service-mobile">
            <div className='service-desc'>
              <div className='service-header'>Services</div>
              <div className='service-desc-t'>
                <div className='service-1'>Virtual Cards</div>
                <div className='service-1'>Physical Cards</div>
              </div>
            </div>

            <div className='service-desc-m'>
              <div className='service-header'>COMPANY</div>
              <div className='service-desc-t'>
                <div className='service-1'>About Us</div>
              </div>
            </div>
          </div>
          <div className="service-mobile">
            <div className='service-desc'>
              <div className='service-header'></div>
              <div className='service-desc-t'>
                <div className='service-1'>Privacy Policy</div>
                <div className='service-1'>Terms Of Use</div>
              </div>
            </div>

            <div className='service-desc'>
              <div className='service-header'></div>
              <div className='service-desc-t'>
                <div className='service-1'>Info@echodydx.com</div>
                <div className='service-1'>wyoming, USA</div>
              </div>
            </div>
          </div>
        </div>
        <div className='foot-trademark'>All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.</div>
        <div className='foot-copyright'>&copy;{new Date().getFullYear()} Echodydx • All rights reserved</div>
      </div>

    </div>
  )
}
