const Notification = ({ message }) => {
  return (
    <div style={{ border: '2px solid red', padding: '1rem', marginTop: '1rem' }}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
