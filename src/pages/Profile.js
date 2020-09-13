import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import SearchlessHeader from '../components/Header/SearchlessHeader';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <SearchlessHeader title={'Perfil'} />
      <h1 data-testid="profile-email">{user.email}</h1>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <Link to="/">
        <button data-testid="profile-logout-btn" onClick={() => localStorage.clear()}>
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
