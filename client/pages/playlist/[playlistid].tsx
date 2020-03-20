import { useRouter } from 'next/router';

//Styling
import classes from './playlist.module.scss';

const Song = props => {
  const { title, artist } = props;
  return (
    <div className={classes.Song}>
      <h1 className={classes.SongTitle}>{title}</h1>
      <h2 className={classes.SongArtist}>{artist}</h2>
    </div>
  );
};

const PlaylistPage = () => {
  const router = useRouter();
  const { playlistid } = router.query;

  return <div className={classes.PlaylistPage}></div>;
};

export default PlaylistPage;
