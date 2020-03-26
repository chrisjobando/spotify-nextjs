import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import urls from '../../utils/urls';

const prod = process.env.NODE_ENV === 'production';

export const createUser = async code => {
  const tokens = await fetch(urls.tokenUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ':' +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'),
    },
    body: querystring.stringify({
      code: code,
      redirect_uri: urls.redirectUri,
      grant_type: 'authorization_code',
    }),
  })
    .then(response => response.json())
    .then(json => {
      return json;
    });

  const { access_token, refresh_token } = tokens;

  return fetch(urls.api.createUser(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tokens: {
        access_token,
        refresh_token,
      },
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json == null) {
        throw new Error('Could not connect to API...');
      } else if (!json.success) {
        throw new Error(json.message);
      }
      window.location.href = prod
        ? 'https://obando-spotify.now.sh'
        : 'http://localhost:3000';
      return json.authorization;
    });
};

export const getUser = authorization => {
  return fetch(urls.api.findUser(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authorization,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json == null) {
        throw new Error('Could not connect to API...');
      } else if (!json.success) {
        console.log('User must sign in');
      }

      return json.authorization;
    });
};

export const auth = () => {
  fetch(urls.api.auth())
    .then(res => res.json())
    .then(res => (window.location.href = res.url));
};
