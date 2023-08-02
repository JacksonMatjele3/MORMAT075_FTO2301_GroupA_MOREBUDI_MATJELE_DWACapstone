/*import React, { useRef, useState, useEffect } from 'react';

// AudioPlayer component
const AudioPlayer = ({ episode }) => {
  // Reference to the audio element
  const audioRef = useRef(null);
  
  // State to keep track of the current time and duration of the audio
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    // Add event listeners to the audio element for time update and loaded metadata
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
    return () => {
      // Clean up by removing the event listeners
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, []);

  // Function to handle time update of the audio
  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setCurrentTime(formatTime(currentTime));
    setDuration(formatTime(duration));
  };

  // Function to handle loaded metadata of the audio
  const handleLoadedMetadata = () => {
    setDuration(formatTime(audioRef.current.duration));
  };

  // Function to format time in minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Function to handle play and pause of the audio
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={episode.audioUrl} type="audio/mpeg" />
      </audio>
      <div>
        <span>{currentTime} / {duration}</span>
        <button onClick={handlePlayPause}>{audioRef.current && audioRef.current.paused ? 'Play' : 'Pause'}</button>
      </div>
    </div>
  );
};

export default AudioPlayer;*/
