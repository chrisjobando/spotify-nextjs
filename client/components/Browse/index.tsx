import React, { useEffect, useContext, useState } from 'react';
import Anime from 'react-anime';
import { useDebounce } from 'use-debounce';

// Global Context
import AppContext from '../AppContext';

// API Call
import { search } from '../../actions/spotify';

// Components
import TrackCard from '../Track';
import AlbumCard from '../Album';
import Artists from '../Artists';
import PlaylistCard from '../Playlist';

// Styling
import classes from './browse.module.scss';

const Browse = () => {
  const { spotifyAccess } = useContext(AppContext);
  const [searchQuery, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000);
  const [tracks, setTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [artists, setArtists] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    if (debouncedQuery === '') return;

    search(spotifyAccess, encodeURIComponent(debouncedQuery)).then(res => {
      if (res) {
        setTracks(res.tracks.items);
        setAlbums(res.albums.items);
        setArtists(res.artists.items);
        setPlaylists(res.playlists.items);
      }
    });
  }, [debouncedQuery]);

  return (
    <div className={classes.Browse}>
      <input
        placeholder="Search for a song, artist, or album"
        type="text"
        onChange={e => {
          setQuery(e.target.value);
        }}
        className={classes.SearchBar}
      />

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 300}
      >
        {tracks && tracks.length !== 0 && (
          <>
            <h1>Tracks</h1>
            <div className={classes.CardWheel}>
              <Anime
                opacity={[0, 1]}
                translateY={['1em', 0]}
                delay={(_, i) => i * 100 + 500}
              >
                {tracks.map(item => (
                  <TrackCard key={item.id} track={item} />
                ))}
              </Anime>
            </div>
          </>
        )}
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 700}
      >
        {artists && artists.length !== 0 && (
          <>
            <h1>Artists</h1>
            <div className={classes.CardWheel}>
              <Anime
                opacity={[0, 1]}
                translateY={['1em', 0]}
                delay={(_, i) => i * 100 + 900}
              >
                {artists.map(item => (
                  <Artists key={item.id} artist={item} />
                ))}
              </Anime>
            </div>
          </>
        )}
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 1100}
      >
        {albums && albums.length !== 0 && (
          <>
            <h1>Albums</h1>
            <div className={classes.CardWheel}>
              <Anime
                opacity={[0, 1]}
                translateY={['1em', 0]}
                delay={(_, i) => i * 100 + 1300}
              >
                {albums.map(item => (
                  <AlbumCard key={item.id} album={item} />
                ))}
              </Anime>
            </div>
          </>
        )}
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 1500}
      >
        {playlists && playlists.length !== 0 && (
          <>
            <h1>Playlists</h1>
            <div className={classes.CardWheel}>
              <Anime
                opacity={[0, 1]}
                translateY={['1em', 0]}
                delay={(_, i) => i * 100 + 1700}
              >
                {playlists.map(item => (
                  <PlaylistCard key={item.id} playlist={item} />
                ))}
              </Anime>
            </div>
          </>
        )}
      </Anime>
    </div>
  );
};

export default Browse;
