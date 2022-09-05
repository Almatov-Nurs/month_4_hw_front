import React from 'react';
import classes from "./menu.module.css";

function Menu({menuStatus}) {
    return (
        <ul className={menuStatus ? classes.menuOpen : classes.menuClose}>
            <li>main page</li>
            <li>contacts page</li>
            <li>portfolio page</li>
        </ul>
    );
}

export default Menu;