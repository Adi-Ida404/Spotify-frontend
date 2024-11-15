import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../public/albums/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekBar = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 },
    });

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayerStatus(true);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayerStatus(false);
        }
    };

    const playWithId = (id) => {
        setTrack(songsData[id]);
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.onloadedmetadata = () => {
                audioRef.current.play();
                setPlayerStatus(true);
            };
        }
    };

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const showSidebar = () => setIsSidebarVisible(true);
    const hideSidebar = () => setIsSidebarVisible(false);

    useEffect(() => {
        const updateSeekBar = () => {
            if (audioRef.current) {
                const currentTime = audioRef.current.currentTime || 0;
                const duration = audioRef.current.duration || 1;

                if (seekBar.current && seekBg.current) {
                    const seekPercentage = (currentTime / duration) * 100;
                    seekBar.current.style.width = `${seekPercentage}%`;
                }

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
        playWithId,
        isSidebarVisible,
        showSidebar,
        hideSidebar,
        name: null,
        setName: null,
        login: false,
        setLogin: null,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            {/* Place the audio element here */}
            <audio ref={audioRef} src={track?.audio} />
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
