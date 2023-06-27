import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as icons from 'react-icons/bi';

const Login: React.FC = () => {

    console.log('teste');
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const handleLoginGoogle = () => {
        fetch('http://localhost:3001/api/googleauth', {
            method: 'GET',
            // Outras opções de configuração da requisição, como headers, body, etc.
        })
            .then(response => response.json())
            .then(data => {
                // Lógica para lidar com a resposta do servidor
                window.open(data.uri, '_blank');
            })
            .catch(error => {
                // Lógica para lidar com erros na requisição
                console.error(error);
            });
    };

    return (
        <div className="container">

            <div className="d-flex align-items-center justify-content-center m-5">
                <div className="d-flex align-items-center justify-content-center m-5 shadow">
                    < form className="m-5 bg-ligth ">
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" htmlFor="form2Example1">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>

                        <div className="row mb-4">

                            <button type="button" className="btn btn-outline-success btn-block mb-4">Sign in</button>
                            <button type="button" className="btn btn-outline-primary btn-block me-3">
                                <Link to="/register" className='text-decoration-none text-reset'>Register</Link>
                            </button>

                        </div>
                        <div className="row mb-4">

                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked={rememberMe}
                                        onChange={handleRememberMeChange} />
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <div className="text-center">

                            <button type="button" className="btn btn-link btn-floating mx-1" onClick={handleLoginGoogle}>
                                <icons.BiLogoGoogle />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <icons.BiLogoFacebook />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <icons.BiLogoLinkedin />
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div >
    );
}

export default Login;
