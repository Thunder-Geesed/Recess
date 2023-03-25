import React from "react"
import { Routes, Route, Navigate, useLocation, Outlet, Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <nav className="flex fixed top-0 w-full justify-between py-4 pt-16 bg-blue-400">
        <div to="./" className="w-1/3 text-center">
          Football
        </div>

        <div to="./" className="w-1/3 text-center">
          Tennis
        </div>

        <div to="./" className="w-1/3 text-center">
          Basketball
        </div>

        <div to="./" className="w-1/3 text-center">
          Soccer
        </div>
      </nav>
    </div>
  );
};

export default Home;
