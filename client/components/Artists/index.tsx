import React from 'react';
import Link from 'next/link';

// Styling
import classes from './artists.module.scss';

const ArtistCard = props => {
  const { artist } = props;

  return (
    <div className={classes.ArtistCard}>
      {artist && artist.images[0] ? (
        <img className={classes.ArtistPic} src={artist.images[0].url} />
      ) : (
        <div className={classes.ArtistPic} />
      )}
      <Link href="/app/artist/[artistid]" as={`/app/artist/${artist.id}`}>
        <h5 className={classes.ArtistName}>{artist.name}</h5>
      </Link>
    </div>
  );
};

export default ArtistCard;
