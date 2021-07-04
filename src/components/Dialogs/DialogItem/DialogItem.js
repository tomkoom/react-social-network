import React from "react";
import cssmodule from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id; // dialogs path variable

    return (
        <div className={cssmodule.dialog + " " + cssmodule.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
