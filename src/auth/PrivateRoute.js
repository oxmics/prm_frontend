import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRoute = () => {
    const { user } = useAuth()
    if (user) {
        return <Outlet />
    }
    return <Navigate to="/signin" />
}

export default PrivateRoute