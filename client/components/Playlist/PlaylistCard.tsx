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
      <p className={classes.PlaylistName}>{playlist.name}</p>
    </div>
  );
};

export default PlaylistCard;
