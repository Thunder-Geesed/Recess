import React, { useState, useEffect } from 'react';
import Game from './Game.jsx';

const DisplayGames = (props) => {
  const { selectedSport, games } = props;
  const [gameElements, setGameElements] = useState([]);

  useEffect(() => {
    if (games[selectedSport]) {
      const arr = [];
      games[selectedSport].forEach((el) => {
        arr.push(<Game key={el.name} gameInfo={el} username={username}></Game>);
      });
      setGameElements(arr);
    }
  }, [selectedSport]);

  return (
    <div className='fixed text-center top-32 bg-slate-400 pt-2 h-5/6 w-full overflow-auto space-y-10'>
      {gameElements}
    </div>
  );
};

export default DisplayGames;
