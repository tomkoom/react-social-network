import React from "react";
import cssmodule from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={cssmodule.nav}>

            <div className={cssmodule.item}>
                <NavLink to="/profile" activeClassName={cssmodule.active}>Profile</NavLink>
            </div>

            <div className={cssmodule.item}>
                <NavLink to="/dialogs" activeClassName={cssmodule.active}>Messages</NavLink>
            </div>

            <div className={cssmodule.item}>
                <a>News</a>
            </div>

            <div className={cssmodule.item}>
                <a>Music</a>
            </div>

            <div className={cssmodule.item}>
                <a>Settings</a>
            </div>


        </nav>
    )
}

export default Nav;
