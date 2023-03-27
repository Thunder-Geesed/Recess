import React, {useState, useEffect} from "react"

const DisplayGames = (props) => {
  const { selectedSport, games, username } = props;
  const [gameElements, setGameElements] = useState([]);
  const [joined, setJoined] = useState(false)
  const [playerList, setPlayerList] = useState([]);

  const handleClick = (gameId) => {
    fetch(`./gameplayers/${gameId}`) 
    .then((response) => response.json())
    .then((data) => {
      const arr = [];
      setJoined(data.includes(username))
      if (data) {
      data.forEach(el => {
        arr.push(
        <li>
          {el}
        </li>
        )
      })
    }
      return setPlayerList(arr);
    })
    .catch((error) => {
      console.log('Failed to retrieve players', error)
    })
  }

  const handleJoin = (gameId) => {
    fetch('./joingame', {
      method: 'POST',
      body: JSON.stringify({ gameId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setJoined(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

    const handleLeave = (gameId) => {
      fetch('./leavegame', {
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


  useEffect(() => {
    if (games[selectedSport]) {
    const arr = [];
    games[selectedSport].forEach(el => {
      //currentplayers
      arr.push(
        <details
          onClick={() => handleClick(el.game_id)}
          className="inline items-center mx-auto w-11/12 bg-rose-700 border-0 h-12 rounded-md shadow-md"
        >
          <summary className="flex justify-evenly items-center border-0 bg-rose-700  h-12 rounded-md">
            <p>{el.name}</p> <p>{el.location}</p> <p>{el.datetime}</p>{' '}
            <p>
              {e.currentplayers}/{el.maxplayers}
            </p>
          </summary>
          <div className="flex justify-evenly items-center pt-5 pb-6 mx-auto w-10/12 bg-rose-700 border-l border-b border-r h-20  rounded-b-md">
            <div className="w-7/12 h-20 overflow-auto">
              <ul>{playerList}</ul>
            </div>
            <div className=" flex flex-col justify-evenly items-center w-4/12 h-20">
              <button
                onClick={() => handleJoin(el.game_id)}
                type="button"
                className="bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white disabled:bg-sky-900 disabled:text-opacity-60"
                disabled={joined}
              >
                JOIN
              </button>
              <button
                onClick={() => handleLeave(el.game_id)}
                type="button"
                className="max-w-full bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white disabled:bg-sky-900 disabled:text-opacity-60"
                disabled={!joined}
              >
                LEAVE
              </button>
            </div>
          </div>
        </details>
      );
    })
    setGameElements(arr)
  }
  }, [selectedSport])


  return (
    <div className="fixed text-center top-48 bg-slate-400 pt-2 h-4/6 w-full overflow-auto space-y-10">
      {gameElements}
      <details
        onClick={() => handleClick()}
        className="inline items-center mx-auto w-11/12 bg-rose-700 border-0 h-12 rounded-md"
      >
        <summary className="flex justify-evenly items-center border-0 bg-rose-700  h-12 rounded-md ">
          <p>Game Name</p> <p>Location</p> <p>Time</p> <p>10/12</p>
        </summary>
        <div className="flex justify-evenly items-center pt-5 pb-6 mx-auto w-10/12 bg-rose-700 border-l border-b border-r h-20  rounded-b-md">
          <div className="w-7/12 bg-slate-400 h-20 overflow-auto">
            <ul></ul>
          </div>
          <div className=" flex flex-col justify-evenly items-center w-4/12 h-20">
            <button
              type="button"
              className="bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white disabled:bg-sky-900 disabled:text-opacity-60"
              disabled
            >
              JOIN
            </button>
            <button
              type="button"
              className="bg-sky-500 hover:bg-sky-700 px-2 py-2 text-sm leading-3 rounded-md font-semibold text-white"
            >
              LEAVE
            </button>
          </div>
        </div>
      </details>
    </div>
  );
};

export default DisplayGames;
