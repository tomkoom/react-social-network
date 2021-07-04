import React from "react";
import cssmodule from "./Header.module.css";

const Header = () => {
    return (
        <div className={cssmodule.headerContainer}>
            <div className={cssmodule.header}>
                {/* <img src="#"/> */}
                <h3 className={cssmodule.Logo}>ReactSocNet</h3>
            </div>
        </div>
    )
}

export default Header;
