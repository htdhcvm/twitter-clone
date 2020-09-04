import React from "react";

import './Notification.scss';


import Search from "../../Search/Search";
import Title from "../../Title/Title";
import Twitts from "../../Twitts/Twitts";
import MightLike from "../../MightLike/MightLike";
import Trends from "../../Trends/Trends";

import Navbar from "../../Navbar/Navbar";

const Notification = ({login}) => {
    return (
        <section className="twitter-clone">
            <Navbar></Navbar>
            <section className="notification">
                <section className="notification__wrapper-search">
                    <Search />
                </section>
                <section className="notification__wrapper-entry">
                    <Title text="Notification" login={login} />
                    <Twitts />
                </section>
                <section className="notification__wrapper-offers">
                    <MightLike />
                    <Trends />
                </section>
            </section>
        </section>
    );
}

export default Notification;
