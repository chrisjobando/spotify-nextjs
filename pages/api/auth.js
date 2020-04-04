import spotifyApi from '../../server/spotifyWrapper';

const handler = (req, res) => {
  const scopesArray = [
    'user-read-private',
    'user-read-currently-playing',
    'user-read-playback-state',
  ];
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopesArray);
  res.send({ url: authorizeUrl });
};

export default handler;
