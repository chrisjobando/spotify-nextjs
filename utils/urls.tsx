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
    login: '/login',
    app: {
      index: '/app',
      browse: '/app/browse',
      profile: '/app/profile',
      stats: '/app/stats',
      toptracks: '/app/top-tracks',
      topartists: '/app/top-artists',
      suggested: '/app/suggested',
      artist: artistId => `app/${artistId}`,
      playlist: playlistId => `app/${playlistId}`,
    },
  },
  api: {
    auth: () => `/api/auth`,
    findUser: () => `/api/find-user`,
    createUser: () => `/api/create-user`,
    updateUser: () => `/api/update-user`,
  },
};
