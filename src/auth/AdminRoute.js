import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = () => {
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
                return <Outlet />
            }
            if (user.is_organisation_staff === true) {
                return <Navigate to="/staff" />
            }
            return <Navigate to="/" />
        }
        asyncFunc()
    } else {
        if (user.is_organisation_admin === true) {
            return <Outlet />
        }
        if (user.is_organisation_staff === true) {
            return <Navigate to="/staff" />
        }
        return <Navigate to="/" />
    }
}

export default AdminRoute
