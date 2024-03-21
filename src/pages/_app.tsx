import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {isLoad ? <Component {...pageProps} /> : null}
    </I18nextProvider>
  );
}

export default MyApp;
