import PropTypes from 'prop-types';
import styles from "./Button.module.scss"

const Button = ({ bootstrapIcon, text, active = false, ...rest }) => {
    return (
        <button className={`${styles.Button} ${active && styles.Button__active}`} {...rest} ><i className={bootstrapIcon}></i> {text}</button>
    )
}

export default Button