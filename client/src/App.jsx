import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { PrivateRouteForAdmin, PrivateRouteForLogin } from './pages/PrivateRoutes/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRouteForAdmin />}>
          <Route path='/admin/details' element={<Admin />} />
        </Route>
        <Route element={<PrivateRouteForLogin />}>
          <Route path='/admin/login' element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App