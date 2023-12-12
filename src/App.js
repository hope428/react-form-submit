import "./App.css";
import MainHeader from "./Components/MainHeader";
import PostsList from "./Components/PostsList";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const showModalHandler = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <MainHeader newPost={showModalHandler}/>
      <main>
        <PostsList modalOpen={modalOpen} showModalHandler={showModalHandler} />
      </main>
    </>
  );
}

export default App;
