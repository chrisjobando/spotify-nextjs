import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';
import { parseCookies } from 'nookies';

// Components
import Login from '~/components/Login/Login';
import Home from '~/components/Home/Home';
import { MiniPlayer, BigPlayer } from '~/components/Player/Player';

const Index = props => {
  const { authorization } = props;
  const [playerState, setPlayerState] = useState(2);

  return (
    <div>
      {!authorization ? <Login /> : <Home />}
      {(() => {
        switch (playerState) {
          case 1:
            return <MiniPlayer />;
          case 2:
            return <BigPlayer />;
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
