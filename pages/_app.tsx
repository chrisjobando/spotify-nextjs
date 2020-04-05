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
    spotifyAccess: '',
    playerState: 0,
    playerInfo: null,
  };

  setSpotifyAccess = (spotifyAccess: string) => {
    this.setState({ spotifyAccess });
  };

  setPlayerState = (playerState: number) => {
    this.setState({ playerState });
  };

  setPlayerInfo = (playerInfo: any | null) => {
    this.setState({ playerInfo });
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
            spotifyAccess: this.state.spotifyAccess,
            setSpotifyAccess: this.setSpotifyAccess,
            playerState: this.state.playerState,
            setPlayerState: this.setPlayerState,
            playerInfo: this.state.playerInfo,
            setPlayerInfo: this.setPlayerInfo,
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
