import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({modalOpen, showModalHandler}) {
  
  const [posts, setPosts] = useState([])

  const postHandler = (postData) => {
    setPosts(prevPosts => [postData, ...prevPosts])
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
      {posts.length > 0 ?
      <ul className={classes.postlist}>
        {posts.map(post => <Post key={post.body} body={post.text} author={post.author}/>)}
      </ul>
      : <div className={classes.empty}>
        <h2>There are no posts yet...</h2>
        <p>Start adding some!</p>
        </div>}
    </>
  );
}

export default PostsList;
