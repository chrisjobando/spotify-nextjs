import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';

import AppContextProvider from '../client/components/AppContext';

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
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Spotify App</title>
        </Head>
        <AppContextProvider>
          {['/app'].some(route => router.asPath.includes(route)) &&
            (['/app/playlist', '/app/artist', '/app/album'].some(route =>
              router.asPath.includes(route)
            ) ? (
              <NavBar2 />
            ) : (
              <NavBar />
            ))}
          <Component {...pageProps} />
          <Player />
        </AppContextProvider>
      </>
    );
  }
}
export default MyApp;
