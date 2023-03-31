import React, { Component, useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import CreateUser from './CreateUser.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import CreateGame from './CreateGame.jsx';
import Settings from './Settings.jsx';

const App = (props) => {
  const [selectedSport, changeSport] = useState('baseball');
  const [username, setUsername] = useState(null);
  const [games, setGames] = useState({
    baseball: [],
    football: [],
    basketball: [],
    soccer: [],
  });

  const location = useLocation();

  function getGamedata() {
    fetch('/home/games', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        setGames(response);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getGamedata();
  }, []);

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Login changeUsername={setUsername} />}></Route>
        <Route
          path='createuser'
          element={<CreateUser changeUsername={setUsername} />}
        ></Route>
      </Route>
      <Route path='/home' element={<Layout />}>
        <Route
          index
          element={
            <Home
              username={username}
              selectedSport={selectedSport}
              changeSport={changeSport}
              games={games}
              setGames={setGames}
            />
          }
        ></Route>
        <Route
          path='creategame'
          element={<CreateGame selectedSport={selectedSport} />}
        ></Route>
        <Route path='settings' element={<Settings />}></Route>
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <div>
      <Outlet />
      <nav id='bottomNav'>
        <Link to='./creategame' className='links'>
          Create Game
        </Link>
        <Link to='./' className='links'>
          Home{' '}
        </Link>
        <Link to='./settings' className='links'>
          Settings
        </Link>
      </nav>
    </div>
  );
}

export default App;
