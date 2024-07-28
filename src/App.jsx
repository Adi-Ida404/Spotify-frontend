import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './pages/HomePage';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Library } from './pages/Library.jsx';
import { SearchPage } from './pages/SearchPage.jsx';
import { UserPage } from './pages/UserPage.jsx';
import { DisplayAlbum } from './pages/DisplayAlbum.jsx';
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext.jsx';
import { SongBar } from './components/MasterBar/SongBar.jsx';


function App() {
  const {audioRef, track} = useContext(PlayerContext)
  // const apiUrl = process.en.REACT_APP_BACKEND_URL
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/searchpage" element={<SearchPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/playlist" element={<Library/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/album/:id" element={<DisplayAlbum/>}/>
        </Routes>
        <SongBar/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </Router>
      </>
  );
}

export default App;
