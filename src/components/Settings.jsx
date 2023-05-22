import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login.jsx';

// import { removeCookie } from 'react-cookie';

const Settings = (props) => {
  // const redirect = Redirect();
  const navigate = useNavigate();
  const deleteCookie = async () => {
    await fetch('/logout', {
      method: 'GET',
    }).then((response) => {
      if (response) return navigate('/');
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          deleteCookie();
        }}
        id='logout'
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
