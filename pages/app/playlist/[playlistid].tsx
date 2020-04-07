import React, { useContext } from 'react';
import { useRouter } from 'next/router';

// Global Context
import AppContext from '../../../client/components/AppContext';

//Styling
import classes from '../../../public/styles/pages/playlist.module.scss';

const PlaylistPage = () => {
  const router = useRouter();
  const { playlistid } = router.query;
  const { spotifyAccess } = useContext(AppContext);

  return <div className={classes.PlaylistPage}>{playlistid}</div>;
};

export default PlaylistPage;
