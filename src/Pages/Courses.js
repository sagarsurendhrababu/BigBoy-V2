import React from 'react';
import NavBar from '../Component/NavBar';
import BreadCrubs from '../Component/BreadCrubs';
import Footer from '../Component/Footer';
import Course from '../Component/Course';
import QuickForm from '../Component/QuickForm';
import Testimonial from '../Component/Testimonial';


function Courses() {
    return (
        <div>
           <NavBar/>
           <BreadCrubs title="Courses"/>
           <Course noTitle={true}/>
           <Testimonial/>
           <QuickForm/>
           <Footer/>            
        </div>
    )
}

export default Courses
