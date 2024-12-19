import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

const SearchBar = ({query}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let value =  e.target.search.value.trim();
        if (value){ query(value)}else{
           toast.info('Search field cannot be empty')
        }
    }

    return (
        <form onSubmit={handleSubmit}  className={styles.searchBar}>
            <input name='search' placeholder="Search" />
            <button style={{background:'transparent',border:'none'}} type='submit'><FaSearch /></button>
        </form>
    )
}
export default SearchBar

SearchBar.propTypes = {
    query: PropTypes.func.isRequired,
}