import SpotifyWebApi from 'spotify-web-api-node';
import urls from '../utils/urls';

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: urls.redirectUri,
});
