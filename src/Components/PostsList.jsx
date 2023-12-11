import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsLists() {
  return (
    <>
      <NewPost />
      <ul className={classes.postlist}>
        <Post author="Snoopy" body="Merry Christmas" />
        <Post author="Leon" body="I love React" />
      </ul>
    </>
  );
}

export default PostsLists;
