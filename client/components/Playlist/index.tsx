import React from 'react';
import Link from 'next/link';

// Styling
import classes from './playlist.module.scss';

const PlaylistCard = props => {
  const { playlist } = props;

  return (
    <div className={classes.PlaylistCard}>
      {playlist && playlist.images[0] ? (
        <Link
          href="/app/playlist/[playlistid]"
          as={`/app/playlist/${playlist.id}`}
        >
          <img className={classes.PlaylistPic} src={playlist.images[0].url} />
        </Link>
      ) : (
        <div className={classes.PlaylistPic} />
      )}
      <h5 className={classes.PlaylistName}>{playlist.name}</h5>
      <h5 className={classes.TrackNumber}>{playlist.tracks.total} Tracks</h5>
    </div>
  );
};

export default PlaylistCard;
