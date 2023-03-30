import React, { useState, useEffect } from 'react';

const DisplayGames = (props) => {
  const { selectedSport, games, username } = props;
  const [gameElements, setGameElements] = useState([]);
  const [selectedGame, setSelectedGame] = useState(1);
  const [joined, setJoined] = useState(false);
  const [playerList, setPlayerList] = useState([]);

  const handleClick = async (gameId) => {
    setSelectedGame(gameId);

    console.log(gameId);
    // await fetch(`home/gameplayers/${gameId}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const arr = [];
    //     if (data.includes(username)) {
    //       console.log('included');
    //       setJoined(true);
    //     } else {
    //       console.log('not included');
    //       setJoined(false);
    //     }
    //     data.forEach((el, i) => {
    //       arr.push(<li key={el}>{el}</li>);
    //     });
    //     setPlayerList(arr);
    //   })
    //   .catch((error) => {
    //     console.log('Failed to retrieve players', error);
    //   });
  };

  const handleJoin = async (gameId) => {
    let alreadyParticipating = false;
    await fetch(`/home/gameplayers/${gameId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Here is the gameplayer data ', data);
        if (data.includes(username)) {
          alreadyParticipating = true;
          //generate a 'already signed up' notificaiton
        }
      });

    if (!alreadyParticipating) {
      await fetch(`/home/joingame/${gameId}`, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('here is the join data from the fetch request: ', data);
          setJoined(data);
          const joinButton = document.getElementById(`${gameId}-join`);
          joinButton.setAttribute('disabled', 'true');
          const leaveButton = document.getElementById(`${gameId}-leave`);
          leaveButton.setAttribute('disabled', 'false');
        })
        .catch((error) => {
          console.log(
            'there was an error and you cant see the other console log'
          );
          console.log(error);
        });
    }

    // await fetch(`/home/joingame/${gameId}`, {
    //   method: 'POST',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('here is the join data from the fetch request: ', data);
    //     setJoined(data);
    //     const joinButton = document.getElementById(`${gameId}-join`);
    //     joinButton.setAttribute('disabled', 'true');
    //     const leaveButton = document.getElementById(`${gameId}-leave`);
    //     leaveButton.setAttribute('disabled', 'false');
    //   })
    //   .catch((error) => {
    //     console.log(
    //       'there was an error and you cant see the other console log'
    //     );
    //     console.log(error);
    //   });
  };

  const handleLeave = async (gameId) => {
    console.log(gameId);
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

  //GET PLAYERS IN EACH GAME
  useEffect(() => {
    //GET PLAYERS IN EACH GAME
    const change = async (gameId) => {
      await fetch(`/home/gameplayers/${gameId}`)
        .then((response) => response.json())
        .then((data) => {
          const arr = [];
          if (data.includes(username)) {
            console.log('included');
            setJoined(true);
          } else {
            console.log('not included');
            setJoined(false);
          }
          data.forEach((el, i) => {
            arr.push(<li key={el}>{el}</li>);
          });
          setPlayerList(arr);
        })
        .catch((error) => {
          console.log('Failed to retrieve players', error);
        });
    };
    change(selectedGame);
  }, [selectedGame]);

  // useEffect(() => {
  //   // console.log(playerList);
  //   // console.log('can u see me ');
  // }, [playerList]);

  useEffect(() => {
    console.log('games type selected');
    if (games[selectedSport]) {
      const arr = [];
      games[selectedSport].forEach((el) => {
        //currentplayers
        console.log(el);
        arr.push(
          //OWN COMPONENT WITH ITS OWN STATE / PLAYERS FOR EACH GAME & GET REQUEST FOR GAME PLAYERS
          <details
            key={el.game_id}
            onClick={() => {
              console.log('specific game selected');
              handleClick(el.game_id);
            }}
          >
            <summary>
              <p id='gameName'>{el.name}</p> <p>{el.location}</p>
              <p>{el.datetime}</p>
              <p>
                {el.currentplayers}/{el.maxplayers}
              </p>
            </summary>
            <div id='gameDetails'>
              <div>
                {/* PLAYER LIST NEEDS  TO BE SPEARATED BY EACH COMPOENENT INTO MINI STATE // RIGHT NOW IS BEING SHARED */}
                <ul>{playerList}</ul>
              </div>
              <div id='gameButtons'>
                <button
                  onClick={() => handleJoin(el.game_id)}
                  type='button'
                  id={`${el.game_id}-join`}
                >
                  JOIN
                </button>
                <button
                  onClick={() => handleLeave(el.game_id)}
                  id={`${el.game_id}-leave`}
                  type='button'
                >
                  LEAVE
                </button>
              </div>
            </div>
          </details>
        );
      });
      setGameElements(arr);
    }
  }, [selectedSport]);

  return <div id='gamesContainer'>{gameElements}</div>;
};

export default DisplayGames;

// useEffect(() => {
//   //GET PLAYERS IN EACH GAME
//   const change = async (gameId) => {
//     await fetch(`/home/gameplayers/${gameId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const arr = [];
//         if (data.includes(username)) {
//           console.log('included');
//           setJoined(true);
//         } else {
//           console.log('not included');
//           setJoined(false);
//         }
//         data.forEach((el, i) => {
//           arr.push(<li key={el}>{el}</li>);
//         });
//         setPlayerList(arr);
//       })
//       .catch((error) => {
//         console.log('Failed to retrieve players', error);
//       });
//   };
//   change(selectedGame);
// }, [selectedGame]);
