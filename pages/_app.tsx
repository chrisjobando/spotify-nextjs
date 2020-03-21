import React from 'react';
import App from 'next/app';
import Head from 'next/head';

// NavBar
import NavBar from '~/client/components/NavBar/NavBar';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import classes from './style.module.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>spotify app.</title>
        </Head>
        <div className={classes.App}>
          <Component {...pageProps} />
        </div>
        {!router.asPath.includes('/login') && <NavBar />}
      </>
    );
  }
}
export default MyApp;
