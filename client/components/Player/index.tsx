import React, { useState, useContext, useEffect } from 'react';
import PlayerContext from '../PlayerContext';

// Interfaces
import { SongObject } from '../SpotifyObjectInterfaces';

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

const MiniPlayer = props => {
  const { onClick, info } = props;
  const [isPlay, setPlay] = useState<boolean>(false);
  const [songData, setSongData] = useState<SongObject | null>(null);

  useEffect(() => {
    if (info) {
      setPlay(info.is_playing);
      setSongData(info.item);
    }
  }, [info]);

  return (
    <div className={classes.MiniPlayer}>
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
            icon={faPause}
            className={classes.Play}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setPlay(true)}
            icon={faPlay}
            className={classes.Play}
          />
        )}
        <FontAwesomeIcon icon={faForward} className={classes.Skip} />
      </div>
    </div>
  );
};

const BigPlayer = props => {
  const { onClick, info } = props;
  const [isPlay, setPlay] = useState<boolean>(false);
  const [songData, setSongData] = useState<SongObject | null>(null);

  useEffect(() => {
    if (info) {
      setPlay(info.is_playing);
      setSongData(info.item);
    }
  }, [info]);

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
            icon={faRandom}
            className={classes.Skip}
            style={{ marginRight: '30px' }}
          />
          <FontAwesomeIcon icon={faBackward} className={classes.Skip} />
          {isPlay ? (
            <FontAwesomeIcon
              onClick={() => setPlay(false)}
              icon={faPauseCircle}
              className={classes.Play}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setPlay(true)}
              icon={faPlayCircle}
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

export default () => {
  const { playerState, setPlayerState, playerInfo } = useContext(PlayerContext);

  return (
    <>
      {(() => {
        switch (playerState) {
          case 1:
            return (
              <MiniPlayer onClick={() => setPlayerState(2)} info={playerInfo} />
            );
          case 2:
            return (
              <BigPlayer onClick={() => setPlayerState(1)} info={playerInfo} />
            );
          default:
            return <div />;
        }
      })()}
    </>
  );
};
