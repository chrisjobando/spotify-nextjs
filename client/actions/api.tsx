import fetch from 'isomorphic-fetch';
import urls from '../../utils/urls';

export const getUser = authorization => {
  fetch(urls.baseUrl + urls.api.user()).then(function(res) {
    if (res.status === 200) return { authorization, user: res.data };
    else return { authorization };
  });
};

export const auth = () => {
  console.log('Flag');
  fetch(urls.baseUrl + urls.api.authSpotify()).then(() => {
    console.log('Test');
  });
};
