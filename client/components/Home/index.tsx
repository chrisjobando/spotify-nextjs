import React, { useEffect, useContext, useState } from 'react';
import Anime from 'react-anime';

// Card Components
import TrackCard from '../Track';
import PlaylistCard from '../Playlist';
import ArtistCard from '../Artists';

// Global Context
import AppContext from '../AppContext';

// API Calls
import {
  recentlyPlayed,
  userPlaylists,
  getTopTracks,
  getTopArtists,
  getRecFromArtists,
  getRecFromTracks,
  getSeveralArtist,
} from '../../actions/spotify';

// Styling
import classes from './home.module.scss';

const Home = () => {
  const { spotifyAccess, setTopTracks, setTopArtists } = useContext(AppContext);
  const [recents, setRecents] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [sugArtists, setSugArtists] = useState([]);
  const [sugTracks, setSugTracks] = useState([]);

  useEffect(() => {
    recentlyPlayed(spotifyAccess).then(res => {
      if (res) {
        setRecents(res);
      }
    });

    userPlaylists(spotifyAccess).then(res => {
      if (res) {
        setPlaylists(res);
      }
    });

    getTopArtists(spotifyAccess, 'short_term').then(res => {
      if (res) {
        setTopArtists(res);
        let top5Artists = res.slice(0, 5);
        let artistIds = [];
        top5Artists.forEach(artist => {
          artistIds.push(artist.id);
        });

        let recArtistId = new Set();
        getRecFromArtists(spotifyAccess, artistIds).then(res => {
          if (res) {
            res.forEach(track => {
              recArtistId.add(track.artists[0].id);
            });

            artistIds = Array.from(recArtistId);
            getSeveralArtist(spotifyAccess, artistIds).then(res => {
              if (res) {
                setSugArtists(res);
              }
            });
          }
        });
      }
    });

    getTopTracks(spotifyAccess, 'short_term').then(res => {
      if (res) {
        setTopTracks(res);
        let top5Tracks = res.slice(0, 5);
        let trackIds = [];
        top5Tracks.forEach(track => {
          trackIds.push(track.id);
        });

        getRecFromTracks(spotifyAccess, trackIds).then(res => {
          if (res) {
            setSugTracks(res);
          }
        });
      }
    });
  }, []);

  return (
    <div className={classes.Home}>
      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 300}
      >
        <h1 className={classes.Header} style={{ marginTop: '10px' }}>
          Recently Played
        </h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 500}
          >
            {recents.map(item => (
              <TrackCard key={item.track.id} track={item.track} />
            ))}
          </Anime>
        </div>
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 700}
      >
        <h1 className={classes.Header}>Playlists</h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 900}
          >
            {playlists.map(item => (
              <PlaylistCard key={item.id} playlist={item} />
            ))}
          </Anime>
        </div>
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 1100}
      >
        <h1 className={classes.Header}>Suggested Tracks</h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 1300}
          >
            {sugTracks.map(item => (
              <TrackCard key={item.id} track={item} />
            ))}
          </Anime>
        </div>
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 1500}
      >
        <h1 className={classes.Header}>Suggested Artists</h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 1700}
          >
            {sugArtists.map(item => (
              <ArtistCard key={item.id} artist={item} />
            ))}
          </Anime>
        </div>
      </Anime>
    </div>
  );
};

export default Home;
