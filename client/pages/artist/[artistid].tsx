import { useRouter } from 'next/router';

// Card Components
import AlbumCard from '~/client/components/Album/AlbumCard';

//Styling
import classes from './artist.module.scss';

const Song = props => {
  const { title, artist } = props;
  return (
    <div className={classes.Song}>
      <h1 className={classes.SongTitle}>{title}</h1>
      <h2 className={classes.SongArtist}>{artist}</h2>
    </div>
  );
};

const ArtistPage = () => {
  const router = useRouter();
  const { artistid } = router.query;

  return (
    <div className={classes.ArtistPage}>
      <div className={classes.ArtistHead}>
        <div className={classes.ArtistPic} />
        <h1 className={classes.ArtistName}>Frank Sinatra</h1>
      </div>
      <h1 className={classes.ArtistHeader}>popular songs.</h1>
      <Song
        title="Fly Me To The Moon (In Other Words)"
        artist="Frank Sinatra"
      />
      <Song title="That's Life" artist="Frank Sinatra" />
      <Song title="My Way" artist="Frank Sinatra" />
      <Song title="Come Fly With Me" artist="Frank Sinatra" />
      <Song title="Frank Sinatra" artist="Cake" />
      <h1 className={classes.ArtistHeader}>albums.</h1>
      <div className={classes.AlbumDeck}>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </div>
  );
};

export default ArtistPage;
