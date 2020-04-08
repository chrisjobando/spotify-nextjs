import React from 'react';

import classes from './track.module.scss';

const MiniTrack = props => {
  const { trackData } = props;

  return (
    <div>
      {trackData && trackData.images[0] ? (
        <img className={classes.TrackPic} src={trackData.images[0].url} />
      ) : (
        <div className={classes.TrackPic} />
      )}
      <div className={classes.TrackInfo}>
        <h3>{trackData.name}</h3>
        <h5>{trackData.artists[0].name}</h5>
      </div>
    </div>
  );
};

export default MiniTrack;
