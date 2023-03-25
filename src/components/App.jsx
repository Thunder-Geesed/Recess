import React, { Component, useState } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet, Link } from 'react-router-dom';
import CreateUser from './CreateUser.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx'

const App = (props) => {
  return (
      <Routes>
        <Route path='/'>
          <Route index element={<Login />}></Route>
          <Route path='createuser' element={<CreateUser/>}></Route>
          <Route path='home' element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}



  export default App;