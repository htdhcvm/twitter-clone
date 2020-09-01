import React, { useState, useEffect } from "react";

import Search from "../../Search/Search";
import Title from "../../Title/Title";
import Twitts from "../../Twitts/Twitts";
import MightLike from "../../MightLike/MightLike";
import Trends from "../../Trends/Trends";

import './Home.scss';

import Navbar from "../../Navbar/Navbar";



const Home = () => {
    const [login, setLogin] = useState("");


    useEffect( () => {
        fetch("http://127.0.0.1:8000/userData/getUser", {
            method : "POST",
            credentials: 'include',
            headers : {
                "Content-Type": "application/json"
            }
        }).then( dataUser => {
            return dataUser.json();
        }).then( data => {
            setLogin(data.login);
        })
    }, [login]);

    return (
        <section className="twitter-clone">
            <Navbar login={login}></Navbar>
            <section className="home">
                <section className="home__wrapper-search">
                    <Search />
                </section>
                <section className="home__wrapper-entry">
                    <Title login={login} text="Home"/>
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