import React from "react";

import './BtnDropDownUser.scss';

const BtnDropDownUser = ({login}) => {
    return (
        <p className="BtnDropDownUser">
            {login}
        </p>
    );
}

export default BtnDropDownUser;