import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = forwardRef((props, modalRef) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div
      id={props.id}
      className={`modal ${active ? "active" : ""}`}
      ref={modalRef}
    >
      {props.children}
    </div>
  );
});

const ModalContent = (props) => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content--close" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};
const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal__${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default TrailerModal;
