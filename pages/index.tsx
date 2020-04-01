import React, { useEffect } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';

// API
import { getUser } from '../client/actions/api';

const Index = props => {
  const { authorization } = props;

  useEffect(() => {
    const getAuth = async () => {
      const result = await getUser(authorization);
      if (result == null) Router.push('/login');
    };
    getAuth();
    Router.push('/app');
  }, []);

  return <div></div>;
};

Index.getInitialProps = ctx => {
  const { authorization } = parseCookies(ctx);
  return { authorization };
};

export default Index;
