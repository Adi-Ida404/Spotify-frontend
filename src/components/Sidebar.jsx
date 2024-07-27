import { Link } from 'react-router-dom';
import React from 'react';

export const Sidebar = () => {
  return (
    <>
    <div className="m-0 h-11/12 w-3/4 lg:w-3/12 mr-2 mt-4 bg-slate-950 hidden sm:block">
            <ul className="rounded-sm bg-slate-900 text-slate-300 p-4">
                <li className=" p-2"><img className="h-6 w-auto" src="https://imgs.search.brave.com/gAASQsi_SWZZJqpGrSlxBdrdObjjSOVwmUI09qMtkfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA5L3Nwb3RpZnkt/bG9nby1icmFuY2Et/d2hpdGUucG5n" alt="spotify-logo" /></li>
                <Link to="/" className=" p-2 flex font-family-Raleway duration-200 ease-in font-semibold hover:text-slate-100 duration-500 hover:underline hover:underline-offset-4"><svg className="h-6 w-auto icon glyph" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="home-alt-2" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.71,9.29l-7-7a1,1,0,0,0-1.42,0l-7,7A1,1,0,0,0,4,10V21a1,1,0,0,0,1,1H8a1,1,0,0,0,.54-.18,1,1,0,0,0,.17-.11,1,1,0,0,0,.11-.17A1,1,0,0,0,9,21V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V10A1,1,0,0,0,19.71,9.29Z"></path></g></svg> <h4 className="ml-4">Home</h4></Link>
                <Link to="/searchpage" className=" p-2 flex font-family-Raleway duration-200 ease-in font-semibold hover:text-slate-100 duration-500 hover:underline hover:underline-offset-4"><svg className="h-6 w-auto icon glyph" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><h4 className="ml-4">Search</h4></Link>
            </ul>
            <ul className="rounded-sm bg-slate-900 text-slate-300 p-4 mt-2">
                <li className="pl-2 flex font-family-Raleway font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
                    <Link to="/playlist"><h4 className="ml-4 duration-200 hover:text-slate-100 ease-in">Your Library</h4> </Link>
                    <button>
                    <div className="ml-6 rounded-lg bg-slate-900 duration-200 hover:bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </div>   
                    </button>
                </li>
            </ul>
            <div className="overflow-y-auto text-white h-40 custom-scrollbar p-2">
                {/* Scrollable Section 1 */}
                <div className="my-2 p-4 bg-slate-600 text-left rounded-lg">
                    <h5 className="font-family-Raleway font-semibold">Create Your Playlist</h5>
                    <h5 className="font-family-Raleway">It is easy, we will help you!</h5><br></br>
                    <Link to="/playlist" className="font-family-Raleway font-semibold text-black bg-white rounded-3xl p-2 shadow-lg transform transition-transform duration-200 hover:scale-105">Create Playlist +</Link>
                </div>
                <div className="my-4 p-4 bg-slate-600 text-left rounded-lg">
                    <h5 className="font-family-Raleway font-semibold">Find some Podcasts</h5>
                    <h5 className="font-family-Raleway">We have updated the episodes</h5><br></br>
                    <button className="font-family-Raleway font-semibold text-black bg-white rounded-3xl p-2 shadow-lg transform transition-transform duration-200 hover:scale-105">Browse Podcasts</button>
                </div>
                <div className="my-4 p-4 bg-slate-600 text-left rounded-lg">
                    <h5 className="font-family-Raleway font-semibold">Follow</h5>
                    <h5 className="font-family-Raleway">New artists you may like</h5><br></br>
                    <button className="font-family-Raleway font-semibold text-black bg-white rounded-3xl p-2 shadow-lg transform transition-transform duration-200 hover:scale-105">Browse Artists</button>
                </div>
            </div>
            <div>
                <div className="flex flex-col text-white text-xs pt-2 pl-6 text-left">
                    <div className=''>Legal </div>
                    <div className=''>Safety  &  Privacy Center</div>
                    <div className=''>Privacy Policy</div>
                    <div className=''>Cookies</div>
                    <div className=''>About Ads</div>
                </div>
            </div>
        </div>
    </>
  )
}
