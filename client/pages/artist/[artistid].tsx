import { useRouter } from 'next/router';
import classes from './artist.module.scss';

const ArtistPage = () => {
  const router = useRouter();
  const { artistid } = router.query;

  return (
    <div className={classes.ArtistPage}>
      <div className={classes.ArtistHead}>
        <div className={classes.ArtistPic} />
        <h1 className={classes.ArtistName}>Frank Sinatra</h1>
      </div>
      <h1 className={classes.ArtistHeader}>songs.</h1>
    </div>
  );
};

export default ArtistPage;
