'use client'

import { useState } from "react";

const CountIcon = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border rounded-full w-5 h-5 flex "
    >
      <span>{icon}</span>

    </button>
  )

}


//lable = number of guests
export const Counter = ({ lable }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between">
      <p className="font-bold"> {lable} </p>
      <div className="flex items-center gap-x-1">
        {count > 0 && (
          <CountIcon
            icon="-"
            onClick={() => setCount((prev) => prev - 1)} />
        )}
        <span>{count}</span>
        <CountIcon
          icon="+"
          onClick={() => setCount((prev) => prev + 1)} />
      </div>
    </div>

  )

}



// 'use client';

// import { useState } from "react";

// const CountIcon = ({ icon, onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label={icon === "+" ? "Increase Count" : "Decrease Count"}
//     className="border rounded-full w-5 h-5 flex items-center justify-center"
//   >
//     {icon}
//   </button>
// );

// export const Counter = ({ label }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex justify-between items-center">
//       <p className="font-bold">{label}</p>
//       <div className="flex items-center gap-x-1">
//         {count > 0 && (
//           <CountIcon icon="-" onClick={() => setCount((prev) => prev - 1)} />
//         )}
//         <span>{count}</span>
//         <CountIcon icon="+" onClick={() => setCount((prev) => prev + 1)} />
//       </div>
//     </div>
//   );
// };
