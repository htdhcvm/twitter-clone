import React from "react";

import './BtnReTwitt.scss';

import RepeatIcon from '@material-ui/icons/Repeat';

const BtnReTwitt = () => {
    return (
        <div className="BtnReTwitt">
            <RepeatIcon className="BtnReTwitt__icon"></RepeatIcon>
            <span className="BtnReTwitt__count">6</span>
        </div>
    );
}

export default BtnReTwitt;