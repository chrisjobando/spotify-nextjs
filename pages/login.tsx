// API Call
import { auth } from '~/client/actions/api';

// Spotify Icon
import SpotifyIcon from '~/public/icons/SpotifyIcon';

// Styling
import classes from './login.module.scss';

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

export default Login;
