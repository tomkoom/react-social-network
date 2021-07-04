import React from "react";
import cssmodule from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={cssmodule.item}>
            <div className={cssmodule.AvatarAndName}>
                <div className={cssmodule.Avatar}></div>
                <h4>Johnny Doe</h4>
            </div>
            {/* <img src="#" alt="avatar"/> */}
            <p>{props.message}</p>
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
