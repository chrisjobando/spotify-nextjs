// Styling
import classes from './playlist.module.scss';

const PlaylistCard = props => {
  const { playlist } = props;

  return (
    <div className={classes.PlaylistCard}>
      {playlist && playlist.images[0] ? (
        <img className={classes.PlaylistPic} src={playlist.images[0].url} />
      ) : (
        <div className={classes.PlaylistPic} />
      )}
      <h5 className={classes.PlaylistName}>{playlist.name}</h5>
      <h5 className={classes.TrackNumber}>{playlist.tracks.total} Tracks</h5>
    </div>
  );
};

export default PlaylistCard;
