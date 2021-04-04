const BoomButton = () => {
  return (
    <button
      onClick={() => {
        throw new Error('Boom!');
      }}
    >
      Boom!
    </button>
  );
};

export default BoomButton;
