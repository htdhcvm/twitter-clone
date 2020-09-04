import React from "react";

import FormSignUp from "../../FormSignUp/FormSignUp";

import './BtnSignUp.scss';



const BtnSignUp = ({formToggle, handleToggleForm}) => {

    return (
        <>
            <button onClick={(e)=>handleToggleForm(e)} className="btnSignUp">Sign up</button>
            {formToggle
                ? <div className="SignIn__right__wrapper-form"><FormSignUp /></div>
                : null}
        </>
    );
}

export default BtnSignUp;

