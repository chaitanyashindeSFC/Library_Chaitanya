import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export default function ModalTA({ open, onClose, content = {} }) {
  const {
    title = "Default Title",
    body = (
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This is the default modal body. You can pass your own content via
        <code> content.body </code>.
      </p>
    ),
    footer = (
      <button
        onClick={onClose}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
      >
        Default Action
      </button>
    ),
  } = content;

  const resolveNode = (value) => {
    if (value == null) return null;
    if (React.isValidElement(value)) return value;
    if (typeof value === "string" || typeof value === "number") return value;
    // If a component function was provided, render it
    if (typeof value === "function") return React.createElement(value);
    return String(value);
  };

  return (
    <Modal dismissible show={open} onClose={onClose}>
      <ModalHeader>{resolveNode(title)}</ModalHeader>
      <ModalBody>{resolveNode(body)}</ModalBody>
      <ModalFooter>{resolveNode(footer)}</ModalFooter>
    </Modal>
  );
}
