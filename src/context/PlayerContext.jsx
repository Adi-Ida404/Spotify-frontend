import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../public/albums/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar =useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    const playWithId = async (id) =>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    }

    // const previous = async => {
    //     if(track.id>0){
    //         setTrack(songsData[tracks.id-1]);
    //         audioRef.current.play();
    //         setPlayerStatus(true);
    //     }
    // }
    // const next = async => {
    //     if(track.id < songsData.length-1){
    //         setTrack(songsData[track.id+1]);
    //         audioRef.current.play();
    //         setPlayerStatus(true);
    //     }
    // }

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    
    const showSidebar = () => setIsSidebarVisible(true);
    const hideSidebar = () => setIsSidebarVisible(false);
    

    useEffect(() => {
        const updateSeekBar = () => {
            if (audioRef.current) {
                const currentTime = audioRef.current.currentTime || 0;
                const duration = audioRef.current.duration || 1; // Avoid division by 0
    
                // Update the seek bar width dynamically
                if (seekBar.current && seekBg.current) {
                    const seekPercentage = (currentTime / duration) * 100;
                    seekBar.current.style.width = `${seekPercentage}%`;
                    console.log("Current Time:", audioRef.current?.currentTime);
                    console.log("Duration:", audioRef.current?.duration);
                    console.log("Seek Width:", seekBar.current?.style.width);

                }
    
                // Update the time state with current and total time
                setTime({
                    currentTime: {
                        second: Math.floor(currentTime % 60),
                        minute: Math.floor(currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(duration % 60),
                        minute: Math.floor(duration / 60),
                    },
                });
            }
        };
    
        if (audioRef.current) {
            // Set event listeners for audio element
            audioRef.current.ontimeupdate = updateSeekBar;
    
            // Optional: Add onended handler to reset seek bar when song ends
            audioRef.current.onended = () => {
                setPlayerStatus(false);
                if (seekBar.current) seekBar.current.style.width = "0%";
            };
        }
    
        // Cleanup function
        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null;
                audioRef.current.onended = null;
            }
        };
    }, [audioRef, seekBar, seekBg]);
    

    const [name, setName] = useState(null);
    const [login, setLogin] = useState(false);

    const contextValue ={
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playerStatus, setPlayerStatus,
        time, setTime,
        play, pause
        ,playWithId,
        isSidebarVisible,
        showSidebar,
        hideSidebar,
        name,setName,login,setLogin
    }
    return(
        <PlayerContext.Provider value={contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;