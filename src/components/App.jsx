import React, { Component, useState } from 'react';
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
  const location = useLocation();
  console.log(location);

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
