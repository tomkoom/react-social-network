import React from "react";
import cssmodule from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={cssmodule.dialogs}>

            <div className={cssmodule.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={cssmodule.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea 
                        value={newMessageBody} 
                        onChange={onNewMessageChange} 
                        placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
                
            </div>

        </div>
    )
}


export default Dialogs;
