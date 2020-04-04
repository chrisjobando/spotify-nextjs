import React, { useEffect, useContext } from 'react';
import { parseCookies } from 'nookies';

// Modify Player Context
import PlayerContext from '../../client/components/PlayerContext';

// API Calls
import { getUser } from '../../client/actions/api';
import { getCurrentPlayback } from '../../client/actions/spotify';

// Components
import Home from '../../client/components/Home';

const App = props => {
  const { authorization } = props;
  const { setPlayerState, setPlayerInfo } = useContext(PlayerContext);

  useEffect(() => {
    const getPlayerData = () => {
      const user = getUser(authorization).then(res =>
        getCurrentPlayback(res.user.access).then(res => {
          if (res) {
            setPlayerState(1);
            setPlayerInfo(res);
          }
        })
      );
    };

    getPlayerData();
  }, []);

  return <Home />;
};

App.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  return { authorization };
};

export default App;
