import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../../public/albums/assets';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PlayerContext } from '../context/PlayerContext';
import { SongBar } from '../components/MasterBar/SongBar';

export const DisplayAlbum = () => {
    const {id} =useParams();
    const albumData =albumsData[id];
    const {playWithId} = useContext(PlayerContext);

  return (
    <>
      <div className='flex h-full bg-slate-950'>
        <Sidebar />
          <div className="mt-4 bg-slate-900 w-full mr-2 overflow-y-auto">
            <Header />
            <div className="text-left overflow-y-auto text-white custom-scrollbar p-2" style={{ height: "450px" }}>
                            <div className='flex'>
                            <img className='w-48 rounded' src={albumData.image} alt=""/>
                            <div className=" ml-4 flex flex-col">
                            <p className='font-bold font-2xl'>Playlist</p>
                            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.className} </h2>
                            <h4>{albumData.desc}</h4>
                            <div className='mt-1'>
                                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                                <b className='ml-2 font-semibold font-md'>Spotify</b>
                                <br />
                                <p className='mt-4 mb-0'>o 1,323,154 likes
                                o 50 songs </p>
                                <br />
                                 
                                <br />
                                :about 2hr 30 min
                                </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                                    <p><b className='mr-4'>Title</b></p>
                                    <p>Album</p>
                                    <p className='hidden sm:block'>Date added</p>
                                    <img className='m-auto w-4' src={assets.clock_icon} alt=""/>
                                </div>
                                <hr/>
                                {songsData.map((item, index) => (
                <div onClick={()=> playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-[#a7a7a7] items-center'>
                  <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                    <img className="inline w-10 mr-5" src={item.image} alt={`Song ${item.name}`} />
                    {item.name}
                  </p>
                  <p className='text-[15px]'>{albumData.name}</p>
                  <p className='text-[15px] hidden sm:block'>5 days ago</p>
                  <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
              ))}

            <Footer/>
            </div>
          </div>
      </div>
    </>
  )
}
