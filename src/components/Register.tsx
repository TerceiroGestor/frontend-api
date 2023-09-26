import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');

    const handleRegister = async () => {

        fetch('http://localhost:3000/api/register/create', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then(response => { return response.text() })
            .then((text) => setResponse(text))
            .catch(error => {
                setResponse(error.toString())
                console.log(error.toString())
            })
    };

    return (
        <div className="container" style={{ maxWidth: 700 }}>

            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                    <h2 className="">Registrar</h2>
                </div>
            </div>

            < form className="form-group mt-5">
                <div className="row">
                    <div className="form-group mb-2">
                        <input type="email" id="form2Example1" value={name} onChange={(event) => setName(event.target.value)} className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-outline mb-2">
                            <input type="email" id="form2Example2" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Email</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-outline mb-2">
                            <input type="password" id="form2Example3" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
                            <label className="form-label" htmlFor="form2Example3">Password</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
                </div>
            </form >

            <div className="row mt-5">
                <div>{response} </div>
            </div>
        </div>
    );
}

export default Register;
