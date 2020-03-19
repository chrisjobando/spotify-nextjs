// Styling
import classes from './playlist.module.scss';

const PlaylistCard = () => (
  <div className={classes.PlaylistCard}>
    <div className={classes.PlaylistPic} />
    <p className={classes.PlaylistName}>drivey</p>
  </div>
);

export default PlaylistCard;
