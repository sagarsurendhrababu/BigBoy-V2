import React from 'react'
import { useContext } from 'react';
import { Context } from '../Provider';
import { Link } from 'react-router-dom';

function NavBar() {
   
    const [state, dispatch] = useContext(Context);
    
    return (
        <div className='col12 sm4 md8 flexCC c1b ptb'>
            <div className="wrapper flexSBC">
                <div className="logo">
                    <Link to="/"><img src="../BigBoy-Logo.svg" alt="" /></Link>
                </div>
                <ul className='col7 sm4 md8 flexSAC c7t navLink'>
                    <li><Link to="/" className='ml c5t'>Home</Link></li>
                    <li><Link to="/about" className='ml c5t'>About Us</Link></li>
                    <li><Link to="/courses" className='ml c5t'>Courses</Link></li>
                    <li><Link to="/gallery" className='ml c5t'>Gallery</Link></li>
                    <li><Link to="/contact" className='ml c5t'>Contact</Link></li>                                      
                </ul>
                <div className="flexCC">
                    <div className="col12 c7b searchIcon flexCC">
                    <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
