import React from 'react'

import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import Content from '../Component/Content';
import QuickForm from '../Component/QuickForm';
import WhyChoose from '../Component/WhyChoose';

function About() {
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="About Us"/>
           <Content/>
           <WhyChoose/>
           <QuickForm/>
           <Footer/>
        </div>
    )
}

export default About
