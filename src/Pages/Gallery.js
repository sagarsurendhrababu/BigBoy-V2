import React from 'react'

import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import ContentGallery from '../Component/ContentGallery';
import QuickForm from '../Component/QuickForm';
import WhyChoose from '../Component/WhyChoose';

function Gallery() {
    return (
        <div>
           <NavBar/>
           <ContentGallery/>
           <WhyChoose/>
           <QuickForm/>
           <Footer/>            
        </div>
    )
}

export default Gallery
