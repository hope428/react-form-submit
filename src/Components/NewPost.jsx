import classes from './NewPost.module.css'
import {useState} from 'react'

function NewPost({bodyHandler}){
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required />
            </p>
        </form>
    )
}

export default NewPost