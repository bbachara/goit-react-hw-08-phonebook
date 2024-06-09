import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  registerMessage: {
    fontSize: 20,
    marginTop: 20,
    color: 'gray',
  },
};

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
        Phone book welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          📞
        </span>{' '}
      </h1>
      {!isLoggedIn && (
        <p style={styles.registerMessage}>
          Please Register to create your account or Log In to your account
        </p>
      )}
    </div>
  );
}
