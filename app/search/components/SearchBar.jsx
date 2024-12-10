'use client';

import { use, useState } from "react";
import { Counter } from "./Counter";
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme style file
import { DateRangePicker } from "react-date-range";


const SearchBar = () => {

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleSelection = (ranges) => {
    //we dont wanr to elowde a state if selected date already exist 
    if (ranges.selection.startDate !== startDate) {
      setStartDate(ranges.selection.startDate);
    }
    if (ranges.selection.endDate !== endDate) {
      setEndDate(ranges.selection.endDate);
    }

  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

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
        <div
          tabIndex={1}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelection}
          rangeColors={["#FF385C"]}
          />

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


// 'use client';

// import { useState } from "react";
// import { Counter } from "./Counter";

// const SearchBar = () => {
//   const [isSearchFocused, setIsSearchFocused] = useState(false);

//   return (
//     <div className="flex flex-row self-center rounded-full border p-2 mt-8 w-3/4">
//       <button onClick={() => setIsSearchFocused(true)} className="flex flex-col">
//         <p className="font-bold">Where</p>
//         {isSearchFocused ? (
//           <input
//             type="text"
//             placeholder="Search destination"
//             className="text-slate-800 bg-transparent border-none outline-none"
//           />
//         ) : (
//           <span className="text-slate-600">Search destination</span>
//         )}
//       </button>

//       <div className="dropdown dropdown-end px-4 border-r">
//         <label tabIndex={0} role="button" className="cursor-pointer">
//           <p className="font-bold">Dates</p>
//           <p className="text-slate-600">Select Ranges</p>
//         </label>
//         <div
//           tabIndex={0}
//           className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
//         >
//           <p>Range Selector</p>
//         </div>
//       </div>

//       <div className="dropdown dropdown-end px-4">
//         <label tabIndex={0} role="button" className="cursor-pointer">
//           <p className="font-bold">Who</p>
//           <p className="text-slate-600">Add Guests</p>
//         </label>
//         <div
//           tabIndex={0}
//           className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
//         >
//           <Counter label="Adults" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
