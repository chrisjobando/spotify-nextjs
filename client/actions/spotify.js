import fetch from 'isomorphic-unfetch';
import urls from '../../utils/urls';

export const getCurrentPlayback = token => {
  return fetch(urls.apiUrl + '/me/player', {
    method: 'post',
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
