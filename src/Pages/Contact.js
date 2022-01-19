import React from 'react';

import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import ContactContent from '../Component/ContactContent';

function Contact() {
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="Contact Us"/>
           <ContactContent/>
           <Footer/>            
        </div>
    )
}

export default Contact
