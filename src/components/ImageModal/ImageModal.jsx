import styles from "@/App.module.css";
import {IoCloseOutline} from "react-icons/io5";
import Modal from "react-modal";
import PropTypes from "prop-types";



const ImageModal = ({isOpen, closeModal, image}) => {
    Modal.setAppElement('#root');
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex:2,
                },
                content: {
                    width: '80vw',
                    height: '80vh',
                    margin: 'auto',
                    border:'none',
                    position:'relative',
                    backgroundColor: 'rgba(0,0,0,0.8)'
                },
            }}
        >
            <img className={styles.fullImage} src={image}    alt={'full image'} />
            <button className={styles.closeButton} onClick={closeModal}><IoCloseOutline /></button>
        </Modal>
    )
}

export default ImageModal

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired
}