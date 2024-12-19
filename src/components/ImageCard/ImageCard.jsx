import styles from "@components/ImageCard/ImageCard.module.css"
import PropTypes from "prop-types";

export const ImageCard = ({image, openModal}) => {


    return (
        <li>
            <img onClick={()=>openModal(image.urls.full)} className={styles.image} width={100} height={100} src={image.urls.small}
                 alt={image.alt_description}/>
        </li>
    )
}

ImageCard.propTypes = {
    image: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
}
