import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsLists() {

    const [postText, setPostText] = React.useState()

    const textChangeHandler = (e) => {
        setPostText(e.target.value);
    }


  return (
    <>
      <NewPost bodyHandler={textChangeHandler}/>
      <ul className={classes.postlist}>
        <Post author="Snoopy" body="Merry Christmas" />
        <Post author="Leon" body="I love React" />
        <Post body={postText}/>
      </ul>
    </>
  );
}

export default PostsLists;
