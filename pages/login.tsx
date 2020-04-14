import React from 'react';
import { setCookie, parseCookies } from 'nookies';

// API Call
import { getTokens, createUser } from '../client/actions/api';
import { auth } from '../client/actions/spotify';

// Spotify Icon
import { Logo } from '../public/icons/Logo';
// Styling
import classes from '../public/styles/pages/login.module.scss';

const Login = () => {
  return (
    <div className={classes.Login}>
      <Logo />
      <h1>NextJS Spotify App</h1>
      <h4>
        Play music, check out your stats, customize your listening experience.
      </h4>
      <button type="button" className={classes.Button} onClick={() => auth()}>
        <h2>Sign In</h2>
      </button>
    </div>
  );
};

Login.getInitialProps = async ctx => {
  const code = ctx.query.code;
  const cookies = parseCookies(ctx);

  if (code) {
    await getTokens(code).then(res => {
      if (res) {
        createUser(res.access_token, res.refresh_token).then(res => {
          if (res) {
            setCookie(ctx, 'authorization', res.authorization, {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            });
          }
        });
      }
    });
  }

  return { cookies };
};

export default Login;
