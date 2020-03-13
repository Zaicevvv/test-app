import React, { Component } from 'react';
import css from './ProfilePage.module.css';

export default class ProfilePage extends Component {
  render() {
    if (!localStorage.getItem('token')) {
      window.location.href = '?#/login';
    }
    return (
      <div className={css.profileTitle}>
        <h2>Profile</h2>
      </div>
    );
  }
}
