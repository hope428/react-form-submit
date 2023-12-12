import classes from './NewPost.module.css'

function NewPost({bodyHandler, authorHandler, submitPost}){

    

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required onChange={authorHandler}/>
            </p>
            <button className={classes.button} onClick={submitPost}>Submit</button>
        </form>
    )
}

export default NewPost