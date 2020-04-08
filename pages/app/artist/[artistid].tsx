import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const [albums, setAlbums] = useState([]);
  const [singles, setSingles] = useState([]);
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
  }, []);

  return (
    <div className={classes.ArtistPage}>
      <div className={classes.Header}>
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
      <div className={classes.Content}>
        <h1>Popular Tracks</h1>
        <div className={classes.CardWheel}>
          {popular.map(item => (
            <TrackCard key={item.id} track={item} />
          ))}
        </div>

        <h1>Albums</h1>
        <div className={classes.CardWheel}>
          {albums.map(item => (
            <AlbumCard key={item.id} album={item} />
          ))}
        </div>

        <h1>Singles</h1>
        <div className={classes.CardWheel}>
          {singles.map(item => (
            <AlbumCard key={item.id} album={item} />
          ))}
        </div>

        <h1>Similar Artists</h1>
        <div className={classes.CardWheel}>
          {sugArtists.map(item => (
            <ArtistCard key={item.id} artist={item} />
          ))}
        </div>
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default ArtistPage;
