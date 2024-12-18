import styles from './Loader.module.css'
import clsx from "clsx";
import PropTypes from "prop-types";

const Loader = ({className, ...props}) => {
    return (
        <div {...props}  className={clsx(styles.spinner, className)}   ></div>
    );
};

export default Loader;

Loader.propTypes = {
    className: PropTypes.string,
}