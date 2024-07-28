import React, { useContext } from 'react'
import { assets, songsData } from '../../../public/albums/assets'
import { PlayerContext } from '../../context/PlayerContext'

export const SongBar = () => {

    const {seekBar, seekBg, playerStatus, play, pause, track, time} = useContext(PlayerContext);

  return (
    <div className='flex items-center gap-2 bg-slate-900 text-white p-2 border-t border-slate-500'>
        <img className='w-12 border-[1px] border-slate-300' src={track.image} alt=""/>
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""/>
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=""/>
                {playerStatus?
                (<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=""/>)
                :(<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt=""/>)}
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt=""/>
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        
    </div>
  )
}
