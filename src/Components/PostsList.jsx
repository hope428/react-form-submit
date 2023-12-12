import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({modalOpen, showModalHandler}) {
  const [postText, setPostText] = React.useState();
  const [authorText, setAuthorText] = React.useState();

 

  const textChangeHandler = (e) => {
    setPostText(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorText(e.target.value);
  };

  return (
    <>
      {modalOpen && <Modal modalHandler={showModalHandler}>
        <NewPost
          bodyHandler={textChangeHandler}
          authorHandler={authorChangeHandler}
        />
      </Modal>}
      
      <ul className={classes.postlist}>
        <Post author="Snoopy" body="Merry Christmas" />
        <Post author="Leon" body="I love React" />
        <Post body={postText} author={authorText} />
      </ul>
    </>
  );
}

export default PostsList;
