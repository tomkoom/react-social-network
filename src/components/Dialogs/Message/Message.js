import React from "react";
import cssmodule from "./../Dialogs.module.css";


const Message = (props) => {
    return <div className={cssmodule.dialog}>{ props.message }</div>
}

export default Message;
