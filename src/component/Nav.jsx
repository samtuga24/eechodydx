import React from 'react'
import logo from '../icons/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
export const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='echo'>
            <div className='logo'><img src={logo} alt="" /></div>
            <div className='echo-text'>Echodydx</div>
        </div>
        <div className='nav-list'>
            <div className='item'>About Us</div>
            <div className='item'>Features</div>
            <div className='item'><Link to='contact' spy={false} smooth={true} offset={100} duration={800}>Contact Us</Link></div>
        </div>
        <div className='nav-button'>
            <div className='btn-1'>Contact Us</div>
            <div className='btn-2'><FontAwesomeIcon icon={faBars}/></div>
        </div>
    </div>
  )
}
