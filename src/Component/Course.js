import React,{useEffect} from 'react'


function Course(props) {
    useEffect(() => {
        let popupForm = document.querySelectorAll(".popupForm");
        let quickForm = document.querySelector(".quickForm");

        popupForm.forEach(el=>{
            el.addEventListener("click", ()=>{
                if(quickForm.style.display="none"){
                    quickForm.style.display="block";
                    quickForm.style.display="flex";
                }                
            })
        })
    }, []);     
    return (
        <div className='col12 sm4 md8 Course mh pt8 pb8 flexCC'>
            <div className="wrapper">
                {!props.noTitle ? <h3 className='TitleHead mb4 mf f3 col12 tac'>Our Courses</h3> : ''}                
                <ul className='CourseDetails col12 prl4'>
                    <li className='pb'>
                        <img src="../a.jpg" alt="" />
                        <div className="col12 pa prl2 c7t flexDCC">
                            <div className="col12 flex mb mt">
                                <h5 className='f3 mf col12'>Unity Game Developer: Junior</h5>
                                {/* <div className="star col12 flexRC">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <h6 className='c7t mf ml'>4.9</h6>
                                </div> */}
                            </div>
                            <p className='col12'>
                                Lorem ipsum dolor sit amet conse ctetur adi pi sicing elit cons ectetur adipisicing elit.
                            </p>
                            <div className="col12 flexDC">      
                                <div className="col12 flexDC knowMoreBtn mt courseDList">
                                    <label><span className='col6'>Duration:</span><span className='col6 tar'>100 Hrs</span></label>
                                    <label><span className='col6'>Mode of Training:</span> <span className='col6 tar'>Online</span></label>
                                    <label><span className='col6'>Course Fee:</span><span className='col6 tar'>14999/-</span></label>
                                </div>                                                      
                                <div className="col12 flexCC">
                                <button className='btn0 knowMoreBtn mt c6b bn c7t mr br0'><span>Know More</span></button>
                                <button className='btn0 knowMoreBtn mt c4b bn c7t br0 popupForm'><span>Quick Enquire</span></button>
                                </div>
                            </div>                            
                        </div>
                    </li>
                    <li className='pb'>
                        <img src="../b.jpg" alt="" />
                        <div className="col12 pa prl2 c7t flexDCC">
                            <div className="col12 flex mb mt">
                                <h5 className='f3 mf col12'>Game Development Programmer</h5>
                                {/* <div className="star col12 flexRC">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <h6 className='c7t mf ml'>4.9</h6>
                                </div> */}
                            </div>
                            <p className='col12'>
                                Lorem ipsum dolor sit amet conse ctetur adipi sicing elit consectetur adipisicing elit.
                            </p>
                            <div className="col12 flexDC">      
                                <div className="col12 flexDC knowMoreBtn mt courseDList">
                                    <label><span className='col6'>Duration:</span><span className='col6 tar'>196 Hrs</span></label>
                                    <label><span className='col6'>Mode of Training:</span> <span className='col6 tar'>Online & Offline</span></label>
                                    <label><span className='col6'>Online Fee:</span><span className='col6 tar'>28999/-</span></label>
                                    <label><span className='col6'>Offline Fee:</span><span className='col6 tar'>48999/-</span></label>
                                </div>                                                      
                                <div className="col12 flexCC">
                                <button className='btn0 knowMoreBtn mt c6b bn c7t mr br0'><span>Know More</span></button>
                                <button className='btn0 knowMoreBtn mt c4b bn c7t br0 popupForm'><span>Quick Enquire</span></button>
                                </div>
                            </div>                            
                        </div>
                    </li>
                    <li className='pb'>
                        <img src="../c.jpg" alt="" />
                        <div className="col12 pa prl2 c7t flexDCC">
                            <div className="col12 flex mb mt">
                                <h5 className='f3 mf col12'>Unity 3D Developer</h5>
                                {/* <div className="star col12 flexRC">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <h6 className='c7t mf ml'>4.9</h6>
                                </div> */}
                            </div>
                            <p className='col12'>
                                Lorem ipsum dolor sit amet conse ctetur adipi sicing elit consectetur adipisicing elit.
                            </p>
                            <div className="col12 flexDC">      
                                <div className="col12 flexDC knowMoreBtn mt courseDList">
                                    <label><span className='col6'>Duration:</span><span className='col6 tar'>290 Hrs</span></label>
                                    <label><span className='col6'>Mode of Training:</span> <span className='col6 tar'>Offline</span></label>
                                    <label><span className='col6'>Course Fee:</span><span className='col6 tar'>99999/-</span></label>
                                </div>                                                      
                                <div className="col12 flexCC">
                                <button className='btn0 knowMoreBtn mt c6b bn c7t mr br0'><span>Know More</span></button>
                                <button className='btn0 knowMoreBtn mt c4b bn c7t br0 popupForm'><span>Quick Enquire</span></button>
                                </div>
                            </div>                            
                        </div>
                    </li>
                </ul>
            </div>                
        </div>
    )
}

export default Course
