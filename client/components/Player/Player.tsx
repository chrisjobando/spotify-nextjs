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
  faPauseCircle,
  faRandom,
  faSyncAlt,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

// Styling
import classes from './player.module.scss';

export const MiniPlayer = ({ onClick }) => {
  const [isPlay, setPlay] = useState(false);

  return (
    <div className={classes.MiniPlayer}>
      <div className={classes.AlbumPic} />
      <div className={classes.SongInfo}>
        <h1 className={classes.SongName}>Sticky</h1>
        <h2 className={classes.SongArtist}>Ravyn Lenae</h2>
      </div>
      <FontAwesomeIcon
        onClick={onClick}
        icon={faChevronUp}
        className={classes.Toggle}
      />
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

export const BigPlayer = ({ onClick }) => {
  const [isPlay, setPlay] = useState(false);

  return (
    <div className={classes.BigPlayer}>
      <FontAwesomeIcon
        onClick={onClick}
        icon={faChevronDown}
        className={classes.Toggle}
      />
      <div className={classes.TopControls}>
        <FontAwesomeIcon icon={faHeart} className={classes.Update} />
        <p className={classes.UriName}>Playlist Name</p>
        <FontAwesomeIcon icon={faPlus} className={classes.Update} />
      </div>
      <div className={classes.PlayerContent}>
        <div className={classes.AlbumPic} />
        <div className="SongInfo">
          <h1 className={classes.SongName}>ABQ</h1>
          <h2 className={classes.SongArtist}>The Marias</h2>
        </div>
        <div className={classes.Controls}>
          <FontAwesomeIcon
            icon={faRandom}
            className={classes.Skip}
            style={{ marginRight: '30px' }}
          />
          <FontAwesomeIcon icon={faBackward} className={classes.Skip} />
          {isPlay ? (
            <FontAwesomeIcon
              onClick={() => setPlay(false)}
              icon={faPlayCircle}
              className={classes.Play}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setPlay(true)}
              icon={faPauseCircle}
              className={classes.Play}
            />
          )}
          <FontAwesomeIcon icon={faForward} className={classes.Skip} />
          <FontAwesomeIcon
            icon={faSyncAlt}
            className={classes.Skip}
            style={{ marginLeft: '30px' }}
          />
        </div>
      </div>
    </div>
  );
};
