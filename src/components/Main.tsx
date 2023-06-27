import { Link } from 'react-router-dom';

const Main = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">

            <div className="mx-3">
                <img
                    src="/TERCEIRO-GESTOR_Logotipo.png"
                    height="24"
                />
            </div>
            <div className="container">

                <div className="collapse navbar-collapse" id="navbarButtonsExample">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-link px-3 me-2">
                            <Link to="/login">Login</Link>
                        </button>
                        <button type="button" className="btn btn-primary me-3">
                            <Link to="/register" className="text-white">Register</Link>
                        </button>
                    </div>
                </div>

            </div>

        </nav>

    );
}

export default Main;
