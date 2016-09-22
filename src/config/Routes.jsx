import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Login from '../components/Login.jsx';
import Dashboard from '../components/Dashboard.jsx';
import NewIdea from '../components/NewIdea.jsx';
import IdeaList from '../components/IdeaList.jsx';


const Routes = () => {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="login" component={Login} />
            <Route path="dashboard" component={Dashboard}>
              <Route path="newIdea" component={NewIdea} />
              <Route path="ideaList" component={IdeaList} />
            </Route>
          </Route>
        </Router>


      </div>
      );
}

export default Routes;
