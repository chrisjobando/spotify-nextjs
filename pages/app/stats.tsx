import React, { useContext, useEffect, useState } from 'react';
import Anime from 'react-anime';

// Global Context
import { AppContext } from '../../client/components/AppContext';

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
    setTopTracks2,
    setTopTracks3,
    setTopArtists2,
    setTopArtists3,
  } = useContext(AppContext);

  const [topArt, setTopArt] = useState([]);
  const [topTrac, setTopTrac] = useState([]);
  const [timeRange, setTimeRange] = useState('short_term');

  useEffect(() => {
    getTopTracks(spotifyAccess, 'medium_term').then(res => {
      if (res) {
        setTopTracks2(res);
      }
    });

    getTopArtists(spotifyAccess, 'medium_term').then(res => {
      if (res) {
        setTopArtists2(res);
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
        <option value="short_term">Past Month</option>
        <option value="medium_term">Past 6 Months</option>
        <option value="long_term">All-Time</option>
      </select>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 300}
      >
        <h1 className={classes.Header}>Favorite Tracks</h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 450}
          >
            {topTrac.map(item => (
              <TrackCard
                key={item.id
                  .split('')
                  .sort(function() {
                    return 0.5 - Math.random();
                  })
                  .join('')}
                track={item}
              />
            ))}
          </Anime>
        </div>
      </Anime>

      <Anime
        opacity={[0, 1]}
        translateY={['1em', 0]}
        delay={(_, i) => i * 100 + 300}
      >
        <h1 className={classes.Header}>Favorite Artists</h1>
        <div className={classes.CardWheel}>
          <Anime
            opacity={[0, 1]}
            translateY={['1em', 0]}
            delay={(_, i) => i * 100 + 450}
          >
            {topArt.map(item => (
              <ArtistCard
                key={item.id
                  .split('')
                  .sort(function() {
                    return 0.5 - Math.random();
                  })
                  .join('')}
                artist={item}
              />
            ))}
          </Anime>
        </div>
      </Anime>
    </div>
  );
};

export default Stats;
