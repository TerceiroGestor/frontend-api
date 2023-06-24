import React from 'react';
import * as icons from 'react-icons/bi';
//import * as bootstrap from 'react-bootstrap';

const Login = () => {
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
        <div class="container">

            <div class="d-flex align-items-center justify-content-center m-5">
                <div class="d-flex align-items-center justify-content-center m-5 shadow">
                    < form class="m-5 bg-ligth ">
                        <div class="form-outline mb-4">
                            <input type="email" id="form2Example1" class="form-control" />
                            <label class="form-label" for="form2Example1">Email</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>

                        <div class="row mb-4">

                            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                            <div class="col d-flex justify-content-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div class="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <div class="text-center">

                            <button type="button" class="btn btn-link btn-floating mx-1" onClick={handleLoginGoogle}>
                                <icons.BiLogoGoogle />
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <icons.BiLogoFacebook />
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
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
