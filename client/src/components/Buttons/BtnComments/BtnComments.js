import React from "react";

import './BtnComments.scss';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const BtnComments = () => {
    return (
        <div className="BtnComments">
            <ChatBubbleOutlineIcon className="BtnComments__icon"></ChatBubbleOutlineIcon>
            <span className="BtnComments__count">12</span>
        </div>
    );
}

export default BtnComments;