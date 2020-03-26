const prod = process.env.NODE_ENV === 'production';

export default {
  baseUrl: prod ? 'https://obando-spotify.now.sh' : 'http://localhost:3000',
  dbUrl: process.env.MONGO_URL,
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUri: prod
    ? 'https://obando-spotify.now.sh/login'
    : 'http://localhost:3000/login',
  pages: {
    index: '/',
    browse: '/browse',
    profile: '/profile',
    stats: '/stats',
    toptracks: '/top-tracks',
    topartists: '/top-artists',
    suggested: '/suggested',
    artist: artistId => `${artistId}`,
    playlist: playlistId => `${playlistId}`,
  },
  api: {
    auth: () => `/api/auth`,
    findUser: () => `/api/find-user`,
    createUser: () => `/api/create-user`,
  },
};
