import React, { useContext} from 'react';
import { Context } from '../Provider';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import ContentGallery from '../Component/ContentGallery';
import QuickForm from '../Component/QuickForm';
import WhyChoose from '../Component/WhyChoose';


function Gallery() {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
           <NavBar/>
           <ContentGallery/>
           <WhyChoose/>
           { state.quickform ? <QuickForm/>:'' }
           <Footer/>            
        </div>
    )
}

export default Gallery
