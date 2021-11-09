import React from "react";
import { createPortal } from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  borderRadius: "10px",
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
  zIndex: 1000,
};

const BTN_CLOSE = {
  position: "absolute",
  top: "5px",
  left: "5px",
  color: "red",
  fontWeight: "bolder",
  fontFamily: "sans-serif",
  cursor: "pointer",
};

const Modal = ({ children, open, isOpen }) => {
  if (!open) return null;

  return createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <span style={BTN_CLOSE} onClick={isOpen}>
          X
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
