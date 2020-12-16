import React from "react";
import Button from "./Button";
import Modal from "./Modal";

const BannerContainer = {
  backgroundColor: "blue",
  height: "30vh",
  width: "100vw",
};

const Banner = ({ modal3Open, setModal3Open, closeModal }) => {
  return (
    <div style={BannerContainer} onClick={closeModal}>
      <Button setModal3Open={setModal3Open} />
      <Modal open={modal3Open} onClose={() => setModal3Open(false)}>
        Fancy Modal 2
      </Modal>
    </div>
  );
};

export default Banner;
