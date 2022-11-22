import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = () => {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/signin" />
    }
    if (user.is_organisation_admin !== true) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default AdminRoute
