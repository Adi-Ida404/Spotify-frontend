import React from 'react';

export const PlayButton = () => {
  return (
    <button className=" bg-green-500 text-black rounded-full p-2 drop-shadow-md song-card-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    </button>
  );
};
