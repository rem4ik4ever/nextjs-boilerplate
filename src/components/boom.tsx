const BoomButton = () => {
  const a = 'hello';
  const hello = { a: [1, 2, 3, 4, 'hello'], b: 'something' };
  console.log(a, hello);
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error('Boom!');
      }}
    >
      Boom!
    </button>
  );
};

export default BoomButton;
