import React from "react";

import './Title.scss';

const Title = ({login, text}) => {
    return (
        <div className="title">
            <h2>{text}</h2>
            <span>@{login}</span>
        </div>
    );
}

export default Title;