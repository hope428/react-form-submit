import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsLists() {
  const [postText, setPostText] = React.useState();
  const [authorText, setAuthorText] = React.useState();
  const [modalOpen, setModalOpen] = React.useState(true) 

  const showModalHandler = () => {
    setModalOpen((prevState) => !prevState)
  }

  const textChangeHandler = (e) => {
    setPostText(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorText(e.target.value);
  };

  return (
    <>
      {modalOpen ? <Modal modalHandler={showModalHandler}>
        <NewPost
          bodyHandler={textChangeHandler}
          authorHandler={authorChangeHandler}
        />
      </Modal> : null}
      
      <ul className={classes.postlist}>
        <Post author="Snoopy" body="Merry Christmas" />
        <Post author="Leon" body="I love React" />
        <Post body={postText} author={authorText} />
      </ul>
    </>
  );
}

export default PostsLists;
