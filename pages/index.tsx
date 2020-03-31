import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// API
import { getUser } from '../client/actions/api';

const Index = props => {
  const { authorization } = props;
  const [authorized, setAuthorized] = useState('');

  useEffect(() => {
    const getAuth = async () => {
      const result = await getUser(authorization);
      if (result == null) Router.push('/login');
      else setAuthorized(result.oAuthData);
    };
    getAuth();
    // Apparently Webpack doesn't allow you to push to "/"
    // so I am "cheating" and pushing to index,
    // then cleaning up the url here
    Router.push('/app');
  }, []);

  return <div></div>;
};

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);

  return { authorization };
};

export default Index;
