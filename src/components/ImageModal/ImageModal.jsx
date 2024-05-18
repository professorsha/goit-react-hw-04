 import css from './ImageModal.module.css';

import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen,imageLikes, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    ><div>
      {/* <button onClick={onClose} className="close-btn">
        &times;
      </button> */}
      <span className={css.likes}>likes: {imageLikes}</span>
      <img src={imageUrl} className={css.img} alt="Large" width="500px" />
      </div>
    </Modal>
  );
};

export default ImageModal;