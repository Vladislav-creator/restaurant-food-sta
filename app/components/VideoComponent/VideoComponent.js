"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoComponent.module.css';

const VideoComponent = ({ url, poster }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleReady = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.videoWrapper}>
      {!isLoaded && (
        <div className={styles.loader}>
          Loading...
        </div>
      )}
      <ReactPlayer
        url={url}
        light={poster}
        playing
        controls
        onReady={handleReady}
        width="100%"
        height="100%"
        className={styles.video}
      />
    </div>
  );
};

export default VideoComponent;
