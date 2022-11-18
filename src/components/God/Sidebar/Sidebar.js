import styles from "./Sidebar.module.scss"
import Logo from "../../../assets/images/logo.png"
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
                    <Button bootstrapIcon="bi-house" text="Dashboard" active={current == "dashboard"} onClick={() => navigate("/god/dashboard")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-file-text" text="Requests" active={current == "requests"} onClick={() => navigate("/god/requests")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-file-text" text="Meetings" active={current == "meetings"} onClick={() => navigate("/god/meetings")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-credit-card" text="Entity Management" active={current == "entity-management"} onClick={() => navigate("/god/entity-management")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-file-text" text="Reports" active={current == "reports"} onClick={() => navigate("/god/reports")} />
                </div>
                <div className={styles.Sidebar__button}>
                    <Button bootstrapIcon="bi-file-text" text="Documents" active={current == "documents"} onClick={() => navigate("/god/documents")} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar