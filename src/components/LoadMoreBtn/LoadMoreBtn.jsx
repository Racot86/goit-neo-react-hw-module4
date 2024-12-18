import styles from './LoadMoreBtn.module.css'
import Loader from "@components/Loader/Loader.jsx";
import PropTypes from "prop-types";

const LoadMoreBtn = ({onClick, isFetchingNextPage, text}) => {
    return (
        <button className={styles.loadMoreBtn} onClick={onClick}>{isFetchingNextPage ?
            <Loader style={{height: '10px', width: '10px', margin: '4px'}}/> :
            <p style={{padding: '8px'}}>{text}</p>}</button>
    )
}
export default LoadMoreBtn

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    isFetchingNextPage: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}