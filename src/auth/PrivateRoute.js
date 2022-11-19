import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AccountRequests from '../requests/AccountRequests'

const PrivateRoute = () => {
    const { user, login } = useAuth()
    let usr = user
    if (!usr) {
        console.log(usr)
        usr = localStorage.getItem('user')
        if (!usr) {
            return <Navigate to="/signin" />
        }
        usr = JSON.parse(usr)
        login(usr)
    }
    if (usr.role === 'admin') {
        return <Navigate to="/god" />
    }
    return <Outlet />
}

export default PrivateRoute
