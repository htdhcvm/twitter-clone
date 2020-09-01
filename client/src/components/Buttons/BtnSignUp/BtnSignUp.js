import React, {useState} from "react";

import FormSignUp from "../../FormSignUp/FormSignUp";

import './BtnSignUp.scss';



const BtnSignUp = () => {
    const [formToggle, setFormToggle] = useState(false);

    const handleFormClose = () => {
        setFormToggle( prev => !prev);
    }
    
    return (
        <>
            <button onClick={() =>{
                if(!formToggle) setFormToggle( prev => !prev);
            }} className="btnSignUp">Sign up</button>
            { formToggle
                ? <div className="wrapper-form"><FormSignUp handleFormClose={handleFormClose} /></div>
                : null}
        </>
    );
}

export default BtnSignUp;

