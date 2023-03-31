import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const { changeUsername } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    await fetch('./login', {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({ username, password }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(
          'look right here! Here is the user data pulled from the fetch request ',
          user
        );
        if (!user.err) {
          // console.log(':D');
          changeUsername(username);
          return navigate('./home');
        } else {
          document.getElementById('LoginError').style.opacity = 1;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div id='loginDiv'>
        <img id='loginLogo' src={require('../../assets/logo_large.png')} />
      </div>
      <form id='loginForm'>
        <label>
          <span>Username</span>
          <input
            className='userPass'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type='text'
            id='username'
            placeholder='Username'
          />
        </label>
        <label className='block'>
          <span>Password</span>
          <input
            className='userPass'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type='password'
            id='password'
            placeholder='Password'
          />
        </label>
        <button id='loginBtn' onClick={handleClick}>
          Login
        </button>
        <Link to={'/createuser'}>
          <p>Don't have an account? Register now!</p>
        </Link>
        <p id='LoginError' style={{ opacity: 0 }}>
          Incorrect Username or Password!
        </p>
      </form>
    </div>
  );
};

export default Login;
