const Boom = () => {
  return <div>This page is borked</div>;
};

Boom.getInitialProps = () => {
  throw new Error('Borked!');
};

export default Boom;
