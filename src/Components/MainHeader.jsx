import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader({newPost}) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>

      <p>
        <button className={classes.button} onClick={newPost}>
          <MdPostAdd />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
