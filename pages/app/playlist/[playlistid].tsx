import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Global Context
import AppContext from '../../../client/components/AppContext';

// API Call
import {
  getPlaylist,
  getPlaylistTracks,
  setPlaying,
} from '../../../client/actions/spotify';

// Components
import MiniTrack from 'client/components/Track/miniTrack';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//Styling
import classes from '../../../public/styles/pages/playlist.module.scss';

const PlaylistPage = () => {
  const router = useRouter();
  const { playlistid } = router.query;
  const { spotifyAccess } = useContext(AppContext);
  const [playlistData, setPlaylist] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    getPlaylist(spotifyAccess, playlistid).then(res => {
      if (res) {
        setPlaylist(res);
      }
    });

    getPlaylistTracks(spotifyAccess, playlistid).then(res => {
      if (res) {
        setPlaylistTracks(res.items);
      }
    });
  }, []);

  return (
    <div className={classes.PlaylistPage}>
      <div className={classes.Header}>
        {playlistData && playlistData.images[0] ? (
          <img
            className={classes.PlaylistPic}
            src={playlistData.images[0].url}
          />
        ) : (
          <div className={classes.PlaylistPic} />
        )}
        {playlistData && (
          <div className={classes.PlaylistInfo}>
            <h3>{playlistData.name}</h3>
            <h5>{playlistData.tracks.total} Tracks</h5>
            <h5>{playlistData.followers.total} Followers</h5>
            <FontAwesomeIcon
              onClick={() => {
                setPlaying(spotifyAccess, playlistData.uri);
              }}
              icon={faPlay}
              className={classes.Play}
            />
          </div>
        )}
      </div>
      <div className={classes.Content}>
        {playlistTracks.map(item => {
          <MiniTrack key={item.track.id} track={item.track} />;
        })}
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default PlaylistPage;
