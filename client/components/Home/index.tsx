import React, { useEffect, useContext, useState } from 'react';

// Card Components
import TrackCard from '../Track';
import PlaylistCard from '../PlaylistCard';
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
  getArtist,
} from '../../actions/spotify';

// Styling
import classes from './home.module.scss';

const Home = () => {
  const { spotifyAccess, setTopTracks2, setTopArtists2 } = useContext(
    AppContext
  );
  const [recents, setRecents] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [sugArtists, setSugArtists] = useState([]);
  const [sugTracks, setSugTracks] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

    getTopArtists(spotifyAccess, 'medium_term').then(res => {
      if (res) {
        setTopArtists2(res);
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

            let sugArtistList = [];

            recArtistId.forEach(id => {
              getArtist(spotifyAccess, id).then(res => {
                if (res) {
                  sugArtistList.push(res);
                }
              });
            });
            setSugArtists(sugArtistList);
          }
        });
      }
    });

    getTopTracks(spotifyAccess, 'medium_term').then(res => {
      if (res) {
        setTopTracks2(res);
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
      <h1 className={classes.Header} style={{ marginTop: '10px' }}>
        Recently Played
      </h1>
      <div className={classes.CardWheel}>
        {recents.map(item => (
          <TrackCard key={item.track.id} track={item.track} />
        ))}
      </div>

      <h1 className={classes.Header}>Playlists</h1>
      <div className={classes.CardWheel}>
        {playlists.map(item => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>

      <h1 className={classes.Header}>Suggested Tracks</h1>
      <div className={classes.CardWheel}>
        {sugTracks.map(item => (
          <TrackCard key={item.id} track={item} />
        ))}
      </div>

      <h1 className={classes.Header}>Suggested Artists</h1>
      <div className={classes.CardWheel}>
        {sugArtists.map(item => (
          <ArtistCard key={item.id} artist={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
