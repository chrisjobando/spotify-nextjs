import React from 'react';
import Link from 'next/link';

// Card Components
import RecentTrack from '../RecentlyPlayed/RecentTrack';
import PlaylistCard from '../Playlist/PlaylistCard';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Styling
import classes from './home.module.scss';

const Home = () => (
  <div className={classes.Home}>
    <FontAwesomeIcon icon={faBars} className={classes.MenuIcon} />
    <h1 className={classes.Header}>recently played.</h1>
    <div className={classes.RecentTrackWheel}>
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
      <RecentTrack />
    </div>
    <Link href="/profile">
      <p className={`${classes.Header} ${classes.HeaderLink}`}>playlists. ></p>
    </Link>
    <div className={classes.PlaylistWheel}>
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
    </div>
    <Link href="/toptracks">
      <p className={`${classes.Header} ${classes.HeaderLink2}`}>
        top tracks. >
      </p>
    </Link>
    <Link href="/topartists">
      <p className={`${classes.Header} ${classes.HeaderLink2}`}>
        top artists. >
      </p>
    </Link>
    <Link href="/suggested">
      <p className={`${classes.Header} ${classes.HeaderLink}`}>suggested. ></p>
    </Link>
  </div>
);

export default Home;
