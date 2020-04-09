import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Anime from 'react-anime';

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
  const [albumArtists, setAlbumArtists] = useState('');

  useEffect(() => {
    getAlbum(spotifyAccess, albumid).then(res => {
      if (res) {
        setAlbum(res);
        setAlbumTracks(res.tracks.items);

        let artistArr = [];
        res.artists.forEach(artist => {
          artistArr.push(artist.name);
        });
        setAlbumArtists(artistArr.join(', '));
      }
    });
  }, []);

  return (
    <div className={classes.AlbumPage}>
      <div className={classes.Header}>
        <div className={classes.HeaderContent}>
          {albumData && albumData.images[0] ? (
            <img className={classes.AlbumPic} src={albumData.images[0].url} />
          ) : (
            <div className={classes.AlbumPic} />
          )}
          {albumData && (
            <div className={classes.AlbumInfo}>
              <h3 className={classes.AlbumName}>{albumData.name}</h3>
              <Link
                href="/app/artist/[artistid]"
                as={`/app/artist/${albumData.artists[0].id}`}
              >
                <h5 className={classes.AlbumArtist}>{albumArtists}</h5>
              </Link>
              {albumData.tracks.items.length === 1 ? (
                <h6>{albumData.tracks.items.length} Track</h6>
              ) : (
                <h6>{albumData.tracks.items.length} Tracks</h6>
              )}
              <h6>{parseInt(albumData.release_date)}</h6>
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
      </div>
      <div className={classes.Content}>
        <Anime
          opacity={[0, 1]}
          translateX={['1em', 0]}
          delay={(_, i) => i * 100 + 450}
        >
          {albumTracks &&
            albumTracks.map(item => <MiniTrack key={item.id} track={item} />)}
        </Anime>
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default AlbumPage;
