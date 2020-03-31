import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';

// NavBar
import NavBar from '../client/components/NavBar/NavBar';

// Media Player
import { MiniPlayer, BigPlayer } from '../client/components/Player';

// FontAwesome Config
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

// Styling
import '../public/style.scss';

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
        <div className="App">
          <Component {...pageProps} />
        </div>
        {['/app'].some(route => router.asPath.includes(route)) && <NavBar />}
      </MyComponent>
    );
  }
}
export default MyApp;
