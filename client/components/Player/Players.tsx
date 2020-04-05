import React, { useEffect } from 'react';

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
            className={classes.AlbumPic}
            src={songData.album.images[0].url}
          />
          <div className={classes.SongInfo}>
            <h1 className={classes.SongName}>{songData.name}</h1>
            <h2 className={classes.SongArtist}>{songData.artists[0].name}</h2>
          </div>
        </div>
      ) : (
        <div />
      )}
      <FontAwesomeIcon
        onClick={onClick}
        icon={faChevronUp}
        className={classes.Toggle}
      />
      <div className={classes.Controls}>
        <FontAwesomeIcon
          onClick={() => previousTrack(access).then(res => setPlayerInfo(res))}
          icon={faBackward}
          className={classes.Skip}
        />
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
        {songData ? (
          <>
            <img
              className={classes.AlbumPic}
              src={songData.album.images[0].url}
            />
            <div className={classes.SongInfo}>
              <h1 className={classes.SongName}>{songData.name}</h1>
              <h2 className={classes.SongArtist}>{songData.artists[0].name}</h2>
            </div>
          </>
        ) : (
          <div />
        )}
        <div className={classes.Controls}>
          <FontAwesomeIcon
            onClick={() => {
              toggleShuffle(access, !isShuffle);
              setShuffle(!isShuffle);
            }}
            icon={faRandom}
            className={classes.Skip}
            style={{ marginRight: '30px' }}
          />
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
