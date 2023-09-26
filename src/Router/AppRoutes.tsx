import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PrivateRoute from '../utils/PrivateRoute';

//Page
import Home from '../components/Home';
import About from '../components/About';
import Team from '../components/Team';

//Sistema
//import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
import Form from '../components/Form';
import Dashboard from '../components/Dashboard';

//GoogleCallBach
import GoogleCallBack from '../components/GoogleCallBack';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                //Page
                <Route path="/home" Component={Home} />
                <Route path="/aboute" Component={About} />
                <Route path="/team" Component={Team} />

                //Sistema
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/form" Component={Form} />

                //PrivateRoute
                <Route path="/dashboard" Component={Dashboard} />

                //GoogleAuth
                <Route path="/googlecallback" Component={GoogleCallBack} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;