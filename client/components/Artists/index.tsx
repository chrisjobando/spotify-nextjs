// Styling
import classes from './artists.module.scss';

const ArtistCard = props => {
  const { artist } = props;

  return (
    <div className={classes.ArtistCard}>
      {artist && artist.images[0] ? (
        <img className={classes.ArtistPic} src={artist.images[0].url} />
      ) : (
        <div className={classes.ArtistPic} />
      )}
      <h5 className={classes.ArtistName}>{artist.name}</h5>
    </div>
  );
};

export default ArtistCard;
