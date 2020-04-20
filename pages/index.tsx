import React from 'react';

const Index = () => {
  return <div></div>;
};

Index.getInitialProps = async ({ res, req }) => {
  const cookies = req ? req.headers.cookie : null;

  console.log('Home Cookies: ', cookies);

  if (res) {
    if (!cookies) {
      res.writeHead(301, { Location: '/login' });
      res.end();
    } else {
      res.writeHead(301, { Location: '/app' });
      res.end();
    }
  }

  return { cookies };
};

export default Index;
