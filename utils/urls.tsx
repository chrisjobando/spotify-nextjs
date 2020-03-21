export default {
  baseUrl: 'http://localhost:3000',
  dbUrl: process.env.MONGO_URL,
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
    authSpotify: () => '/api/auth/spotify',
    user: () => '/api/user',
  },
};
