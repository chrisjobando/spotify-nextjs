import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { parseCookies } from 'nookies';

// API Calls
import { getUser } from 'client/actions/api';

// Toast Library
import { ToastContainer } from 'react-toastify';

// Global Context Provider
import AppContextProvider from '../client/components/AppContext';

// NavBar
import NavBar from '../client/components/NavBar/NavBar';
import NavBar2 from '../client/components/NavBar/NavBar2';

// Media Player
import Player from '../client/components/Player';

// FontAwesome Config
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';

// Toast Styling
import 'react-toastify/scss/main.scss';

// Styling
import '../public/styles/global.scss';

interface Props {
  user: any;
}

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const cookies = parseCookies(appContext.ctx);

    console.log('Cookies MyApp: ', cookies);

    return getUser(cookies.authorization)
      .then(user => {
        console.log('User: ', user);

        return {
          ...appProps,
          user,
        };
      })
      .catch(() => appProps);
  }

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
              <>
                <NavBar />
                <ToastContainer
                  toastClassName="ToastContainer"
                  bodyClassName="Toast"
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  draggable
                  pauseOnHover
                />
              </>
            ))}
          <Component {...pageProps} />
          <Player />
        </AppContextProvider>
      </>
    );
  }
}
export default MyApp;
