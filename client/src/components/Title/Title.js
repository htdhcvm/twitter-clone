import React from "react";

import './Title.scss';

const Title = ({text, login}) => {
    return (
        <div className="title">
            <h2>{text}</h2>
            <span>@{login}</span>
        </div>
    );
}

export default Title;