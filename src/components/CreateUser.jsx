import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  const navigate = useNavigate();

  const { changeUsername } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  function showPosition(position) {
    console.log(position);
    document.getElementById('location').value =
      position.coords.latitude + ',' + position.coords.longitude;
    return (
      'Latitude: ' +
      position.coords.latitude +
      '<br>Longitude: ' +
      position.coords.longitude
    );
  }

  const handleClick = async (user) => {
    if (!user.location) user.location = 'temp fixme';
    // POST request using fetch()
    awaitfetch('/createuser', {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({
        username: { username },
        password: { password },
        email: { email },
        location: { location },
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
        return navigate('/home');
      })
      .catch((error) => {
        console.log('error');
      });
  };

  return (
    <div className="container h-screen">
      <form className="">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            defaultValue="youraddress@domain.com"
            id="email"
            value={email}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            defaultValue={
              (Math.floor(Math.random() * 4) > 2 ? 'soccer' : 'basketball') +
              'fan' +
              Math.floor(Math.random() * 1000)
            }
            id="username"
            value={username}
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
            type="password"
            defaultValue="password123"
            id="password"
            value={password}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Confirm Password
          </span>
          <input
            type="password"
            defaultValue="password123"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          />
        </label>
        <fieldset>
          <input id="draft" className="peer/draft" type="radio" name="status" />
          <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
            {' '}
            Enter Location{' '}
          </label>

          <input
            id="published"
            className="peer/published"
            type="radio"
            name="status"
            onClick={() => {
              let loc = navigator.geolocation.getCurrentPosition(showPosition);
              console.log(loc);
            }}
          />
          <label
            htmlFor="published"
            className="peer-checked/published:text-sky-500"
          >
            {' '}
            My Location
          </label>

          <div className="hidden peer-checked/draft:block">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Location...
              </span>
              <input
                type="text"
                defaultValue=""
                id="location"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>
          <div className="hidden peer-checked/published:block">
            Will use your current location.
          </div>
        </fieldset>
        <button
          onClick={() => {
            let user = {};
            let loc = document.getElementById('location').value;
            if (loc) user.location = loc;
            else
              user.location =
                navigator.geolocation.getCurrentPosition(showPosition);
            handleClick();
          }}
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
