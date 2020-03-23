export default {
  baseUrl: process.env.BASE_URL,
  dbUrl: process.env.MONGO_URL,
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUri: 'http://localhost:3000/login',
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
