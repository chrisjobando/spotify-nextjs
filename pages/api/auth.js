import spotifyApi from '../../server/spotifyWrapper';

const handler = (req, res) => {
  const scopesArray = [
    'user-top-read',
    'user-read-private',
    'user-read-email',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-modify-playback-state',
  ];
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopesArray);
  res.send({ url: authorizeUrl });
};

export default handler;
