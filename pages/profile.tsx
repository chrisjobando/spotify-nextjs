// Card Components
import PlaylistCard from '~/client/components/Playlist/PlaylistCard';

//Styling
import classes from './profile.module.scss';

const ProfilePage = () => {
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

export default ProfilePage;