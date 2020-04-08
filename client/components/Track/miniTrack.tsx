import React, { useContext } from 'react';
import AppContext from '../AppContext';

// API Calls
import { addToQueue } from '../../actions/spotify';

// Styling
import classes from './track.module.scss';

const MiniTrack = props => {
  const { track } = props;
  const { spotifyAccess, playerInfo } = useContext(AppContext);

  const millisToMinSec = (millis: number) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div className={classes.MiniTrack}>
      {track && track.album && track.album.images[0] ? (
        <img
          className={classes.TrackPic}
          src={track.album.images[0].url}
          style={{ marginRight: '15px' }}
        />
      ) : (
        <div />
      )}
      <div className={classes.TrackInfo}>
        <h5
          className={classes.TrackName}
          onClick={() => addToQueue(spotifyAccess, [track.uri])}
          style={{
            color: playerInfo.item.id === track.id ? '#c29dfd' : 'white',
          }}
        >
          {track.name}
        </h5>
        <h5 className={classes.TrackArtist}>{track.artists[0].name}</h5>
        <h5 className={classes.TrackLength}>
          {millisToMinSec(track.duration_ms)}
        </h5>
      </div>
    </div>
  );
};

export default MiniTrack;
