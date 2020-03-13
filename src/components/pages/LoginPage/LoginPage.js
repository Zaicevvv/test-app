import React, { Component } from 'react';
import { Notyf } from 'notyf';
import css from './LoginPage.module.css';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

class LoginPage extends Component {
  state = { login: '', password: '' };

  submitHandler = e => {
    const { login, password } = this.state;

    if (login !== 'admin' || +password !== 12345) {
      notyf.error('The username or password you entered is incorrect');
      return;
    }

    localStorage.setItem('token', true);
    window.location.href = '?#/profile';
    this.setState({ login: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <>
        <div className={css.container}>
          <h2 className={css.loginTitle}>Sign in</h2>
          <form className={css.form} onSubmit={this.submitHandler}>
            <label htmlFor="login" className={css.label}>
              Login*
            </label>
            <input
              className={css.input}
              id="login"
              type="login"
              placeholder="Youre login"
              value={login}
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="password" className={css.label}>
              Password*
            </label>
            <input
              className={css.input}
              id="password"
              type="password"
              placeholder="Youre password"
              value={password}
              onChange={this.changeHandler}
              required
            />
            <button type="submit" className={css.btn}>
              Sign in
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginPage;
