import React, { useContext} from 'react';
import { Context } from '../Provider';
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


function Home() {
  const [state, dispatch] = useContext(Context);
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
          { state.quickform ? <QuickForm/>:'' }
          <Footer/>            
        </div>
    )
}

export default Home
