import classes from "./Modal.module.css";
import React from "react";

function Modal({ children, modalHandler}) {

  return (
    <>
      <div className={classes.backdrop} onClick={modalHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
