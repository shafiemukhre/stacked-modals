import React, { useState } from "react";
import "./App.css";

function App() {
  // array of "true", we are using the index to track the modals, not the element
  const [modals, setModals] = useState([]);

  // create modal
  const handleOpenModal = () => {
    setModals((oldModals) => [...oldModals, true]);
  };

  // close modal
  const handleCloseModal = (index) => {
    setModals(modals.filter((_, i) => i != index));
  };

  return (
    <div className="app">
      <button onClick={handleOpenModal}>Open Modal</button>
      {modals.map((_, index) => (
        <ModalDialog
          key={index}
          index={index}
          onClose={() => handleCloseModal(index)}
          onCreate={handleOpenModal}
        />
      ))}
      <h1>News Headline</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra,
        libero eget rutrum scelerisque, mauris magna gravida justo, nec aliquet
        purus libero in velit. Proin nec ligula pretium, rutrum metus eu,
        vestibulum ante. Fusce porta tempus ex, nec aliquam lectus. Aliquam erat
        volutpat. Vestibulum a lorem sit amet nibh scelerisque pharetra. In
        facilisis, erat eu auctor pellentesque, mi mi scelerisque ligula, ut
        sagittis orci odio commodo ipsum. Nullam at elementum nulla. Aenean mi
        leo, consectetur iaculis risus quis, scelerisque pulvinar tortor.
        Aliquam sit amet scelerisque metus. Cras sem nunc, placerat nec arcu
        nec, eleifend vestibulum tellus.
      </p>
      <p>
        Aliquam dapibus purus non massa mattis porta. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam fringilla efficitur nisi imperdiet dictum. Duis aliquam nec
        nulla eget vehicula. Vivamus pharetra ac velit vitae viverra. Integer
        ligula dolor, pellentesque non odio sed, sodales eleifend mi. Vestibulum
        convallis justo augue.
      </p>
    </div>
  );
}

function ModalDialog({ onClose, onCreate, index }) {
  return (
    <div className="modal-overlay">
      <div
        className="modal"
        style={{ transform: `translate(${index * 20}px, ${index * 20}px)` }}
      >
        <div className="modal-content">
          Vivamus pharetra ac velit vitae viverra. Integer ligula dolor,
          pellentesque non odio sed, sodales eleifend mi. Vestibulum convallis
          justo augue.
        </div>
        <button className="new-modal" onClick={onCreate}>
          {" "}
          Create new modal
        </button>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default App;
