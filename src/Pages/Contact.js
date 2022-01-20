import React, { useContext} from 'react';
import { Context } from '../Provider';
import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import ContactContent from '../Component/ContactContent';
import QuickForm from '../Component/QuickForm';

function Contact() {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="Contact Us"/>
           <ContactContent/>
           { state.quickform ? <QuickForm/>:'' }
           <Footer/>            
        </div>
    )
}

export default Contact
