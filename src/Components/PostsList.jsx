import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ modalOpen, showModalHandler }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getPosts(){
      setIsLoading(true)
      const response = await fetch('http://localhost:8080/posts')
      const data = await response.json();
      setPosts(data.posts)
      setIsLoading(false)
    }

    getPosts()
  }, []);

  

  const postHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    showModalHandler();
  };

  return (
    <>
      {modalOpen && (
        <Modal modalHandler={showModalHandler}>
          <NewPost
            onAddPost={postHandler}
            showModalHandler={showModalHandler}
          />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.postlist}>
          {posts.map((post) => (
            <Post key={post.body} body={post.text} author={post.author} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div className={classes.empty}>
          <h2>There are no posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
          <div className={classes.empty}>
            <h2>Loading...</h2>
          </div>
        )
       }
    </>
  );
}

export default PostsList;
