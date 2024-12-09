'use client';

import { useState } from "react";
import { Counter } from "./Counter";

const SearchBar = () => {

  const [isSearchFocused, setIsSearchFocused] = useState(false);


  return (
    <div className="flex flex-row self-center rounded-full border p-2 mt-8 w-3/4">
      <button onClick={() => setIsSearchFocused(true)}>
        <p className="font-bold">Where</p>
        {
          isSearchFocused ? (
            <input type="text" placeholder="Search destination" className="text-slate-800 bg-transparent border-none outline-none" />
          ) : (
            <p className="text-slate-600">Search destination</p>
          )}
      </button>

      {/* dropdown and tabIndex cames from daisyui library */}
      <div className="dropdown dropdown-end px-4 border-r">
        <label tabIndex={1}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Select Ranges</p>
        </label>
        <div tabIndex={1} className="dropdown-content">
          <p>Range Selector</p>
        </div>
      </div>

      <div className="dropdown dropdown-end px-4">
        <label tabIndex={2}>
          <p className="font-bold">Who</p>
          <p className="text-slate-600">Add Guests</p>
        </label>
        <div tabIndex={2}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <Counter label="Adults" />
          </div>
      </div>
    </div>

  )
};

export default SearchBar;