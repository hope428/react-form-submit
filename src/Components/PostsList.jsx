import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({modalOpen, showModalHandler}) {
  const [postText, setPostText] = useState();
  const [authorText, setAuthorText] = useState();
  const [posts, setPosts] = useState([])
 

  const textChangeHandler = (e) => {
    setPostText(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorText(e.target.value);
  };

  const postHandler = (e) => {
    e.preventDefault()
    setPosts(prevPosts => {
      return (
        [...prevPosts, {text: postText, author: authorText}]
      )
    })
    showModalHandler()
  }


  return (
    <>
      {modalOpen && <Modal modalHandler={showModalHandler}>
        <NewPost
          bodyHandler={textChangeHandler}
          authorHandler={authorChangeHandler}
          submitPost={postHandler}

        />
      </Modal>}
      
      <ul className={classes.postlist}>
        {posts.map(post => <Post body={post.text} author={post.author}/>)}
      </ul>
    </>
  );
}

export default PostsList;
