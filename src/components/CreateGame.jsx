import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGame = (props) => {
  const navigate = useNavigate();

  const [gameId, setGameId] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const game = {};
    try {
      game.name = document.getElementById('name').value;
      game.type = document.getElementById('type').value;
      game.datetime = document.getElementById('datetime').value;
      game.location = document.getElementById('location').value;
      game.maxplayers = document.getElementById('maxplayers').value;
    } catch (err) {
      console.log(err);
    }
    console.log('Submitting ', game);

    await fetch('/home/creategame', {
      method: 'POST',
      body: JSON.stringify({
        name: game.name,
        type: game.type,
        datetime: game.datetime,
        location: game.location,
        maxplayers: game.maxplayers,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log('Got results', user);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id='createGame'>
      <div id='createGameLogos'>
        <img id='logo' src={require('../../assets/logo_large.png')} />
      </div>
      <form>
        <label className='block'>
          <span>Name</span>
          <input type='name' placeholder='My basketball game' />
        </label>

        <label htmlFor='type'>
          Type
          <select id='type' name='type'>
            <option value='soccer'>Soccer</option>
            <option value='basketball'>Basketball</option>
            <option value='football'>Football</option>
            <option value='baseball'>Baseball</option>
          </select>
        </label>
        <label className='block'>
          <span>Date and Time</span>
          <input
            type='text'
            defaultValue={new Date().toLocaleDateString('en-us', {
              day: 'numeric',
              year: 'numeric',
              month: 'numeric',
            })}
            id='datetime'
          />
        </label>

        <label className='block'>
          <span>Location</span>
          <input type='text' placeholder='Central Park' id='location' />
        </label>

        <label className='block'>
          <span>Maximum Players</span>
          <input type='text' placeholder='10' id='maxplayers' />
        </label>

        <button onClick={handleClick}>Create Game</button>
      </form>
    </div>
  );
};

export default CreateGame;
