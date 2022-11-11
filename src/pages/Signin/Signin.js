import LogoImage from "../../assets/images/logo.png"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import styles from "./Signin.module.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

const Signin = () => {
    const [form, setForm] = useState({ email: "", password: "" })

    const handleFormSubmit = (e) => {
        e.preventDefault()

    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.Signin}>
            <div className={styles.Signin__container}>
                <img className={styles.Signin__logo} src={LogoImage} />
                <h1 className={styles.Signin__title}>Sign in</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.Signin__inputWrapper}>
                        <Input type="email" bootstrapIcon="bi-envelope" placeholder="Your Email" name="email" value={form.email} onChange={handleInputChange} />
                    </div>
                    <div className={styles.Signin__inputWrapper}>
                        <Input type="password" bootstrapIcon="bi-lock" placeholder="Password" name="password" value={form.password} onChange={handleInputChange} />
                    </div>
                    <div className={styles.Signin__buttonWrapper}>
                        <Button type="submit"><i>Sign in</i></Button>
                    </div>
                </form>
                <p className={styles.Signin__bottomText}><i>This site is protected by reCAPTCHA and the Google Privacy Policy.</i></p>
                <p className={styles.Signin__signupText}><i>Don't have an account? <Link to="/signup">Sign up</Link></i></p>
            </div>
        </div >
    )
}

export default Signin