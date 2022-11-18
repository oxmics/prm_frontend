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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/staff-management' element={<StaffManagement />} />
          <Route path='/god/dashboard' element={<GodDashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
