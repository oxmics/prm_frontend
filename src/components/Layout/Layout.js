import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"

import styles from "./Layout.module.scss"

const Layout = ({ children, current, title }) => {
    return (
        <div className={styles.Layout}>
            <div className={styles.Layout__sidebar}>
                <Sidebar current={current} />
            </div>

            <div className={styles.Layout__content}>
                <div className={styles.Layout__navbar}>
                    <Navbar title={title} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout