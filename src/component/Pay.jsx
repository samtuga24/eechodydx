import React from 'react'
import angle from '../icons/angle.svg'
import app from '../icons/app.svg'
import gram from '../icons/gram.svg'
import youtube from '../icons/youtube.svg'
import flix from '../icons/flix.svg'
import spotify from '../icons/spotify.svg'
export const Pay = () => {
    return (
        <div className='pay-container'>
            <div className="pay-wrap">
                <div className="pay-btn">Affiliations</div>
                <div className="pay-header">Pay any service instantly for your personal use</div>
                <div className="pay-icons">
                    <div className="pay-1">
                        <div className="sp"><img src={spotify} alt="" /></div>
                        <div className="yt"><img src={youtube} alt="" /></div>
                        <div className="app"><img src={app} alt="" /></div>
                    </div>
                    <div className="pay-2">
                        <div className="gram"><img src={gram} alt="" /></div>
                        <div className="flix"><img src={flix} alt="" /></div>
                        <div className="angle"><img src={angle} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
