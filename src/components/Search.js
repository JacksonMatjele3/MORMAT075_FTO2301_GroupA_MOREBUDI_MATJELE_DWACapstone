// Import the React library to use React components
import React from 'react';

// Import the genreData and formatUpdatedDate functions from their respective files
import { genreData } from '../data/genreData';
import { formatUpdatedDate } from './dateUtils';

// Search component takes in 'shows', 'searchQuery', 'setSearchQuery', 'favorites', and 'setFavorites' as props
const Search = ({ shows, searchQuery, setSearchQuery, favorites, setFavorites }) => {
  // Define a function to handle changes in the search input
  const handleSearchChange = (event) => {
    // When the search input changes, update the searchQuery state with the new value
    setSearchQuery(event.target.value);
  };

  // Filter the 'shows' array based on the 'searchQuery' to get the filteredShows array
  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='search-container'>
      {/* Input element for the search */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />

      <ul>
        {/* Map through the 'filteredShows' array and create a list item for each show */}
        {filteredShows.map((show) => (
          <li key={show.id}>
            {/* Display the image of the show */}
            <img src={show.image} alt={show.title} />
            {/* Display the title of the show */}
            <h3>{show.title}</h3>
            {/* Display the description of the show */}
            <p>{show.description}</p>
            {/* Display the number of seasons of the show */}
            <h3>Season: {show.seasons}</h3>
            {/* Display the last updated date of the show using the 'formatUpdatedDate' function */}
            <p>Last Updated: {formatUpdatedDate(show.updated)}</p>
            {/* Display the genres of the show */}
            <p><em>Genres: {show.genres.map((genreId) => genreData[genreId]).join(', ')}</em></p>
            {/* Create a button to add the show to favorites */}
            <button
              onClick={() => {
                // Check if the show is not already in favorites, then add it to the favorites array
                if (!favorites.some((fav) => fav.id === show.id)) {
                  setFavorites((prevFavorites) => [...prevFavorites, show]);
                }
              }}
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the Search component to use it in other parts of the application
export default Search;
