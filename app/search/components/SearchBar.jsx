'use client';

import { useState } from "react";

const SearchBar = () => {

  const [isSearchFocused, setIsSearchFocused] = useState(false);


  return (
    <div className="flex flex-row self-center rounded-full border p-2 mt-8 w-3/4">
      <button onClick={() => setIsSearchFocused(true)}>
      <p className="font-bold">Where</p>
        {
          isSearchFocused ? (
            <input type="text" placeholder="Search destination" className="text-slate-800 bg-transparent border-none outline-none"/>
          ) : (
            <p className= "text-slate-600">Search destination</p>
          )}
      </button>

      <div>
        <label>
          <p className="font-bold">Dates</p>
          <p className= "text-slate-600">Select Ranged</p>
        </label>
      </div>

      <div>
        <label>
          <p className="font-bold">Who</p>
          <p className= "text-slate-600">Add Guests</p>
        </label>
      </div>
    </div>
  )
};

export default SearchBar;