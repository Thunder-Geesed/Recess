import React, { useState, useEffect } from 'react';
import Game from './Game.jsx';

const DisplayGames = (props) => {
  const { selectedSport, games } = props;
  const [gameElements, setGameElements] = useState([]);

  useEffect(() => {
    if (games[selectedSport]) {
      const arr = [];
      games[selectedSport].forEach((el) => {
        arr.push(<Game key={el.name} gameInfo={el}></Game>);
      });
      setGameElements(arr);
    }
  }, [selectedSport]);

  return <div id='gamesContainer'>{gameElements}</div>;
};

export default DisplayGames;
