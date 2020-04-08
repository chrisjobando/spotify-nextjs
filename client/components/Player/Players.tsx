import React, { useEffect } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
  faHeart,
  faPlayCircle,
  faPauseCircle,
  faRandom,
  faSyncAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// API Calls
import {
  previousTrack,
  nextTrack,
  pauseTrack,
  playTrack,
  toggleShuffle,
} from '../../actions/spotify';

// Styling
import classes from './player.module.scss';

export const MiniPlayer = props => {
  const { onClick, access, isPlay, setPlay, songData, setPlayerInfo } = props;

  useEffect(() => {
    setPlay(isPlay);
  });

  return (
    <div className={classes.MiniPlayer}>
      {songData ? (
        <div className={classes.PlayerFront}>
          <img
            onClick={onClick}
            className={classes.AlbumPic}
            src={songData.album.images[0].url}
          />
          <div className={classes.SongInfo}>
            <h5 className={classes.SongName}>{songData.name}</h5>
            <h6 className={classes.SongArtist}>{songData.artists[0].name}</h6>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className={classes.Controls}>
        {isPlay ? (
          <FontAwesomeIcon
            onClick={() => {
              pauseTrack(access);
              setPlay(!isPlay);
            }}
            icon={faPause}
            className={classes.Play}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              playTrack(access);
              setPlay(!isPlay);
            }}
            icon={faPlay}
            className={classes.Play}
          />
        )}
        <FontAwesomeIcon
          onClick={() => nextTrack(access).then(res => setPlayerInfo(res))}
          icon={faForward}
          className={classes.Skip}
        />
      </div>
    </div>
  );
};

export const BigPlayer = props => {
  const {
    onClick,
    access,
    isPlay,
    setPlay,
    isShuffle,
    setShuffle,
    songData,
    setPlayerInfo,
  } = props;

  useEffect(() => {
    setPlay(isPlay);
    setShuffle(isShuffle);
  });

  return (
    <div className={classes.BigPlayer}>
      <div className={classes.TopControls}>
        <FontAwesomeIcon
          onClick={onClick}
          icon={faTimes}
          className={classes.Toggle}
        />
        <FontAwesomeIcon icon={faHeart} className={classes.Update} />
      </div>
      <div className={classes.PlayerContent}>
        {songData ? (
          <div className={classes.Album}>
            <img
              className={classes.AlbumPic}
              src={songData.album.images[0].url}
            />
          </div>
        ) : (
          <div className={classes.Album}>
            <div className={classes.Cover}>
              <div />
            </div>
          </div>
        )}
        <div className={classes.Bottom}>
          <div className={classes.SongInfo}>
            <h1 className={classes.SongName}>{songData.name}</h1>
            <h4 className={classes.SongArtist}>{songData.artists[0].name}</h4>
          </div>
          <div className={classes.Controls}>
            <FontAwesomeIcon
              onClick={() =>
                previousTrack(access).then(res => setPlayerInfo(res))
              }
              icon={faBackward}
              className={classes.Skip}
            />
            {isPlay ? (
              <FontAwesomeIcon
                onClick={() => {
                  pauseTrack(access);
                  setPlay(!isPlay);
                }}
                icon={faPauseCircle}
                className={classes.Play}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => {
                  playTrack(access);
                  setPlay(!isPlay);
                }}
                icon={faPlayCircle}
                className={classes.Play}
              />
            )}
            <FontAwesomeIcon
              onClick={() => nextTrack(access).then(res => setPlayerInfo(res))}
              icon={faForward}
              className={classes.Skip}
            />
          </div>
          <div className={classes.Controls2}>
            <FontAwesomeIcon
              onClick={() => {
                toggleShuffle(access, !isShuffle);
                setShuffle(!isShuffle);
              }}
              icon={faRandom}
              className={classes.Skip}
            />
            <FontAwesomeIcon icon={faSyncAlt} className={classes.Skip} />
          </div>
        </div>
      </div>
    </div>
  );
};
