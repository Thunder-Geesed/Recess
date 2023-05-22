import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import DisplayGames from './DisplayGames.jsx';

const Home = (props) => {
  const { selectedSport, changeSport, games, setGames } = props;

  const handleClick = (sport) => {
    changeSport(sport);
  };

  async function getData() {
    const getGames = await fetch('/home/games')
      .then((response) => response.json())
      .then((data) => {
        setGames({
          baseball: data.baseball,
          football: data.football,
          basketball: data.basketball,
          soccer: data.soccer,
        });
      })
      .catch((error) => {
        console.log(error, 'err');
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id='homeContainer'>
      <nav id='nav'>
        <img id='logo' src={require('../../assets/logo_large.png')} />
        <div id='iconContainer'>
          <div id='baseballIcon' onClick={() => handleClick('baseball')}>
            <img src='https://seeklogo.com/images/B/baseball-logo-300E6253DC-seeklogo.com.png' />
          </div>

          <div id='footballIcon' onClick={() => handleClick('football')}>
            <img src={require('../../assets/football.png')} />
          </div>

          <div id='basketballIcon' onClick={() => handleClick('basketball')}>
            <img src={require('../../assets/basketball.png')} />
          </div>

          <div id='soccerIcon' onClick={() => handleClick('soccer')}>
            <img src={require('../../assets/soccer.png')} />
          </div>
        </div>
      </nav>
      <DisplayGames selectedSport={selectedSport} games={games} />
    </div>
  );
};

export default Home;
