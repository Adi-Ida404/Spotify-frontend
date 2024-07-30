import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

export const Header = () => {
  const navigate = useNavigate();
  const { showSidebar,name } = useContext(PlayerContext);

  // Styles for buttons
  const styleButton = "font-semibold mx-2 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800";

  // Handle forward navigation
  const handleForward = () => {
    navigate(1); // Move forward in history
  };

  // Handle backward navigation
  const handleBackward = () => {
    navigate(-1); // Move backward in history
  };

  return (
    <div className='flex border-black bg-slate-900 p-4'>
      <div className='flex text-white items-center'>
        <button className="block sm:hidden font-semibold mx-2 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
        onClick={showSidebar}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        </button>
        <button className={styleButton} onClick={handleBackward}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="18" y1="20" y2="4" />
            <polygon points="14,20 4,12 14,4" />
          </svg>
        </button>
        <button className={styleButton} onClick={handleForward}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" x2="6" y1="4" y2="20" />
            <polygon points="10,4 20,12 10,20" />
          </svg>
        </button>
      </div>
      {name ? (
        <div className='flex text-white ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
          <span>Welcome, {name}</span>
        </div>
      ) : (
        <div className='flex text-white ml-auto'>
          <Link to="/SignUp" className={styleButton}>
            Sign Up
          </Link>
          <Link to="/Login" className="bg-white text-slate-900 font-semibold drop-shadow-lg p-2.5 px-4 rounded-full">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};
