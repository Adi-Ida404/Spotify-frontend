import React, { useState, useRef, useEffect, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

export const SongCard = ({ song }) => {
  const {playWithId} =  useContext(PlayerContext)
  return(
    <div onClick={()=> playWithId(song.id)} className ='text-left overflow-hidden min-w-[180px] p-2 px-3 rounded cursor-pointer'>
      <img className='rounded' src={song.image} alt=''/>
      <p className = 'font-bold mt-2 mb-1'>{song.name}</p>
      <p className='text-slate-200 text-sm'>{song.desc}</p>
    </div>
  )
}