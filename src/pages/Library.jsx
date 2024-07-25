import { Profile } from "../components/ProfileButton";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Playlist } from "../components/Playlist";
import { GenreCard } from "../components/GenreCard";
import { AlbumRow } from "../components/AlbumRow";

export const Library = () => {
  const containerStyle = {
    backgroundColor: '#020617',
    display: 'flex',
    height: '100%'
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div className="bg-slate-950 pt-4 px-2" style={{ width: "950px" }}>
        <Header/>
        <div className="flex bg-slate-900">
          <Link className="ml-6" to="/searchpage">
            <div className="p-2 flex font-family-Raleway duration-200 ease-in font-semibold hover:text-slate-700 duration-500">
              <svg className="h-6 w-auto icon glyph" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93a2b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <h4 className="ml-2" style={{ color: '#93a2b8' }}>Search</h4>
            </div>
          </Link>
          <Link to="/userpage" className="mt-1">
            <div className="flex font-family-Raleway duration-200 ease-in font-semibold hover:text-slate-700 duration-500">
              <Profile />
              <h4 className="ml-0 mt-1" style={{ color: '#93a2b8' }}>Profile</h4>
            </div>
          </Link>
          <div className="flex">
            <a href="#genrecard" className="ml-6 text-slate-300 text-base mt-[5px]">
              <button style={{ borderColor: "#424fa8", borderWidth: '0.5px', borderRadius: "40px", width: "140px", backgroundColor: "#111826"}}>Your Top Genres</button>
            </a>
            <Link to="/userpage#playlists" className="ml-6 text-slate-300 text-base mt-[5px]">
              <button style={{ borderColor: "#424fa8", borderWidth: '0.5px', borderRadius: "40px", width: "80px", backgroundColor: "#111826"}}>Playlists</button>
            </Link>
            <a href="#albums" className="ml-6 text-slate-300 text-base mt-[5px]">
              <button style={{ borderColor: "#424fa8", borderWidth: '0.5px', borderRadius: "40px", width: "80px", backgroundColor: "#111826"}}>Albums</button>
            </a>
            <a href="#liked" className="ml-6 text-slate-300 text-base mt-[5px]">
              <button style={{ borderColor: "#424fa8", borderWidth: '0.5px', borderRadius: "40px", width: "60px", backgroundColor: "#111826"}}>Liked</button>
            </a>
            <a href="#downloaded" className="ml-6 text-slate-300 text-base mt-[5px]">
              <button style={{ borderColor: "#424fa8", borderWidth: '0.5px', borderRadius: "40px", width: "95px", backgroundColor: "#111826"}}>Download</button>
            </a>
          </div>
        </div>

        <div className="overflow-y-auto text-white custom-scrollbar" style={{ height: "450px" }}>
          <div id="pagetop" className="bg-slate-900 text-left text-slate-100 font-semibold font-Raleway">
            <div id="genrecard" className="ml-4 p-2">
              <GenreCard />
            </div>
            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454' }}></div>
            <div id="albums" className="flex justify-between ml-4" style={{ marginTop: "25px" }}>
              <b className="text-slate-300 text-base p-1">Saved Albums</b>
              <a href="#pagetop" className="text-slate-300 text-base p-1">Page Top</a>
            </div>
            <div style={{ marginTop: "2.5px" }}>
              <div style={{ alignItems: 'flex-start', marginTop: '15px', marginLeft: '20px', height: '300px' }}>
                <AlbumRow title=''/>
              </div>
            </div>
            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
            <div id="liked" className="ml-4 flex justify-between" style={{ marginTop: "25px" }}>
              <b className="text-slate-300 text-base p-1">Liked</b>
              <a href="#pagetop" className="text-slate-300 text-base p-1">Page Top</a>
            </div>
            <div style={{ marginTop: "2.5px" }}>
            <div style={{ alignItems: 'flex-start', marginTop: '15px', marginLeft: '20px', height: '300px' }}>
                <AlbumRow title=''/>
              </div>
            </div>
            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
            <div id="downloaded" className="ml-4 flex justify-between" style={{ marginTop: "25px" }}>
              <b className="text-slate-300 text-base p-1">Downloaded</b>
              <a href="#pagetop" className="text-slate-300 text-base p-1">Page Top</a>
            </div>
            <div style={{ marginTop: "2.5px" }}>
            <div style={{ alignItems: 'flex-start', marginTop: '15px', marginLeft: '20px', height: '300px' }}>
                <AlbumRow title=''/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
