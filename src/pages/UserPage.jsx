import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import React from 'react';
import { Footer } from "../components/Footer";
import { Playlist } from "../components/Playlist";
import { Row } from "../components/Row";
import songs from "../assets/songs";
import { AlbumRow } from "../components/AlbumRow";

export const UserPage = () => {
    const containerStyle = {
        backgroundColor: '#020617',
        display: 'flex',
        height: '160vh'
    };

    return (
        <div className='flex h-full bg-slate-950'>
            <Sidebar />
                <div className="mt-4 bg-slate-900 w-full mr-2 overflow-y-auto rounded-lg" style={{ height: "450px" }}> 
                    <Header />
                    <div className="overflow-y-auto text-white custom-scrollbar p-2">
                        <div className="bg-slate-900 text-left text-slate-100 font-semibold font-Raleway">
                            <div>
                                <ul className="flex">
                                    <li className="ml-7 w-auto h-8 transition-colors duration-200 hover:underline hover:underline-offset-4 hover:text-green-500" style={{ textDecorationColor: '#35b557' }}>
                                        <a href="#overview">Overview</a>
                                    </li>
                                    <li className="ml-7 w-auto h-8 transition-colors duration-200 hover:underline hover:underline-offset-4 hover:text-green-500" style={{ textDecorationColor: '#35b557' }}>
                                        <a href="#playlists">Playlists</a>
                                    </li>
                                    <li className="ml-7 w-auto h-8 transition-colors duration-200 hover:underline hover:underline-offset-4 hover:text-green-500" style={{ textDecorationColor: '#35b557' }}>
                                        <a href="#followers">Followers</a>
                                    </li>
                                    <li className="ml-7 w-auto h-8 transition-colors duration-200 hover:underline hover:underline-offset-4 hover:text-green-500" style={{ textDecorationColor: '#35b557' }}>
                                        <a href="#following">Following</a>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
                            <div id="overview" className="flex justify-between mt-4">
                            <Row title="Top Charts" songs={songs} />
                            </div>
                            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
                            <div id="playlists" className="flex justify-between font-5xl font-Raleway ml-8" style={{ marginTop: "25px" }}>
                                <b className="text-slate-300 text-base p-1 " >Your Playlists</b>
                            </div>
                            <div style={{ alignItems: 'flex-start', marginTop: '15px', marginLeft: '20px', height: '300px' }}>
                                <AlbumRow title=''/>
                            </div>
                            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
                            <div id="followers" className="flex justify-between" style={{ marginTop: "25px" }}>
                                <b className="text-slate-300 text-base p-1">Followers</b>
                            </div>
                            <div className="text-slate-300 text-base p-1">
                                <ul>
                                    <li>Follower1</li>
                                    <li>Follower2</li>
                                    <li>Follower3</li>
                                    <li>Follower4</li>
                                </ul>
                            </div>
                            <div style={{ width: '100%', height: '0.25px', backgroundColor: '#545454', marginTop: '20px' }}></div>
                            <div id="following" className="flex justify-between" style={{ marginTop: "25px" }}>
                                <b className="text-slate-300 text-base p-1">Following</b>
                            </div>
                            <div className="text-slate-300 text-base p-1">
                                <ul>
                                    <li>Following1</li>
                                    <li>Following2</li>
                                    <li>Following3</li>
                                    <li>Following4</li>
                                </ul>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
    );
};
