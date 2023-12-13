import classes from './NewPost.module.css'
import { useState } from 'react';

function NewPost({onAddPost}){

    const [postText, setPostText] = useState();
    const [authorText, setAuthorText] = useState();
    
    const newPostHandler = (e) => {
        e.preventDefault()
        const postData = {
            text: postText,
            author: authorText
        }
        onAddPost(postData)
    }

    const textChangeHandler = (e) => {
        setPostText(e.target.value);
      };
    
    const authorChangeHandler = (e) => {
        setAuthorText(e.target.value);
    };

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={textChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <button className={classes.button} onClick={newPostHandler}>Submit</button>
        </form>
    )
}

export default NewPost