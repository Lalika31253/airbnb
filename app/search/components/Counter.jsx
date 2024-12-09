'use client'

import { useState } from "react";

const CountIcon = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="border rounded-full w-5 h-5 flex ">
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
        {
          count > 0 && (
            <CountIcon
              icon="-"
              onClick={() => setCount(prevCount => prevCount - 1)} />
          )}
        <span>{count}</span>
        <CountIcon
          icon="+"
          onClick={() => setCount(prevCount => prevCount + 1)} />
      </div>
    </div>

  )

}