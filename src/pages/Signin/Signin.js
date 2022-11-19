import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import AccountRequests from '../../requests/AccountRequests'
import ValidationError from '../../errorHandler/ValidationError'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import LogoImage from '../../assets/images/logo.png'
import styles from './Signin.module.scss'
import { useAuth } from '../../context/AuthContext'

const Signin = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const { user, login } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        } else {
            const usr = localStorage.getItem('user')
            if (usr) {
                login(JSON.parse(usr))
                navigate('/')
            }
        }
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {
            const user = await AccountRequests.loginUser({
                email: form.email,
                password: form.password,
            })
            console.log(user)
            await login(user)
            navigate('/')
        } catch (err) {
            if (err instanceof ValidationError) {
                toast(err.message, {
                    type: 'error',
                })
                return
            }
            toast('Something went wrong!', {
                type: 'error',
            })
        }
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
                        <Input
                            type="email"
                            bootstrapIcon="bi-envelope"
                            placeholder="Your Email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.Signin__inputWrapper}>
                        <Input
                            type="password"
                            bootstrapIcon="bi-lock"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.Signin__buttonWrapper}>
                        <Button type="submit">
                            <i>Sign in</i>
                        </Button>
                    </div>
                </form>
                <p className={styles.Signin__bottomText}>
                    <i>
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy.
                    </i>
                </p>
                <p className={styles.Signin__signupText}>
                    <i>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </i>
                </p>
            </div>
        </div>
    )
}

export default Signin
