import React from "react";

import './Twitts.scss';

import Twitt from "../Twitt/Twitt";

const Twitts = () => {
    return (
        <div className="twitts-list">
            <Twitt></Twitt>
            <Twitt></Twitt>
            <Twitt></Twitt>
            <Twitt></Twitt>
            <Twitt></Twitt>
        </div>
    );
}

export default Twitts;