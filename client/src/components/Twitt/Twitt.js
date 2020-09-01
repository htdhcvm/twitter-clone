import React from "react";

import './Twitt.scss';

import BtnLike from "../Buttons/BtnLike/BtnLike";
import BtnComments from "../Buttons/BtnComments/BtnComments";
import BtnReTwitt from "../Buttons/BtnReTwitt/BtnReTwitt";


import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import testImage_1 from "../../assets/img/testImagePost_1.PNG";


const Twitt = () => {
    return (
        <div className="twitt">
            <PermIdentityIcon className="twitt__user-icon" />
            <div className="twitt__content">
                <div className="twitt__wrapper-title">
                    <h3 className="twitt__user-name">Ben Nadel</h3>
                    <span className="twitt__separate">·</span>
                    <span className="twitt__date">Aug 21</span>
                </div>
                <span className="twitt__text"> 
                    This course explores 8 different ways to handle state in React apps today, and how to choose between them. After 4 months of hard work, I'm super excited about the result! RT's appreciated! 
                </span>
                <img className="twitt__image" src={testImage_1} alt="user data donwloaded"></img>
                <div className="twitt__footer">
                    <BtnLike />
                    <BtnComments />
                    <BtnReTwitt />
                </div>
            </div>
        </div>
    );
}

export default Twitt;
