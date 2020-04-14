import fetch from 'isomorphic-unfetch';
import urls from '../../utils/urls';

export const auth = () => {
  fetch(urls.api.auth())
    .then(res => res.json())
    .then(res => (window.location.href = res.url));
};

export const getUserProfile = token => {
  return fetch(urls.apiUrl + '/me/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const getCurrentPlayback = token => {
  return fetch(urls.apiUrl + '/me/player/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const nextTrack = async token => {
  await fetch(urls.apiUrl + '/me/player/next', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const previousTrack = async token => {
  await fetch(urls.apiUrl + '/me/player/previous', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const playTrack = async token => {
  await fetch(urls.apiUrl + '/me/player/play', {
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const setPlaying = async (token, toPlay) => {
  await fetch(urls.apiUrl + '/me/player/play', {
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      context_uri: toPlay,
    }),
  });
};

export const addToQueue = async (token, toQueue) => {
  await fetch(urls.apiUrl + `/me/player/queue?uri=${toQueue}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  });
};

export const pauseTrack = async token => {
  await fetch(urls.apiUrl + '/me/player/pause', {
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const toggleShuffle = async (token, newState) => {
  await fetch(urls.apiUrl + `/me/player/shuffle?state=${newState}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const toggleRepeat = async (token, newState) => {
  await fetch(urls.apiUrl + `/me/player/repeat?state=${newState}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const recentlyPlayed = async token => {
  return await fetch(urls.apiUrl + '/me/player/recently-played?limit=25', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getTopArtists = async (token, time) => {
  return await fetch(
    urls.apiUrl + `/me/top/artists?limit=50&time_range=${time}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getTopTracks = async (token, time) => {
  return await fetch(
    urls.apiUrl + `/me/top/tracks?limit=50&time_range=${time}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getRecFromTracks = async (token, tracks) => {
  return await fetch(
    urls.apiUrl +
      `/recommendations?limit=25&max_popularity=50&seed_tracks=${tracks}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.tracks;
    });
};

export const getRecFromArtists = async (token, artists) => {
  return await fetch(
    urls.apiUrl +
      `/recommendations?limit=75&max_popularity=50&seed_artists=${artists}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.tracks;
    });
};

export const getSeveralArtist = async (token, ids) => {
  return await fetch(urls.apiUrl + `/artists?ids=${ids}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json.artists;
    });
};

export const userPlaylists = async token => {
  return await fetch(urls.apiUrl + '/me/playlists?limit=50', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getPlaylist = async (token, playlistId) => {
  return await fetch(urls.apiUrl + `/playlists/${playlistId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const getPlaylistTracks = async (token, playlistId) => {
  return await fetch(
    urls.apiUrl + `/playlists/${playlistId}/tracks?limit=100`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      let items = json.items;
      let remaining = Math.ceil((json.total - 100) / 100);

      if (remaining === 0) {
        return items;
      }

      const forLoop = async itemArr => {
        let next = json.next;

        for (let i = 0; i < remaining; i++) {
          await getMore(token, next).then(res => {
            if (res) {
              next = res.next;
              itemArr.push(...res.items);
            }
          });
        }

        return itemArr;
      };

      return forLoop(items);
    });
};

export const getAlbum = async (token, albumId) => {
  return await fetch(urls.apiUrl + `/albums/${albumId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

// export const getAlbumTracks = async (token, albumId) => {
//   return await fetch(urls.apiUrl + `/albums/${albumId}/tracks?limit=100`, {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: 'Bearer ' + token,
//     },
//   })
//     .then(response => response.json())
//     .then(json => {
//       let items = json.items;
//       let remaining = Math.ceil((json.total - 100) / 100);

//       if (remaining === 0) {
//         return items;
//       }

//       const forLoop = async itemArr => {
//         let next = json.next;

//         for (let i = 0; i < remaining; i++) {
//           await getMore(token, next).then(res => {
//             if (res) {
//               next = res.next;
//               itemArr.push(...res.items);
//             }
//           });
//         }

//         return itemArr;
//       };

//       return forLoop(items);
//     });
// };

export const getArtist = async (token, id) => {
  return await fetch(urls.apiUrl + `/artists/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const getArtistTopTracks = async (token, id) => {
  return await fetch(
    urls.apiUrl + `/artists/${id}/top-tracks?country=from_token`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.tracks;
    });
};

export const getArtistAlbums = async (token, id) => {
  return await fetch(
    urls.apiUrl + `/artists/${id}/albums?limit=50&include_groups=album`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getArtistSingles = async (token, id) => {
  return await fetch(
    urls.apiUrl + `/artists/${id}/albums?limit=50&include_groups=single`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json.items;
    });
};

export const getArtistSimilar = async (token, id) => {
  return await fetch(urls.apiUrl + `/artists/${id}/related-artists`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json.artists;
    });
};

export const getMore = async (token, url) => {
  return await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export const search = async (token, query) => {
  return await fetch(
    urls.apiUrl +
      `/search?q=${query}&type=album,artist,track,playlist&limit=25`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(response => response.json())
    .then(json => {
      return json;
    });
};
