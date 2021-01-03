import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="login_status">
        <div className="login"><LoginFormModal /></div>
        <div><SignupFormModal /></div>

      </div>
    );
  }

  return (
    <ul className="nav">
      <li className="home" >
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li><NavLink to="/search">Search</NavLink></li>
      <li>Make Flashcards</li>
      <li>How It Works</li>
      {isLoaded && sessionLinks}

    </ul>
  );
}

export default Navigation;
