import { ArtistCard } from '../components/ArtistCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Row } from '../components/Row';
import { Sidebar } from '../components/Sidebar';
import { SongCard } from '../components/SongCard';
import songs from '../assets/songs'; // Ensure this is the correct path
import { SingUpBar } from '../components/SignupBar';
import { SongBar } from '../components/MasterBar/SongBar';
import { AlbumRow } from '../components/AlbumRow';
import { songsData } from '../../public/albums/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';

export const Homepage = () => {
  const {audioRef, track} = useContext(PlayerContext)
  
  return (
    <>
      <div className='flex h-full bg-slate-950'>
        <Sidebar />
        <div className="mt-4 bg-slate-900 w-full mr-2 overflow-y-auto rounded-lg">
          <Header />
          <div className="overflow-y-auto text-white custom-scrollbar p-2" style={{ height: "450px" }}>
            <AlbumRow title='Featured'/>
            <Row title="Top Charts" songs={songsData} />
            <Row title="Top Charts" songs={songsData} />
            <Footer />
          </div>
        </div>
      </div>
      {/* <div style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        background: "linear-gradient(90deg, rgba(209,81,215,1) 0%, rgba(177,23,169,1) 13%, rgba(129,74,192,1) 36%, rgba(129,74,192,1) 51%, rgba(0,212,255,1) 100%)"
      }}> */}
        {/* <SingUpBar/> */}

      {/* </div> */}
    </>
  );
};
