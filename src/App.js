import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import "./assets/scss/global.scss"
import Requests from './pages/Requests/Requests';
import StaffManagement from './pages/StaffManagement/StaffManagement';
import GodDashboard from "./pages/God/Dashboard/Dashboard"
import GodRequests from "./pages/God/Requests/Requests"
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import { AuthProvider } from './context/AuthContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/requests' element={<Requests />} />
              <Route path='/staff-management' element={<StaffManagement />} />
            </Route>

            <Route element={<AdminRoute />}>
              <Route path='/god/dashboard' element={<GodDashboard />} />
              <Route path='/god/requests' element={<GodRequests />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
