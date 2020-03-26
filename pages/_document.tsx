import Document, { Html, Head, Main, NextScript } from 'next/document';
import { setCookie } from 'nookies';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    if (ctx.query.token) {
      setCookie(ctx, 'authorization', ctx.query.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
