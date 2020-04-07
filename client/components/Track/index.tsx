import React, { useContext } from 'react';
import AppContext from '../AppContext';

// API Calls
import { setPlaying } from '../../actions/spotify';

// Styling
import classes from './track.module.scss';

const Track = props => {
  const { track } = props;
  const { spotifyAccess, setPlayerInfo } = useContext(AppContext);

  return (
    <div className={classes.Track}>
      {track && track.album && track.album.images[0] ? (
        <img className={classes.TrackPic} src={track.album.images[0].url} />
      ) : (
        <div className={classes.TrackPic} />
      )}
      <h5
        className={classes.TrackName}
        onClick={() => setPlaying(spotifyAccess, [track.uri])}
      >
        {track.name}
      </h5>
      <h5 className={classes.TrackArtist}>{track.artists[0].name}</h5>
    </div>
  );
};

export default Track;
