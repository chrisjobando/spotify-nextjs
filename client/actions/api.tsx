import fetch from 'isomorphic-fetch';
import urls from '../../utils/urls';

export const getUser = authorization => {
  fetch('http://localhost:3000' + urls.api.user(), {
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

      return json.payload;
    });
  // if (res.status === 200) return { authorization, user: res.data };
};

export const auth = () => {
  fetch('http://localhost:3000' + urls.api.auth(), {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    console.log('Test');
  });
};
