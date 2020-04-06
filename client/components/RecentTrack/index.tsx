// Styling
import classes from './recentTrack.module.scss';

const RecentTrack = props => {
  const { track } = props;
  return (
    <div className={classes.RecentTrack}>
      {track && track.album && track.album.images[0] ? (
        <img className={classes.TrackPic} src={track.album.images[0].url} />
      ) : (
        <div className={classes.TrackPic} />
      )}
      <h5 className={classes.TrackName}>{track.name}</h5>
      <h5 className={classes.TrackArtist}>{track.artists[0].name}</h5>
    </div>
  );
};

export default RecentTrack;
