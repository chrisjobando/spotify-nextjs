import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';

// Card Components
import RecentTrack from '../RecentlyPlayed/RecentTrack';
import PlaylistCard from '../Playlist/PlaylistCard';

// Styling
import classes from './home.module.scss';

// Global Context
import SpotifyContext from '../SpotifyContext';

// API Calls
import { recentlyPlayed, userPlaylists } from '../../actions/spotify';

const Home = () => {
  const { spotifyAccess } = useContext(SpotifyContext);
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
      <h1 className={classes.Header}>Recently Played</h1>
      <div className={classes.RecentTrackWheel}>
        {recents.map(item => (
          <RecentTrack key={item.id} track={item.track} />
        ))}
      </div>
      <Link href="/profile">
        <p className={`${classes.Header} ${classes.HeaderLink}`}>Playlists</p>
      </Link>
      <div className={classes.PlaylistWheel}>
        {playlists.map(item => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>
      <Link href="/toptracks">
        <p className={`${classes.Header} ${classes.HeaderLink2}`}>
          Top Tracks >
        </p>
      </Link>
      <Link href="/topartists">
        <p className={`${classes.Header} ${classes.HeaderLink2}`}>
          Top Artists >
        </p>
      </Link>
      <Link href="/suggested">
        <p className={`${classes.Header} ${classes.HeaderLink}`}>Suggested ></p>
      </Link>
    </div>
  );
};

export default Home;
