import LogoImage from "../../assets/images/logo.png"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import styles from "./Signup.module.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

const Signin = () => {
    const [form, setForm] = useState({ firstname: "", lastname: "", email: "", password: "" })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.Signup}>
            <div className={styles.Signup__container}>
                <img className={styles.Signup__logo} src={LogoImage} />
                <h1 className={styles.Signup__title}>Sign up</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.Signup__inputWrapper}>
                        <div className={styles.Signup__inputWrapper__row}>
                            <div className={styles.Signup__inputWrapper__col}>
                                <Input type="text" bootstrapIcon="bi-envelope" placeholder="Your Firstname" name="firstname" value={form.firstname} onChange={handleInputChange} />
                            </div>
                            <div className={styles.Signup__inputWrapper__col}>
                                <Input type="text" bootstrapIcon="bi-envelope" placeholder="Your Lastname" name="lastname" value={form.lastname} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.Signup__inputWrapper}>
                        <Input type="email" bootstrapIcon="bi-envelope" placeholder="Your Email" name="email" value={form.email} onChange={handleInputChange} />
                    </div>
                    <div className={styles.Signup__inputWrapper}>
                        <Input type="password" bootstrapIcon="bi-lock" placeholder="Password" name="password" value={form.password} onChange={handleInputChange} />
                    </div>
                    <div className={styles.Signup__buttonWrapper}>
                        <Button type="submit"><i>Sign up</i></Button>
                    </div>
                </form>
                <p className={styles.Signup__bottomText}><i>This site is protected by reCAPTCHA and the Google Privacy Policy.</i></p>
                <p className={styles.Signup__signupText}><i>Already registered? <Link to="/signin">Sign in</Link></i></p>
            </div>
        </div >
    )
}

export default Signin