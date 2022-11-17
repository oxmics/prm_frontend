import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Tag.module.scss";

const Tag = ({ name }) => {
    return (
        <div className={`
            ${styles.Tag}
            ${styles[`Tag__${String(name).toLowerCase()}`]}
        `}>
            <p>{name}</p>
        </div>
    )
}

Tag.propTypes = {}

export default Tag