import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo MetalGo</title>
        <meta name='description' content='This is a todo app' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
