const Options = ({ onLeaveFeedback, onReset, total }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '1rem', margin: '1rem 0' }}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>

      {total > 0 && (
        <button
          onClick={onReset}
          style={{ marginLeft: '1rem', backgroundColor: 'tomato', color: 'white' }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
