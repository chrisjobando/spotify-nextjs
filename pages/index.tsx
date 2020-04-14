import React from 'react';

const Index = () => {
  return <div>Test</div>;
};

Index.getInitialProps = async ({ res, req }) => {
  const cookies = req ? req.headers.cookie : null;

  console.log('Cookies: ', cookies);

  if (res) {
    if (!cookies) {
      console.log('No cookies');
      res.writeHead(301, { Location: '/login' });
      res.end();
    } else {
      console.log('Cookie found!');
      res.writeHead(301, { Location: '/app' });
      res.end();
    }
  }

  return res;
};

export default Index;
