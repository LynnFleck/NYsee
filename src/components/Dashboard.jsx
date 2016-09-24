import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import NewIdea from './NewIdea.jsx';
import IdeaList from './IdeaList.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>This is the DASHBOARD page. This page IS protected</h1>
        <NewIdea
          id="123"
          mainIdea="This is the idea right here"
          website="http://www.lynnfleck.com"
          screenName="trying to get screenName from the database"
        />
        <IdeaList
          id="123"
          mainIdea="This is the idea right here"
          website="http://www.lynnfleck.com"
          screenName="Lynn F"
        />
      </div>
      );
  }
}

export default Dashboard;
