import { setCookie } from 'nookies';
import urls from '~/utils/urls';

// API Call
import { auth } from '~/client/actions/api';

// Spotify Icon
import SpotifyIcon from '~/public/icons/SpotifyIcon';

// Styling
import classes from './login.module.scss';
import { url } from 'inspector';

const spotifyIconProps = {
  spotifyLogoStyle: classes.Logo,
};

const Login = () => {
  const handleLogin = () => auth();

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
  const { query, res } = ctx;
  if (query.code) {
    setCookie(ctx, 'authorization', query.code, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    res.writeHead(301, { Location: '/' });
    res.end();
  }
  return {};
};

export default Login;
