import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import SpotifyContext from '../client/components/SpotifyContext';

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
    userInfo: null,
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

  setUserInfo = (userInfo: any | null) => {
    this.setState({ userInfo });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>Spotify App</title>
        </Head>
        <SpotifyContext.Provider
          value={{
            spotifyAccess: this.state.spotifyAccess,
            setSpotifyAccess: this.setSpotifyAccess,
            playerState: this.state.playerState,
            setPlayerState: this.setPlayerState,
            playerInfo: this.state.playerInfo,
            setPlayerInfo: this.setPlayerInfo,
            userInfo: this.state.userInfo,
            setUserInfo: this.setUserInfo,
          }}
        >
          <div className="App">
            <Component {...pageProps} />
          </div>
          {['/app'].some(route => router.asPath.includes(route)) && <NavBar />}
          <Player />
        </SpotifyContext.Provider>
      </>
    );
  }
}
export default MyApp;
