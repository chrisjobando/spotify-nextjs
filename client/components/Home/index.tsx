import React, { useEffect, useContext, useState } from 'react';

// Card Components
import RecentTrack from '../RecentTrack';
import PlaylistCard from '../PlaylistCard';

// Styling
import classes from './home.module.scss';

// Global Context
import AppContext from '../AppContext';

// API Calls
import { recentlyPlayed, userPlaylists } from '../../actions/spotify';

const Home = () => {
  const { spotifyAccess } = useContext(AppContext);
  const [recents, setRecents] = useState([]);
  const [playlists, setPlaylists] = useState([]);

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
  }, []);

  return (
    <div className={classes.Home}>
      <h1 className={classes.Header} style={{ marginTop: '10px' }}>
        Recently Played
      </h1>
      <div className={classes.CardWheel}>
        {recents.map(item => (
          <RecentTrack key={item.id} track={item.track} />
        ))}
      </div>

      <h1 className={classes.Header}>Playlists</h1>
      <div className={classes.CardWheel}>
        {playlists.map(item => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>

      <h1 className={classes.Header}>Suggested Artists</h1>
      <div className={classes.CardWheel}>
        {playlists.map(item => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
