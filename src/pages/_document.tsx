import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Todo MetalGo is a user-friendly app for managing your daily tasks. Easily create, edit, and track your to-dos.'
        />{' '}
        <meta name='keywords' content='Todo, React, Next.js' />{' '}
        <meta name='author' content='Victor Nepomnyashchiy' />{' '}
        <meta property='og:title' content='Todo MetalGo' />{' '}
        <meta
          property='og:description'
          content='Todo MetalGo is a user-friendly app for managing your daily tasks. Easily create, edit, and track your to-dos.'
        />{' '}
        <meta property='og:image' content='/ogimage.png' />{' '}
        <meta property='og:url' content='https://todo-metalgo.vercel.app/' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
