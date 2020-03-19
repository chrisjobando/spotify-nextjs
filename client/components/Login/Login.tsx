// Spotify Icon
import SpotifyIcon from '~/public/icons/SpotifyIcon';

// Styling
import classes from './login.module.scss';

const spotifyIconProps = {
  spotifyLogoStyle: classes.Logo,
};

const Login = () => (
  <div className={classes.Login}>
    <SpotifyIcon {...spotifyIconProps} />
    <a href="http://localhost:3001/auth/spotify">
      <div className={classes.Button}>sign in.</div>
    </a>
  </div>
);

export default Login;
