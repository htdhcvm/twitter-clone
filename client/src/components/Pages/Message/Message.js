import React from "react";

import './Message.scss';

import Navbar from "../../Navbar/Navbar";

const Message = () => {
    return (
        <section className="twitter-clone">
            <Navbar></Navbar>
            <section className="message">
                <h1>Message</h1>
            </section>
        </section>
        
    );
}

export default Message;