import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
//import Dashboard from './components/Dashboard';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Main} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;