import React from 'react';
import { Profile } from "../components/ProfileButton";
import { SearchButton } from "./../components/SearchButton";
import { Playlist } from "./../components/Playlist";
import { Sidebar } from "../components/Sidebar";
import { Header } from '../components/Header';
import { SongCard } from '../components/SongCard';
import { Row } from '../components/Row';
import { PlayButton } from '../components/PlayButton';
import { GenreCard } from '../components/GenreCard';
import { Footer } from '../components/Footer';
import { SingUpBar } from '../components/SignupBar';
import songs from '../assets/songs';

export const SearchPage = () => {
  const containerStyle = {
    backgroundColor: '#020617',
    display: 'flex',
    height: '110vh'
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div className="mt-4 bg-slate-900 w-full mr-2 overflow-y-auto">
          <Header />
          <div className="overflow-y-auto text-white custom-scrollbar p-2" style={{ height: "450px" }}>
            <div className="bg-slate-900 text-left text-slate-100 font-semibold font-Raleway mt-4">
              <div >
                {/* THE SEARCH HISTORY SONGCARDS */}
                <Row title="Recent Searches" songs={songs} />
              </div>
              {/* THE GENRE CARDS */}
              <GenreCard/>
            </div>
            <Footer/>
          </div>
        </div>
    </div>
  );
};


