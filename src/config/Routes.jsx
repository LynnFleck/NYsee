import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import LoginForm from '../components/LoginForm.jsx';
import Register from '../components/Register.jsx';
import Dashboard from '../components/Dashboard.jsx';
import NewIdea from '../components/NewIdea.jsx';
import IdeaList from '../components/IdeaList.jsx';


const Routes = () => {
    return (
        <Router history={hashHistory}>
          <Route path="/" component={App}>
          <IndexRoute component={Home} />
            <Route path="login" component={LoginForm} />
            <Route path="register" component={Register} />
            <Route path="dashboard" component={Dashboard}>
              <Route path="newIdea" component={NewIdea} />
              <Route path="ideaList" component={IdeaList} />
            </Route>
          </Route>
        </Router>
      );
}

export default Routes;
