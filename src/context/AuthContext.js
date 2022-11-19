import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // {
    //     firstname: 'roshan',
    //     lastname: 'kumar',
    //     email: 'roshankumar@email.com',
    //     role: 'admin',
    // }

    const login = (user) => {
        setUser(user)
        // localStorage.setItem('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        // localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
