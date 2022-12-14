import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';

export default function Navbar() {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/logout', { credentials: 'include' });
    if (response.ok) {
      dispatch(logout());
      navigate('/');
    }
  };
  return (
    <div>
      {!auth
        ? (
          <nav className="navbar zal fixed-top">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">SUPA SI GAME</NavLink>
              <NavLink to="/auth" className="nav-link middle">Auth</NavLink>
              <NavLink to="/registration" className="nav-link right">Registration</NavLink>
            </div>
          </nav>
        ) : (
          <nav className="navbar zal fixed-top">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">SUPA SI GAME</NavLink>
              <h2 className="navbar-brand">
                Привет,
                {' '}
                {auth.name}
                !
              </h2>
              <NavLink to="/home" className="nav-link left">PLAY!</NavLink>
              <NavLink to="/home" className="nav-link left">LC</NavLink>
              <button type="submit" onClick={logoutHandler} className="btn btn-danger">Log out</button>
            </div>
          </nav>
        )}
    </div>
  );
}
