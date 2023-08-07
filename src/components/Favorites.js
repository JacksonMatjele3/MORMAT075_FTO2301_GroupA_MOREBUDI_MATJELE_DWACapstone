import React, { useState } from 'react';

const Favorites = ({ favorites, setFavorites }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedFavorites = [...favorites];

  sortedFavorites.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <label>Sort by Title:</label>
        <button onClick={() => setSortOrder('asc')}>A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Z-A</button>
      </div>
      {sortedFavorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {sortedFavorites.map((show) => (
            <li key={show.id}>
              <img src={show.image} alt={show.title} />
              <h3>{show.title}</h3>
              <p>{show.description}</p>
              <button
                onClick={() => {
                  setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== show.id));
                }}
              >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;

