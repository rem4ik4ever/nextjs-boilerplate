import '../styles/globals.css';
import React from 'react';
import App, { Container } from 'next/app';
import Bugsnag from '../src/lib/bugsnag';
import Error from './_error';

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ErrorBoundary>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ErrorBoundary>
    );
  }
}
