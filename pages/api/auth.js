// Urls
import urls from '../../utils/urls';

// Init Spotify API wrapper
import SpotifyWebApi from 'spotify-web-api-node';
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET_ID,
  redirectUri: urls.redirectUri,
});

const handler = (req, res) => {
  const scopesArray = ['user-read-private'];
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopesArray);
  console.log(authorizeUrl);
  res.send(authorizeUrl);
};

export default handler;
