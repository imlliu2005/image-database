import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Topics from '../components/topics';
import Layout from './layout';

const MainRouter = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </Layout>
    </div>
  );
};

export default MainRouter;
