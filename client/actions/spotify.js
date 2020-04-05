import fetch from 'isomorphic-unfetch';
import urls from '../../utils/urls';

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

  return getCurrentPlayback(token);
};

export const previousTrack = async token => {
  await fetch(urls.apiUrl + '/me/player/previous', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
  });

  return getCurrentPlayback(token);
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
