import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

// Global Context
import { AppContext } from '../AppContext';

// API Calls
import { addToQueue } from '../../actions/spotify';

// Styling
import classes from './track.module.scss';

const Track = props => {
  const { track } = props;
  const { spotifyAccess, playerState } = useContext(AppContext);
  const [trackArtists, setTrackArtists] = useState('');
  const notifyQueue = name => toast(name + ' added to queue!');

  useEffect(() => {
    let artistArr = [];
    track.artists.forEach(artist => {
      artistArr.push(artist.name);
    });
    setTrackArtists(artistArr.join(', '));
  }, []);

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
        onClick={() => {
          if (playerState !== 0) {
            notifyQueue(track.name);
            addToQueue(spotifyAccess, [track.uri]);
          }
        }}
      >
        <span>{track.name}</span>
      </h5>
      <Link
        href="/app/artist/[artistid]"
        as={`/app/artist/${track.artists[0].id}`}
      >
        <h5 className={classes.TrackArtist}>{trackArtists}</h5>
      </Link>
    </div>
  );
};

export default Track;
