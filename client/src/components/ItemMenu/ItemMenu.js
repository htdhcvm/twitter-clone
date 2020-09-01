import React from "react";
import {
    Link
} from "react-router-dom";

import './ItemMenu.scss';

const ItemMenu = ({Icon, path, name, className}) => {
    return (
        <li >
            <Link className={className} to={path}><Icon/>{name}</Link>
        </li>
    );
}

export default ItemMenu;