import styles from "./Button.module.scss"

const Button = ({ children, ...rest }) => {
    return (
        <button className={styles.Button} {...rest}>{children}</button>
    )
}

export default Button