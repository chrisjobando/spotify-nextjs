import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';

// NavBar
import NavBar from '~/client/components/NavBar/NavBar';

// Media Player
import { MiniPlayer, BigPlayer } from '~/client/components/Player/Player';

// FontAwesome Config
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Styling
import classes from './style.module.scss';

function MyComponent({ children }) {
  const [playerState, setPlayerState] = useState(0);

  return (
    <>
      {children}
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
    </>
  );
}

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <MyComponent>
        <Head>
          <title>spotify app.</title>
        </Head>
        <div className={classes.App}>
          <Component {...pageProps} />
        </div>
        {!router.asPath.includes('/login') && <NavBar />}
      </MyComponent>
    );
  }
}
export default MyApp;
