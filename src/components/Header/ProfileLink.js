import React from 'react';
import { Link } from 'react-router-dom';

import profileIcon from '../../images/profileIcon.svg';

function ProfileLink() {
  return (
    <Link to="/perfil">
      <input type="image" className="icon" src={profileIcon} alt="profile" data-testid="profile-top-btn" />
    </Link>
  );
}

export default ProfileLink;
