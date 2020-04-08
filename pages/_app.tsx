import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import AppContext from '../client/components/AppContext';

// NavBar
import NavBar from '../client/components/NavBar/NavBar';
import NavBar2 from '../client/components/NavBar/NavBar2';

// Media Player
import Player from '../client/components/Player';

// FontAwesome Config
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

// Styling
import '../public/styles/global.scss';

class MyApp extends App {
  state = {
    spotifyAccess: '',
    playerState: 0,
    playerInfo: null,
    userInfo: null,
    topTracks: null,
    topTracks2: null,
    topTracks3: null,
    topArtists: null,
    topArtists2: null,
    topArtists3: null,
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

  setTopTracks = (topTracks: any[] | null) => {
    this.setState({ topTracks });
  };

  setTopTracks2 = (topTracks2: any[] | null) => {
    this.setState({ topTracks2 });
  };

  setTopTracks3 = (topTracks3: any[] | null) => {
    this.setState({ topTracks3 });
  };

  setTopArtists = (topArtists: any[] | null) => {
    this.setState({ topArtists });
  };

  setTopArtists2 = (topArtists2: any[] | null) => {
    this.setState({ topArtists2 });
  };

  setTopArtists3 = (topArtists3: any[] | null) => {
    this.setState({ topArtists3 });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>Spotify App</title>
        </Head>
        <AppContext.Provider
          value={{
            spotifyAccess: this.state.spotifyAccess,
            setSpotifyAccess: this.setSpotifyAccess,
            playerState: this.state.playerState,
            setPlayerState: this.setPlayerState,
            playerInfo: this.state.playerInfo,
            setPlayerInfo: this.setPlayerInfo,
            userInfo: this.state.userInfo,
            setUserInfo: this.setUserInfo,
            topTracks: this.state.topTracks,
            setTopTracks: this.setTopTracks,
            topTracks2: this.state.topTracks2,
            setTopTracks2: this.setTopTracks2,
            topTracks3: this.state.topTracks3,
            setTopTracks3: this.setTopTracks3,
            topArtists: this.state.topArtists,
            setTopArtists: this.setTopArtists,
            topArtists2: this.state.topArtists2,
            setTopArtists2: this.setTopArtists2,
            topArtists3: this.state.topArtists3,
            setTopArtists3: this.setTopArtists3,
          }}
        >
          {['/app'].some(route => router.asPath.includes(route)) &&
          ['/app/playlist', '/app/artist', '/app/album'].some(route =>
            router.asPath.includes(route)
          ) ? (
            <NavBar2 />
          ) : (
            <NavBar />
          )}
          <Component {...pageProps} />
          <Player />
        </AppContext.Provider>
      </>
    );
  }
}
export default MyApp;
