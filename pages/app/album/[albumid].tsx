import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Global Context
import AppContext from '../../../client/components/AppContext';

// API Call
import { getAlbum, setPlaying } from '../../../client/actions/spotify';

// Components
import MiniTrack from 'client/components/Track/miniTrack';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//Styling
import classes from '../../../public/styles/pages/album.module.scss';

const AlbumPage = () => {
  const router = useRouter();
  const { albumid } = router.query;
  const { spotifyAccess } = useContext(AppContext);
  const [albumData, setAlbum] = useState(null);
  const [albumTracks, setAlbumTracks] = useState(null);

  useEffect(() => {
    getAlbum(spotifyAccess, albumid).then(res => {
      if (res) {
        setAlbum(res);
        setAlbumTracks(res.tracks.items);
      }
    });
  }, []);

  return (
    <div className={classes.AlbumPage}>
      <div className={classes.Header}>
        {albumData && albumData.images[0] ? (
          <img className={classes.AlbumPic} src={albumData.images[0].url} />
        ) : (
          <div className={classes.AlbumPic} />
        )}
        {albumData && (
          <div className={classes.AlbumInfo}>
            <h3 className={classes.AlbumName}>{albumData.name}</h3>
            <h5>{albumData.artists[0].name}</h5>
            {albumData.tracks.items.length === 1 ? (
              <h6>{albumData.tracks.items.length} Track</h6>
            ) : (
              <h5>{albumData.tracks.items.length} Tracks</h5>
            )}
            <h5>{parseInt(albumData.release_date)}</h5>
            <FontAwesomeIcon
              onClick={() => {
                setPlaying(spotifyAccess, albumData.uri);
              }}
              icon={faPlay}
              className={classes.Play}
            />
          </div>
        )}
      </div>
      <div className={classes.Content}>
        {albumTracks &&
          albumTracks.map(item => <MiniTrack key={item.id} track={item} />)}
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default AlbumPage;
