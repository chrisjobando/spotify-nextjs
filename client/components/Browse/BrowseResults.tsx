// Styling
import classes from './browse.module.scss';

const Song = props => {
  const { title, artist } = props;
  return (
    <div className={classes.Song}>
      <h1 className={classes.SongTitle}>{title}</h1>
      <h2 className={classes.SongArtist}>{artist}</h2>
    </div>
  );
};

const Artist = props => {
  const { artistPic, artistName } = props;
  return (
    <div className={classes.Artist}>
      <div className={classes.ArtistPic} />
      <h1 className={classes.ArtistName}>{artistName}</h1>
    </div>
  );
};

const Album = props => {
  const { albumPic, albumName, albumYear } = props;
  return (
    <div className={classes.Album}>
      <div className={classes.AlbumPic} />
      <div className={classes.AlbumInfo}>
        <h1 className={classes.AlbumName}>{albumName}</h1>
        <h2 className={classes.AlbumYear}>{albumYear}</h2>
      </div>
    </div>
  );
};

const Playlist = props => {
  const { playlistName, numTracks } = props;
  return (
    <div className={classes.Playlist}>
      <div className={classes.PlaylistPic} />
      <div className={classes.PlaylistInfo}>
        <h1 className={classes.PlaylistName}>{playlistName}</h1>
        <h2 className={classes.NumTracks}>{numTracks} tracks</h2>
      </div>
    </div>
  );
};

const BrowseResults = () => (
  <div className={classes.BrowseResults}>
    <h1 className={classes.ResultsHeader}>songs.</h1>
    <Song title="Fly Me To The Moon (In Other Words)" artist="Frank Sinatra" />
    <Song title="That's Life" artist="Frank Sinatra" />
    <Song title="My Way" artist="Frank Sinatra" />
    <Song title="Come Fly With Me" artist="Frank Sinatra" />
    <Song title="Frank Sinatra" artist="Cake" />
    <h1 className={classes.ResultsHeader}>artists.</h1>
    <Artist artistName="Frank Sinatra" />
    <Artist artistName="Frank Sinatra Jr." />
    <Artist artistName="Frank Sinatra and Tommy Dorsey" />
    <h1 className={classes.ResultsHeader}>albums.</h1>
    <Album
      albumName="Frank Sinatra: The Complete Collection"
      albumYear="1996"
    />
    <Album
      albumName="Frank Sinatra: The Complete Collection"
      albumYear="1996"
    />
    <Album
      albumName="Frank Sinatra: The Complete Collection"
      albumYear="1996"
    />
    <h1 className={classes.ResultsHeader}>playlists.</h1>
    <Playlist playlistName="drivey" numTracks={12} />
    <div className={classes.PlaylistWheel}>
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
    </div>
  </div>
);

export default BrowseResults;
