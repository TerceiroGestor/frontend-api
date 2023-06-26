import React from 'react';
import { Link } from 'react-router-dom';
//import * as bootstrap from 'react-bootstrap';

const Main = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-info">

            <div class="mx-3">
                <img
                    src="/TERCEIRO-GESTOR_Logotipo.png"
                    height="24"
                />
            </div>
            <div class="container">

                <div class="collapse navbar-collapse" id="navbarButtonsExample">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Equipe</a>
                        </li>
                    </ul>


                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-link px-3 me-2">
                            <Link to="/login">Login</Link>
                        </button>
                        <button type="button" class="btn btn-primary me-3">
                            <Link to="/register">Register</Link>
                        </button>
                    </div>
                </div>

            </div>

        </nav>

    );
}

export default Main;
