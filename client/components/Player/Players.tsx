import React, { useEffect } from 'react';
import Link from 'next/link';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
  faPlus,
  faPlayCircle,
  faPauseCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// API Calls
import {
  previousTrack,
  nextTrack,
  pauseTrack,
  playTrack,
  toggleShuffle,
  toggleRepeat,
} from '../../actions/spotify';

// Styling
import classes from './player.module.scss';

export const MiniPlayer = props => {
  const { onClick, access, isPlay, setPlay, songData } = props;

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
          onClick={() => nextTrack(access)}
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
    repeatState,
    setRepeat,
    songData,
  } = props;

  useEffect(() => {
    setPlay(isPlay);
    setShuffle(isShuffle);
    setRepeat(repeatState);
  });

  return (
    <div className={classes.BigPlayer}>
      <div className={classes.TopControls}>
        <FontAwesomeIcon
          onClick={onClick}
          icon={faTimes}
          className={classes.Toggle}
        />
        <FontAwesomeIcon icon={faPlus} className={classes.Update} />
      </div>
      <div className={classes.PlayerContent}>
        {songData ? (
          <img
            className={classes.AlbumPic}
            src={songData.album.images[0].url}
          />
        ) : (
          <div className={classes.AlbumPic} />
        )}
        <div className={classes.Bottom}>
          <div className={classes.SongInfo}>
            <Link
              href="/app/album/[albumid]"
              as={`/app/album/${songData.album.id}`}
            >
              <h1 onClick={onClick} className={classes.SongName}>
                {songData.name}
              </h1>
            </Link>
            <Link
              href="/app/artist/[artistid]"
              as={`/app/artist/${songData.artists[0].id}`}
            >
              <h4 onClick={onClick} className={classes.SongArtist}>
                {songData.artists[0].name}
              </h4>
            </Link>
          </div>
          <div className={classes.Controls}>
            <FontAwesomeIcon
              onClick={() => previousTrack(access)}
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
              onClick={() => nextTrack(access)}
              icon={faForward}
              className={classes.Skip}
            />
          </div>
          <div className={classes.Controls2}>
            <h3
              onClick={() => {
                toggleShuffle(access, !isShuffle);
                setShuffle(!isShuffle);
              }}
              className={classes.Shuffle}
            >
              Shuffle: {isShuffle ? 'On' : 'Off'}
            </h3>
            <h3
              onClick={() => {
                let newState = '';
                if (repeatState == 'track') {
                  newState = 'context';
                } else if (repeatState == 'context') {
                  newState = 'off';
                } else {
                  newState = 'track';
                }

                toggleRepeat(access, newState);
                setRepeat(newState);
              }}
              className={classes.Repeat}
            >
              Repeat: {repeatState}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
