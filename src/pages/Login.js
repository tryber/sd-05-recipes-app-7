import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setpasswordInput] = useState('');
  const [loginButtonActive, setLoginButtonActive] = useState(true);

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const validateUser = (email, password) => {
    const validationRegex = /^(([^<>(\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidated = validationRegex.test(String(email).toLocaleLowerCase());
    const passwordValidated = password.length > 6;
    const condition = !(emailValidated && passwordValidated);
    setLoginButtonActive(condition);
  };

  const setLocalStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: emailInput }));
  };

  useEffect(() => {
    validateUser(emailInput, passwordInput);
  }, [emailInput, passwordInput]);

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={(event) => setEmailInput(event.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        onChange={(event) => setpasswordInput(event.target.value)}
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={loginButtonActive}
          onClick={setLocalStorage()}
        >
          Entrar
        </button>
      </Link>
    </form>
  );
};

export default Login;
