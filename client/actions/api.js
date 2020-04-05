import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import urls from '../../utils/urls';

const prod = process.env.NODE_ENV === 'production';

const getTokens = code => {
  return fetch(urls.tokenUrl, {
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
};

const refreshTokens = token => {
  return fetch(urls.tokenUrl, {
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
      refresh_token: token,
      grant_type: 'refresh_token',
    }),
  })
    .then(response => response.json())
    .then(json => {
      return json.access_token;
    });
};

export const createUser = async code => {
  const { access_token, refresh_token } = await getTokens(code);

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

export const getUser = async authorization => {
  const { refresh } = await fetch(urls.api.findUser(), {
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
        return {};
      }
      return { refresh: json.refresh };
    });

  const access = await refreshTokens(refresh);

  return await fetch(urls.api.updateUser(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authorization,
      access,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json == null) {
        throw new Error('Could not connect to API...');
      }
      
      return json;
    });
};

export const auth = () => {
  fetch(urls.api.auth())
    .then(res => res.json())
    .then(res => (window.location.href = res.url));
};
