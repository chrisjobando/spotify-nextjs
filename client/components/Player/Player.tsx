import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
  faPlus,
  faHeart,
  faPlayCircle,
  faRandom,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';

// Styling
import classes from './player.module.scss';

export const MiniPlayer = () => {
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
          <FontAwesomeIcon
            onClick={() => setPlay(false)}
            icon={faPlay}
            className={classes.Play}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setPlay(true)}
            icon={faPause}
            className={classes.Play}
          />
        )}
        <FontAwesomeIcon icon={faForward} className={classes.Skip} />
      </div>
    </div>
  );
};

export const BigPlayer = () => {
  const [isPlay, setPlay] = useState(false);

  return (
    <div className={classes.BigPlayer}>
      <div className={classes.AlbumPic} />
      <div className={classes.SongInfo}>
        <h1 className={classes.SongName}>ABQ</h1>
        <h2 className={classes.SongArtist}>The Marias</h2>
      </div>
      <div className={classes.Controls}>
        <FontAwesomeIcon icon={faBackward} className={classes.Skip} />
        {isPlay ? (
          <FontAwesomeIcon
            onClick={() => setPlay(false)}
            icon={faPlay}
            className={classes.Play}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setPlay(true)}
            icon={faPause}
            className={classes.Play}
          />
        )}
        <FontAwesomeIcon icon={faForward} className={classes.Skip} />
      </div>
    </div>
  );
};
