import React from 'react'

function ContactContent() {
    return (
        <div>
            <div className="col12 sm4 md8 flexCC pt4 pb4">
                <div className="wrapper">
                    <div className="col12 sm4 md8 flex">
                        <div className="quickForm1 flexDLC col12">
                            <h4 className='bf mb c5t'>Send A Message</h4>
                            <form className='col12 sm4 md5 br rel'>                                
                                <div className="col12 flex">
                                    <input type="text" placeholder='First Name'/>
                                    <input type="text" placeholder='Last Name'/>
                                </div>                    
                                <input type="email" placeholder='Email ID' />
                                <input type="number" placeholder='Mobile Number'/>
                                <input type="text" placeholder='Full Address'/>
                                <input type="text" placeholder='Location'/>
                                <select className='c5t'>
                                    <option value="select items">Select Course</option>
                                    <option value="select items">Unity Game Developer</option>
                                    <option value="select items">Unity Game Programmer</option>
                                    <option value="select items">Unity 3D Developer</option>
                                </select>
                                <button class="btn3 br0 bn c6b c7t flexCC">                        
                                    <span><i class="fa fa-paper-plane" aria-hidden="true"></i> Send</span>
                                </button>
                            </form>
                        </div>
                        <div className="col12 sm4 md8 ma2 flex map">
                            <img src="./map.jpg" alt="" />
                        </div>
                    </div> 
                    <div className="col12 sm4 md8 pt2 pb2 flexCC c8b pa2 br mt2">
                        <h4 className='col5 f3 mb'>Welcome to our Website.<br/> We are glad to have you around.</h4>
                        <div className='col7 taj mb'>
                            <h2 className='flexRC c1t'>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-youtube"></i>                                
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in? Quo ducimus illo eum quod libero aspernatur provident doloribus impedit, nobis consequatur unde nesciunt temporibus est ipsa eligendi quia doloremque.</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default ContactContent
