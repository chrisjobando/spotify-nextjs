import React, { useEffect } from 'react';
import { setCookie } from 'nookies';

// API Call
import { auth, createUser } from '../client/actions/api';

// Spotify Icon
import { Logo } from '../public/icons/Logo';
// Styling
import classes from '../public/styles/pages/login.module.scss';

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
      <Logo />
      <h1>NextJS Spotify App</h1>
      <h4>Play music, check out your stats, customize your listening experience.</h4>
      <button type="button" className={classes.Button} onClick={handleLogin}>
        <h2>Sign In</h2>
      </button>
    </div>
  );
};

Login.getInitialProps = ctx => {
  const { query } = ctx;
  return { query };
};

export default Login;
