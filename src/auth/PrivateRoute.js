import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = () => {
    const { user, login } = useAuth()

    if (!user) {
        const asyncFunc = async () => {
            let user = localStorage.getItem('user')
            if (!user) {
                return <Navigate to="/signin" />
            }
            user = JSON.parse(user)
            login(user)
            if (user.is_organisation_admin === true) {
                return <Navigate to="/god" />
            }
            if (user.is_organisation_staff === true) {
                return <Navigate to="/staff" />
            }
            return <Outlet />
        }
        asyncFunc()
    } else {
        if (user.is_organisation_admin === true) {
            return <Navigate to="/god" />
        }
        if (user.is_organisation_staff === true) {
            return <Navigate to="/staff" />
        }
        return <Outlet />
    }
}

export default PrivateRoute
