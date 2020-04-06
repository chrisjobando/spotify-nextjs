import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// Global Context
import AppContext from '../client/components/AppContext';

// API
import { getUser } from '../client/actions/api';
import {
  getCurrentPlayback,
  getUserProfile,
  getTopTracks,
  getTopArtists,
} from '../client/actions/spotify';

const Index = props => {
  const { authorization } = props;
  const {
    setPlayerState,
    setPlayerInfo,
    setSpotifyAccess,
    setUserInfo,
    setTopTracks,
    setTopTracks2,
    setTopTracks3,
    setTopArtists,
    setTopArtists2,
    setTopArtists3,
  } = useContext(AppContext);

  useEffect(() => {
    const getAuth = () => {
      getUser(authorization).then(res => {
        if (!res.user) {
          Router.push('/login');
          return;
        }

        setSpotifyAccess(res.user.access);
        getCurrentPlayback(res.user.access).then(res => {
          if (res) {
            setPlayerState(1);
            setPlayerInfo(res);
          }
        });

        getUserProfile(res.user.access).then(res => {
          if (res) {
            setUserInfo(res);
          }
        });

        getTopTracks(res.user.access, 'short_term').then(res => {
          if (res) {
            setTopTracks(res);
          }
        });

        getTopTracks(res.user.access, 'medium_term').then(res => {
          if (res) {
            setTopTracks2(res);
          }
        });

        getTopTracks(res.user.access, 'long_term').then(res => {
          if (res) {
            setTopTracks3(res);
          }
        });

        getTopArtists(res.user.access, 'short_term').then(res => {
          if (res) {
            setTopArtists(res);
          }
        });

        getTopArtists(res.user.access, 'medium_term').then(res => {
          if (res) {
            setTopArtists2(res);
          }
        });

        getTopArtists(res.user.access, 'long_term').then(res => {
          if (res) {
            setTopArtists3(res);
          }
        });

        Router.push('/app');
      });
    };
    getAuth();
  }, []);

  return <div></div>;
};

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  return { authorization };
};

export default Index;
