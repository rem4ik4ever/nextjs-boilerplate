import 'styles/globals.css';
import React from 'react';
import App, { Container } from 'next/app';
import Bugsnag from 'src/lib/bugsnag';

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ErrorBoundary>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
