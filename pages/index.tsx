import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// API
import { getUser } from '../client/actions/api';

// Components
import Home from '~/client/components/Home/Home';
import { MiniPlayer, BigPlayer } from '~/client/components/Player/Player';

const Index = props => {
  const { authorization } = props;
  const [playerState, setPlayerState] = useState(0);
  const [authorized, setAuthorized] = useState('');

  useEffect(() => {
    const getAuth = async () => {
      const result = await getUser(authorization);
      if (result == null) Router.push('/login');
      else setAuthorized(result.oAuthData);
    };
    getAuth();
    // Apparently Webpack doesn't allow you to push to "/"
    // so I am "cheating" and pushing to index,
    // then cleaning up the url here
    Router.replace('/index', '/');
  }, []);

  return (
    <div>
      {authorized !== '' && <Home />}
      {authorized !== '' &&
        (() => {
          switch (playerState) {
            case 1:
              return <MiniPlayer onClick={() => setPlayerState(2)} />;
            case 2:
              return <BigPlayer onClick={() => setPlayerState(1)} />;
            default:
              return null;
          }
        })()}
    </div>
  );
};

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);

  return { authorization };
};

export default Index;
