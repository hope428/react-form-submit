import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData()

  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={classes.postlist}>
          {posts.map((post) => (
            <Post key={post.body} body={post.text} author={post.author} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
