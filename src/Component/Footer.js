import React,{useEffect} from 'react';


function Footer() {
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
        <div>
            <div className="col12 sm4 md8 subFooter flexCC"> 
                <div className="wrapper flexC ptb">
                    <div className="col12">
                        <h4 className='c7t f3 mf'>Enquire Now, Get More Info!</h4>
                        <h6 className='c7t mf f1'>Get the Curriculum, Fee Details and More</h6>
                    </div>
                    <div className="col12 flexRC">
                        <button className='btn3 br0 bn mr popupForm'><i class="fa fa-address-book mr" aria-hidden="true"></i><span> ENQUIRE NOW</span></button>
                        <button className='btn3 br0 bn c4b c7t popupForm'><i class="fa fa-envelope mr" aria-hidden="true"></i><span> EMAIL REQUEST</span></button>
                    </div>                
                </div>
            </div>
            <div className="col12 sm4 md8 flexCC c9b">
                <div className="wrapper">
                    <ul className='col12 sm4 md8 flex footer pt4 pb4'>
                        <li className='col4 pa flexDC'>
                            <h5 className='mf f3 c7t mb2'>Information</h5>
                            <p className='sT c10t'>Lorem ipsum dolor amet consectetur adipisicing elit. Dolorem reiciendis nihil excepturi optio rem</p>
                            <div className='flex c1t col12 mt socialIcon'>
                                <a href=""><i class="fab fa-facebook"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>                                
                            </div>
                        </li>
                        <li className='col4 pa'>
                            <h5 className='mf f3 c7t mb2'>Quick Links</h5>
                            <ul className='footerNav flex'>
                                <div className="col12">
                                    <li>About Us</li>
                                    <li>Courses</li>
                                    <li>Alumni</li>                                    
                                </div>
                                <div className="col12">
                                    <li>Enquire Now</li>
                                    <li>Contact</li>
                                    <li>Sitemap</li>
                                </div>

                            </ul>
                        </li>
                        <li className='col4 pa'>
                            <h5 className='mf f3 c7t mb2'>Contact Us</h5>
                            <address>
                                <p className='sT c10t'>
                                Office No. C114 SCK01 Building, Smartcity, Infopark P.O SEZ Kakkanad, Kochi, Kerala 682042                                    
                                </p>
                                <div className="clas12 flex mt">
                                    <a href="mob:9020561188" className='mr c7t'>
                                    <i class="fas fa-mobile-alt"></i>
                                        <label htmlFor="" className='ml'>9020561188</label>
                                    </a>
                                    <a href="mob:5895565875" className='c7t'>
                                    <i class="fas fa-mobile-alt"></i>
                                        <label htmlFor="" className='ml'>5895565875</label>    
                                    </a>
                                </div>
                            </address>
                        </li>
                    </ul>
                </div>                    
            </div>
        </div>
    )
}
export default Footer
