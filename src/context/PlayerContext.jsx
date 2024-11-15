import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../public/albums/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 },
    });

    const play = () => { audioRef.current.play(); setPlayerStatus(true); }
    const pause = () => { audioRef.current.pause(); setPlayerStatus(false); }

    useEffect(() => {
        const updateSeekBar = () => {
            if (audioRef.current) {
                const currentTime = audioRef.current.currentTime || 0;
                const duration = audioRef.current.duration || 1;
                if (seekBar.current) seekBar.current.style.width = `${(currentTime / duration) * 100}%`;

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
            audioRef.current.ontimeupdate = updateSeekBar;
            audioRef.current.onended = () => {
                setPlayerStatus(false);
                if (seekBar.current) seekBar.current.style.width = "0%";
            };
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null;
                audioRef.current.onended = null;
            }
        };
    }, []);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playerStatus,
        setPlayerStatus,
        time,
        setTime,
        play,
        pause,
    };

    return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;
