import React from 'react';
import NewIdea from './NewIdea.jsx';
import IdeaList from './IdeaList.jsx';

const Dashboard = () => {
  return (
    <div>
      <h1>This is the DASHBOARD page. This page IS protected</h1>
      <NewIdea />
      <IdeaList />
    </div>
    );
}

export default Dashboard;
