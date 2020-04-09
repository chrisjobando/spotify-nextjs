import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';
import Anime from 'react-anime';
import { toast } from 'react-toastify';

// Global Context
import { AppContext } from '../../../client/components/AppContext';

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
  const { spotifyAccess, playerInfo } = useContext(AppContext);
  const [playlistData, setPlaylist] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState(null);
  const [filteredTracks, setFilteredTracks] = useState(null);
  const [sortTerm, setSortTerm] = useState('0');
  const [searchQuery, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000);

  const notifyPlaying = name => toast(name + ' is now playing!');

  const sortByName = (a, b) => {
    if (!b.track || !a.track) return;

    const nameA = a.track.name.toLowerCase();
    const nameB = b.track.name.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

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
        <div className={classes.HeaderContent}>
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
                  if (playerInfo) {
                    setPlaying(spotifyAccess, playlistData.uri);
                    notifyPlaying(playlistData.name);
                  }
                }}
                icon={faPlay}
                className={classes.Play}
              />
            </div>
          )}
        </div>
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

        {/* const trackList = res.sort(sortByName); */}
        <select
          className={classes.Select}
          onChange={event => setSortTerm(event.target.value)}
        >
          <option value="0">Sort by Date Added</option>
          <option value="1">Sort by Track Name</option>
          <option value="2">Sort by Artist Name</option>
        </select>

        <Anime
          opacity={[0, 1]}
          translateX={['1em', 0]}
          delay={(_, i) => i * 50 + 250}
        >
          {filteredTracks &&
            filteredTracks.map(item => (
              <>
                {item.track && (
                  <MiniTrack key={item.track.id} track={item.track} />
                )}
              </>
            ))}
        </Anime>
      </div>
      <div className={classes.BottomPadding} />
    </div>
  );
};

export default PlaylistPage;
