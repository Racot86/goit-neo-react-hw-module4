import styles from './ImageGallery.module.css';

import PropTypes from "prop-types";
import {ImageCard} from "@components/ImageCard/ImageCard.jsx";

const ImageGallery = ({ images, openModal }) => {

    return (
        <div className={styles.gallery} onClick={(e) => openModal(e.target)}>
            {images?.pages.map((page) => (
                page.results.map((image)=> (
                    <ImageCard
                        openModal={openModal}
                        key={image.id}
                        image={image}
                    />
                    ))
            ))}
        </div>
    )
}
export default ImageGallery
ImageGallery.propTypes = {
    images: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
}