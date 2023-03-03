import React from 'react';
import Nav from '@components/components/Nav/Nav';
import styles from '../styles/VideoUploadPage.module.css';
import { Asset } from '../views/CreateAndViewAsset/CreateAndViewAsset';

const VideoUploadPage = () => {
  const handleVideoUpload = (event) => {
    // Handle video upload logic here
  };

  return (
    <div className={styles.videoPage}>
      <div className={styles.container}>
        <Nav/>
        <div className={styles.box}>
          <h1>Upload a Video</h1>
          <Asset />
          {/* <form onSubmit={handleVideoUpload} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="video-file" className={styles.label}>Choose a video file:</label>
              <input type="file" id="video-file" name="video-file" accept="video/*" className={styles.input} />
            </div>
            <button type="submit" className={styles.button}>Upload</button>
          </form> */}
        </div>
        
      </div>
    </div>
    
  );
};

export default VideoUploadPage;
