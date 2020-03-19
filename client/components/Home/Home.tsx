import Link from 'next/link';

// Components
import RecentTrack from '../RecentlyPlayed/RecentTrack';

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
    </div>
  </div>
);

export default Home;
