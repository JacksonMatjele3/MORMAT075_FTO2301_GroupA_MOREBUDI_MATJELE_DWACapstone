import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
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
    
    <BrowserRouter>
      <div className='container'>
        <h1 className='text-3xl font-bold underline'>Podcast App</h1>

        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Show List</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/search" element={<Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            shows={shows}
            favorites={favorites}
            setFavorites={setFavorites}
          />} />
          <Route path="/" element={<ShowList shows={shows} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </div>
    </BrowserRouter>
  
  );
};

export default App;