import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          className={css.field}
          type="email"
          name="email"
          placeholder="Please enter your e-mail"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.field}
          type="password"
          name="password"
          placeholder="Please enter your password"
        />
      </label>
      <button type="submit" className={css['login-button']}>
        Log In
      </button>
    </form>
  );
};
