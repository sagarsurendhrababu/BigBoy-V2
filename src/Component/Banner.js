import React from 'react'
import BannerHyperLink from './BannerHyperLink';

function Banner() {
    return (
        <div className='col12 sm4 md8 c1b Banner rel flexCC'>
            <div className="col12 flexCC">
                <div className="wrapper flexCC">
                    <div className="col12 c7t pa2">
                        <h3 className='mf mb f3'>BigBoy helps you build and run successful</h3>
                        <p className='mb2 f1'>Backed by Google and loved by app development teams - from startups to global enterprises</p>
                        <button className='btn2 br0 bn mf f3 c6b c7t'><span>Button 1</span></button>
                    </div>
                    <div className="col12">
                        <img src="../Banner-Img.png" alt="" />    
                    </div>
                </div>
            </div>                
           <BannerHyperLink/>
        </div>
    )
}

export default Banner
