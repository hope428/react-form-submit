import classes from "./NewPost.module.css";
import Modal from "../Components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [postText, setPostText] = useState();
  const [authorText, setAuthorText] = useState();
  const navigate = useNavigate()

  const newPostHandler = (e) => {
    e.preventDefault();
    const postData = {
      text: postText,
      author: authorText,
    };
    onAddPost(postData);
  };

  const textChangeHandler = (e) => {
    setPostText(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorText(e.target.value);
  };

  const cancelHandler = () => {
    navigate('..')
  }

  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={textChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Author</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={cancelHandler}>
            Cancel
          </button>
          <button className={classes.button} onClick={newPostHandler}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
