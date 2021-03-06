const prod = process.env.NODE_ENV === 'production';

export default {
  baseUrl: prod ? 'https://obando-spotify.now.sh' : 'http://localhost:3000/',
  dbUrl: process.env.MONGO_URL,
  tokenUrl: 'https://accounts.spotify.com/api/token',
  apiUrl: 'https://api.spotify.com/v1',
  redirectUri: prod
    ? 'https://obando-spotify.now.sh/login'
    : 'http://localhost:3000/login',
  pages: {
    index: '/',
    login: '/login',
    app: {
      index: '/app',
      stats: '/app/stats',
      search: '/app/search',
      artist: artistId => `/app/artist/${artistId}`,
      album: albumId => `/app/album/${albumId}`,
      playlist: playlistId => `/app/playlist/${playlistId}`,
    },
  },
  api: {
    auth: () => `/api/auth`,
    findUser: () => `/api/find-user`,
    createUser: () => `/api/create-user`,
    deleteUser: () => `/api/delete-user`,
    updateUser: () => `/api/update-user`,
    updateClean: () => `/api/set-clean`,
  },
};
