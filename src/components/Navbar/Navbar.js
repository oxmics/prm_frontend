import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./Navbar.module.scss";

const Navbar = ({ title }) => {
    const [buttonExpand, setButtonExpand] = useState(false)

    const handleButtonClick = (e) => {
        setButtonExpand(!buttonExpand)
    }

    useEffect(() => {
        // const func = (e) => {
        //     if (!([styles.Navbar__button, styles.Navbar__dropdown, styles.Navbar__dropdownBtn].includes(e.target.className))) {
        //         setButtonExpand(false)
        //     }
        // }

        // document.addEventListener('click', func)
        // return () => {
        //     document.removeEventListener('click', func)
        // }
    }, [])

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__title}>
                <h1>{title}</h1>
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
                    &nbsp;&nbsp;
                    <i class="bi bi-chevron-down"></i>
                </button>
            </div>
            {buttonExpand &&
                <ul className={styles.Navbar__dropdown}>
                    <li><button className={styles.Navbar__dropdownBtn}>Profile</button></li>
                    <li><button className={styles.Navbar__dropdownBtn}>Logout</button></li>
                </ul>
            }
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar