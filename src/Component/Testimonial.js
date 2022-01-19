import React,{useEffect} from 'react'

function Testimonial() {
    const sliders = document.querySelectorAll(".testimoCanvas li");
    console.log(sliders);
    
    return (
        <div>
            <div className="col12 sm4 md8 flexC pt8 pb8 c3b">
                <div className="wrapper">
                    <h3 className='TitleHead mb4 mf f3 col12 tac c7t'>What Our Students Say</h3>
                    <ul className='col12 sm4 md8 testimo mt4'>
                        <div className="col testimoCanvas">
                            <li className="col6 sm4 md4 c7b br pa2">
                                <h4 className='c8t'><i class="fas fa-quote-left"></i></h4>
                                <p className='mb'>Lorem ipsum dolor sit amet conse ctetur adipi sic ing elit. Quia perferendis incidunt ut quod veritatis distinctio ipsa aspernatur quibusdam non illo unde vel totam explicabo quaerat, pariatur laboriosam, odio itaque eligendi.  </p>
                                <h6 className='f1'>Student Name</h6>
                                <h6 className='xT mf'>Grame Developer</h6>
                            </li>
                            <li className="col6 sm4 md4 c7b br pa2">
                                <h4 className='c8t'><i class="fas fa-quote-left"></i></h4>
                                <p className='mb'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis incidunt ut quod veritatis distinctio ipsa aspernatur quibusdam non illo unde vel totam explicabo quaerat, pariatur laboriosam, odio itaque eligendi.  </p>
                                <h6 className='f1'>Student Name</h6>
                                <h6 className='xT mf'>Grame Developer</h6>
                            </li>                                                       
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
