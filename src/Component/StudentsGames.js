import React from 'react'
import { Link } from 'react-router-dom'


function StudentsGames() {
    return (
        <div className='col12 sm4 md8 stundGame sticky flex'>
            <div className='wrapper flexDCC'>
                <h2 className='c7t f3 mf tac mb2 col9'>Our Students Portfolio Section</h2>
                <h5 className='c7t f3 mf taj mb2 col6'>India's Pioneering College Educating in a Wide Array of Creative Sectors and Uplifting 1000s of Students Career Every Year</h5>
                <div className="col12 flexCC">
                    <button className='btn3 c4b bn br0 c7t mr'><Link to="/gallery" className='ml c7t'><span>Students Works</span></Link></button>
                    <button className='btn3 c2b bn br0 c7t'><Link to="/gallery" className='ml c7t'><span>Institute Gallery</span></Link></button>
                </div>
            </div>
        </div>
    )
}

export default StudentsGames
