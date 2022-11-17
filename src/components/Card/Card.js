import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Card.module.scss";

const Card = ({ children, className = "" }) => {
    return (
        <div className={`${styles.Card} ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {}

export default Card