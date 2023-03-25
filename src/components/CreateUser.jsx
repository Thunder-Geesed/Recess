import React from "react"
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/')
  }



  return (
    <div className="container flex justify-center space-y-4">
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            defaultValue="tbone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            defaultValue="tbone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            defaultValue="tbone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Confirm Password
          </span>
          <input
            type="password"
            defaultValue="tbone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          />
        </label>
        <fieldset>
          <input
            id="draft"
            className="peer/draft"
            type="radio"
            name="status"
          />
          <label htmlFor="draft" className="peer-checked/draft:text-sky-500"> Enter Location </label>

          <input
            id="published"
            className="peer/published"
            type="radio"
            name="status"
          />
          <label
            htmlFor="published"
            className="peer-checked/published:text-sky-500"
          > My Location</label>

          <div className="hidden peer-checked/draft:block">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Location...
              </span>
              <input
                type="text"
                defaultValue="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>
          <div className="hidden peer-checked/published:block">
            Will use your current location.
          </div>
        </fieldset>
        <button onClick={handleClick} className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
