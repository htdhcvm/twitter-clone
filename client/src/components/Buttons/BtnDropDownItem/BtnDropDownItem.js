import React, {useState} from "react";

import './BtnDropDownItem.scss';


const BtnDropDownItem = ({handleLogout}) => {
    return (
        <div onClick={handleLogout} className="item">
            <span >Logout</span>
        </div>
    );
}

export default BtnDropDownItem;

//onClick={event=> handleLogout(event)}