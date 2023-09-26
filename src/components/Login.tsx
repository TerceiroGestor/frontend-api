import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as icons from 'react-icons/bi';
import Cookies from 'js-cookie';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [response, setResponse] = useState('');

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const handleLoginGoogle = () => {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                if(data.token){
                    Cookies.set('user', JSON.stringify(data), { expires: 7 });
                    Cookies.set('token', data.token, { expires: 7 });
                }
                setResponse(JSON.stringify(data));
            })

    };

    return (
        <div className="container" style={{ maxWidth: 700 }}>
            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                    <h2 className="">Login</h2>
                </div>
            </div>

            < form className="m-5 ">
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <div className="row mb-4">

                    <button type="button" className="btn btn-outline-success btn-block mb-4" onClick={handleLoginGoogle}>Sign in</button>
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

                    <button type="button" className="btn btn-link btn-floating mx-1" >
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

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <div>{response} </div>
            </div>
        </div >

    );
}

export default Login;
