import PropTypes from "prop-types";

const ErrorMessage = ({message}) => {
    console.log('msg', message)
    return <p style={{color:'red'}}>{message.message}</p>
}
export default ErrorMessage;

ErrorMessage.propTypes = {
    message: PropTypes.object.isRequired
}