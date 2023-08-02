import React, { useState, useEffect } from 'react';
import ShowList from './components/ShowList';
import Search from './components/Search';
import Favorites from './components/Favorites';

const API_URL = 'https://podcast-api.netlify.app/shows?';

const App = () => {
  const [shows, setShows] = useState([]); // State for storing the fetched shows
  const [searchQuery, setSearchQuery] = useState(''); // State for storing the search query
  const [favorites, setFavorites] = useState([]); // State for storing the favorite shows

  // Function to fetch shows from the API
  const fetchShows = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    // Fetch shows when the component mounts
    fetchShows().then((data) => setShows(data));
  }, []);

  return (
    <div className='container'>
      <h1>Podcast App</h1>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        shows={shows}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <ShowList shows={shows} favorites={favorites} setFavorites={setFavorites} />
      <Favorites favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default App;