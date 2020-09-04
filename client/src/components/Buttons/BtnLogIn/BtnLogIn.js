import React from "react";

import './BtnLogIn.scss';

const BtnLogIn = ({handleAuthorization}) => {
    return (
        <button onClick={(e)=> handleAuthorization(e)} className="btnLogIn">Log in</button>
    );
}

export default BtnLogIn;


