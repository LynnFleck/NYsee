import React from 'react';
import Idea from './Idea.jsx';

const IdeaList = () => {
  return (
    <div id="idea-list" className="clearfix">
      <h1>This is the IdeaList page. This page IS protected</h1>
      <Idea />
    </div>
    );
}

export default IdeaList;
