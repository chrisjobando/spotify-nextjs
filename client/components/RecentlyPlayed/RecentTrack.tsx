// Styling
import classes from './recentTrack.module.scss';

const RecentTrack = props => {
  const { track } = props;
  return (
    <div className={classes.RecentTrack}>
      {track.album.images[0] ? (
        <img className={classes.TrackPic} src={track.album.images[0].url} />
      ) : (
        <div className={classes.TrackPic} />
      )}
      <p className={classes.TrackName}>{track.name}</p>
      <p className={classes.TrackArtist}>{track.artists[0].name}</p>
    </div>
  );
};

export default RecentTrack;
