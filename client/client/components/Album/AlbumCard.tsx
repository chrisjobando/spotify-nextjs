// Styling
import classes from './album.module.scss';

const AlbumCard = () => (
  <div className={classes.AlbumCard}>
    <div className={classes.AlbumPic} />
    <p className={classes.AlbumName}>drivey</p>
  </div>
);

export default AlbumCard;
