import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Requests.module.scss";
import Sidebar from '../../components/Sidebar/Sidebar';

const Requests = (props) => {
    return (
        <div className={styles.Requests}>
            <Sidebar current="requests" />
        </div>
    )
}

Requests.propTypes = {}

export default Requests