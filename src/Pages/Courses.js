import React, { useContext} from 'react';
import { Context } from '../Provider';
import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import Course from '../Component/Course';
import QuickForm from '../Component/QuickForm';
import Testimonial from '../Component/Testimonial';


function Courses() {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="Courses"/>
           <Course noTitle={true}/>
           <Testimonial/>
           { state.quickform ? <QuickForm/>:'' }
           <Footer/>            
        </div>
    )
}

export default Courses
