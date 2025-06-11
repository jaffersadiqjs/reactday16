const Protected = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <h2>🔒 Welcome to the Protected Page</h2>
  ) : (
    <h2>❌ Access Denied</h2>
  );

export default Protected;
