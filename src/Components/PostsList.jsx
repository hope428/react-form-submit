import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({modalOpen, showModalHandler}) {
  
  const [posts, setPosts] = useState([])

  const postHandler = (postData) => {
    setPosts(prevPosts => {
      return (
        [{text: postData.text, author: postData.author}, ...prevPosts]
      )
    })
    showModalHandler()
  }

  return (
    <>
      {modalOpen && <Modal modalHandler={showModalHandler}>
        <NewPost
          onAddPost={postHandler}
          showModalHandler={showModalHandler}
        />
      </Modal>}
      
      <ul className={classes.postlist}>
        {posts.map(post => <Post body={post.text} author={post.author}/>)}
      </ul>
    </>
  );
}

export default PostsList;
