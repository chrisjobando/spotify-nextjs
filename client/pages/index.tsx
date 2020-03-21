import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import { parseCookies } from 'nookies';

// Components
import Login from '~/client/components/Login/Login';
import Home from '~/client/components/Home/Home';
import { MiniPlayer, BigPlayer } from '~/client/components/Player/Player';

const Index = props => {
  const { authorization } = props;
  const [playerState, setPlayerState] = useState(0);

  useEffect(() => {
    if (authorization) return;
    Router.replace('/', '/login', { shallow: true });
  });

  return (
    <div>
      {!authorization ? <Login /> : <Home />}
      {(() => {
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

async function getUser(authorization) {
  const res = await fetch('http://localhost:3001/user');

  if (res.status === 200) return { authorization, user: res.data };
  else return { authorization };
}

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  const { token } = ctx.query;

  const props = getUser(authorization || token);
  return props;
};

export default Index;
