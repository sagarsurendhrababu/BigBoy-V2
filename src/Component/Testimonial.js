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
                                <p className='mb'>Highly skilled & knowledgeable teaching staff. Good infrastructure & excellent placement staff.
Infy gives a lot of opportunities to every student by informing about various job openings & guiding students to crack the interview. </p>
                                <h6 className='f1'>Adithya</h6>
                                <h6 className='xT mf'>SENSATIONS SOLUTIONS</h6>
                            </li>
                            <li className="col6 sm4 md4 c7b br pa2">
                                <h4 className='c8t'><i class="fas fa-quote-left"></i></h4>
                                <p className='mb'>Good training & placement centre. I would like to thank my faculty & placement coordinator for helping me get exposure to one of the most reputed IT companies.
Infy helped me to gain knowledge in software development & establish myself in the IT industry. </p>
                                <h6 className='f1'>Angel</h6>
                                <h6 className='xT mf'>Aricent</h6>
                            </li>                                                       
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
