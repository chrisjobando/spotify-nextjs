export default {
  baseUrl: process.env.BASE_URL,
  dbUrl: process.env.MONGO_URL,
  redirectUri: process.env.BASE_URL + '/callback',
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
    user: () => `/api/user`,
  },
};
