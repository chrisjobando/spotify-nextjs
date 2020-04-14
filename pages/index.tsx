import React, { useEffect } from 'react';
import Router from 'next/router';

const Index = props => {
  const { user } = props;

  useEffect(() => {
    if (!user) {
      Router.push('/login');
    } else {
      Router.push('/app');
    }
  }, [user]);

  return <div></div>;
};

export default Index;
