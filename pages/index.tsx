import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// API
import { getUser } from '../client/actions/api';

// Components
import Home from '~/client/components/Home/Home';
import { MiniPlayer, BigPlayer } from '~/client/components/Player/Player';

const Index = props => {
  const { authorization, token } = props;
  const [playerState, setPlayerState] = useState(0);
  let authorized = null;

  useEffect(() => {
    authorized = getUser(authorization || token);
  }, []);

  useEffect(() => {
    if (authorized) return;
    Router.push('/login');
  }, [authorized]);

  return (
    <div>
      {authorized && <Home /> &&
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
  const { token } = ctx.query;

  return { authorization, token };
};

export default Index;
