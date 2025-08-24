const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div style={{ border: '2px solid green', padding: '1rem', marginTop: '1rem' }}>
      <h2>Statistics</h2>
      <p>✅ Good: {good}</p>
      <p>😐 Neutral: {neutral}</p>
      <p>❌ Bad: {bad}</p>
      <p>📊 Total: {total}</p>
      <p>👍 Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
