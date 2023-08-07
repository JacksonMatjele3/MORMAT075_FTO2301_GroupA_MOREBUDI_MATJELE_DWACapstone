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
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch shows from the API
  const fetchShows = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  };
  
  useEffect(() => {
    fetchShows().then((data) => {
      setShows(data);
      setIsLoading(false); // Set loading state to false after data is fetched
    });
  }, []);

  return (
    
    <BrowserRouter>
      <div className='container'>
        <h1 className='text-3xl font-bold underline'>Podcast App</h1>

        {/* Define routes */}
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-100"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
        ) : (

          <div>
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
            {/* Render the Routes */}
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
        )}

        
      </div>
    </BrowserRouter>
  
  );
};

export default App;