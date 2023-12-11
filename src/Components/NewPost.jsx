import classes from './NewPost.module.css'
import {useState} from 'react'

function NewPost(){

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={handleTextChange}/>
            </p>
            <p>{text}</p>
            <p>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required />
            </p>
        </form>
    )
}

export default NewPost