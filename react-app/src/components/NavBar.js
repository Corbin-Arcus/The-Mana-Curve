import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { StyledNavBar } from './styles/NavBar.styled';
import logo from '../photos/logo.png'
const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <StyledNavBar>
      <ul>
        <li className='logo'>
        <NavLink to='/' exact={true} activeClassName='active'><h1>The-Mana-Curve</h1></NavLink>
        <NavLink to='/' exact={true} activeClassName='active'><img alt='logo' src={logo} /></NavLink>
        </li>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        {!user &&
        <li>
           <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        }
        {!user &&
        <li>
           <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        }
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {user && <li>
          <NavLink to='/decks/new' exact={true} activeClassName='active'>
            New Deck
          </NavLink>
        </li>}
        {user && <li>
          <NavLink to='/decks/all' exact={true} activeClassName='active'>
            Decks
          </NavLink>
        </li>}
        <li>
          {user && <LogoutButton />}
        </li>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar;
