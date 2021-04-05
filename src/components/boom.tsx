const BoomButton = () => {
  const a = 'hello';
  console.log('Hello', a, { a });
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
