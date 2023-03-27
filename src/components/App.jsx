import React, { Component, useState } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet, Link } from 'react-router-dom';
import CreateUser from './CreateUser.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx'
import CreateGame from './CreateGame.jsx'
import Settings from './Settings.jsx'

const App = (props) => {
  const [selectedSport, changeSport] = useState(null);
  const [username, setUsername] = useState(null);
  const location = useLocation();
  console.log(location)

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login changeUsername={setUsername}  />}></Route>
        <Route path="createuser" element={<CreateUser changeUsername={setUsername} />}></Route>
      </Route>
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home username={username} selectedSport={selectedSport} changeSport={changeSport} />}></Route>
        <Route path="creategame" element={<CreateGame selectedSport={selectedSport} />}></Route>
        <Route path="settings" element={<Settings />}></Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Outlet />
      <nav className="flex fixed bottom-0 w-full justify-between py-4 bg-blue-400">
        <Link to="./creategame" className="w-1/3 text-center">
          Create Game
        </Link>

        <Link to="./" className="w-1/3 text-center">
          Home
        </Link>

        <Link to="./settings" className="w-1/3 text-center">
          Settings
        </Link>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    </div>
  );
}



  export default App;