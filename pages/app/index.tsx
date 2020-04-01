import React, { useEffect, useContext } from 'react';
// import PlayerContext from '../../client/components/PlayerContext';

// API Call
// import { getCurrentPlayback } from '../../client/actions/spotify';

// Components
import Home from '../../client/components/Home';

const App = () => {
  // const { setPlayerState } = useContext(PlayerContext);

  useEffect(() => {
    // setPlayerState(1);
    // const getPlayback = async () => {
    //   const playback = await getCurrentPlayback(token);
    // };

    // getPlayback();

    console.log('loaded');
  }, []);

  return <Home />;
};

export default App;
