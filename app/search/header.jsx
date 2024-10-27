'use client'

import { useState } from "react";

const Header = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <header className="container flex justify-between h-10 border-b bg-white z-50 fixed w-full">
      <div className="text-red-500">airbnb</div>
      <button
        onClick={toggleExpanded}
        className="search-container flex gap-3 rounded-lg">
        <div className="input border-r">
          <p>Anywhere</p>
        </div>
        <div className="input border-r">
          <p>Any Date</p>
        </div>
        <div className="input border-r">
          <p>Add Guests</p>
        </div>

        <div className="search-btn">
          Search
        </div>

      </button>
      <div>User</div>

    </header>
  )

}

export default Header;