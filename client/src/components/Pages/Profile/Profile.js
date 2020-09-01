import React from "react";

import './Profile.scss';

import Navbar from "../../Navbar/Navbar";

const Profile = () => {
    return (
        <section className="twitter-clone">
            <Navbar></Navbar>
            <section className="profile">
                <h1>Profile</h1>
            </section>
        </section>
        
    );
}

export default Profile;