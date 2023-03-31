import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Game = (props) => {
  const { gameInfo } = props;
  const [joined, setJoined] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const username = Cookies.get('username');

  const getPlayers = async (gameId) => {
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
        })
        .catch((error) => {
          console.log(error);
        });

      getPlayers(gameId);
    }
  };

  const handleLeave = async (gameId) => {
    console.log('trying to leave');

    let isPresent = false;
    for (let item in playerList) {
      if (playerList[item].key === username) {
        isPresent = true;
      }
    }

    if (isPresent) {
      await fetch(`/home/leavegame/${gameId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          setJoined(!data);
          getPlayers(gameId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <details
      key={gameInfo.game_id}
      onClick={() => {
        getPlayers(gameInfo.game_id);
      }}
    >
      <summary>
        <p id='gameName'>{gameInfo.name}</p> <p>{gameInfo.location}</p>{' '}
        <p>{gameInfo.datetime}</p>
        <p>
          {gameInfo.currentplayers}/{gameInfo.maxplayers}
        </p>
      </summary>
      <div>
        <div id='gameDetails'>
          <ul>{playerList}</ul>
          <div id='gameButtons'>
            <button
              onClick={() => handleJoin(gameInfo.game_id)}
              type='button'
              id={`${gameInfo.game_id}-join`}
            >
              JOIN
            </button>
            <button
              onClick={() => handleLeave(gameInfo.game_id)}
              id={`${gameInfo.game_id}-leave`}
              type='button'
            >
              LEAVE
            </button>
          </div>
        </div>
      </div>
    </details>
  );
};

export default Game;
