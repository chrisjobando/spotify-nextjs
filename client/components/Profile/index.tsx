// Card Components
import PlaylistCard from '../Playlist/PlaylistCard';

//Styling
import classes from './profile.module.scss';

const Profile = () => {
  return (
    <div className={classes.ProfilePage}>
      <div className={classes.ProfileHead}>
        <div className={classes.ProfilePic} />
        <h1 className={classes.ProfileName}>Chris Obando</h1>
      </div>
      <h1 className={classes.ProfileHeader}>playlists.</h1>
      <div className={classes.PlaylistDeck}>
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
};

export default Profile;
