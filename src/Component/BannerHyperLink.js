import React, { useContext} from 'react';
import { Context } from '../Provider';

function BannerHyperLink() {
    const [state, dispatch] = useContext(Context);    
    return (
        <>
        <div className='col10 sm4 md8 flexC abs BannerHyper br2 ds1'>
            <div className="col12 flexCC c7b">
                <div className="col12 pl2">
                    <h4 className='mb f3 mf'>Lets Join BigBoy's <b>Online Classes</b></h4>
                    <button className='btn3 br0 bn flexCC c4b c7t' onClick={()=>{dispatch('popupForm')}}><span>Register for Classes</span></button>
                </div>
                <div className="col12 flexRC pr">
                    <img src="../lady-pic.png" alt="" />
                </div> 
            </div>
            <div className="col12 flexCC c2b flex">
                <div className="col12 pl2">
                    <h4 className='mb f3 mf c7t'>Join BigBoy Be a WINNING Creator</h4>
                    <button className='btn3 br0 bn flexCC c3b c7t' onClick={()=>{dispatch('popupForm')}}><span>Admission Open</span></button>
                </div>
                <div className="col12 flexRC pr">
                    <img src="../Male-pic.png" alt="" />
                </div>                
            </div>
        </div>
        </>
    )
}

export default BannerHyperLink
