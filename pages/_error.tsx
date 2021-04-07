import React from 'react';
import ErrorPage from 'next/error';
import Bugsnag from 'src/lib/bugsnag';

function Error({ statusCode }) {
  return <ErrorPage statusCode={statusCode || '¯\\_(ツ)_/¯'} />;
}

Error.getInitialProps = ({ res, err }) => {
  if (res) return res.statusCode;

  if (err) Bugsnag.notify(err);
  return { statusCode: err.statusCode };
};

export default Error;
