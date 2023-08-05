import React, { useState } from 'react';
import { genreData } from '../data/genreData';
import { formatUpdatedDate } from './dateUtils';
import Fuse from 'fuse.js';
/*import AudioPlayer from './AudioPlayer';*/

// ShowList component
const ShowList = ({ shows, favorites, setFavorites }) => {
  // State to keep track of the sorting order
  const [sortOrder, setSortOrder] = useState('asc');
  
  // State to store the search query
  //const [searchQuery, setSearchQuery] = useState('');

  // Function to sort the shows based on the sorting order
  /*const sortShows = (order) => {
    const sortedShows = [...shows];
    sortedShows.sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    return sortedShows;
  };*/

  // Create a new instance of Fuse for searching shows by title
  /*const fuse = new Fuse(shows, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.4,
  });*/

  // Filter and sort the shows based on the search query and sorting order
  const filteredShows = shows
    .filter((show) => show.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.updated.localeCompare(b.updated);
      } else {
        return b.updated.localeCompare(a.updated);
      }
    });

  return (
    <div className='container show-list-container'>
      <h2>All Shows</h2>
      <div>
        <label>Sort by Title:</label>
        <button onClick={() => setSortOrder('asc')}>A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Z-A</button>
        <label>Sort by Date Updated:</label>
        <button onClick={() => setSortOrder('asc')}>Ascending</button>
        <button onClick={() => setSortOrder('desc')}>Descending</button>
      </div>
      <div className="show-list">
        {filteredShows.map((show) => (
          <div key={show.id} className="show-tile">
            <img src={show.image} alt={show.title} />
            <h3>{show.title}</h3>
            <p>{show.description}</p>
            <h3>Season: {show.seasons}</h3>
            <p>Last Updated: {formatUpdatedDate(show.updated)}</p>
            <p>Genres: {show.genres.map((genreId) => genreData[genreId]).join(', ')}</p>
            <button
              onClick={() => {
                if (!favorites.some((fav) => fav.id === show.id)) {
                  setFavorites((prevFavorites) => [...prevFavorites, show]);
                }
              }}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;