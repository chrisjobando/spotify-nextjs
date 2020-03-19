// Styling
import classes from './recentTrack.module.scss';

const RecentTrack = () => (
  <div className={classes.RecentTrack}>
    <div className={classes.TrackPic} />
    <p className={classes.TrackName}>Gabriel</p>
    <p className={classes.TrackArtist}>Y La Bamba</p>
  </div>
);

export default RecentTrack;
