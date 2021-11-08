import React from "react";
import { createPortal } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
};

const Modal = ({ children, open, isOpen }) => {
  if (!open) return null;

  return createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={isOpen}>Close Modal</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
