import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const GoogleCallBack = () => {

    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    
    if(code){

        useEffect(() => {

            fetch('http://localhost:5577/api/googleauth', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
    
        })
            .then(response => {
    
                if (!response.ok) {
                    throw new Error('Erro ao fazer a requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                Cookies.set('token', data.token);
                navigate('/dashboard');
            }).catch(error => {
                // Lógica para lidar com erros na requisição
                console.error(error);
            });
    
        }, [navigate]);

    }else{
        return ('Erro na autenticação');
    }

}


export default GoogleCallBack;
