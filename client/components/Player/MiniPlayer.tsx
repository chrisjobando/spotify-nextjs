import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
} from '@fortawesome/free-solid-svg-icons';

// Styling
import classes from './player.module.scss';

const MiniPlayer = () => {
  const [isPlay, setPlay] = useState(false);

  return (
    <div className={classes.MiniPlayer}>
      <div className={classes.AlbumPic} />
      <div className={classes.SongInfo}>
        <h1 className={classes.SongName}>Sticky</h1>
        <h2 className={classes.SongArtist}>Ravyn Lenae</h2>
      </div>
      <div className={classes.Controls}>
        <FontAwesomeIcon icon={faBackward} className={classes.Skip} />
        {isPlay ? (
          <FontAwesomeIcon icon={faPlay} className={classes.Play} />
        ) : (
          <FontAwesomeIcon icon={faPause} className={classes.Play} />
        )}
        <FontAwesomeIcon icon={faForward} className={classes.Skip} />
      </div>
    </div>
  );
};

export default MiniPlayer;
