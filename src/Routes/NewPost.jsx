import classes from "./NewPost.module.css";
import Modal from "../Components/Modal";
import { useNavigate, Form, redirect } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate()

  

  const cancelHandler = () => {
    navigate('..')
  }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="text" required rows={3}  />
        </p>
        <p>
          <label htmlFor="name">Author</label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
        </p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={cancelHandler}>
            Cancel
          </button>
          <button className={classes.button}>
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/')
}
