import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



import Home from "../Pages/Home/Home";
import Notification from "../Pages/Notification/Notification";
import Message from "../Pages/Message/Message";
import Bookmark from "../Pages/Bookmark/Bookmark";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/SignIn/SignIn";



import './Menu.scss';

const Menu = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/user" component={Home} />
                <Route path="/notification" component={Notification} />
                <Route path="/messages" component={Message} />
                <Route path="/bookmarks" component={Bookmark} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}

export default Menu;
