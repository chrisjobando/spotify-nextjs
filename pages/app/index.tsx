import React, { useEffect, useContext } from 'react';

import PlayerContext from '../../client/components/PlayerContext';

// Components
import Home from '../../client/components/Home';

const App = () => {
  const { setPlayerState } = useContext(PlayerContext);

  useEffect(() => {
    setPlayerState(1);
    console.log('loaded');
  }, []);

  return <Home />;
};

export default App;
