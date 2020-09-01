import React from "react";

import './BtnLike.scss';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const BtnLike = () => {
    return (
        <div className="BtnLike">
            <FavoriteBorderIcon className="BtnLike__icon"></FavoriteBorderIcon>
            <span className="BtnLike__count">21521</span>
        </div>
    );
}

export default BtnLike;