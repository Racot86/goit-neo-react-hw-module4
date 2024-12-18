import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import {useRef} from "react";
import PropTypes from "prop-types";

const SearchBar = ({query}) => {
    const inputRef = useRef(null)

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            query(inputRef.current.value.trim())
        }
    };

    return (
        <div className={styles.searchBar}>
            <input ref={inputRef} onKeyDown={handleKeyDown}  placeholder="Search" />
            <FaSearch onClick={()=>query(inputRef.current.value.trim())} />
        </div>
    )
}
export default SearchBar

SearchBar.propTypes = {
    query: PropTypes.func.isRequired,
}