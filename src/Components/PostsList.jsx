import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsLists(){
    return <ul className={classes.postlist}>
        <Post author="Snoopy" body="Merry Christmas"/>
        <Post author="Leon" body="I love React"/>
    </ul>
}

export default PostsLists