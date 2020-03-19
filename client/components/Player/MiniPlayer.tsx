import classes from './player.module.scss';

const MiniPlayer = () => (
  <div className={classes.MiniPlayer}>
    <div className={classes.AlbumPic} />
    <div className={classes.SongInfo}>
      <h1 className={classes.SongName}>Sticky</h1>
      <h2 className={classes.SongArtist}>Ravyn Lenae</h2>
    </div>
  </div>
);

export default MiniPlayer;
