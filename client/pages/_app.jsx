import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import classes from './style.module.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>spotify app.</title>
        </Head>
        <div className={classes.App}>
          <div className={classes.Content}>
            <Component {...pageProps} />
          </div>
        </div>
      </>
    );
  }
}
export default MyApp;
