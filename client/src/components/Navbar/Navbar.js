import React from "react";

import './Navbar.scss';



import BtnDropDownUser from "../Buttons/BtnDropDownUser/BtnDropDownUser";
import BtnModalTwitt from "../Buttons/BtnModalTwitt/BtnModalTwitt"
import ItemMenu from "../ItemMenu/ItemMenu";


import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';




const Navbar = ({handleLogout, login}) => {

    console.log("Navbar")
    return (
        <nav className="Navbar">
            
            <ul>
                <ItemMenu Icon={TwitterIcon} path="/home" name="" className="menu__logo"/>
                <ItemMenu Icon={HomeIcon} path="/home" name="Home" className="menu__item"/>
                <ItemMenu Icon={NotificationsNoneIcon} path="notification" name="Notification" className="menu__item"/>
                <ItemMenu Icon={MailOutlineIcon} path="messages" name="Messages" className="menu__item"/>
                <ItemMenu Icon={BookmarkBorderIcon} path="bookmarks" name="Bookmarks" className="menu__item"/>
                <ItemMenu Icon={PermIdentityIcon} path="profile" name="Profile" className="menu__item"/>
                <BtnModalTwitt />
                <BtnDropDownUser handleLogout={handleLogout} login={login}/>
            </ul>
        </nav>
    );
}

export default Navbar;






