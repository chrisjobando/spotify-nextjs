import React, { useContext } from 'react';
import Link from 'next/link';

// Global Context
import AppContext from '../AppContext';

// API Calls
import { addToQueue } from '../../actions/spotify';

// Styling
import classes from './track.module.scss';

const Track = props => {
  const { track } = props;
  const { spotifyAccess } = useContext(AppContext);

  return (
    <div className={classes.Track}>
      {track && track.album && track.album.images[0] ? (
        <Link href="/app/album/[albumid]" as={`/app/album/${track.album.id}`}>
          <img className={classes.TrackPic} src={track.album.images[0].url} />
        </Link>
      ) : (
        <div className={classes.TrackPic} />
      )}
      <h5
        className={classes.TrackName}
        onClick={() => addToQueue(spotifyAccess, [track.uri])}
      >
        <span>{track.name}</span>
      </h5>
      <Link
        href="/app/artist/[artistid]"
        as={`/app/artist/${track.artists[0].id}`}
      >
        <h5 className={classes.TrackArtist}>{track.artists[0].name}</h5>
      </Link>
    </div>
  );
};

export default Track;
