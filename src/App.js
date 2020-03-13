import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const HomePage = lazy(() =>
  import(
    './components/pages/HomePage/HomePage' /* webpackChunkName: "home-page" */
  ),
);

const ProfilePage = lazy(() =>
  import(
    './components/pages/ProfilePage/ProfilePage' /* webpackChunkName: "profile-page" */
  ),
);

const NewsPage = lazy(() =>
  import(
    './components/pages/NewsPage/NewsPage' /* webpackChunkName: "news-page" */
  ),
);

const LoginPage = lazy(() =>
  import(
    './components/pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import('./components/pages/NotFound' /* webpackChunkName: "not-found" */),
);

const App = () => (
  <div>
    <Nav />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
