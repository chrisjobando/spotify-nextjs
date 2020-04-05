import React, { useContext, useEffect, useState } from 'react';

// Card Components
import PlaylistCard from '../Playlist/PlaylistCard';

// Global Context
import SpotifyContext from '../SpotifyContext';

// API Calls
import { userPlaylists } from '../../actions/spotify';

//Styling
import classes from './profile.module.scss';

const Profile = () => {
  const { userInfo, spotifyAccess } = useContext(SpotifyContext);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    userPlaylists(spotifyAccess).then(res => {
      if (res) {
        setPlaylists(res);
      }
    });
  }, []);

  return (
    <div className={classes.ProfilePage}>
      <div className={classes.ProfileHead}>
        {userInfo.images[0] ? (
          <img className={classes.ProfilePic} src={userInfo.images[0].url} />
        ) : (
          <div className={classes.ProfilePic} />
        )}
        <h1 className={classes.ProfileName}>{userInfo.display_name}</h1>
      </div>
      <h1 className={classes.ProfileHeader}>playlists.</h1>
      <div className={classes.PlaylistDeck}>
        {playlists.map(item => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
