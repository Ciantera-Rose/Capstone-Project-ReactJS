import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import BackDrop from "./BackDrop";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal-header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.Submit : (event) => event.preventDefault()
        }
      >
        <div className={`modal-content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal-footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <div>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
        {/* takes key/val pairs of props obj and spreads as attributes... */}
      </CSSTransition>
    </div>
  );
};

export default Modal;

// Modal and Modal Overlay ... in one component
// React Portal again...
// header at top of Modal
// wrap in form => if submit set, call it else event and prevent default
// submit handler => event.prevent default
// footer for modal => w/ buttons

// Add modal backdrop and animation from sidedrawer

// Add to LocationItem to View on map to manage state
