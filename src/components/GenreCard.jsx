import React from 'react'

export const GenreCard = () => {
  return (
    <div className="mt-4">
                <b className="text-slate-300 text-base p-1">Your Top Genres</b>
                <div className="mt-2 flex flex-row p-1 bg-slate-900">
                  <div className="bg-red-500 text-white text-left text-md sm:text-2xl p-4 rounded-md w-1/3 h-20 sm:h-44 ">Pop<img className='h-10 sm:h-28' src='https://www.pngall.com/wp-content/uploads/9/Pop-Music-Logo-PNG-Photo.png'></img></div>
                  <div className="bg-blue-500 text-white text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-20 sm:h-44 ml-4">Rock<img className='h-10 sm:h-28' src="https://www.pngall.com/wp-content/uploads/3/Music-Band-PNG-HD-Image.png"></img></div>
                  <div className="bg-green-500 text-white text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-20 sm:h-44 ml-4">Classical<img className='h-10 sm:h-28' src='https://www.pngall.com/wp-content/uploads/9/Classical-Music-PNG-High-Quality-Image.png'></img></div>
                  <div className="bg-white text-slate-950 text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-20 sm:h-44 ml-4">Blues<img className='h-10 sm:h-28' src='https://imgs.search.brave.com/8iIwYeIpnbxSpKuv7qd0KrgVwiiq0eZruFd7BidABSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibHVl/cy1tdXNpY2FsLWdl/bnJlcy1hdWRpby10/YXBlLWxhYmVsLTg3/NTQ1NTUzLmpwZw'></img></div>
                  <div className="bg-white text-slate-950 text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-20 sm:h-44 ml-4">Hip-Hop<img className='h-10 sm:h-28' src='https://imgs.search.brave.com/GHxQ9mH3AR2nAtAa8j67ijbsTClzo7kQQphFRdP6cLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWFj/aHJvY2sud3Blbmdp/bmVwb3dlcmVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvbndh/LmpwZw'></img></div>
                </div>
              </div>
  )
}
