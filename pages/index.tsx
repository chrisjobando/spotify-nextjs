import React, { useEffect, useContext } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// Modify Player Context
import PlayerContext from '../client/components/PlayerContext';

// API
import { getUser } from '../client/actions/api';
import { getCurrentPlayback } from '../client/actions/spotify';

const Index = props => {
  const { authorization } = props;
  const { setPlayerState, setPlayerInfo, setSpotifyAccess } = useContext(
    PlayerContext
  );

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
