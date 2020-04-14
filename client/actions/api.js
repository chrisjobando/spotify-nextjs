import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import urls from '../../utils/urls';

const prod = process.env.NODE_ENV === 'production';

export const getUser = async authorization => {
  return await fetch(urls.baseUrl + urls.api.findUser(), {
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
        return null;
      }
      return { refresh: json.refresh, access: json.access, clean: json.clean };
    });
};

export const createUser = async (access_token, refresh_token) => {
  return fetch(urls.baseUrl + urls.api.createUser(), {
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

      return json;
    });
};

export const getTokens = code => {
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

export const refreshTokens = token => {
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

export const deleteUser = async _id => {
  return await fetch(urls.api.deleteUser(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json == null) {
        throw new Error('Could not connect to API...');
      } else if (!json.success) {
        return {};
      }
      return json;
    });
};

export const updateClean = async clean => {
  return await fetch(urls.api.updateClean(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      clean,
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
