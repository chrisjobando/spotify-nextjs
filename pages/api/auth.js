import spotifyApi from '../../server/spotifyWrapper';

const handler = (req, res) => {
  const scopesArray = ['user-read-private'];
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopesArray);
  res.send({ url: authorizeUrl });
};

export default handler;
