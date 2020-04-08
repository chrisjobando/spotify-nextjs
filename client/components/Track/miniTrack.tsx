import React from 'react';

import classes from './track.module.scss';

const MiniTrack = props => {
  const { track } = props;

  return (
    <div className={classes.MiniTrack}>
      {track && track.album && track.album.images[0] ? (
        <img className={classes.TrackPic} src={track.album.images[0].url} />
      ) : (
        <div className={classes.TrackPic} />
      )}
      <div className={classes.TrackInfo}>
        <h5 className={classes.TrackName}>{track.name}</h5>
        <h5>{track.artists[0].name}</h5>
      </div>
    </div>
  );
};

export default MiniTrack;
