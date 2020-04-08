import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';

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
  const [playlistTracks, setPlaylistTracks] = useState(null);
  const [filteredTracks, setFilteredTracks] = useState(null);
  const [searchQuery, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000);

  useEffect(() => {
    getPlaylist(spotifyAccess, playlistid).then(res => {
      if (res) {
        setPlaylist(res);
      }
    });

    getPlaylistTracks(spotifyAccess, playlistid).then(res => {
      if (res) {
        setPlaylistTracks(res);
        setFilteredTracks(res);
      }
    });
  }, []);

  useEffect(() => {
    if (playlistTracks) {
      const results = playlistTracks.filter(track => {
        let artistNameFlag = false;

        track.track.artists.forEach(artist => {
          if (
            artist.name.toLowerCase().includes(debouncedQuery.toLowerCase())
          ) {
            artistNameFlag = true;
          }
        });

        return (
          track.track.name
            .toLowerCase()
            .includes(debouncedQuery.toLowerCase()) ||
          track.track.album.name
            .toLowerCase()
            .includes(debouncedQuery.toLowerCase()) ||
          artistNameFlag
        );
      });
      setFilteredTracks(results);
    }
  }, [debouncedQuery]);

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
            <h3 className={classes.PlaylistName}>{playlistData.name}</h3>

            {playlistData.tracks.total === 1 ? (
              <h5>{playlistData.tracks.total} Track</h5>
            ) : (
              <h5>{playlistData.tracks.total} Tracks</h5>
            )}

            {playlistData.followers.total === 1 ? (
              <h5>{playlistData.followers.total} Follower</h5>
            ) : (
              <h5>{playlistData.followers.total} Followers</h5>
            )}

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
        <input
          placeholder="Search for a song, artist, or album"
          type="text"
          onChange={e => {
            setQuery(e.target.value);
          }}
          className={classes.SearchBar}
        />

        {filteredTracks &&
          filteredTracks.map(item => (
            <MiniTrack key={item.track.id} track={item.track} />
          ))}
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default PlaylistPage;
