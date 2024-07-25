import React from 'react'
import {albumsData} from '../../public/albums/assets'
import { AlbumCard } from './AlbumCard'

export const AlbumRow = (props) => {
  return (
    <>
    <div className='font-bold text-left text-2xl mx-2' >{props.title}</div>
    <div className='my-5 font-semibold text-md flex overflow-auto'>
        {albumsData.map((item,index) => (<AlbumCard key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    </>
  )
}
