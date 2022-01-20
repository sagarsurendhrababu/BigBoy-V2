import React, { useContext} from 'react';
import { Context } from '../Provider';
import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import Content from '../Component/Content';
import QuickForm from '../Component/QuickForm';
import WhyChoose from '../Component/WhyChoose';

function About() {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="About Us"/>
           <Content/>
           <WhyChoose/>
           { state.quickform ? <QuickForm/>:'' }
           <Footer/>
        </div>
    )
}

export default About
