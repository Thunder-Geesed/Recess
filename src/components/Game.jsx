import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Game = (props) => {
  const { gameInfo } = props;
  const [joined, setJoined] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const username = Cookies.get('username');
  const handleClick = async (gameId) => {
    await fetch(`/home/gameplayers/${gameId}`)
      .then((response) => response.json())
      .then((data) => {
        const arr = [];
        for (const item in data) {
          arr.push(<div key={data[item]}>{data[item]}</div>);
        }
        setPlayerList(arr);
      });
  };

  const handleJoin = async (gameId) => {
    let alreadyParticipating = false;
    for (let item in playerList) {
      if (playerList[item].key === username) {
        alreadyParticipating = true;
      }
    }
    if (!alreadyParticipating) {
      await fetch(`/home/joingame/${gameId}`, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((data) => {
          setJoined(data);
          const joinButton = document.getElementById(`${gameId}-join`);
          joinButton.setAttribute('disabled', 'true');
          const leaveButton = document.getElementById(`${gameId}-leave`);
          leaveButton.setAttribute('disabled', 'false');
        })
        .catch((error) => {
          console.log(error);
        });
      const arr = playerList;
      arr.push(username);
      setPlayerList(arr);
    }
  };

  const handleLeave = async (gameId) => {
    await fetch('home/leavegame', {
      method: 'DELETE',
      body: JSON.stringify({ gameId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setJoined(!data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <details
      key={gameInfo.game_id}
      onClick={() => {
        handleClick(gameInfo.game_id);
      }}
      className="inline items-center mx-auto w-11/12 bg-rose-700 border-0 h-12 rounded-md shadow-md">
      <summary className="flex justify-evenly items-center border-0 bg-rose-700  h-12 rounded-md">
        <p>{gameInfo.name}</p> <p>{gameInfo.location}</p> <p>{gameInfo.datetime}</p>
        <p>
          {gameInfo.currentplayers}/{gameInfo.maxplayers}
        </p>
      </summary>
      <div className="flex justify-evenly items-center pt-5 pb-6 mx-auto w-10/12 bg-rose-700 border-l border-b border-r h-20  rounded-b-md">
        <div className="w-7/12 h-20 overflow-auto">
          <ul>{playerList}</ul>
        </div>
        <div className=" flex flex-col justify-evenly items-center w-4/12 h-20">
          <button
            onClick={() => handleJoin(gameInfo.game_id)}
            type="button"
            id={`${gameInfo.game_id}-join`}
            className="bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white disabled:bg-sky-900 disabled:text-opacity-60">
            JOIN
          </button>
          <button
            onClick={() => handleLeave(gameInfo.game_id)}
            id={`${gameInfo.game_id}-leave`}
            type="button"
            className="max-w-full bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white disabled:bg-sky-900 disabled:text-opacity-60">
            LEAVE
          </button>
        </div>
      </div>
    </details>
  );
};

export default Game;
