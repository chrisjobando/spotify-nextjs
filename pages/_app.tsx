import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import PlayerContext from '../client/components/PlayerContext';

// NavBar
import NavBar from '../client/components/NavBar/NavBar';

// Media Player
import Player from '../client/components/Player';

// FontAwesome Config
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

// Styling
import '../public/style.scss';

class MyApp extends App {
  state = {
    playerState: 0,
  };

  setPlayerState = (playerState: number) => {
    this.setState({ playerState });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>spotify app.</title>
        </Head>
        <PlayerContext.Provider
          value={{
            playerState: this.state.playerState,
            setPlayerState: this.setPlayerState,
          }}
        >
          <div className="App">
            <Component {...pageProps} />
          </div>
          {['/app'].some(route => router.asPath.includes(route)) && <NavBar />}
          <Player />
        </PlayerContext.Provider>
      </>
    );
  }
}
export default MyApp;
