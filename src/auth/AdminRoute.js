import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const AdminRoute = () => {
    const { user } = useAuth()
    if (!user || user.role !== "admin") {
        return <Navigate to="/signin" />
    }
    return <Outlet />
}

export default AdminRoute