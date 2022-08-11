
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { FiPlusSquare } from 'react-icons/fi';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  const homeClick = (e) => {
    e.preventDefault();
    history.push('/')
  }

  const toLogin = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  const toSignup = (e) => {
    e.preventDefault();
    history.push('/sign-up')
  }

  const createBusiness = (e) => {
    e.preventDefault();
    history.push('/businesses/create')
  }

  if  (user) {
  return (
    <nav>
      <div>
        <div>
          <img src="https://i.imgur.com/dxJVLEP.png" alt="logo" className="hangry-logo" onClick={homeClick}/>
        </div>
        <div>
          <button type="button" className="userbuttons" onClick={createBusiness}><FiPlusSquare size="30px"/><span className="tooltiptext">Add Business</span></button>
          <button type="button" className="userbuttons"><LogoutButton/><span className="tooltiptext2">Logout</span></button>
        </div>
      </div>
    </nav>
  );
 } else {
  return (
    <nav>
      <div>
        <div>
          <img src="https://i.imgur.com/dxJVLEP.png" alt="logo" className="hangry-logo" onClick={homeClick}/>
        </div>
          <button type="button" className="navbutton" onClick={toLogin}>Log In</button>
          <button type="button" className="navbutton" onClick={toSignup}>Sign Up</button>
      </div>
  </nav>
  )
 }
}

export default NavBar;
