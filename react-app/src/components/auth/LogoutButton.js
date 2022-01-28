import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router';

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    history.push('/login')
    await dispatch(logout());
  };


  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
