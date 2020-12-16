import React, { useState } from "react";
import Banner from "./Banner";
//PORTALS
//To have a modal appear above everything else we need to use a portal
//In index.js it usually renders only one div
//We need to render a div not inside the root
//Another div which has an id of portal and render the modal in the portal
import "./App.css";
import Modal from "./Modal";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  function closeModal(e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "DIV") {
      setModal1Open(false);
      setModal2Open(false);
      setModal3Open(false);
    }
  }

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={closeModal}>
        <button onClick={() => setModal1Open(true)}>Open Modal</button>
        <button onClick={() => setModal2Open(true)}>Open Modal 2</button>
        <Modal open={modal1Open} onClose={() => setModal1Open(false)}>
          Fancy Modal 1
        </Modal>
        <Modal open={modal2Open} onClose={() => setModal2Open(false)}>
          Fancy Modal 2
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
      <Banner
        closeModal={closeModal}
        modal3Open={modal3Open}
        setModal3Open={setModal3Open}
      />
    </>
  );
}

export default App;
