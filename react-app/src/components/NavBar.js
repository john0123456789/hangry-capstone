import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import CreateBusinessModal from './CreateBusinessPage/CreateBusinessModal';
import LoginFormModal from './auth/LoginFormModal';
import SignUpFormModal from './auth/SignUpFormModal';
import { TbListSearch } from 'react-icons/tb'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  const homeClick = (e) => {
    e.preventDefault();
    history.push('/')
  }

  const browseClick = (e) => {
    e.preventDefault();
    history.push('/businesses')
  }

  if  (user) {
  return (
    <nav>
      <div>
        <div>
          <img src="https://i.imgur.com/dxJVLEP.png" alt="logo" className="hangry-logo" onClick={homeClick}/>
        </div>
        <div>
          <button type="button" className="userbuttons" onClick={browseClick}><TbListSearch size="30px"/><span className="tooltiptext3">Browse Businesses</span></button>
          <button type="button" className="userbuttons"><CreateBusinessModal/><span className="tooltiptext">Add Business</span></button>
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
          <LoginFormModal/>
          <SignUpFormModal/>
      </div>
  </nav>
  )
 }
}

export default NavBar;
