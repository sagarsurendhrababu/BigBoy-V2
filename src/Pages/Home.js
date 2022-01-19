import React from 'react'

import NavBar from '../Component/NavBar';
import Banner from '../Component/Banner';
import Footer from '../Component/Footer';
import Course from '../Component/Course';
import Welcome from '../Component/Welcome';
import StudentsGames from '../Component/StudentsGames';
import Recruite from '../Component/Recruite';
import WhyChoose from '../Component/WhyChoose'
import Testimonial from '../Component/Testimonial'
import QuickForm from '../Component/QuickForm';
import BreadCrubs from '../Component/BreadCrubs';

function Home() {
    return (
        <div>
          <NavBar/>
          <Banner/>     
          <Course/>
          <Welcome/>
          <StudentsGames/>
          <Recruite/>
          <WhyChoose/>
          <Testimonial/>
          <QuickForm/>
          <Footer/>            
        </div>
    )
}

export default Home
