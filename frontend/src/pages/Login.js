import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg';
import api from '../services/api'

export default function Login({history}) {
    const [userName, setUserName] = useState('');//variável e o método que atualiza essa variável

    async function handleSubmit(e)
    {
        e.preventDefault();//previne o comportamento comum do submit de encaminhar para outra rota
        
        const response = await api.post('/devs',{
            userName,
        });
        
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input                    
                    placeholder="Digite seu nick Github"
                    value={userName}
                    //ao mudar o valor do campo do input, pega o evento(e) e seta a variável userName com o novo valor
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}