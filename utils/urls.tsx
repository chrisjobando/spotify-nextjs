export default {
  pages: {
    index: '/',
    browse: '/browse',
    artist: artistId => `${artistId}`,
    playlist: playlistId => `${playlistId}`,
  },
};
