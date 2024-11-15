import React, { useContext } from 'react';
import { assets } from '../../../public/albums/assets'; // Fixed import for assets only
import { PlayerContext } from '../../context/PlayerContext';

export const SongBar = () => {
    const {
        seekBar,       // Ref to inner seek bar element
        seekBg,        // Ref to outer background bar element
        playerStatus,  // Boolean status if the song is playing
        play,          // Play function from context
        pause,         // Pause function from context
        track,         // Current track details (image, name, etc.)
        time           // Current and total time of track
    } = useContext(PlayerContext);

    return (
        <div className='flex items-center gap-2 bg-slate-900 text-white p-2 border-t border-slate-500'>
            <img className='w-12 border-[1px] border-slate-300' src={track.image} alt="Track artwork" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0, 12)}</p>
            </div>

            <div className="flex flex-col items-center gap-1 m-auto">
                {/* Playback control buttons */}
                <div className="flex gap-4">
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
                    
                    {/* Conditional play/pause button based on player status */}
                    {playerStatus ? (
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
                    ) : (
                        <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
                    )}
                    
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>

                {/* Time and Seek Bar */}
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}</p>
                    
                    {/* Outer seek bar container with ref */}
                    <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        {/* Inner seek bar that fills based on progress */}
                        <div ref={seekBar} className='h-1 bg-green-800 rounded-full' style={{ width: '0%' }}></div>
                    </div>
                    
                    <p>{time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}</p>
                </div>
            </div>
        </div>
    );
};
