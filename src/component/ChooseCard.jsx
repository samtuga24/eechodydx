import React, { useEffect, useState } from 'react'
import check from '../icons/check.png'
import cards from '../images/cards.png'
import arrow from '../icons/arrow.png'
import { MobileCards } from './MobileCards'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
export const ChooseCard = () => {

    return (
        <div className='c-card-container'>
            <div className='c-card-header'>Choose your<span className='span-card'> Card</span></div>
            <div className='c-card-wrap'>
                <div className='personalize'>
                    <div className='p-header'>Personalized Virtual Card Solutions for Your Everyday Payments</div>
                    <div className='p-list-1-wrap'>
                        <div className='p-list-icon'><img src={check} alt="" /></div>
                        <div className='p-list-1'>Unlimited Topups</div>
                    </div>
                    <div className='p-list-2-wrap'>
                        <div className='p-list-icon'><img src={check} alt="" /></div>
                        <div className='p-list-2'>Best for Recurring payments</div>
                    </div>
                    <div className='p-list-3-wrap'>
                        <div className='p-list-icon'><img src={check} alt="" /></div>
                        <div className='p-list-3'>Works for all payments</div>
                    </div>
                    <div className='p-list-4-wrap'>
                        <div className='p-list-icon'><img src={check} alt="" /></div>
                        <div className='p-list-4'>Withdrawals to main wallet</div>
                    </div>
                </div>
                <div className='cards-container'>
                    <div className='cards'>
                        <img src={cards} alt="" />
                    </div>
                </div>
                
                
                <div className='seamless'>
                    <div className='s-header'>Seamless Spending, Boundless Opportunities with Alphaspace!</div>
                    <div className='s-list-1-wrap'>
                        <div className='s-list-icon'><img src={check} alt="" /></div>
                        <div className='s-list-1'>Single Topups</div>
                    </div>
                    <div className='s-list-2-wrap'>
                        <div className='s-list-icon'><img src={check} alt="" /></div>
                        <div className='s-list-2'>Best for On-Time payments</div>
                    </div>
                    <div className='s-list-3-wrap'>
                        <div className='s-list-icon'><img src={check} alt="" /></div>
                        <div className='s-list-3'>Works for all payments</div>
                    </div>
                    <div className='s-list-4-wrap'>
                        <div className='s-list-icon'><img src={check} alt="" /></div>
                        <div className='s-list-4'>You can't withdraw to main wallet</div>
                    </div>
                    
                </div>
                <div className="mobile-cc"><MobileCards/></div>
            </div>
            <div className='contact-sales'>
                <div className='c-s'>Contact sales</div>
                <div className='sales'><img src={arrow} alt="" /></div>
            </div>
        </div>
    )
}
