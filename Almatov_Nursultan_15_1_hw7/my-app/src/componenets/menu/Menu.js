import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./menu.module.css";

function Menu(props) {
    return (
        <ul>
            <li style={{marginBottom: "30px"}}>
                <NavLink to="/" className={classes.link}>Users Page</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={classes.link}>Users List</NavLink>
            </li>
        </ul>
    );
}

export default Menu;