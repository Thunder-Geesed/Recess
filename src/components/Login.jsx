import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const { changeUsername } = props;

  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault()
    const user = {};
    user.username = username
    user.password = password
    await fetch('./login', {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log('Got results', user);
        changeUsername(username);
         return navigate('./home');
      })
      .catch( (err) => {
        console.log(err);
      });

    
  };

  return (
    <div>
      <form>
        <label className="block">
          <span className="flex text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          />
        </label>
        <button
          onClick={handleClick}
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        >
          Login
        </button>
        <Link
          to={'/createuser'}
          className="block top-[7.5rem] left-12 w-40 text-xs text-center underline hover:text-red-600"
        >
          <p className="hover:text-red-600">
            {' '}
            Don't have an account? Register now!{' '}
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
