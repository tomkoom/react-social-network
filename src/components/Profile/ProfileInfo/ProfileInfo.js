import React from "react";
import cssmodule from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={cssmodule.ProfileInfoContainer}>

            <div className={cssmodule.Cover}>
                {/* <img src="https://www.marorka.com/wp-content/uploads/2016/08/Header-img.jpg" alt="header-img"/> */}
            </div>

            <div className={cssmodule.DescriptionBlock}>
                Avatar + ProfileInfo
            </div>

        </div>

    )
}

export default ProfileInfo;
