import React from 'react'

export const GenreCard = () => {
  return (
    <div className="mt-4">
                <b className="text-slate-300 text-base p-1">Your Top Genres</b>
                <div className="mt-2 flex flex-row p-1 bg-slate-900">
                  <div className="bg-red-500 text-white text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-50px sm:h-100px ">Pop<img src='https://www.pngall.com/wp-content/uploads/9/Pop-Music-Logo-PNG-Photo.png'></img></div>
                  <div className="bg-blue-500 text-white text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-50px sm:h-100px ml-4">Rock<img src="https://www.pngall.com/wp-content/uploads/3/Music-Band-PNG-HD-Image.png"></img></div>
                  <div className="bg-green-500 text-white text-left text-md sm:text-3xl p-4 rounded-md w-1/3 h-50px sm:h-100px ml-4">Classical<img src='https://www.pngall.com/wp-content/uploads/9/Classical-Music-PNG-High-Quality-Image.png'></img></div>
                </div>
              </div>
  )
}
