import styles from "@components/ImageCard/ImageCard.module.css"
import PropTypes from "prop-types";
import {useStore} from "@/Store/useStore.jsx";



export const ImageCard = ({image}) => {

    const {setImage} = useStore();

    const handleClick=()=>{
        setImage(image.urls.full)
    }

    return (
        <img onClick={handleClick} className={styles.image} width={100} height={100} src={image.urls.small}
             alt={image.alt_description}/>
    )
}

ImageCard.propTypes = {
    image: PropTypes.object.isRequired
}
