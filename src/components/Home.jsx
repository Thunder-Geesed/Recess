import React, {useState, useEffect} from "react"
import { Routes, Route, Navigate, useLocation, Outlet, Link } from 'react-router-dom';
import DisplayGames from "./DisplayGames.jsx";


const Home = (props) => {
  const { selectedSport, changeSport, username } = props;
  const [games, setGames] = useState(
    {
      baseball: [],
      football: [],
      basketball: [],
      soccer: [],
    }
  );

  const handleClick = (sport) => {
    changeSport(sport)
  }

  useEffect(() => {
    
  }, [])
  


  return (
    <div>
      <nav className="flex flex-wrap justify-center fixed top-0 w-full px-3  border-b-2 border-b-stone-600 pt-16 bg-blue-400 z-10">
        <img src="./fa1504baab1d08173f0f.png" className="block mb-4" alt="" />
        <div className="flex justify-between w-full">
          <div
            onClick={() => handleClick('baseball')}
            id="baseball"
            className="w-1/4 flex justify-center px-2"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>sports-baseball</title>{' '}
                <g id="Layer_2" data-name="Layer 2">
                  {' '}
                  <g id="invisible_box" data-name="invisible box">
                    {' '}
                    <rect width="48" height="48" fill="none"></rect>{' '}
                  </g>{' '}
                  <g id="Q3_icons" data-name="Q3 icons">
                    {' '}
                    <path d="M24,5A19,19,0,1,0,43,24,19,19,0,0,0,24,5ZM9,24a14.8,14.8,0,0,1,3-9l.8,1.1.3.5-.5.2a1.6,1.6,0,0,0-.9,1.9,1.6,1.6,0,0,0,1.5,1h.5l.6-.2a15.5,15.5,0,0,1,.6,3.1H14a1.5,1.5,0,0,0,0,3h.9a15.5,15.5,0,0,1-.6,3.1l-.6-.2a1.6,1.6,0,0,0-2,.9,1.6,1.6,0,0,0,.9,1.9l.5.2-.4.6a8.6,8.6,0,0,0-.7,1A14.8,14.8,0,0,1,9,24Zm5.1,11.2.4-.6a10.2,10.2,0,0,0,1.4-2.2l1.4.5h.6a1.5,1.5,0,0,0,.5-2.9l-1.3-.5a18.6,18.6,0,0,0,.8-4.1H19a1.5,1.5,0,0,0,0-3H17.9a18.6,18.6,0,0,0-.8-4.1l1.3-.5a1.6,1.6,0,0,0,.9-1.9,1.6,1.6,0,0,0-2-.9l-1.4.5-1.1-1.9-.7-.9A14.5,14.5,0,0,1,24,9a14.9,14.9,0,0,1,9.8,3.7l-.8,1-1.2,1.9-1.4-.5a1.5,1.5,0,0,0-1,2.8l1.3.5a14.3,14.3,0,0,0-.9,4.1h-1a1.5,1.5,0,1,0,0,3h1a14.3,14.3,0,0,0,.9,4.1l-1.3.5a1.4,1.4,0,0,0-.9,1.9,1.5,1.5,0,0,0,1.4,1h.5l1.4-.5a16.4,16.4,0,0,0,1.4,2.2l.6.7A14.9,14.9,0,0,1,24,39,14.5,14.5,0,0,1,14.1,35.2Zm21.8-2.1a4.4,4.4,0,0,1-.8-1.1,2.1,2.1,0,0,1-.4-.6l.4-.2a1.5,1.5,0,1,0-1-2.8l-.6.2a28.2,28.2,0,0,1-.7-3.1h1a1.5,1.5,0,0,0,0-3h-1a28.2,28.2,0,0,1,.7-3.1l.6.2h.5a1.5,1.5,0,0,0,1.4-1,1.4,1.4,0,0,0-.9-1.9l-.4-.2.3-.5.9-1.2a14.9,14.9,0,0,1,0,18.2Z"></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </div>

          <div
            onClick={() => handleClick('football')}
            id="football"
            className="w-1/4 flex justify-center px-2"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>sports-football</title>{' '}
                <g id="Layer_2" data-name="Layer 2">
                  {' '}
                  <g id="invisible_box" data-name="invisible box">
                    {' '}
                    <rect width="48" height="48" fill="none"></rect>{' '}
                  </g>{' '}
                  <g id="Q3_icons" data-name="Q3 icons">
                    {' '}
                    <g>
                      {' '}
                      <path d="M31.8,16.2a1.4,1.4,0,0,0-2.1,0l-1.5,1.4-1.4-1.4a1.5,1.5,0,0,0-2.1,2.1l1.4,1.5L24,21.9l-1.4-1.4a1.5,1.5,0,0,0-2.1,2.1L21.9,24l-2.1,2.1-1.5-1.4a1.5,1.5,0,0,0-2.1,2.1l1.4,1.4-1.4,1.5a1.4,1.4,0,0,0,0,2.1,1.5,1.5,0,0,0,1.1.4,1.2,1.2,0,0,0,1-.4l1.5-1.4,1.4,1.4a1.3,1.3,0,0,0,1,.4,1.5,1.5,0,0,0,1.1-.4,1.4,1.4,0,0,0,0-2.1l-1.4-1.5L24,26.1l1.4,1.4a1.6,1.6,0,0,0,1.1.5,1.4,1.4,0,0,0,1-.5,1.4,1.4,0,0,0,0-2.1L26.1,24l2.1-2.1,1.5,1.4a1.2,1.2,0,0,0,1,.4,1.5,1.5,0,0,0,1.1-.4,1.5,1.5,0,0,0,0-2.1l-1.4-1.4,1.4-1.5A1.4,1.4,0,0,0,31.8,16.2Z"></path>{' '}
                      <path d="M44,5.5A1.9,1.9,0,0,0,42.5,4a42,42,0,0,0-9.2-1c-6.6,0-15.2,1.6-22,8.3C.4,22.3,3,38.1,4,42.5A1.9,1.9,0,0,0,5.5,44a42,42,0,0,0,9.2,1c6.6,0,15.2-1.6,22-8.3C47.6,25.7,45,9.9,44,5.5ZM33.8,33.8C29.1,38.6,22.6,41,14.7,41a41.7,41.7,0,0,1-7.1-.6c-.9-5.2-2-17.6,6.6-26.2C18.9,9.4,25.4,7,33.3,7a41.7,41.7,0,0,1,7.1.6C41.3,12.8,42.4,25.2,33.8,33.8Z"></path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </div>

          <div
            onClick={() => handleClick('basketball')}
            id="basketball"
            className="w-1/4 flex justify-center px-2"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>sports-basketball</title>{' '}
                <g id="Layer_2" data-name="Layer 2">
                  {' '}
                  <g id="invisible_box" data-name="invisible box">
                    {' '}
                    <rect width="48" height="48" fill="none"></rect>{' '}
                  </g>{' '}
                  <g id="Q3_icons" data-name="Q3 icons">
                    {' '}
                    <path d="M45.5,19.1A22.1,22.1,0,0,0,24,2a28.1,28.1,0,0,0-4.9.5A22,22,0,0,0,24,46a21.2,21.2,0,0,0,4.9-.6A21.9,21.9,0,0,0,45.5,19.1ZM41.3,19l-7.1,1.6A21.1,21.1,0,0,1,34,18a15.8,15.8,0,0,1,1.9-7.5A18.1,18.1,0,0,1,41.3,19ZM24,6a18.1,18.1,0,0,1,9.5,2.7A18.2,18.2,0,0,0,31,18a18.4,18.4,0,0,0,.3,3.3l-6.1,1.4L21.5,6.2Zm-5.4.9,3.7,16.5-6.1,1.3A18.9,18.9,0,0,0,8.8,14.4,17.5,17.5,0,0,1,18.6,6.9ZM7.4,17.1a15.6,15.6,0,0,1,5.9,8.3L6.3,27A17.6,17.6,0,0,1,7.4,17.1ZM7,29.9l6.9-1.6A9.7,9.7,0,0,1,14,30a15.8,15.8,0,0,1-1.9,7.5A17.4,17.4,0,0,1,7,29.9Zm7.5,9.4A18.2,18.2,0,0,0,17,30a8.6,8.6,0,0,0-.2-2.3L23,26.3l3.5,15.5L24,42A18.1,18.1,0,0,1,14.5,39.3Zm14.9,1.8L25.9,25.6,32,24.2a19.3,19.3,0,0,0,7.2,9.4A17.5,17.5,0,0,1,29.4,41.1ZM40.6,30.9A15.9,15.9,0,0,1,35,23.5L41.9,22A18.1,18.1,0,0,1,40.6,30.9Z"></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </div>

          <div
            onClick={() => handleClick('soccer')}
            id="soccer"
            className="w-1/4 flex justify-center px-2"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>sports-soccer</title>{' '}
                <g id="Layer_2" data-name="Layer 2">
                  {' '}
                  <g id="invisible_box" data-name="invisible box">
                    {' '}
                    <rect width="48" height="48" fill="none"></rect>{' '}
                  </g>{' '}
                  <g id="Q3_icons" data-name="Q3 icons">
                    {' '}
                    <g>
                      {' '}
                      <polygon points="17.5 21.6 20 29 28 29 30.5 21.6 24 17 17.5 21.6"></polygon>{' '}
                      <path d="M45.5,19.1A22.1,22.1,0,0,0,24,2a21.2,21.2,0,0,0-4.9.6A22,22,0,0,0,24,46a28.1,28.1,0,0,0,4.9-.5A22.1,22.1,0,0,0,45.5,19.1Zm-7,15.6-1.1-3.3H29.5l-2.6,7.6,2.8,2-1.7.5a18.1,18.1,0,0,1-4,.4,17.9,17.9,0,0,1-5.7-.9l2.8-2-2.6-7.6H10.6L9.5,34.7a17,17,0,0,1-3-6.7A14.8,14.8,0,0,1,6,23.9l2.8,2,6.3-4.8-2.3-7.6H9.4a18.3,18.3,0,0,1,9.2-6.6l-1.1,3.2L24,14.7l6.5-4.6L29.4,6.8a18.6,18.6,0,0,1,9.3,6.7H35.2l-2.3,7.6,6.3,4.8L42,23.8A18.9,18.9,0,0,1,38.5,34.7Z"></path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </div>
        </div>
      </nav>
      <DisplayGames selectedSport={selectedSport} games={games} username={username}/>
    </div>
  );
};

export default Home;
