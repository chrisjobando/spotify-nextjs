import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

// Global Context
import { AppContext } from '../AppContext';

// API Calls
import { addToQueue } from '../../actions/spotify';

// Styling
import classes from './track.module.scss';

const MiniTrack = props => {
  const { track } = props;
  const { spotifyAccess, playerInfo } = useContext(AppContext);
  const [trackArtists, setTrackArtists] = useState('');
  const notifyQueue = name => toast(name + ' added to queue!');

  useEffect(() => {
    let artistArr = [];
    track.artists.forEach(artist => {
      artistArr.push(artist.name);
    });
    setTrackArtists(artistArr.join(', '));
  }, []);

  const millisToMinSec = (millis: number) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div className={classes.MiniTrack}>
      {track && track.album && track.album.images[0] ? (
        <Link href="/app/album/[albumid]" as={`/app/album/${track.album.id}`}>
          <img
            className={classes.TrackPic}
            src={track.album.images[0].url}
            style={{ marginRight: '15px' }}
          />
        </Link>
      ) : (
        <div />
      )}
      <div className={classes.TrackInfo}>
        <h5
          className={classes.TrackName}
          onClick={() => {
            addToQueue(spotifyAccess, [track.uri]);
            notifyQueue(track.name);
          }}
          style={{
            color:
              playerInfo && playerInfo.item.id === track.id
                ? '#c29dfd'
                : 'white',
          }}
        >
          {track.name}
        </h5>
        <Link
          href="/app/artist/[artistid]"
          as={`/app/artist/${track.artists[0].id}`}
        >
          <h5 className={classes.TrackArtist}>{trackArtists}</h5>
        </Link>
        <h5 className={classes.TrackLength}>
          {millisToMinSec(track.duration_ms)}
        </h5>
      </div>
    </div>
  );
};

export default MiniTrack;
