import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Page
import Home from '../components/Home';
import About from '../components/About';
import Team from '../components/Team';


//Sistema
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                //Page
                <Route path="/home" Component={Home} />
                <Route path="/aboute" Component={About} />
                <Route path="/team" Component={Team} />

                //Sistema
                <Route path="/" Component={Main} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/dashboard" Component={Dashboard} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;