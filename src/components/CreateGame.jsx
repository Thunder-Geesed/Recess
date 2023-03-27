import React from "react"

const CreateGame = (props) => {
  //{"name":"matts test game2","type":"basketball","datetime":"2023-04-08","location":"queens NY","maxplayers":"10"}

  const handleClick = async () => {
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
 
     await fetch('/creategame', {
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
      })
      .catch((err) => {
        console.log(err);
      });

      //join the game we just created
      const gid = 1;
      await fetch('/joingame', {
        method: 'POST',
        body: JSON.stringify({
          gameId: gid
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((user) => {
          console.log('Got results', user);
        })
        .catch((err) => {
          console.log(err);
        });

    return navigate('/home');
  };

  return (
    <div className="container h-screen">
      <form className="">
        {/*
            GAME NAME
      
        */}
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input
            type="name"
            defaultValue="My basketball game"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label
          htmlFor="type"
          className="block text-sm font-medium text-slate-700"
        >
          Type
        </label>
        <select
          id="type"
          name="type"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        >
          <option value="soccer">Soccer</option>
          <option value="basketball">Basketball</option>
          <option value="football">Football</option>
          <option value="baseball">Baseball</option>
        </select>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Datetime
          </span>
          <input
            type="text"
            defaultValue={new Date().toLocaleDateString('en-us', {
              day: 'numeric',
              year: 'numeric',
              month: 'numeric',
            })}
            id="datetime"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        {/*EXPERIMENTAL*/}
        {/*}
        <div className="flex items-center justify-center">
          <div
            className="relative mb-3 xl:w-96"
            data-te-datepicker-init
            data-te-input-wrapper-init
          >
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Select a date"
              data-te-datepicker-toggle-ref
              data-te-datepicker-toggle-button-ref
            />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Select a date
            </label>
          </div>
        </div>
          */}

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Location
          </span>
          <input
            type="text"
            defaultValue="tbone"
            id="location"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Maxplayers
          </span>
          <input
            type="text"
            defaultValue="10"
            id="maxplayers"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <button
          onClick={() => {
            //console.log('test');
            handleClick();
          }}
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        >
          Create Game
        </button>
      </form>
    </div>
  );
};

export default CreateGame;
