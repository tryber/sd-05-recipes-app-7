import React from 'react';
import ComponenteHeader from '../components/Header/ComponenteHeader';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div>
      <ComponenteHeader />
      <h2 data-testid="page-title">Perfil</h2>
      <Footer />
    </div>
  );
}

export default Profile;
