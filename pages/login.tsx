import React, { useEffect } from 'react';
import { setCookie } from 'nookies';

// API Call
import { auth, createUser } from '../client/actions/api';

// Spotify Icon
import SpotifyIcon from '~/public/icons/SpotifyIcon';

// Styling
import classes from './login.module.scss';

const spotifyIconProps = {
  spotifyLogoStyle: classes.Logo,
};

const Login = props => {
  const { query } = props;
  const handleLogin = () => auth();

  useEffect(() => {
    if (query.code) {
      const addToDB = async () => {
        const authId = await createUser(query.code);
        setCookie(null, 'authorization', authId, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      };

      addToDB();
    }
  }, []);

  return (
    <div className={classes.Login}>
      <SpotifyIcon {...spotifyIconProps} />
      <div className={classes.Button} onClick={handleLogin}>
        sign in.
      </div>
    </div>
  );
};

Login.getInitialProps = ctx => {
  const { query } = ctx;
  return { query };
};

export default Login;
