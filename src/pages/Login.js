import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css';

const setLocalStorage = (email) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify({ email }));
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(true);

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const validateUser = (userEmail, userPassword) => {
    const RegEx = /^(([^<>(\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = RegEx.test(String(userEmail).toLocaleLowerCase());
    const validPassword = userPassword.length > 6;
    const condition = !(validEmail && validPassword);
    setLoginButton(condition);
  };

  useEffect(() => {
    validateUser(email, password);
  }, [email, password]);

  return (
    <section className="login-container">
      <form className="login-input">
        <h1 className="login-header">Login</h1>
        <input
          className="login-input-email" type="email"
          placeholder="Email" data-testid="email-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="login-input-password" type="password"
          placeholder="Senha" data-testid="password-input"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/comidas">
          <button
            className="btn btn-login" type="button"
            data-testid="login-submit-btn" disabled={loginButton}
            onClick={() => setLocalStorage(email)}
          >
            Entrar
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Login;
