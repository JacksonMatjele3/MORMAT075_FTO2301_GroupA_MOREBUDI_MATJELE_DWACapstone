// Import the React library to use React components
import React from 'react';

// Favorites component takes in 'favorites' and 'setFavorites' as props
const Favorites = ({ favorites, setFavorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        // If the 'favorites' array is empty, display a message indicating no favorites yet
        <p>No favorites yet.</p>
      ) : (
        // If there are items in the 'favorites' array, display them in an unordered list
        <ul>
          {/* Map through the 'favorites' array and create a list item for each item */}
          {favorites.map((show) => (
            <li key={show.id}>
              {/* Display the image of the show */}
              <img src={show.image} alt={show.title} />
              {/* Display the title of the show */}
              <h3>{show.title}</h3>
              {/* Display the description of the show */}
              <p>{show.description}</p>
              {/* Create a button to remove the show from favorites */}
              <button
                onClick={() => {
                  // When the button is clicked, update the favorites state by filtering out the show with the given id
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

// Export the Favorites component to use it in other parts of the application
export default Favorites;

