import React from "react";

import './Bookmark.scss';

import Navbar from "../../Navbar/Navbar";

const Bookmark = () => {
    return (
        <section className="twitter-clone">
            <Navbar></Navbar>
            <section className="bookmark">
                <h1>Bookmark</h1>
            </section>
        </section>
        
    );
}

export default Bookmark;