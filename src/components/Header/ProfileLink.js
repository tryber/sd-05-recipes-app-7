import React from 'react';
import { Link } from 'react-router-dom';

import profileIcon from '../../images/profileIcon.svg';

function ProfileLink() {
  return (
    <section>
      <Link to="/perfil">
        <input type="image" src={profileIcon} alt="profile" data-testid="profile-top-btn" />
      </Link>
    </section>
  );
}

export default ProfileLink;
