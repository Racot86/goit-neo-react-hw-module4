import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchBar = ({query}) => {


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let value = e.target.search ? e.target.search.value.trim() : e.target.value.trim();
        if (value) query(value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input name='search'  onKeyDown={handleKeyDown}  placeholder="Search" />
            <button style={{background:'transparent',border:'none'}} type='submit'><FaSearch /></button>
        </form>
    )
}
export default SearchBar

SearchBar.propTypes = {
    query: PropTypes.func.isRequired,
}