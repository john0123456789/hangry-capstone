import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { HiOutlineLogout } from 'react-icons/hi';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    dispatch(logout());
    history.push('/login')
  };

  return <HiOutlineLogout size="30px" className="logout" onClick={onLogout}/>;
};

export default LogoutButton;
