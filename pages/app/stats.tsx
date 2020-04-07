import React, { useContext, useEffect, useState } from 'react';

// Global Context
import AppContext from '../../client/components/AppContext';

// API Calls
import { getTopTracks, getTopArtists } from '../../client/actions/spotify';

// Card Components
import TrackCard from '../../client/components/Track';
import ArtistCard from '../../client/components/Artists';

// Page Styling
import classes from '../../public/styles/pages/stats.module.scss';

const Stats = () => {
  const {
    spotifyAccess,
    topTracks,
    topTracks2,
    topTracks3,
    topArtists,
    topArtists2,
    topArtists3,
    setTopTracks,
    setTopTracks3,
    setTopArtists,
    setTopArtists3,
  } = useContext(AppContext);

  const [topArt, setTopArt] = useState([]);
  const [topTrac, setTopTrac] = useState([]);
  const [timeRange, setTimeRange] = useState('medium_term');

  useEffect(() => {
    getTopTracks(spotifyAccess, 'short_term').then(res => {
      if (res) {
        setTopTracks(res);
      }
    });

    getTopArtists(spotifyAccess, 'short_term').then(res => {
      if (res) {
        setTopArtists(res);
      }
    });
    getTopTracks(spotifyAccess, 'long_term').then(res => {
      if (res) {
        setTopTracks3(res);
      }
    });

    getTopArtists(spotifyAccess, 'long_term').then(res => {
      if (res) {
        setTopArtists3(res);
      }
    });
  }, []);

  useEffect(() => {
    if (timeRange === 'short_term') {
      setTopArt(topArtists);
      setTopTrac(topTracks);
    } else if (timeRange === 'medium_term') {
      setTopArt(topArtists2);
      setTopTrac(topTracks2);
    } else {
      setTopArt(topArtists3);
      setTopTrac(topTracks3);
    }
  }, [timeRange]);

  return (
    <div className={classes.Stats}>
      <select
        className={classes.Select}
        onChange={event => setTimeRange(event.target.value)}
      >
        <option value="medium_term">Past 6 Months</option>
        <option value="short_term">Past Month</option>
        <option value="long_term">All-Time</option>
      </select>

      <h1 className={classes.Header}>Favorite Tracks</h1>
      <div className={classes.CardWheel}>
        {topTrac.map(item => (
          <TrackCard key={item.id} track={item} />
        ))}
      </div>

      <h1 className={classes.Header}>Favorite Artists</h1>
      <div className={classes.CardWheel}>
        {topArt.map(item => (
          <ArtistCard key={item.id} artist={item} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
