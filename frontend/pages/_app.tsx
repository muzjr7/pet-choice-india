import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // TODO: Add any global setup or initialization logic here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;