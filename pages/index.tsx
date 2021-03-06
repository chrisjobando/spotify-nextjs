import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// Global Context
import { AppContext } from '../client/components/AppContext';

// API
import { getUser } from '../client/actions/api';
import { getCurrentPlayback, getUserProfile } from '../client/actions/spotify';

const Index = props => {
  const { authorization } = props;
  const {
    setPlayerState,
    setPlayerInfo,
    setSpotifyAccess,
    setUserInfo,
    setClean,
    setUserAuth,
  } = useContext(AppContext);

  useEffect(() => {
    const getAuth = () => {
      getUser(authorization).then(res => {
        if (!res.user) {
          Router.push('/login');
          return;
        }

        setUserAuth(res.user._id);

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

        setClean(res.user.clean);

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
