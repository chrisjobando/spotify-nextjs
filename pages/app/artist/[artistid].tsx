import React, { useContext, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

// Components
// Card Components
import TrackCard from '../../../client/components/Track';
import AlbumCard from '../../../client/components/Album';
import ArtistCard from '../../../client/components/Artists';

// Global Context
import AppContext from '../../../client/components/AppContext';

// API Call
import {
  getArtist,
  getArtistTopTracks,
  getArtistAlbums,
  getArtistSingles,
  getArtistSimilar,
} from '../../../client/actions/spotify';

//Styling
import classes from '../../../public/styles/pages/artist.module.scss';

const ArtistPage = () => {
  const router = useRouter();
  const { artistid } = router.query;
  const { spotifyAccess } = useContext(AppContext);
  const [artistData, setArtist] = useState(null);
  const [popular, setPopular] = useState([]);
  const [albums, setAlbums] = useState(null);
  const [singles, setSingles] = useState(null);
  const [sugArtists, setSugArtists] = useState([]);

  useEffect(() => {
    getArtist(spotifyAccess, artistid).then(res => {
      if (res) {
        setArtist(res);
      }
    });

    getArtistTopTracks(spotifyAccess, artistid).then(res => {
      if (res) {
        setPopular(res);
      }
    });

    getArtistAlbums(spotifyAccess, artistid).then(res => {
      if (res) {
        setAlbums(res);
      }
    });

    getArtistSingles(spotifyAccess, artistid).then(res => {
      if (res) {
        setSingles(res);
      }
    });

    getArtistSimilar(spotifyAccess, artistid).then(res => {
      if (res) {
        setSugArtists(res);
      }
    });
  }, [router.query.artistid]);

  return (
    <div className={classes.ArtistPage}>
      <div className={classes.Header}>
        <div className={classes.HeaderContent}>
          {artistData && artistData.images[0] ? (
            <img className={classes.ArtistPic} src={artistData.images[0].url} />
          ) : (
            <div className={classes.ArtistPic} />
          )}
          {artistData && (
            <div className={classes.ArtistInfo}>
              <h1 className={classes.ArtistName}>{artistData.name}</h1>
              <h5 className={classes.ArtistGenre}>
                {artistData.genres.join(', ')}
              </h5>
              <h5 className={classes.ArtistPopularity}>
                <span style={{ fontWeight: 'bold' }}>Popularity: </span>
                {artistData.popularity}%
              </h5>
            </div>
          )}
        </div>
      </div>
      <div className={classes.Content}>
        {popular && popular.length !== 0 && (
          <>
            <h1>Popular Tracks</h1>
            <div className={classes.CardWheel}>
              {popular.map(item => (
                <TrackCard key={item.id} track={item} />
              ))}
            </div>
          </>
        )}
        {albums && albums.length !== 0 && (
          <>
            <h1>Albums</h1>
            <div className={classes.CardWheel}>
              {albums.map(item => (
                <AlbumCard key={item.id} album={item} />
              ))}
            </div>
          </>
        )}

        {singles && singles.length !== 0 && (
          <>
            <h1>Singles</h1>
            <div className={classes.CardWheel}>
              {singles.map(item => (
                <AlbumCard key={item.id} album={item} />
              ))}
            </div>
          </>
        )}
        {sugArtists && sugArtists.length !== 0 && (
          <>
            <h1>Similar Artists</h1>
            <div className={classes.CardWheel}>
              {sugArtists.map(item => (
                <ArtistCard key={item.id} artist={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default ArtistPage;
