import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_USER, CHANGE_PATH } from '../store/actionTypes';
import Cookies from 'js-cookie';

export default function Navbar() {

  const isLoggedin = useSelector(state => state.currentUser.isAuthenticated);
  const dispatch = useDispatch();

  const loggingOutUser = (e) => {
    Cookies.remove('user');
    console.log('cookie removed')
    dispatch({
      type: SET_CURRENT_USER,
      user: {}
    })
  }

  return (
    <nav className="navbar sticky-top navbar-light bg-light pad2">
      <Link to="/home" className="navbar-brand" onClick={e => dispatch({ type: CHANGE_PATH, history: { path: '/', class: 'all' } })} 
      style={{
        "fontWeight":"700"
      }}
      >
        College<span style={{"color":"orangered"}}> Fox </span>
      </Link>

      {!isLoggedin ? (
        <ul className="navbar-nav flex-row">
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/signup" id="signUp-btn">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin" id="logIn-btn">
              Login
            </Link>
          </li>
        </ul>
      ) : (
          <ul className="navbar-nav flex-row">
            <li className="nav-item mr-1">
              <Link className="nav-link" to="/signin" onClick={e => loggingOutUser(e)} id="logOut-btn">
                Logout
              </Link>
            </li>
          </ul>
        )}

    </nav>
  )
}