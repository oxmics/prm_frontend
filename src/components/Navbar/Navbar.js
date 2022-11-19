import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar = ({ title }) => {
    const [buttonExpand, setButtonExpand] = useState(false)

    const { user, logout } = useAuth()

    const navigate = useNavigate()

    /*=============================================
                    HANDLERS
     ==============================================*/

    const handleIconClick = (e) => {
        setButtonExpand(!buttonExpand)
    }

    const handleLogout = () => {
        logout()
        navigate('/signin')
    }

    /*=============================================
                    RENDER
     ==============================================*/

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.Navbar__buttons}>
                {/* <button
                    className={styles.Navbar__button}
                    onClick={handleIconClick}
                >
                    <i className="bi bi-search"></i>
                </button>

                <button
                    className={styles.Navbar__button}
                    onClick={handleIconClick}
                >
                    <i className="bi bi-bell"></i>
                </button> */}

                <button
                    className={styles.Navbar__button}
                    onClick={handleIconClick}
                >
                    <i className="bi bi-person"></i>
                    <span>{user.email}</span>
                    &nbsp;&nbsp;
                    <i class="bi bi-chevron-down"></i>
                </button>
            </div>
            {buttonExpand && (
                <ul className={styles.Navbar__dropdown}>
                    <li>
                        <button className={styles.Navbar__dropdownBtn}>
                            Profile
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.Navbar__dropdownBtn}
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            )}
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar
