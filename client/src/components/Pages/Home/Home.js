import React from "react";

import Search from "../../Search/Search";
import Title from "../../Title/Title";
import Twitts from "../../Twitts/Twitts";
import MightLike from "../../MightLike/MightLike";
import Trends from "../../Trends/Trends";

import './Home.scss';

import Navbar from "../../Navbar/Navbar";


const Home = ({handleLogout, login}) => {
    console.log("Home")

    return (
        <section className="twitter-clone">
            <Navbar handleLogout={handleLogout} login={login}></Navbar>
            <section className="home">
                <section className="home__wrapper-search">
                    <Search />
                </section>
                <section className="home__wrapper-entry">
                    <Title text="Home" login={login}/>
                    <Twitts />
                </section>
                <section className="home__wrapper-offers">
                    <MightLike />
                    <Trends />
                </section>
            </section>
        </section>
    );
}

export default Home;