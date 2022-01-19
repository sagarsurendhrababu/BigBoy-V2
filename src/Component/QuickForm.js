import React,{useEffect, useState} from 'react'

function QuickForm() {

    useEffect(() => {
        let formCloseBtn = document.querySelector(".formCloseBtn");
        let quickForm = document.querySelector(".quickForm");        
        formCloseBtn.addEventListener("click", ()=>{
            quickForm.style.display="none";
        });
    }, []);

    // Validation form fields
    const [Name,setName] = useState('');
    const [validName,setValidName] = useState(false);
    const firstNameValue = (event)=>{
        setName(event.target.value);
        setValidName(false);
    }

    const [LastName,setLastName] = useState('');
    const [validLastName,setValidLastName] = useState(false);    
    const lastNameValue = (event)=>{
        setLastName(event.target.value);
        setValidLastName(false);
    }

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);    
    const emailValue = (event)=>{
        setEmail(event.target.value);
        setValidEmail(false);
    }  
    
    const [mob,setMob] = useState('');
    const [validMob,setValidMob] = useState(false);    
    const mobValue = (event)=>{
        setMob(event.target.value);
        setValidMob(false);
    }      

    //Form Button click event lister section 
    const sendFormData = (event)=>{
        event.preventDefault();
        if(Name.trim().length===0){
            setValidName(true);
        }
        if(LastName.trim().length===0){
            setValidLastName(true);
        }
        if(email.trim().length===0){
            setValidEmail(true);
        }   
        if(mob.trim().length===0){
            return setValidMob(true);
        }              
        setName('');
        setLastName('');
        setEmail('');
        setMob('');
    }

    return (
        <div>
            <div className="quickForm flexCC" id='quick'>               
                <form className='col6 sm4 md5 c7b pa2 br ds1 rel' onSubmit={sendFormData}>
                    <div className="formCloseBtn flexCC">X</div>
                    <h5 className='mf mb c7t'>Quick Contact Form</h5>
                    <div className="col12 flex">
                        <input type="text" placeholder='First Name' onChange={firstNameValue} className={validName && 'fieldError'} value={Name}/>
                        <input type="text" placeholder='Last Name' onChange={lastNameValue} className={validLastName && 'fieldError'} value={LastName}/>
                    </div>                    
                    <input type="email" placeholder='Email ID' onChange={emailValue} className={validEmail && 'fieldError'} value={email}/>
                    <input type="number" placeholder='Mobile Number'  onChange={mobValue} className={validMob && 'fieldError'} value={mob} />
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
        </div>
    )
}

export default QuickForm
