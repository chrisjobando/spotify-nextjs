import urls from '../../utils/urls';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = urls.redirectUri;

const handler = (req, res) => {
  const scopes =
    'user-top-read user-read-private user-read-email user-read-currently-playing user-read-recently-played user-read-playback-state user-modify-playback-state playlist-read-private playlist-read-collaborative';

  res.send({
    url:
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      clientId +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(redirectUri),
  });
};

export default handler;
