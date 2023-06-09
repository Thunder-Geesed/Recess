import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  const navigate = useNavigate();

  const { changeUsername } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //RANDOMIZED USER/PASSWORD AS STATE
  // const [username, setUsername] = useState(
  //   (Math.floor(Math.random() * 4) > 2 ? 'soccer' : 'basketball') +
  //     'fan' +
  //     Math.floor(Math.random() * 1000)
  // );
  // const [email, setEmail] = useState(
  //   'noreply' + Math.floor(Math.random() * 10000) + '@noreply.abc'
  // );
  // const [password, setPassword] = useState('password123');
  const [location, setLocation] = useState('New York');

  function showPosition(position) {
    console.log(position);
    setLocation(position.coords.latitude + ',' + position.coords.longitude);
    return (
      'Latitude: ' +
      position.coords.latitude +
      '<br>Longitude: ' +
      position.coords.longitude
    );
  }

  //RETURN TO LOGIN
  const handleReturnToLogin = (e) => {};

  //USERNAME INTO DATABASE
  const handleClick = async (e) => {
    e.preventDefault();
    // POST request using fetch()
    await fetch('/createuser', {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        location: location,
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

    //move this back to make it actually work
    return navigate('/home');
  };

  return (
    <div className='container h-screen'>
      <img
        src='./RECESS_LOGO_APPversion_noBG_w135.png'
        alt=''
        className='mx-auto my-4'
      />
      <form>
        <label>
          <span>Email</span>
          <input
            type='email'
            placeholder='youraddress@domain.com'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Username</span>
          <input
            type='text'
            placeholder={
              (Math.floor(Math.random() * 4) > 2 ? 'soccer' : 'basketball') +
              'fan' +
              Math.floor(Math.random() * 1000)
            }
            id='username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label className='block'>
          <span>Password</span>
          <input
            type='password'
            // placeholder='password123'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label className='block'>
          <span>Confirm Password</span>
          <input type='password' />
        </label>
        <fieldset>
          <input id='draft' type='radio' name='status' />
          <label htmlFor='draft'> Enter Location </label>

          <input
            id='published'
            className='peer/published'
            type='radio'
            name='status'
            onClick={() => {
              let loc = navigator.geolocation.getCurrentPosition(showPosition);
              console.log(loc);
            }}
          />
          <label htmlFor='published'> My Location</label>

          <div>
            <label className='block'>
              <span>Location...</span>
              <input type='text' defaultValue='' id='location' />
            </label>
          </div>
          <div>Will use your current location.</div>
        </fieldset>
        <button
          onClick={handleClick}
          className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white'
        >
          Register
        </button>
        <Link
          to={'/'}
          className='block top-[7.5rem] left-12 w-40 text-xs text-center underline hover:text-red-600 mx-auto'
        >
          <p className='hover:text-blue-600'> Return to Login </p>
        </Link>
      </form>
    </div>
  );
};

export default CreateUser;
