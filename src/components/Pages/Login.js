import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para processar o login aqui
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Lógica para processar o cadastro aqui
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </form>
      <p>ou</p>
      <button className="sign-up-button" onClick={handleSignUp}>
        Criar Conta
      </button>
    </div>
  );
}

export default Login;
