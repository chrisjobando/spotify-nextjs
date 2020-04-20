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
  const { query, res } = ctx;
  const { code } = query;
  let authCode = '';
  console.log('Code Login Page: ', code);

  const cookies = parseCookies(ctx);
  console.log('Cookies Login Page: ', cookies);

  // if (cookies.authorization) {
  //   res.writeHead(301, { Location: '/app' });
  //   res.end();
  // } else {
  //   if (code) {
  //     await getTokens(code)
  //       .then(async tokens => {
  //         if (tokens) {
  //           await createUser(tokens.refresh_token).then(user => {
  //             if (user) {
  //               authCode = user.authorization;
  //             }
  //           });
  //         }
  //       })
  //       .catch(() => console.log('Error fetching token'));

  //     if (authCode !== '') {
  //       setCookie(ctx, 'authorization', authCode, {
  //         sameSite: true,
  //         path: '/',
  //         maxAge: 30 * 24 * 60 * 60,
  //       });
  //       res.writeHead(301, { Location: '/index' });
  //       res.end();
  //     }
  //   }
  // }

  return { code };
};

export default Login;
