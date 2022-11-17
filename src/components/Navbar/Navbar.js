import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
    const handleButtonClick = (e) => {
        console.log("clicked")
    }

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__title}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.Navbar__buttons}>
                <button className={styles.Navbar__button} onClick={handleButtonClick}>
                    <i className="bi bi-search"></i>
                </button>

                <button className={styles.Navbar__button} onClick={handleButtonClick}>
                    <i className="bi bi-bell"></i>
                </button>

                <button className={styles.Navbar__button} onClick={handleButtonClick}>
                    <i className="bi bi-person"></i>
                    <span>Roshan</span>
                </button>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar