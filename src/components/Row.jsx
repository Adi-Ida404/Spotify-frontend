import PropTypes from 'prop-types';
import { SongCard } from './SongCard';

export const Row = ({ title, songs = [] }) => {
  return (
    <div className="mb-4">
      <div className="flex">
        <h3 className="text-xl font-bold ml-2">{title}</h3>
        <button className='ml-auto p-2 bg-slate-900 hover:bg-slate-800 rounded-full'>
          Show All
        </button>
      </div>
      <div className="scroll-container">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>


    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  songs: PropTypes.array
};


