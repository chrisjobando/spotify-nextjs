import React from 'react';
import Link from 'next/link';

// Styling
import classes from './album.module.scss';

const Album = props => {
  const { album } = props;

  return (
    <div className={classes.Album}>
      {album && album.images[0] ? (
        <Link href="/app/album/[albumid]" as={`/app/album/${album.id}`}>
          <img className={classes.AlbumPic} src={album.images[0].url} />
        </Link>
      ) : (
        <div className={classes.AlbumPic} />
      )}
      <h5 className={classes.AlbumName}>
        <span>{album.name}</span>
      </h5>
      <h5 className={classes.AlbumYear}>{parseInt(album.release_date)}</h5>
    </div>
  );
};

export default Album;
