import styles from "./Sidebar.module.scss"
import Logo from "../../assets/images/logo.png"
import Button from "./Button/Button"
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ current }) => {
    const navigate = useNavigate()

    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar__logo}>
                <img src={Logo} />
            </div>
            <div className={styles.Sidebar__buttons}>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-house" text="Dashboard" active={current == "dashboard"} onClick={() => navigate("/")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-file-text" text="Requests" active={current == "requests"} onClick={() => navigate("/requests")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-credit-card" text="Staff Managements" active={current == "staff-management"} onClick={() => navigate("/staff-management")} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar