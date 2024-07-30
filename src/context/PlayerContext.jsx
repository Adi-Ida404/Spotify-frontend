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
    

    useEffect(()=>{
        setTimeout(() =>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)) + '%';
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000);
    },[audioRef])

    const [name, setName] = useState(null);

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
        name,setName
    }
    return(
        <PlayerContext.Provider value={contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;