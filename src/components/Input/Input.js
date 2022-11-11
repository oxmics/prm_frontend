import styles from "./Input.module.scss"
import PropTypes from 'prop-types';
import { createRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Input = ({ type, label, bootstrapIcon, placeholder, name, value, onChange }) => {
    const input = createRef()

    const handleClick = () => input.current.focus()

    return (
        <div className={styles.Input} onClick={handleClick}>
            {label && <label className={styles.Input__label}>{label}</label>}
            <div className={styles.Input__inputWrapper}>
                {bootstrapIcon && <i className={`${bootstrapIcon} ${styles.Input__icon}`}></i>}
                <input className={styles.Input__input} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} ref={input} />
            </div>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input