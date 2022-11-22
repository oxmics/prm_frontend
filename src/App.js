import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Requests from './pages/Requests/Requests'
import StaffManagement from './pages/StaffManagement/StaffManagement'
import GodDashboard from './pages/God/Dashboard/Dashboard'
import GodRequests from './pages/God/Requests/Requests'
import StaffDashboard from './pages/God/Dashboard/Dashboard'
import StaffRequests from './pages/God/Requests/Requests'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import { AuthProvider } from './context/AuthContext'

import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/global.scss'
import StaffRoute from './auth/StaffRoute'

class App extends Component {
    render() {
        return (
            <>
                <ToastContainer />

                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />

                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Dashboard />} />
                                <Route
                                    path="/requests"
                                    element={<Requests />}
                                />
                                <Route
                                    path="/staff-management"
                                    element={<StaffManagement />}
                                />
                            </Route>

                            <Route element={<AdminRoute />}>
                                <Route path="/god" element={<GodDashboard />} />
                                <Route
                                    path="/god/requests"
                                    element={<GodRequests />}
                                />
                            </Route>

                            <Route element={<StaffRoute />}>
                                <Route
                                    path="/staff"
                                    element={<StaffDashboard />}
                                />
                                <Route
                                    path="/staff/requests"
                                    element={<StaffRequests />}
                                />
                            </Route>

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </>
        )
    }
}

export default App
